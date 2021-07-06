import {
	AppBar,
	Toolbar,
} from '@material-ui/core';

import HeaderTitle from './headerTitle';
import HeaderLogo from './headerLogo';
import HeaderAccount from './headerAccount';


const Appbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<HeaderLogo/>
				<HeaderTitle/>
				<HeaderAccount/>
			</Toolbar>
		</AppBar>
	);
}

export default Appbar;