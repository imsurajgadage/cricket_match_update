import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function NavBar() {
    return (
 <AppBar position="static">
  <Toolbar>
    <Typography variant="h6">
      Live Score
    </Typography>
  </Toolbar>
</AppBar>

    );
}

export default NavBar;



