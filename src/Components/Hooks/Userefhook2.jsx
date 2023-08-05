import React, { useRef } from 'react'

const Userefhook2 = () => {

    const ref = useRef(0)


    const Hookbutton =()=>{
         ref.current = ref.current + 1
         alert(`You click ${ref.current} times`)

    }
  return (
<>

<h2>Use Ref Hook Information...passes..</h2>


<button onClick={Hookbutton}>Click</button>
</>
  )
}

export default Userefhook2