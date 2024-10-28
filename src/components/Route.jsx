import React from 'react'

export default function Route({route}) {
  return (
    <div>
        <li className='px-4 py-2 rounded-lg text-lg mr-10 font-semibold text-gray-600 hover:bg-purple-300'><a href={route.path}>{route.name}</a></li>
    </div>
  )
}
