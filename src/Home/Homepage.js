import { Button } from '@mui/material'
import { display } from '@mui/system'
import React, { Component } from 'react'
import "./Home.css"
// import Homepage_1 from "./Homepage_1.scss"
// import image1 from ".image1.png"
import image1 from './image1.png';
import image2 from './image2.png';

import image3 from './image3.png';




export default class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            currentSrc: "",
            active: 0
        }
    }
    onLoad = (event) => {
        this.setState({
            currentSrc: event.target.currentSrc
        });
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    handleScroll_1(event) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var image1 = document.getElementById('img1')
        var image2 = document.getElementById('img2')
        var image3 = document.getElementById('img3')

        console.log('scroll', scrollTop)

        if (scrollTop > 100) {
            image1.style.opacity = 1
            image2.style.opacity = 0
            image3.style.opacity = 0
        }
        if (scrollTop > 1500) {
            image1.style.opacity = 0
            image2.style.opacity = 1
            image3.style.opacity = 0
        }
        if (scrollTop > 1700) {
            image1.style.opacity = 0
            image2.style.opacity = 0
            image3.style.opacity = 1
        }
    }
    handleScroll = (event) => {
        const { pageYOffset } = window;
        const { active } = this.state;
        console.log("page", pageYOffset)
        if (pageYOffset >= 100 && active === 0) {
            this.setState({ active: 1 });
        } else if (pageYOffset < 100 && active === 1) {
            this.setState({ active: 0 });
        }
    };
    render() {
        const { active } = this.state;
        console.log("active", active)


        return (

            < >
                <div className="comp2">



                    <div className="scrolltray">

                        <div className="item1">
                            <h1> Build your Virtual Try-on Experience</h1>

                            <h4>Publish a virtual dressing room in just 30 minutes or customize your experience through our free API.</h4>

                            <Button sx={{ float: "left" }}>Build</Button>
                            <Button sx={{ float: "left" }}>Contact sales</Button>
                        </div>

                        <div className="item2">
                            <h1>Build the future of online fashion</h1>
                            <h5>Help your users explore latest fashion trends & get inspired.</h5>
                        </div>

                        <div className="item2">
                            <h1>Spark Creativity & Confidence</h1>

                            <h5>Mix & match outfits and instantly visualize how different items would look together.</h5>

                        </div>

                        <div className="item2">

                            <h1>Promote Diversity & Inclusion</h1>

                        <h5>Try garments on models of different ethnicity groups, skin tones, and body shapes.</h5>
                        </div>
                        
                            <div>

                                <h1>Create an engaging experience</h1>
                        <div style={{ display: "flex" }}>

                            <p>Uplift in conversion and retention while reducing return rates.</p>
                            <img src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2b21565c1d66ece4d8a0_Longer%20session%20lengths.svg" />
                            <p>Longer session lengths</p>
                            <img src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2bb7f2202c586a0d670e_Increased%20Conversion.svg" />
                            <p>Increased Conversion</p>
                            <img src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2bb6d33e24c195a4c783_Decreased%20returns.svg" />

                        </div>
                            </div>
                        
                        <h1>REVERY AI</h1>
                        <h1>Virtual Try-on</h1>
                        <div >
                            <h1>  <Button variant='contained'>get started</Button> </h1>
                            <h6> OR </h6>
                            <h1> <Button variant='contained'>Contact sales</Button>   </h1>
                        </div>



                        <div className="sticky">

                            {/* <img style={{   width:"100%",maxWidth: "450px",height:"auto" }}  src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" /> */}
                           
                           <div className="fit-cont">
                           <img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                display: active === 0 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" id="img1" alt="lorem" />
                            <img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                display: active === 1 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/620a2d18fc1ea3b4f8d9d9bd_Virtual%20Try-on.png"  id="img2" />
                            <img style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "450px",
                                backgroundColor: "red",
                                height: "auto",
                                display: active === 0 ? "block" : "none",
                                // position:active===1 ? "":"st"
                            }} loading="lazy" src="https://uploads-ssl.webflow.com/620a15ca833f49842b0896fd/62291c35001bb66180d4103e_Slide-img-3.png" id="img3" />

                           </div>
                            


                        </div>

                    </div>
                    <div style={{ height: "100px" }}>

                    </div>
                    <div style={{ width: "100%", display: "flex" }}>

                        {/* <div style={{ maxWidth: "45%" }}>
        <h1> Build your Virtual Try-on Experience</h1>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <h3> g room in just 30 minutes or customize your experience through our free API</h3>
        <Button sx={{ float: "left" }}>Build</Button>


    </div> */}
                        {/* <div style={{ width: "55%", position: "sticky" }}>

        {/* <img style={{ width: "100%", maxWidth: "450px", height: "auto" }} src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" /> */}
                        {/* <img style={{
            maxWidth: "450px", height: "auto",
            height: "100%",
            width: "100%",

            backgroundColor: "red",
            display: active === 1 ? "block" : "none",
            position: active === 1 ? "" : "fixed"
        }} loading="lazy" src="https://th.bing.com/th/id/OIP.vYFeF1xXRixH38-WRQKtBgHaEl?pid=ImgDet&rs=1" />
    </div> */}

                        {/* </div>
<div style={{ height: "100px" }}>

</div>


<div style={{ maxWidth: "100%", display: "flex" }}>

    <div style={{ width: "45%", maxWidth: "45%", width: "45%" }}>
        <h1> Build your Virtual Try-on Experience</h1>
        <h3> Publish a virtual dressing room in just 30 minutes or customize your experience through our free API</h3>
        <Button sx={{ float: "left" }}>Build</Button>


    </div>
    <div style={{ width: "55%" }}>
        <img style={{ width: "100%", maxWidth: "450px", height: "auto" }} src="https://gadgetstouse.com/wp-content/uploads/2016/10/flip.png" />
    </div>*/}

                    </div>



                </div>
            </>




        )
    }
}
