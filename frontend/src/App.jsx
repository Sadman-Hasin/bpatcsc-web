import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import './App.css';
import Appbar from './components/appbar';
import Views from './components/views';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#3f51b5",
      main600: "#3949ab",
      dark: "#2c387e",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Views/>
    </ThemeProvider>
  );
}

export default App;
