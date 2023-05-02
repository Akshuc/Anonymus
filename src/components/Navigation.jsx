import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import img from "../logo1 1.png"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { alignPropType } from 'react-bootstrap/esm/types';

const Navigation = (props) => {

    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
    };

    return (
        <div>

            <HideOnScroll  {...props}>

                <AppBar style={{ background: "rgba(4, 4, 5, 0.8)", opacity: "0.8", width: "1440px", height:"116px",left:"0",top:"1px"}}>

                    <div className='Child-2'>

                        
                            <img className='img' src={img} alt="img" />

                            <div className='item-2'>
                                <NotificationsOutlinedIcon className='icon' />
                                <div className='second'>
                                    <div className='avtar'></div>
                                
                                <KeyboardArrowDownOutlinedIcon className='icon2' />
                                </div>
                                
                            </div>

                            
                    </div>
                </AppBar>

            </HideOnScroll>
        </div>
    )
}

export default Navigation