import React from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact book</h1>
      </div>
    </div>
  );
};

export default HomePage;
