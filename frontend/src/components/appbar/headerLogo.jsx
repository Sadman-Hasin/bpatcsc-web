import {
  IconButton,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	logoButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
    	marginLeft: theme.spacing(-2),
    },
  },
  logo: {
  	width: theme.spacing(8),
    height: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
    	height: theme.spacing(5),
    	width: theme.spacing(5)
    },
  },
}));

const HeaderLogo = () => {
  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      className={classes.logoButton}
      color="inherit"
      aria-label="menu"
    >
    <Avatar alt="bpatcsc icon" src="favicon.ico" className={classes.logo}/>
    </IconButton>
  );
}

export default HeaderLogo;