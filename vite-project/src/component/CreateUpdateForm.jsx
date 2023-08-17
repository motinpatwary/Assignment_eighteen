import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const CreateUpdateForm = () => {

    let {id} = useParams()
    let navigate = useNavigate()

    let [ formValue , setFormValue ] = useState({Img: "", ProductName: "", ProductCode: "", UnitPrice: "", Qty: "", TotalPrice: "" })

    useEffect( ()=> {
        ( async ()=> {
            let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProductByID/"+id)
            setFormValue(res.data['data'][0])
        })()
    }, [])


    const inputOnChange = (property, value) => {
    setFormValue({...formValue, [property]: value})
    }

    const onSubmit =async () => {
        let URL = "https://crud.teamrabbil.com/api/v1/CreateProduct";
        
        if(id) {
            URL = URL="https://crud.teamrabbil.com/api/v1/UpdateProduct/"+id;
        }
        const res = await axios.post(URL, formValue)
        if(res.status === 200) {
            alert("Save Changes")
            navigate('/')
        }
    }





    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 p-2">
                    <label htmlFor="">Product Name</label>
                    <input disabled className="form-control" value={formValue.ProductName} onChange={(e)=>{inputOnChange('ProductName', e.target.value)}} type="text" />
                </div>
                <div className="col-md-6 p-2">
                    <label htmlFor="">Product Code</label>
                    <input className="form-control" value={formValue.ProductCode} onChange={(e)=>{inputOnChange('ProductCode', e.target.value)}} type="text" />
                </div>
                <div className="col-md-6 p-2">
                    <label htmlFor="">Product Img</label>
                    <input className="form-control" value={formValue.Img} onChange={(e)=>{inputOnChange('Img', e.target.value)}} type="text" />
                </div>
                <div className="col-md-6 p-2">
                    <label htmlFor="">Product Qty</label>
                    <input className="form-control" value={formValue.Qty} onChange={(e)=>{inputOnChange('Qty', e.target.value)}} type="text" />
                </div>
                <div className="col-md-6 p-2">
                    <label htmlFor="">Unit Price</label>
                    <input className="form-control" value={formValue.UnitPrice} onChange={(e)=>{inputOnChange('UnitPrice', e.target.value)}} type="text" />
                </div>
                <div className="col-md-6 p-2">
                    <label htmlFor="">Total Price</label>
                    <input className="form-control" value={formValue.TotalPrice} onChange={(e)=>{inputOnChange('TotalPrice', e.target.value)}} type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button onClick={onSubmit} className='w-100 btn btn-danger'>Submit</button>
                </div>
            </div>
            
        </div>
    );
};

export default CreateUpdateForm;