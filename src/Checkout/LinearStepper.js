import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { withRouter } from "../Withrouter";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar_new from "../Navbar_new";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));
 
function getSteps() {

  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
    
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      {/* <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};

const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      {/* <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            type="number"
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            type="number"
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            type="number"
            {...field}
          />
        )}
      />
      
       
    </>
  );
};

function getStepContent(step) {
 
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = (props) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [user_data,setUser_data]=useState([])
  const [navigate,setNavigate]=useState("")
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    let a=[]

    a.push(data)

    setUser_data(a)

    console.log("aaa",a)
    
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const pay=()=>{
    console.log("pay")

    let data = JSON.parse(localStorage.getItem("user_email")) || []
    console.log("data",data)
    let data1 = JSON.parse(localStorage.getItem("user_email")) || []
    console.log("data",data1[0])
        const firstName=user_data.map(d=>d.firstName)
        const lastname=user_data.map(d=>d.lastName)
        const email=user_data.map(d=>d.emailAddress)

        const phoneNumber=user_data.map(d=>d.phoneNumber)
        const address1 = user_data.map(d=>d.address1)
        const address2 = user_data.map(d=>d.address2)
        const country  = user_data.map(d=>d.country)
        const title=props.router.location.state.map(d=>d.title)
        const description=props.router.location.state.map(d=>d.description)
        const image=props.router.location.state.map(d=>d.image)
        const price=props.router.location.state.map(d=>Math.round(d.price))
        
        const category=props.router.location.state.map(d=>d.category)


        console.log("title",email)

        console.log("firstname",firstName)

    axios.post(`http://localhost:7001/details`,{
        firstName:firstName,
        lastname:lastname,
        email:email,
        phoneNumber:phoneNumber,
        address1:address1,
        address2:address2,
        country:country,
        title:title,
        description:description,
        image:image,
        price:price,
        category:category,
        data1:data1,
        user_data:user_data

    }).then((response)=>{
        console.log("response",response.data.results)

        if(  response.data.message === "sucess"){
            console.log("ok");
            console.log('email',response.data.results)
            toast.success("Order placed",{autoClose:1000}); 
            setNavigate(<Navigate to='/Placeorder'></Navigate> )
        }else{
            toast.error("plz check your details",{autoClose:1000})
        }
       
 
    })
   
  }

const submit=()=>{
    
}

console.log(props.router.location.state)

const data = props.router.location.state
console.log("dddd",data)
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  let d= data.map(d=>Math.round(d.price))
//   console.log("priceeee",data.price)

  console.log("user_data",user_data)
  return (
    <div>
           <Navbar_new/>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
            {navigate}
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id (Login_id)</TableCell>
            <TableCell align="center">title</TableCell>
            <TableCell align="center">description</TableCell>
            <TableCell align="center">image</TableCell>
            <TableCell align="center">Rating</TableCell>

            <TableCell align="center">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
                
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              {/* {console.log("iddd",row.rating.rate)} */}
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center"><img style={{width:"20%"}} src={row.image}/></TableCell>
              {/* <TableCell align="center">{row.row.rating.rate }</TableCell> */}
              
              <TableCell align="center">{row.price}</TableCell>
              
            </TableRow>
        
          ))}
        </TableBody>
      </Table>
    </TableContainer><br/>
    
    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>


            <TableCell>firstName </TableCell>
            <TableCell align="center">lastName</TableCell>
            <TableCell align="center">emailAddress</TableCell>
            <TableCell align="center">phoneNumber</TableCell>
            <TableCell align="center">address1</TableCell>

            <TableCell align="center">address2</TableCell>
            <TableCell align="center">phoneNumber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user_data.map((row) => (
            <TableRow
              key={row.name}

              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
                {console.log(row.firstName)}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              {console.log("iddd",row.rating.rate)}
              <TableCell align="center">{row.emailAddress}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.row.rating.rate }</TableCell>
              
              <TableCell align="center">{row.address1}</TableCell>
              <TableCell align="center">{row.address2}</TableCell>

              
            </TableRow>
        
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {user_data.map((d, index) => (
          <Grid item xs={2} sm={4} md={12} key={index}>
            <Item><h1> firstName:{d.firstName} {d.lastName} </h1>
            <h1>Email:{d.emailAddress}</h1>
            <h1>Your Mobile: {d.phoneNumber}</h1>
            <h1>Delivey Address: {d.address1}  {d.address2}</h1>
            <h1>Country: {d.country}</h1>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Button variant="contained" color="secondary" onClick={pay}>Paynow  {d}</Button>
    
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
                onClick={submit}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default withRouter(LinaerStepper)