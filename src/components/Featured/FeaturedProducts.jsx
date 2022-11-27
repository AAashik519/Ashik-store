import React from 'react'
import Card from '../Card/Card'
 import './FeaturedProducts.scss'
const FeaturedProducts = ({type}) => {
    const data=[
         {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleevs Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            newPrice:12,
         },
         {
            id:2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            isNew:true,
            oldPrice:19,
            newPrice:12,
         },
         {
            id:3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Skirt",
            isNew:true,
            oldPrice:19,
            newPrice:12,
         },
         {
            id:4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            newPrice:12,
         },
        

    ]
  return (
    <div className='FeaturedProducts'> 
      <div className="top">
        <h1> {type} Products</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus provident qui odit quaerat nam nulla hic explicabo in architecto molestias natus minima enim tenetur ullam, fugit cumque ab? Ipsum, iure!</p>
      </div>
      <div className="bottom">
        {data?.map((item ,i)=>(
            <Card item={item} key={1} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts