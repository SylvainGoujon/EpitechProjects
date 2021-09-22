import FooterComponent from '../../components/FooterComponent';
import HeaderUser from '../../components/HeaderUser';
import SearchComponent from '../../components/SearchComponent';
import CardVideo from '../../components/CardVideo';



const Search = () => {

  return (

      <div className="Search">

        <HeaderUser />

        <div className="AreaForSearchBarComponent"><SearchComponent /></div>

        <div className="SearchSectionForVideos">

              
              <div className="SearchDivForVideos">
                
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              

           
              
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              

              
            
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
              

              
            
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
           

            
     
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
             


            
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                    
              </div>

          </div>
      



          
        <FooterComponent />
      </div>
  );
}



export default Search;