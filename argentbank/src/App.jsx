// IMPORTS // ______________________________________________________________

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// components imports
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/Homepage' // styles imports
import SignIn from './pages/SignIn'
import User from './pages/User'
import NotFound from './pages/NotFound'
// store import
import { store } from './store/store'
// styles imports
import { GlobalStyle } from './styles/bases/GlobalStyle'

// JSX // _________________________________________________________________

/**
 * App's component to manage various routes
 * and display corresponding pages components
 * @name App
 * @returns {JSX}
 */

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <main>
          <section>
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/sign-in" element={<SignIn/>} />
              <Route exact path="/user" element={<User/>} />
              <Route element={<NotFound/>} />
            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App