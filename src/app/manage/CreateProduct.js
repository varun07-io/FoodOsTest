import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';


function CreateProduct() {

 

    return(
        <div>
        <div>
       
            <h3>Create Product</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Product</h4>
                <form className="forms-sample">
                <Form.Group>
                    <label htmlFor="exampleSelectGender">Add menu type</label>
                    <select className="form-control" id="exampleSelectGender" >
               
                      
                    </select>
                 

                  </Form.Group>                
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Add keys</label>
                    <select className="form-control" id="exampleSelectGender" >
               
                      
                    </select>
                 

                  </Form.Group>
                 
                  <Form.Group>
                  <label>Product Logo upload</label>
                  <div className="custom-file">
                    <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                    <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                  </div>
                  </Form.Group>
                  <div style={{marginBottom:"0.5rem"}}>
                  <button type="submit" className="btn btn-primary mr-2">Logo Upload</button>
                  <button className="btn btn-light">Cancel</button>
                  </div>
                      
                  
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Add description</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Add Price</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Price in INR" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Add Schedule</label>
                    <select className="form-control" id="exampleSelectGender" >
               
                      
                    </select>
                 

                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Add Tags</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Price in INR" />
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
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
                    <th>Logo </th>
                    <th> Menu type </th>
                    <th> key </th>
                    <th> description </th>
                    <th> price </th>
                    <th> schedule </th>
                    <th> Tags </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    
                    <td> null</td>
                    <td> null</td>
                    <td> null</td>
                    <td> null</td>
                    <td> null</td>
                    <td> null</td>
                    <td> null</td>
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

export default CreateProduct;