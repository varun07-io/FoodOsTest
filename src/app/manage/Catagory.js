import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase/app";
import Spinner1 from './helper/Spinner';
import { createCategory, editCategory, deleteCategory, getAllCategories, getACategory } from '../apiHandler/api';

import Toast from "./helper/Toast"

const firebaseConfig = {
    apiKey: "AIzaSyBE-DN8-A2cOvRklz1YMkWTeKOjTlYM70s",
    authDomain: "akshayaa-static.firebaseapp.com",
    projectId: "akshayaa-static",
    storageBucket: "akshayaa-static.appspot.com",
    messagingSenderId: "556845173040",
    appId: "1:556845173040:web:78687b8d6b74468e77a0f5",
    measurementId: "G-CEGQVQSX04"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

function Catagory() {


    // Fetching All Category

    const [categories, setcategories] = useState([]);


    

    
    //name state handler

    const [name, setcategoryName] = useState('');

    //image

    const [isLoading, setisLoading] = useState(false);

    const [isError, setisError] = useState(false);

    const [isUploaded, setisUploaded] = useState(false);

    const [Files, setFiles] = useState(null);

    const [logo, setlogoURL] = useState('');

    const [logoUploadStatus, setlogoUploadStatus] = useState(false);

    const [isSuccess, setisSuccess] = useState(false);

    const [statusMsg, setstatusMsg] = useState('');

    const [editbtnStatus, seteditbtnStatus] = useState(false);

    const [categoryId, setcategoryId] = useState('');

    const [subCategory, setsubCategory] = useState('');

    useEffect(() => {
      getAllCategories().then((categories) => {
        setcategories(categories);
      })
      .catch((err) => {
        console.log(err)
      })
    }, [isSuccess])

    const onCategoriesHandler = name => event => {
        if(name == 'categoryName') {
            setcategoryName(event.target.value)
        }
        else if(name == 'categorySubName') {
          setsubCategory(event.target.value)
        }

    }

    const onFileChange = e => {
        
        setFiles(e.target.files[0]);
           
    };

    const onLogoSubmit = (e) => {
        e.preventDefault();

    let file = Files;
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var uploadTask = storageRef.child(`akshayaa/admin/category/logo${uuidv4()}/${file.name}`).put(file);
    
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>{
          var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
          setisLoading(true)
        },(error) =>{
            console.log("error", error)
            
          throw error
        },() =>{
          // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
    
          uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
            console.log("image url", url)
            setlogoURL(url)
            setisLoading(false)
            setlogoUploadStatus(true);
          })
    
       }
     )
    }
    const onCreateCategory = (e) => {
      e.preventDefault();
      // if(name === '' || logo === '') return <Toast msg="Please add all fields"/>
      createCategory({ name, logo})
      .then((data) => {
        console.log(data);
        setcategoryName('');
        setlogoUploadStatus(false);
        setlogoURL('');
        setstatusMsg("Category Created Successfully");
        setisSuccess(true);
      })
      .catch((err) => {
        console.log(err)
      })
    }

    const onDeleteCategory = (categoryId) => {
      deleteCategory(categoryId)
      .then((res) => {
        setstatusMsg("Category Deleted Successfully");
        setisSuccess(true);
      })
    }

    const onEditCategory = e => {
      e.preventDefault();
      editCategory({categoryId,name,logo})
      .then((res) => {  
        setcategoryName('');
        setlogoUploadStatus(false);
        setlogoURL('');
        setstatusMsg("Category Edited Successfully");
        setisSuccess(true);
        seteditbtnStatus(false);

      })  
      .catch((err) => {
        console.log(err);
      })
    }

    const onEditGetCategory = (categoryId) => {
      getACategory(categoryId)
      .then((res) => {
        console.log("getCategory Result : ",res);
        setcategoryName(res.name);
        setlogoURL(res.logo);
        setcategoryId(res._id);
        seteditbtnStatus(true);
      })
      .catch((err) => {

      })
    }

    if(isSuccess){
      setTimeout(() => {
        setisSuccess(false)
      }, 3000);
    }

    return(
        <div>
        <div>
        {isSuccess ? (
                
                    <div class="card" style={{marginBottom:23,backgroundColor:'#38CC77',color:'#fff'}}>
                      <div class="card-body">
                        {statusMsg}
                      </div>
                    </div>
                ) :  
                    null
                }
            <h3>Manage Category</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                <h4 className="card-title">Add Category</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Category Name</label>
                    <Form.Control value={name} type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={onCategoriesHandler("categoryName")} />
                  </Form.Group>
                  
                  {logoUploadStatus ? (
                    <h4 style={{alignSelf:'center'}}>Upload Successful</h4>
                  ):(

                    <div>
                      {isLoading ? (<Spinner1/>) : (
                        <>
                        <Form.Group>
                        <label>Category Logo upload</label>
                        <div className="custom-file">
                          <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" onChange={onFileChange}/>
                          <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                        </div>
                        </Form.Group>
                        
                        <button type="submit" className="btn btn-primary mr-2" onClick={ onLogoSubmit }>Logo Upload</button>
                        <button className="btn btn-light">Cancel</button>
                        </>
                      )}
                      
                    </div>
                  )} 
                      {editbtnStatus ? (
                          
                          <button type="submit" className="btn btn-success btn-block mr-2 {isLoading ? null : disabled}"  style={{marginTop:"20px"}}  onClick={onEditCategory}  >Edit Category </button>

                      ) : (
                        <button type="submit" className="btn btn-success btn-block mr-2 {isLoading ? null : disabled}"  style={{marginTop:"20px"}}  onClick={onCreateCategory}  >Create Category </button>
                      )

                      }
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
            <h3>Manage Sub-Category</h3>
            <p> Sub-Category</p>

            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Sub-Category</h4>
                <form className="forms-sample">

                <Form.Group>
                    <label htmlFor="exampleSelectGender">Select Category</label>
                    <select className="form-control" id="exampleSelectGender">
                    {categories && 



                  Object.keys(categories).map((index) => {
                    console.log("item",typeof categories[index].logo);
                    return(
                      <option>{categories[index].name}</option>

                    )
                  })

                  }
                      
                    </select>
                  </Form.Group>


                  <Form.Group>
                    <label htmlFor="exampleInputName1">Sub-Category Name</label>
                    <Form.Control value={subCategory} type="text" onChange={onCategoriesHandler('categorySubName')} className="form-control" id="exampleInputName1" placeholder="Name" />
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
                    <th> Category Logo </th>
                    <th> Category Name </th>
                    <th> Sub-Category Name </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
                </thead>
                <tbody>
                  {/* {categories && 
                    // console.log(" -> ", categories)
                    Object.keys(categories).map(function(key) {
                     return( <h5>
                        {categories[key].logo}
                      </h5>)
                  })
                  } */}
            {categories && 



             Object.keys(categories).map((index) => {
               console.log("item",typeof categories[index].logo);
               return(
                 <tr  key={index}>
                     <td className="py-1">
                     <img src={categories[index].logo} alt="user icon" />
                     </td>
                     <td> {categories[index].name}</td>
                     <td> none </td>
                     <td> <button type="button" className="btn btn-primary" onClick={() => onEditGetCategory(categories[index]._id)}>Edit</button>

                     </td>
                     <td>
                         <button type="button" className="btn btn-danger" onClick={() => onDeleteCategory(categories[index]._id)}>Delete</button>
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

export default Catagory;