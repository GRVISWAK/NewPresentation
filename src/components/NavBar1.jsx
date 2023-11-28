import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext'
import PositionedMenu from './Profile';
import logo from "./logo1.jpg";
export default function NavBar1() {
  const [user,setuser]=React.useContext(UserContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#0d0d0d"}}>
        <Toolbar>
          <Link to= "/"><img src={logo} style={{width:'180px',height:'40px',marginRight:'10px'}}></img></Link>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,fontFamily:'',alignItems:'center',display:'flex',justifyContent:'center'}} >
            {!user?"Login To Adopt Your First Pet" : `Welcome ${user} You Can Now Adopt Your First Pet`}
          </Typography>

          <Link to="/Sign up">{!user?<Button size='large' sx={{color:'white'}}>Sign Up</Button> : null}</Link>
          <Link to="/Login">{!user?<Button size='large' sx={{color:'white'}}>Login</Button> : null}</Link> 
          {user?<PositionedMenu/>:null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}