import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Myhome from './pages/landing/landing';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <div className="">
      <Router>

        <Routes>
          <Route path="/" element={<Myhome />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
