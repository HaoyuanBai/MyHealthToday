import logo from './logo.svg';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MySymptoms from './components/MySymptoms';
import SymptomReport from './components/symptoms/SymptomReport';
import MyGlucoseLevels from './components/MyGlucoseLevels';
import {Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home} />

      <Route exact path="/MySymptoms" component={MySymptoms} />
      <Route exact path="/symptom" component={SymptomReport} />
      
      <Route exact path="/MyGlucoseLevels" component={MyGlucoseLevels} />
    </div>
  );
}

export default App;
