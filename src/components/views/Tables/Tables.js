import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view.</h2>
    <ul>
      <li><Link to="tables/booking/:id">Booking Id</Link></li>
      <li><Link to="tables/booking/new">Booking New</Link></li>
      <li><Link to="tables/events/:id">Event Id</Link></li>
      <li><Link to="tables/events/new">Event New</Link></li>
    </ul>
  </div>

);

export default Tables;
