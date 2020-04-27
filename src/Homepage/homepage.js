import React from "react";
import NavbarComponentIn from "../Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from "@material-ui/core/Divider";
class homepageComponent extends React.Component{
    render() {
        return(

             <div>
                 <NavbarComponentIn/>
             </div>

        );
    }
}

export default homepageComponent;