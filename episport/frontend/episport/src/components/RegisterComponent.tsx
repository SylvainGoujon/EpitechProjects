import React from 'react';
import ApiAuth from '../api/api-auth';
import RegisterForm from '../model/register-form';
import {useHistory} from "react-router-dom";


const RegisterComponent = () => {
   
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordconfirmation, setPasswordConfirmation] = React.useState("");
    const history  = useHistory();


    const reset = () => {
        setUsername ("");
        setEmail ("");
        setPassword("");
        setPasswordConfirmation("");
    }

    const handleSubmit = (event : React.SyntheticEvent) => {
    
        const form:RegisterForm={
            username:username, 
            email:email, 
            password:password, 
            conf_password:passwordconfirmation,
            is_admin:false,
        }

        event.preventDefault();
        
        // ENVOYER A L API
        ApiAuth.register(form)
            .then(response => {
            alert("Veuillez vous connecter à présent");
            history.push("/login")
            })

            .catch(error => {
            alert(error.response.data.message);
        })


        reset();

      };

    return (
        <form onSubmit={handleSubmit}>
            <div className="RegisterComponent">
            
                    <div className="RegisterComponentArea">

                            <div className="RegisterComponentSecondArea">

                                <div className="row RegisterComponentContent">
                                    <h3 id="registerTitle">Inscris-toi</h3>

                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="FormControlInput1" 
                                        placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required >
                                    </input>

                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="FormControlInput2" 
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required >
                                    </input>

                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="FormControlInput3" 
                                        placeholder="Mot de passe"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required >
                                    </input>

                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="FormControlInput4" 
                                        placeholder="Confirmation mot de passe"
                                        value={passwordconfirmation}
                                        onChange={e => setPasswordConfirmation(e.target.value)}
                                        required >
                                    </input>

                                    <button 
                                        type="submit" 
                                        id="SubmitRegisterButton">S'inscrire
                                    </button>
                
                                </div>


                            </div>

                    </div>

            </div>
        </form>
    );

};

export default RegisterComponent;