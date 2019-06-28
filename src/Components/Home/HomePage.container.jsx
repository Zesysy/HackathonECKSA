import React from 'react';
import { Container, Col } from 'react-bootstrap';

import TopThreeComponent from './TopThreeComponent';
import NextMatchContainer from './NextMatchContainer';
import Layout from '../Layout/Layout';
import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <Layout>
      <Container className={styles.positionContainer}>
        <Col className={styles.positionElementsLeadbord}>
          <TopThreeComponent />
        </Col>
        <Col className={styles.positionElementsNextMatch}>
          <NextMatchContainer />
        </Col>
      </Container>
    </Layout>
  );
};

export default HomePage;
