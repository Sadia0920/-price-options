import React from 'react'

export default function PriceOption({option}) {
    const {name,id,price,features}=option
  return (
    <div className=' bg-purple-300 rounded-xl p-10 flex flex-col'>
        <h3 className=' text-purple-950'>
            <span className='text-4xl font-bold'>{price}$</span>
            <span className='text-2xl'>/month</span>
        </h3>
        <h3 className='text-3xl font-bold my-3'>{name}</h3>
       <div className='text-gray-800 text-xl font-medium flex-grow'>
       {
            features.map(feature => (
                <li>{feature}</li>
            ))
        }
       </div>
       <button className='btn w-full mt-6 bg-purple-950 text-lg text-white font-semibold'>Bye Now</button>
    </div>
  )
}
