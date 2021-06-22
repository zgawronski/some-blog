import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styledHelpers/GlobalStyle';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar/Sidebar';
// eslint-disable-next-line import/no-cycle
import Blog from 'components/Blog/Blog';
import Logout from 'components/Logout/Logout';
import AllPosts from 'components/AllPosts/AllPosts';
import Button from 'styledHelpers/Button';
import Buttonicon from 'styledHelpers/ButtonIcon';

const MainDiv = styled.div``;

// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  render() {
    return (
      <Router>
        <MainDiv>
          <GlobalStyle />
          <Switch>
            <Route exact path='/AllPosts'>
              <AllPosts />
            </Route>
            <Route exact path='/Logout'>
              <Logout />
            </Route>
            <Route exact path='/'>
              <Blog />
            </Route>
          </Switch>
          <Sidebar />
          <Button />
          <Buttonicon />
        </MainDiv>
      </Router>
    );
  }
}
export default MainPage;
