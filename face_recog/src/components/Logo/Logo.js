import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import main_logo from './main_logo.jpeg';




const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{max: 55}} style={{ height: 150, width: 150 }}>
                <div className='Tilt-inner'>
                    <img style={{padding: '0px'}} src={ main_logo} alt='company logo'></img>  
                </div>
            </Tilt>
        </div>
            
    );
    
}

export default Logo;
