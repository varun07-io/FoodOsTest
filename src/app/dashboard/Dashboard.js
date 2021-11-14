import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import ActiveOrders from './ActiveOrders';
import AccOrders from './AccOrders';
import OutOrders from './OutOrders';
import Feeds from './Feeds';

import {isProfileCompleted} from '../apiHandler/api'
function Dashboard() {

  const [redirectToProfile, setredirectToProfile] = useState(false);

  useEffect(() => {
    isProfileCompleted().then(res => {
      console.log(">> ",res );
      if(res === 7)
      setredirectToProfile(true)

    })
    .catch(err => console.log(err))
    
  }, [])

  const performRedirect = () => {
    if(redirectToProfile)
    {
      console.log("here");
      return <Redirect to="/profile" />

    }
  }

  return(
    <div>
      {performRedirect()}
      <Feeds />
      <ActiveOrders />
      <AccOrders />
      <OutOrders />
    </div>
  )
}

export default Dashboard;