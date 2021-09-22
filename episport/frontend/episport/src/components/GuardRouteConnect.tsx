import { Redirect, Route, RouteProps } from "react-router-dom";
import React from "react";
import ApiUser from "../api/api-user";

interface State {
    isAuthenticated : boolean,
    isLoading: boolean
}

class ProtectedRoute extends React.Component<RouteProps, State> {
    
    constructor(props : RouteProps) {
        super(props)
        this.state = {
            isAuthenticated : false,
            isLoading: true
        }
    }

    componentDidMount() {
        ApiUser.getMe()
        .then(
            (res) => {
                this.setState({isLoading: false, isAuthenticated : true});
            }
        )
        .catch(
            (e) => {
                this.setState({isLoading: false, isAuthenticated : false});   
            }
        )
    }

    render() {
        return this.state.isLoading ? null :
            this.state.isAuthenticated ?
            <Route path={this.props.path} component={this.props.component} exact={this.props.exact}/> :
            <Redirect to='/' />
    }
    
}


export default ProtectedRoute;