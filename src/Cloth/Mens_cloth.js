import React, { Component } from 'react'
import { withRouter } from '../Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Navbar_new from '../Navbar_new';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loadingscreen from '../Loadingscreen';

 class Mens_cloth extends Component {
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
      prices:"",
      loading:false
    }
  }
componentDidMount=()=>{
  let datas = JSON.parse(localStorage.getItem("user_email")) || []
  console.log("datas",datas[0])
  const filterr= this.props.router.location.state.map(d=>d.price)
  console.log("checkdata",filterr)
  this.setState({prices:filterr})


  this.setState({user_id:datas[0]})
}
  Add_product=(id,category,description,price,image,title)=>{
 
    

    console.log("1111",id,category,description,price,image)
    console.log("catgory",category)
    let dd = category.slice(0,3)
    console.log("ddd",dd)
    const pricee = Math.round(price)
    console.log("prieeee",pricee)
    
    localStorage.setItem("id",id)
    this.setState({id:id,category:dd,description:description,price:pricee,image:image,title:title})
    // axios.post(`http://localhost:7001/Product_men`,{
      
    //   category:this.state.category,
    //   description:this.state.description,
    //   price:this.state.price,
    //   title:this.state.title,
    //   user_id:this.state.user_id,
    //   image:this.state.image

    // })

    
    
  }
   sortAscending = () => {
    const { prices } = this.state;
    const sort = prices.sort((a, b) => a-b)  
    console.log("sort ",sort)
    // this.setState({ price })

  }

  sortDescending = () => {
    const { price } = this.state;
    price.sort((a, b) => a - b).reverse()
    // this.setState({ price })
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

    const filterr= this.props.router.location.state
    const sorted = [...this.props.router.location.state].sort((a) => a[a.price] );
    console.log("filter",sorted)
    console.log("data",data)
    console.log("id",this.state.prices)
    // console.log("state",this.state)

    return (
      <div>
        <div style={{marginTop:"-16px"}}>
          <Navbar_new/>
        </div>
          <div>
          <Box sx={{ flexGrow: 1,mt:2,ml:1,mr:1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((d, index) => (
          <Grid key={index} item xs={6} sm={6} md={6} >
            <Item >id:{d.id}</Item>
            <Item > category:{d.category}</Item>
            <Item >   Desc:{d.description.slice(0,20)}</Item>
            <Item > <h4> Price:{Math.round(d.price)} </h4></Item>
            <Item >  {<img style={{height:"150px"}} src={d.image}/>}</Item>
            <Item>
              <Link to="/Mens_details" style={{ color: 'inherit', textDecoration: 'inherit'}} state ={data}>
              {/* {console.log("dd",d)} */}
            
              <Button variant='contained' color='secondary' onClick={()=>this.Add_product(d.id,d.category,d.description,d.price,d.image,d.title)}> View Details  
              
              </Button>  </Link></Item>

              <Item>

                <Button onClick={this.sortDescending}>Cllick</Button>
              </Item>
            {/* <Item> <Button variant="contained" color='success' onClick={()=>this.Add_product(d.id,d.category,d.description,d.price,d.image,d.title)}>Add</Button>
            <Button variant="contained" color="error">Remove</Button>
            </Item> */}
        
          </Grid>
        ))}
      </Grid>
    </Box>
    {/* {   this.state.loading ?"" :<Loadingscreen/>   } */}
          </div>
      </div>
    )
  }
}

export default withRouter(Mens_cloth)
