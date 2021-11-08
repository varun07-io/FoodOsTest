import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase/app";
import Spinner1 from './helper/Spinner';
import { createBranch, editCategory, editBranchPassword, deleteCategory, getAllBranch, getACategory } from '../apiHandler/api';

import Toast from "./helper/Toast"
import { showMenu } from 'react-contextmenu';


function CreateMenu() {







    return(
        <div>
        <div>
       
            <h3>Create Menu</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                <h4 className="card-title">Add Menu Details</h4>
                <form className="forms-sample">
 
                <Form.Group>
                    <label htmlFor="exampleSelectGender">food type</label>
                    <select className="form-control" id="exampleSelectGender" >
               
                      
                    </select>
                 

                  </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleSelectGender">food origin</label>
                    <select className="form-control" id="exampleSelectGender" >
               
                      
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
            <h4 className="card-title">All Categories</h4>
            {/* <p className="card-description"> Add className <code>.table-striped</code>
            </p> */}
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th> Food type</th>
                    <th> Food origin </th>
                   
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
                </thead>
                <tbody>
 

               </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
           
         

           
            </div>

    )
}

export default CreateMenu;