import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap'; 
import { createPackage } from '../apiHandler/api.js';


function Package() {

    const [packName, setPackName] = useState('');

    const [packType, setPacktype] = useState('');

    const [packQuantity, setPackQuantity] = useState('');

    const [packPrice, setPackPrice] = useState('');

    const onPackSubmit = e => {
        e.preventdefault()
        createPackage({packName, packType, packQuantity, packPrice})
        .then((res) => {
            setPackName('')
            setPacktype('')
            setPackQuantity('')
            setPackPrice('')
        })
        .catch((err) => {
            console.log("error");
        })
    }

    return(
        <div>
        <div>
            <h3>Manage Package</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Package</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Package Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={(e) => {setPackName(e.target.value)}} />
                  </Form.Group>
                 
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Package type</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Price in INR" onChange={(e) => {setPacktype(e.target.value)}}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Package Quantity</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Price in INR" onchange={(e) => {setPackQuantity(e.target.value)}} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Package Price</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Price in INR" onchange={(e) => {setPackPrice(e.target.value)}} />
                  </Form.Group>
                  
                  
                  <button type="submit" className="btn btn-primary mr-2" onchange={ onPackSubmit }>Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
        <div className="card-body">
            
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th> Package Name </th>
                    <th> Package type </th>
                    <th> Quantity </th>
                    <th> Package price </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    
                    <td> Dessert </td>
                    <td> Dessert </td>
                    <td> Dessert </td>
                    <td> Dessert </td>
                    <td> <button type="button" className="btn btn-primary">Edit</button>

                    </td>
                    <td>
                        <button type="button" className="btn btn-danger">Delete</button>
                      </td>
                </tr>
               
                </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Package;