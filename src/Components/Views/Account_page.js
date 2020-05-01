import React,{ useState } from "react";
import {
    Typography,
    Paper,
    Grid,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    Button,
    IconButton,
    ButtonGroup,
    Avatar,
    Card,
    TableHead
  } from "@material-ui/core";
  import { withStyles} from "@material-ui/core/styles";
  import { useStoreState } from "easy-peasy";
  import "../../resources/CSS/account.css";

  

  function Account_page(props){
    const loggedName = useStoreState((state) => state.loggedName);
    const [showItem, setShowItem] = useState(false)
    const handleHover=(e)=>{
        setShowItem(true)
        console.log(showItem)
    }
    const handleHoverOut=(e)=>{
        setShowItem(false)
        console.log(showItem)
    }
    
          return(
          <Grid container justify="center">
             <Grid item xs={7}>
                 <Paper style={{background:"black",opacity:"95"}}>
                     <Grid item xs={6} align="center" alignItems="center" style={{paddingTop:"3%", marginLeft:"25%", paddingBottom:"5%"}}>
                        <Avatar style={{background:"#F05",height:"70px",width:"70px",marginBottom:"3%",fontSize:"40px"}}>P</Avatar>
                        <Typography align="center" variant="h3" color="secondary" style={{fontFamily:"Josefin Sans, sans-serif"}}>Prakhar Bhasin</Typography>
                     </Grid>
                     
                    <Grid item xs={8}>
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6" color="secondary">Email ID:  </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>pbhasin400@gmail.com</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6" color="secondary">Phone Number:  </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>9899169906 </Typography>
                                </TableCell>
                            </TableRow>
                        </Table>
                        <Grid item xs={4} style={{marginTop:"10%"}}>
                            <Typography color="secondary" variant="h4" style={{fontFamily:"Josefin Sans, sans-serif",marginLeft:"10px"}}>ORDERS</Typography>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} style={{paddingTop:"3%"}}>
                            <Table align="center">
                                <TableHead>
                                    <TableRow align="center">
                                        <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>
                                            Restaurant
                                        </TableCell>
                                        <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>Date</TableCell>
                                        <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>Delivery Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                    <TableRow>
                                    <TableCell onMouseOver={handleHover} onMouseOut={handleHoverOut}  style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>Naveen Tea Stall
                                    {showItem?
                                    <div>
                                    <Typography style={{color:"#555",}}>Item 1: Quantity</Typography>
                                    <Typography style={{color:"#555",}}>Item 2: Quantity</Typography>
                                    <Typography style={{color:"#555",}}>Item 3: Quantity</Typography>
                                    </div>
                                    :<div></div>}
                                    </TableCell>
                                    <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>25/01/2020</TableCell>
                                    <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>15 minutes</TableCell>
                                    </TableRow>
                                    <TableRow>
                                    <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>Surya Tuck Shop</TableCell>
                                    <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>25/01/2020</TableCell>
                                    <TableCell style={{color:"white",fontFamily:"Josefin Sans, sans-serif"}}>15 minutes</TableCell>
                                    </TableRow>
                                
                            </Table>
                        </Grid>
                    
                 </Paper>
             </Grid>
        </Grid>  
          );
      
  }

  export default Account_page;