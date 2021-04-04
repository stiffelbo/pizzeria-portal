import React from 'react';
import styles from './TablesBookingId.module.scss';
import PropTypes from 'prop-types';

const TablesBookingId = ({id='abc123'}) => (
  <div className={styles.component}>
    <h2>TablesBookingId view.</h2>
    <h2>Id: {id}</h2>
  </div>

);

TablesBookingId.propTypes = {
  id: PropTypes.string,
};

export default TablesBookingId;
