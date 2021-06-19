import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styledHelpers/GlobalStyle';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar/Sidebar';
import Blog from 'components/Blog/Blog'

const MainDiv = styled.div``;

const MainPage = () => (
  <MainDiv>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact patch='/'/>
      </Switch>
      <Sidebar />
      <Blog />
    </BrowserRouter>
  </MainDiv>
);

export default MainPage;
