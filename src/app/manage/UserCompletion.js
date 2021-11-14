import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Spinner1 from './helper/Spinner';
import 'firebase/storage'
import firebase from "firebase/app";
import {Alert} from '@mui/material';
import {Redirect} from 'react-router-dom';

import { createRestaurantProfile,isProfileCompleted } from '../apiHandler/api';


function UserCompletion() {

    const [accountType, setaccountType] = useState(0);

    const [resName, setResName] = useState("");

    const [desName, setDesName] = useState("");

    const [weblink, setWebLink] = useState("");

    const [videoRev, setVideoRev] = useState("");

    const [fbLink, setFbLink] = useState("");

    const [instaLink, setInstaLink] = useState("");

    const [ytLink, setYtLink] = useState("");

    const [themeName, setThemeName] = useState("");

    const [charName, setCharName] = useState("");

    const [resLogoUploadStatus, setResLogoUploadStatus] = useState(false);

    const [resBannerUploadStatus, setResBannerUploadStatus] = useState(false);

    const [isLoading, setisLoading] = useState(false);
    const [isLoading1, setisLoading1] = useState(false);

    const [Files, setFiles] = useState(null);
    const [logoUrl, setlogoUrl] = useState('');
    const [logoProgress, setlogoProgress] = useState(false);

    const [Files1, setFiles1] = useState(null);
    const [bannerUrl, setbannerUrl] = useState('');
    const [bannerProgress, setbannerProgress] = useState(false)


    const [isRedirect, setisRedirect] = useState(false);

    const [isRedirectToMenu, setisRedirectToMenu] = useState(false)
    const [isRedirectToSchedule, setisRedirectToSchedule] = useState(false)

    useEffect(() => {
      isProfileCompleted().then(res => {
        console.log(res)
        if(res === 1)
        setisRedirectToMenu(true)
        else if(res === 2)
        setisRedirectToSchedule(true)
        
      })
      .catch(err => {
        console.log(err);
      })
    }, [])


    const toCreateMenuPage = () => {
      if(isRedirectToMenu)
      return <Redirect to="/manage/createproduct"/>
    }

    const toSchedulePage = () => {
      if(isRedirectToSchedule)
      return <Redirect to="/manage/schedule"/>
    }

    const onFileChange = e => {
        
        setFiles(e.target.files[0]);

        
           
    };


    const onFileChange1 = e => {
        
      setFiles1(e.target.files[0]);


           
    };

    const performResirectHere = () => {
      if(isRedirect)
      return <Redirect to="/manage/createproduct" />
    }


    const onResCreateProfile = (e) => {
      e.preventDefault();

      let account_type = accountType;
      let name = resName;
      let about = desName;
      let logo = logoUrl;
      let banner = bannerUrl;
      let web_link = weblink;
      let external_video = [videoRev];
      let social_profile = [fbLink, instaLink, ytLink];
      let theme_color = themeName;
      let theme_vide = charName

      createRestaurantProfile({account_type,name,about,logo,banner,web_link,external_video,social_profile,theme_color,theme_vide})
      .then(res => {
        console.log(res);
        setisRedirect(true)
      })  
      .catch(err => {
        console.log(err)
      })
    }



   const onResLogoSubmit = (e) => {
    e.preventDefault();
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var uploadTask = storageRef.child(`foodos/restaurant/logo/${Files.name}`).put(Files);
    
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
            setlogoUrl(url)
            setisLoading(false)
            setResLogoUploadStatus(true)
          })
    
       }
     )
    }


   const onResBannerSubmit = (e) => {
    e.preventDefault();
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var uploadTask = storageRef.child(`foodos/restaurant/logo/${Files1.name}`).put(Files1);
    
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>{
          var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
          setisLoading1(true)
        },(error) =>{
            console.log("error", error)
            
          throw error
        },() =>{
          // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
    
          uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
            console.log("image url", url)
            setbannerUrl(url)
            setisLoading1(false)
            setResBannerUploadStatus(true)
          })
    
       }
     )
    }


    return(
        <div>
          {toCreateMenuPage()}
          {toSchedulePage()}
        <div>
      {performResirectHere()} 
            <h3>Registration</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                <h4 className="card-title">Complete the form to proceed</h4>
                <form className="forms-sample">

                <Form.Group>
                    <label htmlFor="exampleSelectGender">Select account type</label>
                    <select  className="form-control" id="exampleSelectGender" value={accountType} onChange={(e) => setaccountType(e.target.value)}>
                    
                      <option value="0" style={{color: 'black' }}>Free Train for 7 Days</option>
                      <option value="1" style={{color: 'red'  }}>Monthly Plan</option>
                      <option value="2" style={{color: 'blue'}}>Half-Year Plan</option>
                      <option value="3" style={{color: 'brown'}}>Yearly Plan</option>
                      
                    </select>
                  </Form.Group>


                  <Form.Group>
                    <label htmlFor="exampleInputName1">Restaurant Name</label>
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" value={resName} placeholder="Name" onChange={(e) => setResName(e.target.value)}  />
                  </Form.Group>

                  {resLogoUploadStatus ? (
                    <Alert severity="success">Upload Successful!</Alert>
                  ):(

                    <div>
                      {isLoading ? (<Spinner1/>) : (
                        <>

                        <Form.Group>
                        <label>Restaurant Logo upload</label>
                        <div className="custom-file"> 
                          <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" onChange={onFileChange}/>
                          <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                        </div>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary mr-2" style={{marginBottom:"15px"}} onClick={onResLogoSubmit}>Logo Upload</button>
                        <button className="btn btn-light" style={{marginBottom:"15px"}}>Cancel</button>
                        </>
                      )}
                      
                    </div>
                  )} 
                  
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Restaurant About</label> 
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="Description" value={desName} onChange={(e) => setDesName(e.target.value)} />
                  </Form.Group>

                  
                    
                    {resBannerUploadStatus ? (
                    <Alert severity="success">Upload Successful!</Alert>
                    ):(

                    <div>
                      {isLoading1 ? (<Spinner1/>) : (
                        <>

                        <Form.Group>
                        <label>Restaurant Banner upload</label>
                        <div className="custom-file">
                          <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" onChange={onFileChange1} />
                          <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                        </div>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary mr-2" style={{marginBottom:"15px"}} onClick={onResBannerSubmit}>Banner Upload</button>
                        <button className="btn btn-light" style={{marginBottom:"15px"}}>Cancel</button>
                        </>
                      )}
                      
                    </div>
                  )} 
                        <Form.Group>
                    <label htmlFor="exampleInputName1">Restaurant Website Link</label>
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="site link" value={weblink} onChange={(e) => setWebLink(e.target.value)}  />
                  </Form.Group>
                        <Form.Group>
                    <label htmlFor="exampleInputName1">Video Review</label>
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="site link" value={videoRev} onChange={(e) => setVideoRev(e.target.value)} />
                  </Form.Group>
                        <Form.Group>
                    <label htmlFor="exampleInputName1">Facebook Link</label>
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="fb link"  value={fbLink} onChange={(e) => setFbLink(e.target.value)} />
                  </Form.Group>
                        <Form.Group>
                    <label htmlFor="exampleInputName1">Instagram link</label>
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="insta link" value={instaLink} onChange={(e) => setInstaLink(e.target.value)} />
                  </Form.Group>
                        <Form.Group>
                    <label htmlFor="exampleInputName1">You Tube link</label>
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="yt link"  value={ytLink} onChange={(e) => setYtLink(e.target.value)} />
                  </Form.Group>

                        <Form.Group>
                    <label htmlFor="exampleSelectGender">Select a color theme</label>
                    <select className="form-control" id="exampleSelectGender" value={themeName} onChange={(e) => setThemeName(e.target.value)}>
                    
                      <option value="#E21717" style={{color: 'aqua' }}>Blue</option>
                      <option value="#383CC1" style={{color: 'red'  }}>Red</option>
                      <option value="#3DBE29" style={{color: 'orange'}}>Orange</option>
                      <option value="#EDC126" style={{color: 'brown'}}>Brown</option>
                      
                    </select>
                  </Form.Group>
                        <Form.Group>
                    <label htmlFor="exampleSelectGender">Select charecter</label>
                    <select className="form-control" id="exampleSelectGender" value={charName} onChange={(e) => setCharName(e.target.value)}>
                    
                    <option value="1" style={{color: 'aqua' }}>Veg-Anime</option>
                      <option value="2" style={{color: 'red'  }}>NonVeg-Dark</option>
                      <option value="3" style={{color: 'orange'}}>Veg-Classic</option>
                      <option value="4" style={{color: 'brown'}}>NonVeg-Dragon</option>
                        
                    </select>
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-primary mr-2" onClick={onResCreateProfile} >Confirm</button>
                  <button className="btn btn-light">Cancel</button>
                  
 
                </form>
              </div>
            </div>
          </div>
        </div>
      

 
        </div>
    )
}

export default UserCompletion;




// foodos.desk@gmail.com
// foodosfoodos