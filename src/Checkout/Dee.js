import React, { Component } from 'react'

export default class Dee extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    console.log("prop",this.props)
    return (
      <div>

{/* <input onChange={(e)=>this.setState({zip:e.target.value})} /> */}
      </div>

    )
  }
}
