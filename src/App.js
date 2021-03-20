import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar/Navbar'
import Home from './pages/Home';
import Messages from './pages/Messages';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Support from './pages/Support';
import Teams from './pages/Teams';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/products" component={Products}/>
        <Route path="/team" component={Teams}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/support" component={Support}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
 