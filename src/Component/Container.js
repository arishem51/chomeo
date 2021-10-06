import React, { useState } from 'react'
import ButtonChoMeo from './ButtonChoMeo';
import ListDog from './ListDog';
import ListImg from './ListImg';

export default function Container() {
    const [state,setState] = useState(true); //true la meo , false la cho

    return (
        <div className='container'>
            {state ? <ListImg></ListImg> : <ListDog></ListDog>}
            <ButtonChoMeo state={state} setState={setState}></ButtonChoMeo>
        </div>
    )
}
