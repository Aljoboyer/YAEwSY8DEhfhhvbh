import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Myhome from './pages/landing/landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import BMI_Calc from './pages/BMI_calc/BMI_calc';
// import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
      <Router>

        <Routes>
          <Route path="/" element={<Myhome />} />
          <Route path="/BMI_Calc" element={<BMI_Calc />} />
        </Routes>
      </Router>
    
  )
}

export default App
