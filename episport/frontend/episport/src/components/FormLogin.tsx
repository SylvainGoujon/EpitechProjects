import React from 'react';
import ApiAuth from "../api/api-auth";
import Credentials from "../model/credentials";
import {useHistory} from "react-router-dom";


const FormLogin = ( props : any ) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const history  = useHistory();

    const handleSubmit = (event : React.SyntheticEvent) => {

        const form:Credentials = {
            email:email,
            password:password,
        }

        event.preventDefault();

        // ENVOYER A L API
        ApiAuth.login(form)
            .then(response => {
                alert(response.data.message);
                history.push('/home');
            })

            .catch(error => {
                alert(error.response.data.message);
            })
    };


    return (
        <div className="formlogin">
            <div className="container d-flex justify-content-center">
                <div id="card-login" className="card-login rounded text-white">
                    <div className="card-header">
                        <h1 className="text-center mt-4">Connecte-toi</h1>
                    </div>
                    <form className="mx-3" onSubmit={handleSubmit}>
                        <div className="form-group m-3 p-1">
                            <input
                                type="email"
                                className="form-control"
                                id="FormControlInput2"
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required >
                            </input>
                        </div>
                        <div className="form-group m-3 p-1">
                            <input
                                type="password"
                                className="form-control"
                                id="FormControlInput3"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required >
                            </input>
                        </div>
                        <div className="form-group m-3 p-1 my-5">
                            <button type="submit" id="login" className="btn">Connecter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;
