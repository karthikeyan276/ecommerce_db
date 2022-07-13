import React, { Component } from 'react'
import Dee from './Dee'


export default class Ceer extends Component {

    constructor(){
        super()
        this.state={
            name:""
        }
    }
  render() {
    return (
      <div>
<input onChange={(e)=>this.setState({name:e.target.value})} />

<Dee name={this.state.name}  />
      </div>
    )
  }
}
