import React, { Component } from 'react'
import axios from 'axios'

export default class Newwww extends Component {
  constructor(){
    super()
    this.state={
      product:[]
    }
  }
//   getAuthenticationHeader(public_key, secret_key) {
//     var pbkdf2 = require('pbkdf2')
//     let time =  parseInt(Date.now()/1000);
//     var derivedKey = pbkdf2.pbkdf2Sync(secret_key, time.toString(), 128, 32, 'sha256');
//     derivedKey = derivedKey.toString('hex');

//     return  new Headers({
//         "public_key": public_key,
//         "one_time_code": derivedKey,
//         "timestamp": time,
//     })
// }

  componentDidMount=()=>{
    // axios.get("https://api.revery.ai/console/v1/get_filtered_garments").then((response)=>{
    //   console.log(response.data)
    // })
    fetch( "https://api.revery.ai/console/v1/get_selected_faces")  
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
    })
  }
  render() {
    return (
      <div>Newwww</div>
    )
  }
}
