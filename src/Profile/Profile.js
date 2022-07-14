import { Axios } from 'axios'
import React, { Component } from 'react'
import Navbar_new from '../Navbar_new'
import axios from "axios"
import Loading from '../Loading'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material'

export default class Profile extends Component {
    constructor(){
        super()
        this.state={
            user_email:"",
            logged_user:[],
            loading:false,
            image:""
        }
    }

    
    componentDidMount=()=>{
        
        let datas = JSON.parse(localStorage.getItem("user_email")) || []
        console.log("datas",datas[0])
        this.setState({user_email:datas[0]})

     
        this.dataget()
    }
    dataget=()=>{
        this.setState({loading:false})
        axios.post(`http://localhost:7001/userdata/`,{
            user_email:this.state.user_email
        }).then((response)=>{
            console.log(response.data.results)
            this.setState({logged_user:response.data.results})
            this.setState({loading:true})
        })
    }

    updata_withpic=(files)=>{
        console.log("clicked",files)
    }

    uploadImage=(files)=>{
            console.log("files",files)
            let user_email=this.state.user_email
            console.log("user_emailuser_email",user_email)
            this.setState({image:files})
            axios.put(`http://localhost:7001/image/${user_email}`).then((response)=>{
                console.log(response.data.results)
            })

    }
  render() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    console.log("logged_user",this.state.image)
    const data = this.state.logged_user
    // console.log("true",this.state.loading)
    return (
      <div>
<div >

     {/* <Navbar_new/>  */}
</div>
      
     
        <div >

        
        </div>
        <div>

           <h1 >   {   this.state.loading ?"" :<h1> loading </h1>  }  </h1> 
        </div>
       <div>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((data, index) => (
          <Grid item xs={6} sm={6} md={12} key={index}>
            <Item> <h1>First_name : {data.First_name} {data.Last_name} </h1><br/> 
          <h2>  Your Email: {data.Email} </h2> 
          <img src={data.image}/>
          <Button variant='contained' onClick={this.updata_withpic}>upload pic</Button>
            
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    <input type="file" onChange={(e)=>this.uploadImage(e.target.value)}/>
       </div>
      </div>
    )
  }
}
