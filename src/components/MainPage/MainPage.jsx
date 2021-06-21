/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styledHelpers/GlobalStyle';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar/Sidebar';
import Blog from 'components/Blog/Blog';
import Card from 'components/Cards/Card';

const MainDiv = styled.div``;
// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title,
  //     description,
  //   };
  // }

  render() {
    return (
      <Router>
        <MainDiv>
          <GlobalStyle />
          <Switch>
            <Route exact path='/Card'>
              <Card />
            </Route>
            <Route exact path='/'>
              <Blog />
            </Route>
          </Switch>
          <Sidebar />
        </MainDiv>
      </Router>
    );
  }
}
export default MainPage;
