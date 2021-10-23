import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import logo from './../assets/images/logo.png';

//-----------------------|| LOGO SVG ||-----------------------//

const Logo = () => {
    const theme = useTheme();

    return (

         <img src={logo} alt="Berry" width="100" />
      
    );
};

export default Logo;
