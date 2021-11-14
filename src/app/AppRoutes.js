import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import Login from './auth/Login';
import CreateMenu from './manage/CreateMenu';
import Catagory from './manage/Catagory';
import Product from './manage/Product';
import Schedule from './manage/Schedule';
import MainDashboard from './charts/ChartJs';
import Dashboard from '../app/dashboard/Dashboard';

// Admin Route
import RestaurantRoute from './RouterHelper/RestaurantRouter';
import AdminRouter from './RouterHelper/AdminRouter'
import CreateProduct from './manage/CreateProduct';
import Package from './manage/Package';
import Wallet from './manage/Wallet';
import AdminDashboard from './admin/AdminDashboard';
// Branch Route

import UserCompletion from '../app/manage/UserCompletion.js'

// const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));


const Register1 = lazy(() => import('./user-pages/Register'));






class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <RestaurantRoute exact path="/" component={ Dashboard } />
          <RestaurantRoute exact path="/profile" component={ Package } />
          <RestaurantRoute path="/manage/createmenu" component={ CreateMenu } />
          <RestaurantRoute path="/manage/createproduct" component={  CreateProduct } />
          <RestaurantRoute path="/manage/wallet" component={ Wallet } />
          <RestaurantRoute path="/manage/schedule" component={ Schedule } />
          <RestaurantRoute path="/manage/package" component={ Package } />
          
          <Route path="/login" component={ Login } />
          <Route exact path="/profile" component={ Package } />




























          <Route path="/usercompletion" component={ UserCompletion } />


          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ MainDashboard } />


          {/* <Route path="/user-pages/login-1" component={ Login } /> */}
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;