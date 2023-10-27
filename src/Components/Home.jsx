import React, { useEffect, useState } from 'react'

function Home() {
    const [color, setColor] = useState("#76101c")
    const changeColor = (color) => {
        setColor(color)
    }
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    return (
        <div className='d-flex justify-content-center flex-column align-items-center' style={{height:'100vh'}}>
            <h1 className='fw-bold text-light'>Background Color Change</h1>
            <div className="buttons text-center">
                <button className='btn btn-light rounded-pill m-3' style={{width:'7rem'}} onClick={() => changeColor("#76101c")}>Red</button>
                <button className='btn btn-light rounded-pill m-3' style={{width:'7rem'}} onClick={() => changeColor("#223887")}>Blue</button>
                <button className='btn btn-light rounded-pill m-3' style={{width:'7rem'}} onClick={() => changeColor("#195c2c")}>Green</button>
                <button className='btn btn-light rounded-pill m-3' style={{width:'7rem'}} onClick={() => changeColor("#530c81")}>Purple</button>
            </div>
        </div>
    )
}

export default Home


