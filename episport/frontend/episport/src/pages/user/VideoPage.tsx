import React, {Component} from 'react';
import {withRouter, RouteComponentProps, } from "react-router-dom";
import ApiCoach from '../../api/api-coach';
import ApiVideo from '../../api/api-video';
import CardBigVideo from '../../components/CardBigVideo';
import FooterComponent from '../../components/FooterComponent';
import HeaderUser from '../../components/HeaderUser';
import { Coach } from '../../model/coach';
import {Video} from "../../model/video"

interface UrlParam {
  id : string 
}

interface  State {
  videoInfo ?: Video
  coach ?: Coach
}

class VideoPage extends Component<RouteComponentProps<UrlParam>, State>{
 
  constructor(props : RouteComponentProps<UrlParam>) {
    super(props);

    this.state = {
      videoInfo : undefined,
      coach : undefined
    }
  }

  private get extractedIDFromUrlParam() : string {
    return this.props.match.params.id
  }

  componentDidMount() {
    const id : string = this.extractedIDFromUrlParam;
    this._getVideoAndCoachFromID(parseInt(id));
  }

  _getVideoAndCoachFromID = async (id : number) => {
    try {

      let response = await ApiVideo.getOne(id);
      let coachId : number =  response.data.body.coachId 
      let coachAPIResponse = await ApiCoach.getOne(coachId)
      let coach : Coach = coachAPIResponse.data.body

      this.setState(
          {
            videoInfo : response.data.body,
            coach : coach
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
    return (
      <div>  
        <HeaderUser/>
        <div className="bg-white">
          <div className="container">
            <div className="test d-flex justify-content-center py-5">
          {
            this.state.videoInfo && this.state.coach ?
            <CardBigVideo 
            title={this.state.videoInfo.title} 
            src={this._transformUnembedToEmbedUrl(this.state.videoInfo.link)} 
            coach={this.state.coach.name}
            /> :
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

export default withRouter(VideoPage);
