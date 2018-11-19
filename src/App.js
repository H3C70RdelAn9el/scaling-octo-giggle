import React, { Component } from 'react';
import './App.css';
import { Layout, Content, Header, Navigation, Drawer, Textfield } from 'react-mdl';
import { Link } from 'react-router-dom';

import Main from './components/Main';


class App extends Component {
  render() {
    return (
      // <div style={{height: '300px', position: 'relative'}}>
      <div>
        <Layout fixedHeader>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
