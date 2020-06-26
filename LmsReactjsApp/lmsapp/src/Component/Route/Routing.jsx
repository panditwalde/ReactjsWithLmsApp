import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLogin from '../JsFile/UserLogin';
import ForgotPassword from '../JsFile/ForgotPassword';
import SetNewPassword from '../JsFile/SetNewPassword';
import UserRegister from '../JsFile/UserRegister';
import MyDrawer from '../JsFile/MyDrawer';
import UserProfile from '../JsFile/UserProfile';
import Practical from '../JsFile/Practical';



export class Routing extends Component {
    
    render() {
        return (
           
            <Router>
                      <Route path="/" exact={true} component={UserLogin} />
                      <Route path="/ForgotPassword" component={ForgotPassword} />
                      <Route path="/setnewpassword" component={SetNewPassword} />
                      <Route path="/userlogin" component={UserLogin} />
                      <Route path="/mydrawer" component={MyDrawer} />
                      <Route path="/Practical" component={Practical} />
                      <Route path="/userregister" component={UserRegister} />
                      <Route path="/Userprofile" component={UserProfile} />







                      



            </Router>
        )
    }
}

export default Routing

