import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styledHelpers/GlobalStyle';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar/Sidebar';
import Blog from 'components/Blog/Blog'


const MainDiv = styled.div``;
// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  render(){

    return (

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

  }
}
export default MainPage;
