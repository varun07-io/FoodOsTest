import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase/app";
import Spinner1 from './helper/Spinner';
import { createBranch, editCategory, editBranchPassword, deleteCategory, getAllBranch, getACategory, getAllMenus } from '../apiHandler/api';

import Toast from "./helper/Toast"
import { showMenu } from 'react-contextmenu';


function Schedule() {




    const [allMenus, setallMenus] = useState([]);

    useEffect(() => {
      getAllMenus().then(res => {
        console.log(res.data.all_menu)
        setallMenus(res.data.all_menu)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])



    return(
        <div>
        <div>
       
            <h3>Create Schedule</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
              
                <div>
                
                  {allMenus.length > 0 && allMenus.forEach(element => {
                    console.log(element.name)
                      return <h4>Product : {element.name}</h4>
                  })}
                </div>

                {/* <form className="forms-sample">
 
                <Form.Group>
                    <label htmlFor="exampleInputName1">Schedule Name</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleSelectGender">Schedule time Limit</label>
                    <select className="form-control" id="exampleSelectGender" >
               
                      
                    </select>
                 

                  </Form.Group>
     
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
        <div className="card-body">
        <h4>
                    See All Menu here
                  </h4>
            {/* <p className="card-description"> Add className <code>.table-striped</code>
            </p> */}
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th> Menu Image</th>
                    <th> Menu Id </th>
                   
                    <th> Menu Name </th>
                    <th> Schedule Morning </th>
                    <th> Schedule Noon </th>
                    <th> Schedule Brunch </th>
                    <th> Schedule Dinner </th>
                </tr>
                </thead>
                <tbody>
 
                {allMenus && Object.entries(allMenus).map(M => {
                  console.log(M[1]);
                  return (
                    <tr  key={M[1]._id}>
                    <td className="py-1">
                    <img src={ M[1].image} alt="user icon" />
                    </td>
                    <td> none </td>
                    <td> {M[1].name}</td>

                    <td> <button type="button" className="btn btn-success" onClick={() => {}}>yes</button>

                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => {}}>No</button>
                      </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => {}}>No</button>
                      </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => {}}>No</button>
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
           
         

           
            </div>

    )
}

export default Schedule;