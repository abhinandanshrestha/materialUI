import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from './Pages/Notes';
import Create from './Pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Layout from './components/Layout';


const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#f50057',
    },
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold:700
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>

            <Route exact path="/"> <Notes /> </Route>

            <Route exact path="/create"> <Create />  </Route>

          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
