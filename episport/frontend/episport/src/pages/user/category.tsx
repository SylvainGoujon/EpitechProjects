import React, {Component} from 'react';
import {withRouter, RouteComponentProps} from "react-router-dom";
import ApiCategory from '../../api/api-category';
import ApiVideo from '../../api/api-video';
import CardVideo from '../../components/CardVideo';
import FooterComponent from '../../components/FooterComponent';
import HeaderUser from '../../components/HeaderUser';
import {Video} from "../../model/video"

interface UrlParam {
  id : string 
}

interface  State {
  arrayOfVideo ?: Array<Video>,
  categoryName ?: string
}

class Category extends Component<RouteComponentProps<UrlParam>, State>{
 
  constructor(props : RouteComponentProps<UrlParam>) {
    super(props);

    this.state = {
      arrayOfVideo : undefined,
      categoryName : "CHARGEMENT DE LA CATEGORIE"
    }
  }

  private get extractedIDFromUrlParam() : string {
    return this.props.match.params.id
  }

  componentDidMount() {
    const id : string = this.extractedIDFromUrlParam;
    this._getAllCategoryVideos(parseInt(id));
  }

  _getAllCategoryVideos = async (id : number) => {
    try {

      let response = await ApiVideo.getByCategory(id);
      let reponseCategory = await ApiCategory.getOne(id)


      let categoryName : string = reponseCategory.data.body.name;
      let arrayVideo : Array<Video> = response.data.body

      this.setState(
        {
          arrayOfVideo : arrayVideo,
          categoryName : categoryName
        }
        )

    } catch (error : any) {
       this.props.history.push("/404");
    }
  }

  private _transformUnembedToEmbedUrl(unembedUrl : string) {
    let regex = /(watch\?v=|embed\/)/gmi;
  
    unembedUrl = unembedUrl.replace(regex, "")
    return "https://www.youtube.com/embed/" + unembedUrl.substring(unembedUrl.lastIndexOf('/') + 1)
  }

  render() {

    let {arrayOfVideo, categoryName} = this.state

    return (
      <div>  
        <HeaderUser/>
        <div className="bg-white">
          <div className="SearchSectionForVideos">
            <div className="SearchDivForVideos">
              <h2>{categoryName}</h2>
                {
                  arrayOfVideo ?
                  arrayOfVideo.map((video : Video, index) => {
                    return(
                      <CardVideo 
                      key={index}
                      title={video.title}
                      src={this._transformUnembedToEmbedUrl(video.link)}
                      coach={video.coachId.toString()}
                      ></CardVideo>
                    )
                  })
                  :
                    "VIDEO IS LOADING OR NOT AVAILABLE"
                }
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }

}

export default withRouter(Category);



