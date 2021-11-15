import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { createMenuInRestaurant, deleteMenuInRestaurant, editMenuInRestaurant, getAllMenus, getAMenu, getProfileId } from '../apiHandler/api';
import Spinner1 from './helper/Spinner';
import 'firebase/storage'
import firebase from "firebase/app";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import uniqueRandom from 'unique-random';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {Alert} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

function CreateProduct() {


    const [name, setname] = useState('');
    const [menu_id, setmenu_id] = useState(uniqueRandom(100000, 999999));
    const [menu_key_name, setmenu_key_name] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    const [food_type, setfood_type] = useState('');
    const [price, setprice] = useState(0);
    const [cuisine, setcuisine] = useState('');
    const [keys, setkeys] = useState([]);
    const [ingredients, setingredients] = useState([]);
    const [add_character, setadd_character] = useState(0);
    const [is_customisable, setis_customisable] = useState(false);
    const [profile_id, setprofile_id] = useState('');

    const [File, setFile] = useState(null);
    const [logoUrl, setlogoUrl] = useState('');
    const [logoProgress, setlogoProgress] = useState(false);
    const [resLogoUploadStatus, setResLogoUploadStatus] = useState(false);


    const [dummy_keys, setdummy_keys] = useState('');
    const [dummy_ingredience, setdummy_ingredience] = useState('')

    const [sucessMenuCreate, setsucessMenuCreate] = useState(false);


    useEffect(() => {
      getProfileId().then(res => {
        console.log("summa",res);
        setprofile_id(res)
      })
      .catch(err => {
        console.log(err);
      })
    }, [])

    

    
    const [allMenus, setallMenus] = useState([]);

    useEffect(() => {
      getAllMenus().then(res => {
        console.log(res.data.all_menu)
        setallMenus(res.data.all_menu)
      })
      .catch(err => {
        console.log(err)
      })
    }, [sucessMenuCreate])

    const addKeysInList = (e) => {
      e.preventDefault();
      let y = dummy_keys.split(',');
      setkeys(y);
    }

    const onFileChange = e => {
        
      setFile(e.target.files[0]);

      
         
  };


  const addIngInList = (e) => {
    e.preventDefault();
    let y = dummy_ingredience.split(',');
    setingredients(y)
  }


  
  const onProductLogoSubmit = (e) => {
    e.preventDefault();
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var uploadTask = storageRef.child(`foodos/restaurant/product/${File.name}`).put(File);
    
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>{
          var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
          setlogoProgress(true)
        },(error) =>{
            console.log("error", error)
            
          throw error
        },() =>{
          // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
    
          uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
            console.log("image url", url)
            setimage(url)
            setlogoProgress(false)
            setResLogoUploadStatus(true)
          })
    
       }
     )
    }

    const onMenuCreate = (e) => {
      e.preventDefault();
      createMenuInRestaurant({menu_id,menu_key_name,name,image,description,price,category,food_type,cuisine,keys,ingredients,add_character,is_customisable,profile_id})
      .then(res => {
          if(res.data){
            setsucessMenuCreate(true)
          }
      })
      .catch(err => {
        console.log(err)
      })
    }

    const alertSucess = () => {
      if(sucessMenuCreate)
      return <Alert severity="success">Mebu Created Successful!</Alert>
    }

    const [menuEditStatus, setmenuEditStatus] = useState(false);
    

    const [menuid, setmenuid] = useState('');

    function editMenu(id){
      setmenuEditStatus(true)
      getAMenu(id).then(res => {
        console.log("id -- > ",res.data.data[0]);
          setmenuid(res.data.data[0]._id)

          setname(res.data.data[0].name)
          setimage(res.data.data[0].image)
          setmenu_key_name(res.data.data[0].menu_key_name)
          setdescription(res.data.data[0].description)
          setprice(res.data.data[0].price)
          setcategory(res.data.data[0].category)
          setfood_type(res.data.data[0].food_type)
          setcuisine(res.data.data[0].cuisine)
          setis_customisable(res.data.data[0].is_customisable)
          setkeys(res.data.data[0].keys)
          setingredients(res.data.data[0].ingredients)
          setadd_character(res.data.data[0].add_character)
          setprofile_id(res.data.data[0].profile_id)
      })
      .catch(err => {
        console.log(err)
      })

    } 




    const onEditMenuSubmit = (e) => {
      e.preventDefault();
      editMenuInRestaurant({menuid,menu_id,menu_key_name,name,image,description,price,category,food_type,cuisine,keys,ingredients,add_character,is_customisable,profile_id})
      .then(res => {
          if(res.data){
            setsucessMenuCreate(true)
          }
      })
      .catch(err => {
        console.log(err)
      })
    }



    const onDeleteMenuSubmit = (e,id) => {
      e.preventDefault();
      deleteMenuInRestaurant({id}).then(res => {
        if(res)
        setsucessMenuCreate(true)

      })
      .catch(err => {
        console.log(err)
      })
    }

    return(
        <div>
        <div>
       {alertSucess()}
            <h3>Create Product</h3>
            <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Product</h4>
                <form className="forms-sample">
                <Form.Group>
                    <label htmlFor="exampleSelectGender">Add Category Type</label>
                    <select className="form-control" value={category} onChange={(e) => setcategory(e.target.value)} id="exampleSelectGender">
                    <option value="Category One" style={{color: 'brown'}}>Category One</option>
                    <option value="Category Two" style={{color: 'brown'}}>Category Two</option>
                    <option value="Category Three" style={{color: 'brown'}}>Category Three</option>
                    <option value="Category Four" style={{color: 'brown'}}>Category Four</option>
                    <option value="Category Five" style={{color: 'brown'}}>Category Five</option>

                      
                    </select>
                 

                  </Form.Group>                
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Add Keys</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Keys" onChange={ (e) => setdummy_keys(e.target.value)}/>
                  </Form.Group>
                  <div style={{marginBottom:"5rem"}}>
                  <button type="submit" className="btn btn-primary mr-2" onClick={addKeysInList}>Add Key</button>
                  {keys ? (<p>{keys}</p>): (null)}
           
                  </div>
                 
                  <div>
                    {image ? (
                      <img src={image} style={{height: 200,width: 200}}/>
                    ) : (
                      null
                      )

                    }
                  </div>

                  {resLogoUploadStatus ? (
                    <Alert severity="success">Upload Successful!</Alert>
                  ):(

                    <div>
                      {logoProgress ? (<Spinner1/>) : (
                        <>

                        <Form.Group>
                        <label>Restaurant Logo upload</label>
                        <div className="custom-file"> 
                          <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" onChange={onFileChange}/>
                          <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                        </div>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary mr-2" style={{marginBottom:"15px"}} onClick={onProductLogoSubmit}>Logo Upload</button>
                        <button className="btn btn-light" style={{marginBottom:"15px"}}>Cancel</button>
                        </>
                      )}
                      
                    </div>
                  )} 
              
                      
              <Form.Group>
                    <label htmlFor="exampleInputName1">Add Name</label>
                    <Form.Control type="text" className="form-control" value={name} id="exampleInputName1" placeholder="Name" onChange={ (e) => setname(e.target.value)}/>
                  </Form.Group>
                      
              <Form.Group>
                    <label htmlFor="exampleInputName1">Add Menu Key Id</label>
                    <Form.Control type="text" className="form-control" value={menu_key_name} id="exampleInputName1" placeholder="Menu Key Id" onChange={ (e) => setmenu_key_name(e.target.value)}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Add description</label>
                    <Form.Control type="text" className="form-control" value={description} id="exampleInputName1" placeholder="Description" onChange={ (e) => setdescription(e.target.value)}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Add Price</label>
                    <Form.Control type="number" className="form-control" value={price} id="exampleInputName1" placeholder="Price in INR" onChange={ (e) => setprice(e.target.value)}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Add Food Type</label>
                    <select className="form-control" onChange={(e) => setfood_type(e.target.value)} id="exampleSelectGender" value={food_type}>
                    <option value="Veg" style={{color: 'brown'}}>Veg</option>
                    <option value="Non-Veg" style={{color: 'brown'}}>Non-Veg</option>


                      
                    </select>
                 

                  </Form.Group>   
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Add Cuisine</label>
                    <select className="form-control" onChange={(e) => setcuisine(e.target.value)} id="exampleSelectGender" value={cuisine}>
                    <option value="Indian" style={{color: 'brown'}}>Indian</option>
                    <option value="Chinese" style={{color: 'brown'}}>Chinese</option>


                      
                    </select>
                 

                  </Form.Group>   

                  <FormControl component="fieldset">
      <FormLabel component="legend">Is Customisable</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={(e) => setis_customisable(e.target.value)} value={is_customisable}>
        <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={2} control={<Radio />} label="No" />
    
      </RadioGroup>
    </FormControl>
    <Form.Group>
                    <label htmlFor="exampleSelectGender">Add Charactor</label>
                    <select className="form-control" onChange={(e) => setadd_character(e.target.value)} id="exampleSelectGender" value={add_character}>
                    <option value={1} style={{color: 'brown'}}>Hot</option>
                    <option value={2} style={{color: 'brown'}}>Chill</option>
                    <option value={3} style={{color: 'brown'}}>Cold</option>


                      
                    </select>
                 

                  </Form.Group>  
                  <Form.Group>
                    <label htmlFor="exampleInputName1"> Add Ingredience</label>
                    <Form.Control type="text" className="form-control"  id="exampleInputName1" placeholder="Add Ingredience" onChange={ (e) => setdummy_ingredience(e.target.value)}
                    />
                  </Form.Group>
                  <button  style={{marginBottom:"5rem"}} type="submit" className="btn btn-primary mr-2" onClick={addIngInList}>Add Ingredience</button>
                  {ingredients ? (<p>{ingredients}</p>): (null)}
        

                        {menuEditStatus ? (
                          <>
                          <button type="submit" className="btn btn-success mr-2" onClick={onEditMenuSubmit}>Done Edit</button>
                  <button onClick={() => setmenuEditStatus(false)} className="btn btn-dark">Cancel Editing</button>
                          </>
                            


                        ) : (
                          <>
                          
                          <button type="submit" className="btn btn-primary mr-2" onClick={onMenuCreate}>Create Menu</button>
                  <button onClick={() => setmenuEditStatus(false)} className="btn btn-light">Cancel</button>

                          </>
                        )

                        }
                  
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
                    <th> Menu Image</th>
                    <th> Menu Id </th>
                   
                    <th> Menu Name </th>
                    <th> Menu Price </th>
                    <th> Menu Key Id </th>
                    <th> Edit </th>
                    <th> Delete </th>
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
                    <td> <b>{M[1].menu_id}</b> </td>
                    
                    <td> {M[1].name}</td>
                    <td> {M[1].price}</td>
                    <td> {M[1].menu_key_name}</td>

                    <td> <button type="button" className="btn btn-primary" onClick={() => {editMenu(M[1]._id)}}>Edit</button>

                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={(e) => {onDeleteMenuSubmit(e,M[1]._id)}}>Delete</button>
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

export default CreateProduct;