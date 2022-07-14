import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import "./Home.css"

export class Newhome extends Component {
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    handleScroll(event) {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var image1 = document.getElementById("img1");
      var image2 = document.getElementById("img2");
      var image3 = document.getElementById("img3");
      var image4=  document.getElementById("img4")
  
      console.log("scroll", scrollTop);
  
      if (scrollTop >= 0) {
        image1.style.opacity = 1;
        image2.style.opacity = 0;
        image3.style.opacity = 0;
        image4.style.opacity=0
      }
      if (scrollTop > 2025) {
        image1.style.opacity = 0;
        image2.style.opacity = 1;
        image3.style.opacity = 0;
        image4.style.opacity=0
      }
      if (scrollTop > 2271) {
        image1.style.opacity = 0;
        image2.style.opacity = 0;
        image3.style.opacity = 1;
        image4.style.opacity=0
      }
      if (scrollTop > 2500) {
        image1.style.opacity = 0;
        image2.style.opacity = 0;
        image3.style.opacity = 0;
        image4.style.opacity=1
      }
    }
  
    render() {
      return (
        <>
        
          <div className="comp2">
            <div className="scrolltray">
              <div className="item1">
              <h1> Build your Virtual Try-on Experience</h1>
                <p>
                Publish a virtual dressing room in just 30 minutes or customize your experience through our free API.
                </p>
                <Button sx={{ float: "left" }}>Build</Button>
                            <Button sx={{ float: "left" }}>Contact sales</Button>
                           
                            
              </div>

              <div className="item1">
              <h1>Build the future of online fashion</h1>
                <p>
                Help your users explore latest fashion trends & get inspired.
                </p>
              </div>
              <div className="item1">
              <h1>Spark Creativity & Confidence</h1>
                <p>
                Mix & match outfits and instantly visualize how different items would look together.
                </p>
              </div>
              <div className="item1">
              <h1>Promote Diversity & Inclusion</h1>
                <p>
                Try garments on models of different ethnicity groups, skin tones, and body shapes
                </p>
              </div>
              <div className="item1">
              <h1>Create an engaging experience</h1>
                <p>
                Mix & match outfits and instantly visualize how different items would look together.
                </p>
                <p>Uplift in conversion and retention while reducing return rates.</p>
                            <img src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2b21565c1d66ece4d8a0_Longer%20session%20lengths.svg" />
                            <p>Longer session lengths</p>
                            <img src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2bb7f2202c586a0d670e_Increased%20Conversion.svg" />
                            <p>Increased Conversion</p>
                            <img src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2bb6d33e24c195a4c783_Decreased%20returns.svg" />

              </div>
              <div className="item1">
              <h1>REVERY AI</h1>
                        <h1>Virtual Try-on</h1>
                     <Button variant='contained'>get started</Button> 
                            <h6> OR </h6>
                             <Button variant='contained'>Contact sales</Button>   
              </div>
            </div>
  
            <div className="sticky">
                
              <div className="fit-cont">

              <img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                // display: active === 0 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" id="img1" alt="lorem" />
                            <img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                // display: active === 1 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2d18fc1ea3b4f8d9d9bd_Virtual%20Try-on.png"  id="img2" />
                            <img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                // display: active === 0 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/62291c35001bb66180d4103e_Slide-img-3.png" id="img3" />

<img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                // display: active === 0 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" id="img4" alt="lorem" />
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  
 
