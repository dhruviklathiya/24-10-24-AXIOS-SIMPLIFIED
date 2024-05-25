import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const Axios_update = () => {
    const [data, setdata] = useState([])
    const [view, setview] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [data])

    const input_handler = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    const submit_handler = async () => {
        await axios.post("http://localhost:3001/posts", view)
    }

    const view_handler = (val, indX) => {
        setview(val)
    }

    const update_handler = () => {
        axios.put(`http://localhost:3001/posts/${view.id}`, view).then((res) => {
            console.log("DATA UPDATED", res)
        }).catch((err) => {
            console.log("ERRRRRRRRRRR", err);
        })
    }

    return (
        <>
            <h1>AXIOS GET API</h1>
            {
                data?.map((val_, ind_, arr_) => {
                    return (
                        <>
                            <h1>{val_.title}</h1>
                            <h1>{val_.author}</h1>
                            <button onClick={() => view_handler(val_, ind_)}>VIEW DATA</button>
                        </>
                    )
                })
            }
            <h1>AXIOS POST API</h1>
            <input name="title" value={view.title} onChange={input_handler} placeholder="TITLE" />
            <br></br>
            <input name="author" value={view.author} onChange={input_handler} placeholder="AUTHOR" />
            <br></br>
            <button onClick={submit_handler}>ADD DATA</button>
            <button onClick={update_handler}>UPDATE DATA</button>
        </>
    );
}

export default Axios_update

// Next step for learning is to do full CRUD
// But without using dependencies array of useEffect
// Hint: use filter, splice and ... spread operator