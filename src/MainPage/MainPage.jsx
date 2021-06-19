import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styledHelpers/GlobalStyle';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Sidebar from 'components/Sidebar/Sidebar';

const MainDiv = styled.div``;

const MainPage = () => (
  <MainDiv>
    <BrowserRouter>
      <h1>blog</h1>
      <Switch>
        <Route exact patch='/' component={Card} />
      </Switch>
      <GlobalStyle />
      <Sidebar />
    </BrowserRouter>
  </MainDiv>
);

export default MainPage;
