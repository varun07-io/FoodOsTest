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


    const [morning_order, setmorning_order] = useState([]);
    const [noon_order, setnoon_order] = useState([]);
    const [brunch_order, setbrunch_order] = useState([]);
    const [dinner_order, setdinner_order] = useState([]);

    const addScheduleToSell = (e) => {
      e.preventDefault();

    }







    return(
        <div>
        <div>
       
            <h3>Create Schedule</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               <h3>
                 See All Added Schedule Here
               </h3>
              
              <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th> Schedule Morning</th>
                    <th> Schedule Noon </th>
                   
                    <th> Schedule Brunch </th>
                    <th> Schedule Dinner </th>
                
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
                    <td> <b style={{fontSize: 18}}>ID: {M[1].menu_id}</b> <br></br> <b style={{fontSize: 15}}>Key: {M[1].menu_key_name}</b> </td>
                    
                    <td> {M[1].name}</td>

                    <td> <button type="button" className={M[1].is_morning ? "btn btn-success" : "btn btn-danger"} >Morning</button>

                    </td>
                    <td>
                        <button type="button" className={M[1].is_noon ? "btn btn-success" : "btn btn-danger"} >Noon</button>
                      </td>
                    <td>
                        <button type="button" className={M[1].is_brunch ? "btn btn-success" : "btn btn-danger"} >Brunch</button>
                      </td>
                    <td>
                        <button type="button" className={M[1].is_dinner ? "btn btn-success" : "btn btn-danger"} >Dinner</button>
                      </td>
                </tr>
                  )
                })

                }
               </tbody>
            </table>
            </div>
            <div>
                
            </div>

            </div>
            </div>
            </div>
                <p>
                  Click Apply Schedule to start Selling your delicious dishes
                </p>
            <button type="button" className="btn btn-info btn-lg btn-block" onClick={(e) => {addScheduleToSell(e)}}>Apply Schedule</button>
         

           
            </div>

    )
}

export default Schedule;