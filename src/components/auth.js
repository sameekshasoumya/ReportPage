import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const navigate = useNavigate();
    const routeChange = () =>{ 
        navigate("/donorDashboard");
      }

    return(
        <React.Fragment>
                    <div className="container Auth">
                        <p className="h2">Instagram</p>
                       
                        <form className="form-group">
                            
                            <input className="form-control" type="text" placeholder="Name" />
                            <input className="form-control" type="text" placeholder="Username" />
                            <input className="form-control" type="email" placeholder="Email" />
                            <input className="form-control" type="password" placeholder="Password" />
                            <button className="btn btn-primary align-self-start" onClick={routeChange}>Success..</button>
                        </form>
                    </div>
                </React.Fragment>
    );
}

export default Auth;