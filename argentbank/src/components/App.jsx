import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../utils/GlobalStyle'
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Error from '../pages/Error/Error';
import Footer from './Footer/Footer';

/**
 * React component for App with React Router
 * @returns { React.ReactElement } App component
 */
function App() {
   return (
      <div>
         <Router>
            <GlobalStyle />
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />}></Route>
               <Route path="/login" element={<Login />}></Route>
               <Route path="/profile" element={<Profile />}></Route>
               <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;