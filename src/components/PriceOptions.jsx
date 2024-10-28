import React from 'react'
import PriceOption from './PriceOption'

export default function PriceOptions() {

    const priceOptions = [
          {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "1 free fitness assessment",
              "Standard workout plan",
              "Access to mobile app tracking"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
              "Access to gym equipment",
              "Locker room and sauna access",
              "Group fitness classes",
              "1 guest pass per month",
              "Access to beginner and intermediate workout plans",
              "Weekly progress tracking",
              "Access to online wellness workshops"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": 69.99,
            "features": [
              "All Standard features",
              "Personal training session (1 per month)",
              "Unlimited guest passes",
              "Nutrition consultation",
              "Advanced workout plans",
              "Access to premium online courses",
              "Priority equipment reservation",
              "Free access to special events and challenges"
            ]
          },
          {
            "id": 4,
            "name": "VIP",
            "price": 99.99,
            "features": [
              "All Premium features",
              "Private locker",
              "Monthly massage session",
              "24/7 gym access",
              "Priority booking for classes",
              "Custom nutrition plan",
              "Personalized wellness coaching",
              "Access to VIP lounge and amenities",
              "Dedicated support from staff"
            ]
          }
        ]
      
  return (
    <div className="w-10/12 mx-auto">
        <h2 className='text-4xl font-bold text-gray-900'>Best prices for GYM in the town</h2>
       <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5'>
       {
            priceOptions.map(option => <PriceOption 
                option={option} 
                key={option.id}
                ></PriceOption>)
        }
       </div>
    </div>
  )
}
