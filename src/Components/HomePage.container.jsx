import React from 'react';

import TopThreeComponent from './TopThreeComponent';
import NextMatchComponent from './NextMatchComponent';
import Layout from './Layout';

const HomePage = () => {
  return (
    <Layout>
      <TopThreeComponent />
      <NextMatchComponent />
    </Layout>
  );
};

export default HomePage;
