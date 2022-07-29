import { keyframes } from '@emotion/react'
import React, { Component } from 'react'
import Navbar_new from '../Navbar_new'

export default class Welcome extends Component {
  render() {

    const text = keyframes`
    0% {
      -webkit-filter: blur(12px);
              filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }
  }`
    
    return (
      <div>
        <div >
<Navbar_new/>
<center>

       <text >   your order are placed </text> 
</center>
    

        </div>
       

      </div>
    )
  }
}
