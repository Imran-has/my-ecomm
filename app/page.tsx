import React from 'react'
import Header from './components/header'
import Bottomheader from './components/bottomheader'
import Hero from './components/hero'
import Featuredproducts from './components/featuredproducts'
import Grid from './components/grid'
import Latestproduct from './components/latestproduct'
 
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Bottomheader/>
      <Hero/>
      <Featuredproducts/>
      <Grid/>
      <Latestproduct/>
      
    </div>
  )
}

export default Homepage
