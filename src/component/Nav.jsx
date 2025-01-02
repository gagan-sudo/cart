import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { CardTravel } from '@mui/icons-material';



 function Nav() {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <Link to={'/home'} >
          
            <MenuIcon />
          
          </Link> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
         
            <Link to={'/cart'}>
              
                <CardTravel/>
            
              
               
            </Link>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(Nav)
