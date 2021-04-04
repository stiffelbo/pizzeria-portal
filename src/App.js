import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>

          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
            {/* Gdy routy były napisane w kolejnośći  TablesBookingId, TablesBookingNew to w widoku new miałem widok :id ??*/}
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBookingId} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={TablesEventsId} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            {/* tutaj to samo co w tables z kolejności routingu??*/}
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrderId} />
          </Switch>

        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
