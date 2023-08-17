import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const List = () => {

    let [ data , setData ] = useState([])
    let [ id , setId ] = useState(0)

    useEffect(()=> {
        ( async ()=>{
            const res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
            setData(res.data['data'])
        })()
    }, [id])


    const onDelete = async (id) => {
        let URL = "https://crud.teamrabbil.com/api/v1/DeleteProduct/" + id;
        await axios.get(URL)
        setId(id)
    }



    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    <div className="table-responsive">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Product Code</th>
                                <th>Unit Price</th>
                                <th>Qty</th>
                                <th>Total price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img className='w-25' src={item['Img']} alt="" /></td>
                                            <td>{item['ProductName']}</td>
                                            <td>{item['ProductCode']}</td>
                                            <td>{item['UnitPrice']}</td>
                                            <td>{item['Qty']}</td>
                                            <td>{item['TotalPrice']}</td>
                                            <td className='d-flex'>
                                                <Link to={'/update/'+item['_id']} className='btn btn-success btn-sm mx-2'>Edit</Link>
                                                <button onClick={async()=>{ await onDelete(item['_id'])}} className='btn btn-danger btn-sm'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;