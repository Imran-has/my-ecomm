import React from 'react'
import Header from './components/header'
import Bottomheader from './components/bottomheader'
import Hero from './components/hero'
import Featuredproducts from './components/featuredproducts'
import Grid from './components/grid'
import Latestproduct from './components/latestproduct'
import Grid1 from './components/grid1'

import Grid2 from  './components/grid2'
import Shapofer from './components/shapofer'
import Uniquefeature from './components/uniquefeature' 
import Trendingproduct from './components/trendingproduct'
import Grid3 from './components/grid3'
 
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Bottomheader/>
      <Hero/>
      <Featuredproducts/>
      <Grid/>
      <Latestproduct/>
      <Grid1/>
      < Shapofer/>
      <Grid2/>
      <Uniquefeature/>
      < Trendingproduct/>
      <Grid3/>
    </div>
  )
}

export default Homepage
