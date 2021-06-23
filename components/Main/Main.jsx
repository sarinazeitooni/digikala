import React from 'react';
import TopHeader from "../navigation/TopHeader";
import Navigation from "../navigation/Navigation";
import NavigationBar from "../navigation/NavigationBar";
const Main = (()=>{
    return(
        <React.Fragment>
            <TopHeader icon={}/>
            <Navigation/>
            <NavigationBar/>
        </React.Fragment>
    )
});
export default Main;