import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';


import Graph from "./Graph"
import Graph2 from "./Graph2"
import Graph3 from "./Graph3"

const ControlPanel = (component) =>{
    const options = ['M1', 'M2', 'M3', 'M30', 'H1', 'H4', 'D1' ];

      const [open, setOpen] = React.useState(false);
      const anchorRef = React.useRef(null);
      const [selectedIndex, setSelectedIndex] = React.useState(1);
    
      const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
      };
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
      };
    
      const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };


    return(
        <>
            <h1>lightweight-charts</h1>
            <div className="container">
                <div className="controll__btns-container">
                    
                    <p className='graph-title'>#NQH2@CME</p>
                    <IconButton aria-label="AddLocationIcon" sx={{color:'#ffffff'}}>
                        <AddLocationIcon/>
                    </IconButton>
                    <IconButton aria-label="AlignVerticalBottomIcon"  sx={{color:'#ffffff'}}>
                        <AlignVerticalBottomIcon/>
                    </IconButton>
                    <IconButton aria-label="AppRegistrationIcon" sx={{color:'#ffffff'}}>
                        <AppRegistrationIcon/>
                    </IconButton>

                    <ButtonGroup variant="outlined" ref={anchorRef} aria-label="split button" >
                        <Button onClick={handleClick} sx={{color:'#ffffff', borderColor: '#ffffff'}}>{options[selectedIndex]}</Button>
                        <Button
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                        sx={{color:'#ffffff', borderColor: '#ffffff'}}
                        >
                        <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                        className='toFront'
                    >
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                {options.map((option, index) => (
                                    <MenuItem
                                    key={option}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                    {option}
                                    </MenuItem>
                                ))}
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                </div>
                <Graph2/>
                <Graph/>
                {/* <Graph3/> */}
            </div>
        </>

    )
}
export default ControlPanel