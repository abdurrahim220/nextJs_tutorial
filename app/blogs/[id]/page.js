import React from 'react'

export default function BlogPage({params}) {
  const {id}=params;
  return (
    <div className='mt-6'>
      The blog id is : {id}
    </div>
  )
}
