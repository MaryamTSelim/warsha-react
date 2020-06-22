// import React from "react";
// import AppointmentCard from "./components/appointmentCard";

// function App() {
//  let list = [
//    {day:"Tomorrow",
//     time:[{value:"11:00am",isAvalible:true},{value:"12:00pm",isAvalible:false},{value:"1:00pm",isAvalible:true}
//     ,{value:"2:00pm",isAvalible:true},{value:"4:00pm",isAvalible:false},{value:"5:00pm",isAvalible:false}]}
//   ]
//   return (
//     <React.Fragment>
//       <h1>working</h1>

//       {
//         list.map((item,index)=>{
//           return(
//             <AppointmentCard key={index} day={item.day} time={item.time}/>
//           )
//         })
//       }
//     </React.Fragment>

//   );
// }

// export default App;

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginUser from './components/Authentication/login-user';
import SignupUser from './components/Authentication/signup-user';
import Home from './components/core/home/home';
import ErrorPage from './components/core/error';
import AboutUs from './components/core/aboutus';
import CustomerProfile from './components/customer/customer_profile/customer-profile';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Switch>
          {/* Customer Interface */}

            {/* LogIn */}
            <Route path="/login" component={LoginUser}/>

            {/* SignUp */}
            <Route path="/signup" component={SignupUser}/>

            {/* Home */}
            <Route path="/home" exact component={Home}/>

            {/* About Us */}
            <Route path="/aboutus" exact component={AboutUs}/>  

            {/* My Profile */}
            <Route path="/myprofile" component={CustomerProfile}/>  


          {/* Center Interface */}



          {/* NotFound Page */}
          <Route path="/notfound" component={ErrorPage}/>

          {/* Redirect to Home */}
          <Redirect from="/" to="/home"/>

          {/* Redirect to NotFound Page */}
          <Redirect to="/notfound"/>

        </Switch> 
      </React.Fragment>
    );
  }
}
 
export default App;