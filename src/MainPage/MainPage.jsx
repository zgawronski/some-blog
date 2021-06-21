import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'styledHelpers/GlobalStyle';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar/Sidebar';
import Blog from 'components/Blog/Blog';
import { store } from 'redux/store';

const MainDiv = styled.div``;
// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <MainDiv>
            <GlobalStyle />
            <Switch>
              <Route exact patch='/' />
            </Switch>
            <Sidebar />
            <Blog />
          </MainDiv>
        </Provider>
      </Router>
    );
  }
}
export default MainPage;
