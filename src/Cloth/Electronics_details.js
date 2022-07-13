import React, { Component } from 'react'
import { withRouter } from '../Withrouter'

 class Electronics_details extends Component {
    constructor(props){
        super(props)
        this.state={
          id:"",
          category:"",
          description:"",
          price:[],
          user_id:"",
          image:"",
          title:""
        }
    }
  render() {
    return (
      <div>Electronics_details</div>
    )
  }
}

export default withRouter(Electronics_details)
