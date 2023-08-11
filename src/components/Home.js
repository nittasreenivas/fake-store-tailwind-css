
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [prod,setProd] = useState([])
    const fetchProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.log("data::",data)
        setProd(data)
    }
    useEffect(() => {
     fetchProducts()
    },[])
  return (
    <div>
       {!prod ? <h1 className='font-bold text-3xl uppercase text-center flex justify-center items-center h-screen'>loading</h1> : (
        <>
        <section className='max-w-7xl mx-auto p-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {prod.map((p,i) => {
                return(
                    <Link className='hover:border-slate-900 transition-all duration-200 border border-orange-600 p-4' key={i}
                    to={`/${p.id}`}>
                    <div   >
                    
                     <img src={p.image} alt={p.title} className='rounded md:h-72 mx-auto w-full object-contain ' />
                     
                    </div>
                    </Link>
                )
            })}
        </section>
        </>
       )}
    </div>
  )
}

export default Home