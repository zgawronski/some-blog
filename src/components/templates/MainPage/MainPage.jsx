import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'assets/styles/GlobalStyle';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Blog from 'components/organisms/Blog/Blog';
import Logout from 'components/organisms/Logout/Logout';
import AllPosts from 'components/organisms/AllPosts/AllPosts';
import Favorites from 'components/organisms/Favorites/Favorites';

const MainDiv = styled.div``;

const MainPage = () => (
  <Router>
    <MainDiv>
      <GlobalStyle />
      <Switch>
        <Route exact path='/AllPosts'>
          <AllPosts />
        </Route>
        <Route exact path='/Favorites'>
          <Favorites />
        </Route>
        <Route exact path='/Logout'>
          <Logout />
        </Route>
        <Route exact path='/'>
          <Blog />
        </Route>
      </Switch>
      <Sidebar />
    </MainDiv>
  </Router>
);

export default MainPage;
