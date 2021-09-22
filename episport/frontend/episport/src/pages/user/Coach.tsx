import React, {Component} from 'react';
import HeaderUser from '../../components/HeaderUser';
import CoachProfile from "../../components/CoachProfile";
import CardVideo from "../../components/CardVideo";


export default class Coach extends Component{
    render () {
      return (
        <div> 
          <HeaderUser />
          <CoachProfile coach={"Kitty"}
                        description={"Kitty prof de Yoga super sympa, aime les chats et la qi-Zumba, avec elle pas de chichi pas de blabla, on gaine jusqu'a ce qu'on ne sente plus ses bras alors attention aux raplapla vous allez en bavé mais bon on l'aime pour ca :)"}
          />
          <section>
              <div id="coach-mov" className="container">
                  <div className="container d-flex flex-wrap justify-content-around">
                      <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                      <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                      <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                      <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                      <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                      <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                  </div>
              </div>
          </section>
        </div>  
      )
    }
  }