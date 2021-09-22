import { Redirect, Route, RouteProps } from "react-router-dom";
import React from "react";
import ApiUser from "../api/api-user";

interface State {
    isAdmin : boolean,
    isLoading: boolean
}

class GuardRouteAdmin extends React.Component<RouteProps, State> {
    
    constructor(props : RouteProps) {
        super(props)
        this.state = {
            isAdmin : false,
            isLoading: true
        }
    }

    componentDidMount() {
        ApiUser.getMe()
        .then(
            (res) => {
                this.setState({isLoading: false, isAdmin : res.data.body.is_admin});
            }
        )
        .catch(
            (e) => {
                this.setState({isLoading: false, isAdmin : false});   
            }
        )
    }

    render() {
        return this.state.isLoading ? null :
            this.state.isAdmin ?
            <Route path={this.props.path} component={this.props.component} exact={this.props.exact}/> :
            <Redirect to='/unauthorized' />
    }
    
}


export default GuardRouteAdmin;