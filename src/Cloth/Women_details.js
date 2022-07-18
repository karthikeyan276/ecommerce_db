import React, { Component } from 'react'
import Navbar_new from '../Navbar_new'
import { withRouter } from '../Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import axios from "axios"
import { Link } from 'react-router-dom';

 class Women_details extends Component {
    constructor(props){
        super(props)
        this.state={
          id:"",
          category:"",
          description:"",
          price:[],
          user_id:"",
          image:"",
          title:"",
          check:""
        }
    }
    componentDidMount=()=>{
        let datas = JSON.parse(localStorage.getItem("female")) || []
        console.log("female",datas)


        let data = JSON.parse(localStorage.getItem("user_email")) || []

        this.setState({user_id:data})
        console.log("female",datas)
        this.setState({check:datas})
      }
        Add_product=(id,category,description,price,image,title)=>{
       
          
      
          console.log("1111",id,category,description,price,image)
          console.log("catgory",category)
          let dd = category.slice(0,3)
          console.log("ddd",dd)
          const pricee = Math.round(price)
          console.log("prieeee",pricee)
          this.setState({id:id,category:dd,description:description,price:pricee,image:image,title:title})
          axios.post(`http://localhost:7001/Product_women`,{
            
            category:this.state.category,
            description:this.state.description,
            price:this.state.price,
            title:this.state.title,
            // user_id:this.state.user_id,
            image:this.state.image
      
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
    console.log(this.props.router.location.state)
    const data = this.props.router.location.state
    console.log("data",data)
    console.log(this.props.router.location.state)
    console.log(this.state.user_id)
    const user=this.state.check
    console.log("user",user)

    const data_filter=data.filter(d=>d.id==user)
    console.log('data',data_filter)
    return (
        <div>
     
        <div>
          <Navbar_new/>
        </div>

<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {data_filter.map((d, index) => (
          <Grid item xs={2} sm={4} md={12} key={index}>
           
           
            <Item>
            <Typography  variant="h3" sx={{ml:3,color:"black"}}>  {d.title} </Typography>
             <img style={{width:"450px",float:"left"}} src={d.image}/> {d.rating.count[0]}</Item>
                <Item sx={{display:'table-cell'}}><h2>  {d.description}  </h2> <h1 style={{color:"red"}}> <CurrencyRupeeRoundedIcon/> {Math.round(d.price)}</h1>  </Item>
                <Button variant='contained' sx={{float:"left",mt:2}} color="success" onClick={()=>this.Add_product(d.id,d.category,d.description,d.price,d.image,d.title)}>Add to cart </Button>
               <Link to="/Bynow" state={data_filter} > <Button variant='contained' sx={{float:"left",ml:2, mt:2}} color="info">Bynow</Button>  </Link> 
          </Grid>
        ))}
      </Grid>
    </Box>
          </div>
      </div>
    )
  }
}
export default withRouter(Women_details)
