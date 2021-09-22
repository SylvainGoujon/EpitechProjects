import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Video from "./pages/user/VideoPage";
import Profile from "./pages/user/Profile";
import Coach from "./pages/user/Coach";
import Category from "./pages/user/category";
import Categories from "./pages/admin/categories";
import Coaches from "./pages/admin/coaches";
import Users from "./pages/admin/users";
import NotFound from "./pages/NotFound";
import Home from "./pages/user/home";
import GuardRouteConnect from "./components/GuardRouteConnect";
import Unauthorized from "./pages/Unauthorized";
import GuardRouteAdmin from "./components/GuardRouteAdmin";
import Search from "./pages/user/search";
import RedirectRouteIfConnect from "./components/RedirectRouteIfConnect";



export default function App() {  

  return (
    <Router>
      <Switch>
        <RedirectRouteIfConnect exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <GuardRouteConnect exact path="/video/:id" component={Video}/>
        <GuardRouteConnect exact path="/profile" component={Profile}/>
        <GuardRouteConnect exact path="/home" component={Home}/>
        <GuardRouteConnect exact path="/coach" component={Coach}/>
        <GuardRouteConnect exact path="/category/:id" component={Category}/>
        <GuardRouteAdmin exact path="/categories" component={Categories}/>
        <GuardRouteAdmin exact path="/coaches" component={Coaches}/>
        <GuardRouteAdmin exact path="/users" component={Users}/>
        <Route exact path="/search" component={Search} />
        <Route exact path="/unauthorized" component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
