import {Component} from 'react';
import HeaderUser from '../../components/HeaderUser';
import MonProfile from "../../components/MonProfile";
import TabNav from "../../components/TabNav";
import FooterComponent from "../../components/FooterComponent";


export default class Profile extends Component{
    render () {
      return (
        <div>  
          <HeaderUser />
          <MonProfile username={"Elodie"} email={"elodie@bordeau.mail"}/>
          <TabNav />
          <FooterComponent />
        </div>  
      )
    }
  }