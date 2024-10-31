import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, Button, Box  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import frame from '../../Assets/Imagens/Frame.png';
import frame2 from '../../Assets/Imagens/Frame2.png';
import './Nav.css';


export const Nav = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setIsDrawerOpen(open);
      };
    
  return (
    <div className='nav'>
        <div className="logo">
            <img className='logo' src={frame} alt="" />
            <img className='logo-p' src={frame2} alt="" />
        </div>

        <IconButton
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { sm: 'block', md: 'none' }, 
                color: '#8176AF', 
                position: 'absolute', 
                top: '70px', 
                right: '50px'   
            }} 
        >
        <MenuIcon sx={{ fontSize: '50px' }} />
      </IconButton>
      <div className="menu">
                <ul>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>TECHNOLOGIES</li>
                    <li>HOW TO</li>
                </ul>
                <div className="contato">
                    <Button variant="outlined" className="btn1" sx= {{ width: 154, height: 48, borderRadius: '40px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: 'white', borderColor: "white" }}>CONTACT US</Button>
                    <Button variant="contained" className="btn2"  sx={{ width: 154, height: 48, borderRadius: '40px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 'bold', color: '#343045', background: 'linear-gradient(90deg, #8176AF, #C0B7E8)' }}>JOIN HYDRA</Button>
                </div>
        </div>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        className="custom-drawer"
      >
        <Box
         role="presentation"
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
        sx={{
            width: 260,
            padding: '20px',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '5px'
        }}
        >
         <List sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <ListItem button>ABOUT</ListItem>
                <ListItem button>SERVICES</ListItem>
                <ListItem button>TECHNOLOGIES</ListItem>
                <ListItem button>HOW TO</ListItem>
         </List>
          <Box 
           sx={{ 
                marginTop: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px' 
             }}>
                <Button 
                    variant="outlined" 
                    className="btn1" 
                    sx={{ 
                        width: 154, 
                        height: 48, 
                        borderRadius: '40px', 
                        fontFamily: 'Montserrat, sans-serif', 
                        fontSize: '12px', 
                        color: 'white', 
                        borderColor: "white" 
                    }}>
                    CONTACT US
                </Button>
                <Button  
                    variant="contained" 
                    className="btn2" 
                    sx={{ 
                    width: 154,
                     height: 48, 
                     borderRadius: '40px', 
                     fontFamily: 'Montserrat, sans-serif', 
                     fontSize: '12px', 
                     fontWeight: 'bold', 
                     color: '#343045', 
                     background: 'linear-gradient(90deg, #8176AF, #C0B7E8)' 
                     }}>
                    JOIN HYDRA
                </Button>
              </Box>
            </Box>
        </Drawer>
    </div>
  )
}

export default Nav;