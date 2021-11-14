import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Spinner1 from './helper/Spinner';
import {Alert} from '@mui/material';


function UserCompletion() {

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

    const [Files, setFiles] = useState(null);


    const onFileChange = e => {
        
        setFiles(e.target.files[0]);
           
    };


    return(
        <div>
        <div>
       
            <h3>Registration</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                <h4 className="card-title">Complete the form to proceed</h4>
                <form className="forms-sample">
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
                        <button type="submit" className="btn btn-primary mr-2" style={{marginBottom:"15px"}}>Logo Upload</button>
                        <button className="btn btn-light" style={{marginBottom:"15px"}}>Cancel</button>
                        </>
                      )}
                      
                    </div>
                  )} 
                  
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Restaurant Description</label> 
                    <Form.Control  type="text" className="form-control" id="exampleInputName1" placeholder="Description" value={desName} onChange={(e) => setDesName(e.target.value)} />
                  </Form.Group>

                  
                    
                    {resBannerUploadStatus ? (
                    <Alert severity="success">Upload Successful!</Alert>
                    ):(

                    <div>
                      {isLoading ? (<Spinner1/>) : (
                        <>

                        <Form.Group>
                        <label>Restaurant Banner upload</label>
                        <div className="custom-file">
                          <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" onChange={onFileChange} />
                          <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                        </div>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary mr-2" style={{marginBottom:"15px"}}>Banner Upload</button>
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
                    
                      <option value="aqua" style={{color: 'aqua' }}>Blue</option>
                      <option value="red" style={{color: 'red'  }}>Red</option>
                      <option value="orange" style={{color: 'orange'}}>Orange</option>
                      <option value="brown" style={{color: 'brown'}}>Brown</option>
                      
                    </select>
                  </Form.Group>
                        <Form.Group>
                    <label htmlFor="exampleSelectGender">Select charecter</label>
                    <select className="form-control" id="exampleSelectGender" value={charName} onChange={(e) => setCharName(e.target.value)}>
                    
                        
                    </select>
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-primary mr-2" >Confirm</button>
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