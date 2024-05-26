import React from 'react'
import { Button } from '../ui/button'

const ResumeCard = () => {
  return (
    <div className='flex flex-col w-fit items-center gap-4 max-w-80 text-center'>
        <div className="p-4 w-fit bgGrad rounded-xl aspect-square">C0</div>
          <h2 className='text-2xl font-bold'>Customised Templates</h2>
          <p>Empowering Students Through Comprehensive Support and Resources. Welcome to BIT unfiltered</p>
          <Button variant="outline">hello</Button>
    </div>
  )
}

export default ResumeCard