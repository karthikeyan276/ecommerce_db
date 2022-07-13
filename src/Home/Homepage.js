import { Button } from '@mui/material'
import { display } from '@mui/system'
import React, { Component } from 'react'
import "./Home.css"


export default class Homepage extends Component {

    
    render() {
        var divOuter = document.getElementById("outer"),
	divOne = document.getElementById("one");

window.onscroll = function() {scrollBG()};

  function scrollBG() {
  	var oneTop = divOne.getBoundingClientRect().top;
   if(document.body.scrollTop > oneTop ||
       document.documentElement.scrollTop > oneTop){
       	 divOuter.style.backgroundImage = "url('//www.planwallpaper.com/static/images/518071-background-hd_xO1TwRc.jpg')";
       } else {
       		 divOuter.style.backgroundImage = "url('//www.planwallpaper.com/static/images/maxresdefault_YodSsVN.jpg')"; 
       }
  }
        return (
            <div style={{ backgroundColor: "black", color: "white" }}>

                    

                <div style={{ width: "100%", display: "flex" }}>

                    <div style={{ width: "45%" }}>
                        <h1> Build your Virtual Try-on Experience</h1>
                        <h3> Publish a virtual dressing room in just 30 minutes or customize your experience through our free API</h3>
                        <Button sx={{ float: "left" }}>Build</Button>


                    </div>
                    <div style={{ width: "55%" }}>
                        <img style={{ height: "450px" }} src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" />
                    </div>

                </div>
                <div style={{ height: "100px" }}>

                </div>
                <div style={{ width: "100%", display: "flex" }}>

                    <div style={{ width: "45%" }}>
                        <h1> Build your Virtual Try-on Experience</h1>
                        <h3> Publish a virtual dressing room in just 30 minutes or customize your experience through our free API</h3>
                        <Button sx={{ float: "left" }}>Build</Button>


                    </div>
                    <div style={{ width: "55%" }}>
                        <img style={{ height: "450px" }} src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" />
                    </div>

                </div>
                <div style={{ height: "100px" }}>

                </div>


                <div style={{ width: "100%", display: "flex" }}>

                    <div style={{ width: "45%" }}>
                        <h1> Build your Virtual Try-on Experience</h1>
                        <h3> Publish a virtual dressing room in just 30 minutes or customize your experience through our free API</h3>
                        <Button sx={{ float: "left" }}>Build</Button>


                    </div>
                    <div style={{ width: "55%" }}>
                        <img style={{ height: "450px" }} src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" />
                    </div>

                </div>
                
                    

                </div>

        

        )
    }
}
