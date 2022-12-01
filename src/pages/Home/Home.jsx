import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/Featured/FeaturedProducts'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div> 
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  )
}

export default Home