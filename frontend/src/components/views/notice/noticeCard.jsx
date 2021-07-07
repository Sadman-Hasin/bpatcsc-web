import {
	Typography,
	Card,
	CardActions,
	CardContent,
	Button
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  view: {
    width: "100%",
  },
  card: {
  	backgroundColor: "rgb(253, 253, 253)",
  	width: "60%",
  	marginLeft: "50%",
  	marginBottom: theme.spacing(2),
  	transform: "translate(-50%)",
  	[theme.breakpoints.down("xs")]: {
  		width: "80%",
  	},

  },
  cardBodyText: {
  	fontSize: "18px",
  	[theme.breakpoints.down("xs")]: {
  		fontSize: "15px",
  	},
  },
  cardActionButton: {
  	color: theme.palette.secondary.main,
  	marginLeft: "auto",

  },
}));

const NoticeCard = (props) => {
	const classes = useStyles();
	const body = props.body;

	return (
		<Card className={classes.card} elevation={2}>
	      <CardContent>
	        <Typography align="center" className={classes.cardBodyText} gutterBottom>
	          { body }
	        </Typography>
	      </CardContent>
	      <CardActions disableSpacing>
	        <Button size="small" className={classes.cardActionButton}>More</Button>
	      </CardActions>
	    </Card>
	);
}

export default NoticeCard;