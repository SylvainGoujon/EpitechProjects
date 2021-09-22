import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import FooterComponent from '../../components/FooterComponent';
import CarreDeCategorie from '../../components/CarreDeCategorie';
import HeaderUser from '../../components/HeaderUser';
import CardVideo from '../../components/CardVideo';
import SearchComponent from '../../components/SearchComponent';
import ApiCategory from "../../api/api-category";
import {Category} from "../../model/category";


const Home = () => {

    //Call de toutes les Categories
    const [categories, setCategories] = useState<Array<Category>>([]);

    useEffect( () => {
      ApiCategory.getAll()
        .then((res) => {
            // affectation du state
            setCategories(res.data.body)
        })
        .catch(error => {
            alert('erreur interne');
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return (

      <div className="home">
          <div><HeaderUser /></div>
          <div className="BackgroundImageSection">
              <div className="AreaForSearchBar">

                  <div></div>
                <div><SearchComponent /></div>


              </div>


                <div className="SectionPourCarreDeCategorie">
                    {categories.map((category) => {
                        const url = `/category/${category.id}`;
                            return (
                                <Link key={category.id} to={url}>
                                    <CarreDeCategorie categorie={category.name} />
                                </Link>
                            );

                    })}
                </div>
          </div>



          <div className="SectionForVideos">

              <h2 className="HomePageTitleCategorieMesFavoris">Mes Favoris</h2>
              <div className="DivForVideos">
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              </div>

              <h2 className="HomePageTitleCategorie">CrossFit</h2>
              <div className="DivForVideos">
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              </div>

              <h2 className="HomePageTitleCategorie">Yoga</h2>
              <div className="DivForVideos">
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              </div>

              <h2 className="HomePageTitleCategorie">Fitness</h2>
              <div className="DivForVideos">
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              </div>

              <h2 className="HomePageTitleCategorie">Stretching</h2>
              <div className="DivForVideos">
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              </div>

              <h2 className="HomePageTitleCategorie">Danse</h2>
              <div className="DivForVideos">
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              </div>

          </div>





            <FooterComponent />


      </div>
  );
}



export default Home;






