import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_delete = () => {

    const [data, setdata] = useState([])
    const [view, setview] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [data])

    const delete_handler = async (id) => {
        console.log(typeof (id));
        console.log(`http://localhost:3001/posts/${id}`);
        await axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            {
                data?.map((val_, ind_, arr_) => {
                    return (
                        <>
                            <h1>{val_.title}</h1>
                            <h1>{val_.author}</h1>
                            <button onClick={() => { delete_handler(val_.id) }}>{val_.id}DELETE</button>
                        </>
                    )
                })
            }
        </>
    )
}

export default Axios_delete