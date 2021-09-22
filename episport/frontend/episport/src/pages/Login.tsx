import React from 'react';
import FormLogin from "../components/FormLogin";
import FooterComponent from '../components/FooterComponent';
import Header from "../components/Header";

const Login = () => {

    return (
        <div className="login">
            <Header page={"login"} />
            <div className="jumbotron d-flex align-items-center justify-content-center">
                <FormLogin />
            </div>
            <FooterComponent />
        </div>
    );
}

export default Login;