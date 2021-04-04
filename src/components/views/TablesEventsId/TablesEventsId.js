import React from 'react';
import styles from './TablesEventsId.module.scss';
import PropTypes from 'prop-types';

const TablesEventsId = ({id='ABC123'}) => (
  <div className={styles.component}>
    <h2>TablesEventsId view.</h2>
    <h2>Id: {id}</h2>
  </div>

);

TablesEventsId.propTypes = {
  id: PropTypes.string,
};

export default TablesEventsId;
