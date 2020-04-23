import React from "react";
import NavbarComponent from "../Navbar/navbar";


class homepageComponent extends React.Component{
    render() {
        return(

             <div>
                <NavbarComponent/>
                Hello from the homepage
             </div>

        );
    }
}

export default homepageComponent;