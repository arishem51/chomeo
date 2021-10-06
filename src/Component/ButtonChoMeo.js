import React from 'react'

export default function ButtonChoMeo(props) {
    const {state,setState} = props
    const handleClick = ()=>{
        setState(!state)
    }
    return (
        <div className='btnChoMeo'>
            {state ? <button onClick={handleClick}>Mèo</button> : <button onClick={handleClick}>Chó</button>}
        </div>
    )
}
