import Home from './Homeice'
import './App.css';

import Flavours from './Flavours';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer'
import Bookanevent from './Book-an-event';
import About from './About';
import Reservation from './Reservation';
import Order_online from './Order_online';
import Reservenow from './Reserve-now';
import Thankyou from './Thankyou';

// import Reactbootstrap from './Reactbootstrap';


function App() {
  return (
    <div>
      <header>
        <Router>
          <Routes>
          
          {/* <Home/> */}
          <Route path='/' element={[<Home/>]}></Route>
          <Route path='/flavours' element={[<Navbar/>,<Flavours/>,<Footer/>]}></Route>
          <Route path='/Book-an-event' element={[<Navbar/>,<Bookanevent/>,<Footer/>]}></Route>
          <Route path='/About' element={[<Navbar/>,<About/>,<Footer/>]}></Route>
          <Route path='/Reservation' element={[<Navbar />,<Reservation />,<Footer />]}></Route>
          <Route path='/orderonline' element={[<Navbar />,<Order_online/>,<Footer />]}></Route>
          <Route path='/Reservenow' element={[<Navbar />,<Reservenow />,<Footer />]}></Route>
          <Route path='/Thankyou' element={[<Navbar />,<Thankyou/>,<Footer />]}></Route>
          {/* <Flavours /> */}
          </Routes>
        </Router>
      </header>
      <copy/>
    </div>
    
  );
}

export default App;
