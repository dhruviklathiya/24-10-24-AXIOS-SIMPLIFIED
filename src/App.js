import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
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

  return (
    <>
      <h1>AXIOS GET API</h1>
      {
        data?.map((val_, ind_, arr_) => {
          return (
            <>
              <h1>{val_.title}</h1>
              <h1>{val_.author}</h1>
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
    </>
  );
}

export default App;
