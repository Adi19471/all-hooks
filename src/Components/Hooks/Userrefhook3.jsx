import React, { useRef } from 'react'

export const Userrefhook3 = () => {

    const inputref= useRef(null);

    const Chaingedata =()=>{
inputref.current.focus()
    }

  return (
    <>

        <input ref={inputref} type="text" name="" id="" />
        <button onClick={Chaingedata}>Input Focus</button>
    </>
  )
}
