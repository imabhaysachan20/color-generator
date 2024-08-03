import React from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor';
const ColorList = ({col}) => {

  return (
    <section className='colors'>
      {col.map((color,index)=>{
        return <SingleColor col={color} index={index}/>
      })}
      
    </section>
  )
}

export default ColorList
