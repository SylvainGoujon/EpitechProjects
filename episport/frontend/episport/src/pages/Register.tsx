import React from 'react';
import FooterComponent from '../components/FooterComponent';
import RegisterComponent from '../components/RegisterComponent';
import Header from "../components/Header";

const RegisterPage = () => {

    return (

        <div className="RegisterPage">

            <Header page={"register"} />

            <div className="RegisterFormPosition">
               <RegisterComponent />
            </div>

            <div className="footer">
              <FooterComponent />
            </div>

        </div>
    );
}



export default RegisterPage;
