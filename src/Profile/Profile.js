import { Axios } from 'axios'
import React, { Component } from 'react'
import Navbar_new from '../Navbar_new'
import axios from "axios"
import Loading from '../Loading'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material'
import { withRouter } from '../Withrouter'
import Loadingscreen from '../Loadingscreen'
import "../App.css"
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

 class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_email: "",
      logged_user: [],
      loading: false,
      image: "",
      userbynow_add:[]
    }
  }


  componentDidMount = () => {

    let datas = JSON.parse(localStorage.getItem("user_email")) || []
    console.log("datas", datas[0])
    this.setState({ user_email: datas[0] })
    console.log("usereeee",this.state.user_email)


    this.dataget()
    this.changed()
  }
  dataget = () => {
    this.setState({ loading: false })

  
    axios.post(`http://localhost:7001/userdata/`, {
      user_email: this.props.router.location.state
    }).then((response) => {
      console.log(response.data.results)
      this.setState({ logged_user: response.data.results })
      this.setState({ loading: true })
    })
  }

  updata_withpic = (event) => {
    // console.log("clicked",files)
    console.log(event.target.value)
  }

  myHandler=(events)=>{
      this.setState({
        image:events.target.files[0]
      })
  }

submitHandler=(e)   =>{
  e.preventDefault()
  console.log(this.state.image)
  const user_email=this.state.user_email

    var url=`http://localhost/e_commerce/image`
  const formdata=new FormData();
  formdata.append('myfiles',this.state.image,this.state.image.name);
  formdata.append('name','demo')

let response =  axios.post(url,formdata) 
console.log("response",response)

}


  uploadImage = (files) => {
    console.log("files", files)
    let user_email = this.state.user_email
    console.log("user_emailuser_email", user_email)
    this.setState({ image: files })
    axios.put(`http://localhost:7001/image/${user_email}`).then((response) => {
      console.log(response.data.results)
    })

  }

  changed = (e) => {
    axios.post(`http://localhost:7001/userbynow_add`,{
      user_email: this.props.router.location.state
    }).then((response)=>{
      console.log("userbynow_add",response.data.results)
      this.setState({userbynow_add:response.data.results})
    })
  }



  render() {
    const customTheme = createTheme({
      palette: {
        primary: {
          main: deepPurple[500],
        },
      },
    });
    
    const StyledAvatar = styled(Avatar)`
      ${({ theme }) => `
      cursor: pointer;
      background-color: ${theme.palette.primary.main};
      transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
      &:hover {
        background-color: ${theme.palette.secondary.main};
        transform: scale(1.3);
      }
      `}
    `;

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    console.log("logged_user", this.state.user_email)
    console.log(this.props.router.location.state)
    const data = this.state.logged_user

    const userbynow_add = this.state.userbynow_add
    console.log("userbynow_adduserbynow_add",userbynow_add)
    // console.log("true",this.state.loading)
    return (
      <div>
        <div >

          <Navbar_new/> 
        </div>


        <div >


        </div>
        <div>

          <h1 >   {this.state.loading ? "" : <h1> <Loadingscreen/> </h1>}  </h1>
        </div>
        <div >
          <Box >
            <Grid   container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {data.map((data, index) => (
                <Grid   item xs={6} sm={6} md={12} key={index}>
                  <Item sx={{ flexGrow: 1 ,"&:hover": {
                  background: "lightblue",
                },}}> <h1>First_name : {data.First_name} {data.Last_name} </h1><br />
                    <h2>  Your Email: {data.Email} </h2>
                    <img src={data.image} />
                    {/* <Button variant='contained' onClick={this.updata_withpic}>upload pic</Button> */}

                  </Item>
                </Grid>
              ))}
               {userbynow_add.map((data, index) => (
                <Grid item xs={6} sm={6} md={12} key={index}  sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: 'primary.light',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                  },
                }}>
                  <Item > <h1>phoneNumber : {data.phoneNumber}  </h1><br />
                    <h2>  Your Address: {data.address_1} {data.address_2}</h2>
                    <h4>Country: {data.country}</h4>
                    <img src={data.image} />
                    {/* <Button variant='contained' onClick={this.updata_withpic}>upload pic</Button> */}

                  </Item>
                </Grid>
              ))}
              
            </Grid>
          </Box>
          {/* <input type="file" onChange={(e)=>this.uploadImage(e.target.value)}/> */}
          {/* <form onSubmit={this.submitHandler}>
            <input type="file"name='myfiles' onChange={this.myHandler} />
                <input type="submit" value="upload"/>

          </form> */}

        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
