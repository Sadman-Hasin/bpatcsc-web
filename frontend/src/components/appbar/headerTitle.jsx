import {
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    cursor: "default",
    [theme.breakpoints.down("xs")]: {
    	marginTop: "2px",
	  	fontSize: "16px",
	  },   
  },
  subtitle : {
  	display: "block",
  	marginTop: "-1px",
  	[theme.breakpoints.down("xs")]: {
	  	fontSize: "14px",
	  },
  },
}));

const HeaderTitle = () => {
	const classes = useStyles();

	return (
		<Typography variant="h5" className={classes.title}>
			BPATC School & College
			<Typography component="span" variant="subtitle1" className={classes.subtitle}>
				Savar, Dhaka
			</Typography>
		</Typography>
	);
}

export default HeaderTitle;