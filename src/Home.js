
import React, { Component } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

import { Button,  TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import axios from "axios"
import Slider from './Slider'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            open:false,
            anchorEl:false
        }
    }

    handleDrawerOpen =()=>{
        this.setState({open:true})
    }
    handleDrawerClose =()=>{
        this.setState({open:false})
    }
    handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget});
      };
      handleClose = (event) => {
        this.setState({anchorEl:null});
      };
      clicked=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            console.log(response.status);
            console.log(response.data)
        
          })
      }
  render() {
    const open = Boolean(this.state.anchorEl);

    return (
       <div>
        <div style={{backgroundColor:"#2874f0",color:"white"}}>
       <Box
      sx={{
        width: 400,
        height:110,
        maxWidth: '100%',
        
        ml:2,
        alignItems:'center',
        display:'flex ',
        
      }}
    >

      <TextField fullWidth label="Search" id="fullWidth"  sx={{backgroundColor:"white",mt:1}}/>
      </Box>
      <Box sx={{float:"right",mt:-5}}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={this.handleClick}
        sx={{color:"white",ml:2,mt:-3,backgroundColor:"white",color:"black"}}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={this.state.anchorEl}
        open={open}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        sx={{color:"white"}}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Login </MenuItem>
      </Menu>
      <Link to="/Login">
       <Button variant='contained'  sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}}>Login</Button>
      </Link>
      <Link to="/Products">
       <Button variant='contained'  sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}}>Get Products</Button>
      </Link>
     
      <Button variant='contained'  sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}} >more</Button>
     <Button variant='contained' sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}}><ShoppingCartTwoToneIcon />   </Button> 
    </Box>
    </div>
    <div style={{display:"flex"}}>
           {/* <Button variant='contained' color="success" onClick={this.clicked}>View Products</Button> */}
          

    </div>
    <div >

      <Slider/>  
    </div>
    
       </div>
    )
  }
}
