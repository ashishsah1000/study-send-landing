import React from 'react'

const Point = (props) => {
  return (
    <div className='flex gap-4'>
      <div className="">
        <img src="/img/point.png" className='min-w-8 min-h-8' alt="." />
      </div>
      <p className="mt-1 font-light">{props.point}</p>
    </div>
  )
}

export default Point