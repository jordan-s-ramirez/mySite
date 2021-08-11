import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import Work from '../components/PageFragments/HomePage/Work';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/Skills';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Work />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
