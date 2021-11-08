import React from 'react';
import { Form } from 'react-bootstrap';


function Product() {
    return(
        <div>
        <div>
            <h3>Manage Product</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Product</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Product Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Product Price</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Price in INR" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Product Description</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Description" />
                  </Form.Group>
              
                  
                  <Form.Group>
                    <label>Product image upload</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Food type</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Non-Veg</option>
                      <option>Veg</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Select Category</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Dessert</option>
                      <option>Combos</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Select Sub-Category</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Cake</option>
                      <option>Brownies</option>
                    </select>
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
                    <th> Product Logo </th>
                    <th> Product Name </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="py-1">
                    <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
                    </td>
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

export default Product;