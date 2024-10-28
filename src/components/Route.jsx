import React from 'react'

export default function Route({route}) {
  return (
    <div>
        <li className='px-4 py-2 rounded-lg text-lg mr-10 font-bold text-gray-600 hover:bg-purple-100'>
          <a href={route.path}>{route.name}</a></li>
    </div>
  )
}
