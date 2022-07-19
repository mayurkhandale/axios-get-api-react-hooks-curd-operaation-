import React, { useEffect, useState } from 'react'
import axios from 'axios';


const App = () => {
    const [api, setapi] = useState([]);
    const [flag, setflag] = useState(true);

    const show = async () => {

        const res = await axios.get(`https://crudcrud.com/api/c99a48840e5c47e4ada6dffe2bcf03e2/unicorns`)
        setapi(res.data)
        console.log("14==",res);
    }

    const dele = async (id) => {

        await axios.delete(`https://crudcrud.com/api/c99a48840e5c47e4ada6dffe2bcf03e2/unicorns${id}`)
        setflag(!flag)
    }
    const additem = async()=>{
        const value = prompt("Enter the new value")
        const titleValue = prompt("Enter the add Title value")

        const article ={"name":value,"title":titleValue}

        await axios.post(`https://crudcrud.com/api/c99a48840e5c47e4ada6dffe2bcf03e2/unicorns`,article)
        setflag(!flag)
    }
    const udate= async(id)=>{
        const data = prompt("Enter the data you wanna update")
        const title = prompt("Enter the title you wanna update")

        await axios.put(`https://crudcrud.com/api/c99a48840e5c47e4ada6dffe2bcf03e2/unicorns/${id}`,{"name":data,"title":title})
        setflag(!flag)
    }

    useEffect(() => {
        show()
    }, [flag]);
    useEffect(() => {
        show()
        // additem()
    }, []);
    return (
        <>
                <button className='btn btn-primary mr-2' onClick={additem} >Add
                                    </button>
            {/* <h1>hello</h1>
            <button onClick={getdata}>click me</button> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                {api.map((val) => {
                    return (<>
                        <tbody>
                            <tr>
                                <td>{val._id}</td>
                                <td>{val.name}</td>
                                <td>{val.title}</td>

                                <td>
                        
                                    <button className='btn btn-primary' onClick={()=>udate(val._id)} >edit
                                    </button>
                                    <button className='btn btn-danger ml-2' onClick={()=>dele(val._id)}>delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>
        </>
    )
}

export default App