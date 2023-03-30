// IMPORTS // ______________________________________________________________

import React from 'react'
// styles imports
import Features from '../components/Features'
import Hero from '../components/Hero'

// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {
  return (
    <>
        <Hero />
        <Features />
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage