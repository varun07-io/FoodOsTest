import ActiveOrders from './ActiveOrders';
import AccOrders from './AccOrders';
import OutOrders from './OutOrders';
import Feeds from './Feeds';
import React from 'react'

function    Dashboard() {
  return(
    <div>
      <Feeds />
      <ActiveOrders />
      <AccOrders />
      <OutOrders />
    </div>
  )
}

export default Dashboard;