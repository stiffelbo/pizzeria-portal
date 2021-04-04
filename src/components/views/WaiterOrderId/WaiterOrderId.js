import React from 'react';
import styles from './WaiterOrderId.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderId = ({id='123'}) => (
  <div className={styles.component}>
    <h2>WaiterOrderId view.</h2>
    <h2>Id: {id}</h2>
  </div>

);

WaiterOrderId.propTypes = {
  id: PropTypes.string,
};

export default WaiterOrderId;
