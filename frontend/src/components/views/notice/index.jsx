import NoticeCard from './noticeCard';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  view: {
    width: "100%",
  },
}));

const NoticeView = () => {
	const classes = useStyles();

	return (
		<div className={classes.view}>
			<NoticeCard body="Dummy post"/>
			<NoticeCard body="moreee dummy notice posts.."/>
			<NoticeCard body="This design looks fine!"/>
			<NoticeCard body="Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex... more"/>
    </div>
	);
}

export default NoticeView;