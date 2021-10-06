import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Faq from './components/Faq/Faq';
import Ourteam from './components/Ourteam/Ourteam';
import Contact from './components/Contact/Contact';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <Router>
        <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/Services" component={Services}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/ourteam" component={Ourteam}/>
        <Route path="/contact" component={Contact}/>
       </Switch>
    </Router>
  );
}

export default App;
