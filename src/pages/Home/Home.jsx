import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/Featured/FeaturedProducts'

const Home = () => {
  return (
    <div> 
      <Slider />
      <FeaturedProducts type="Featured" />
      {/* <FeaturedProducts type="Trending" /> */}
    </div>
  )
}

export default Home