import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ListDog() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getList();
    }, [])
    const getList = () => {
        axios.get('https://dog.ceo/api/breeds/image/random/20').then(res => {
            setList([...list, ...res.data.message])
        }).catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div className='listImg' >
            <InfiniteScroll
                style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}
                dataLength={list.length} //This is important field to render the next data
                next={getList}
                hasMore={true}
            >
                {list?.map((item, index) => {
                return <img style={{ width: 250, height: 250, margin: '5px 5px' }} alt='dog' key={index} src={item}>
                </img>
            })}
            </InfiniteScroll>
        </div>
    )
}
