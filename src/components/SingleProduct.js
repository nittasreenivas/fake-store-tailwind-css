
import React from 'react'
import {useState,useEffect} from "react"
import { useParams,Link } from 'react-router-dom'
const SingleProduct = () => {
    const [prod,setProd] = useState([])
    const {id} = useParams()
    useEffect(() => {
    const fetchSingleProd = async () => {
        const res =  await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setProd(data)
    }
    fetchSingleProd()
    },[id])
  return (
    <section className='max-w-5xl mx-auto flex items-center justify-center h-screen '>
       <div className='grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center'>
        <article>
            <img alt="" src={prod.image}/>
        </article>
        <article >
            <h2 className='font-bold text-3xl  uppercase'>Title:{prod.title}</h2>
            <p className='my-4 text-slate-500 leading-loose lg:leading-relaxed tracking-wide'>Description:{prod.description}</p>
            <h5 className='font-bold text-lg'>price:{prod.price}$</h5>
            <Link
                to="/"
                className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white
                 hover:bg-slate-500 transition-all duration-200"
              >
                &larr; Back
              </Link>
        </article>
       </div>
    </section>
  )
}

export default SingleProduct