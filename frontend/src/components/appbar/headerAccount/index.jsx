import { useState } from 'react';

import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const useStyles = makeStyles((theme) => ({
  accountMenuButton: {
  	fontSize: 44,
  	color: theme.palette.secondary.main600,
  	[theme.breakpoints.down("xs")]: {
  		fontSize: 30,
  	}
  },
  accountMenuBox: {
  	
  },
}));

const HeaderAccount = () => {
	const classes = useStyles();
	const [accountMenu, setAccountMenu] = useState(null);

  const Account_handleClick = (event) => {
    setAccountMenu(event.currentTarget);
  };

  const Account_handleClose = () => {	
    setAccountMenu(null);
  };


	return (
		<>
		<IconButton
		  edge="end"
		  className={classes.logo}
		  color="inherit"
		  aria-label="account"
		  onClick={Account_handleClick}
		>
		  <AccountCircleOutlinedIcon className={classes.accountMenuButton}/>
		</IconButton>
		<Menu
	    id="account"
	    className={classes.accountMenuBox}
	    anchorEl={accountMenu}
	    keepMounted
	    open={Boolean(accountMenu)}
	    onClose={Account_handleClose}
	  >
	    <MenuItem onClick={Account_handleClose}>
	    	This feature is not available yet.
	    </MenuItem>
	  </Menu>
	  </>
	);
}

export default HeaderAccount;