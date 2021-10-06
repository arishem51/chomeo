import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ListImg(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        getList();
    }, [])
    const getList = () => {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=20&size=300?api_key=f6809700-cf92-44c9-8dd3-b41c902c1c7c').then(res => {
            setList([...list, ...res.data])
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
                return <img style={{ width: 250, height: 250, margin: '5px 5px' }} alt='cat' key={index} src={item.url}>
                </img>
            })}
            </InfiniteScroll>
        </div>
    )
}
