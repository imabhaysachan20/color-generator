import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({col,index}) => {
  const saveToClipBoard = async () =>{
    if (navigator.clipboard) {
      try {
await navigator.clipboard.writeText(`#${col.hex}`);
toast.success("copied to clipboard")
      }
      catch (error) {
toast.error(error.message)
      }
    }
    else {
      toast.error("Clipboard Acess NOT avaible")
    }
  }
  return (
    
    <article onClick={saveToClipBoard} style={{backgroundColor:`#${col.hex}`,color: index>5?"#fff":"#000"}}>
      <p className="percent-value">{col.weight}%</p>
      <p className="color-value">#{col.hex}</p>
    </article>
  )
}

export default SingleColor
