import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'assets/styles/GlobalStyle';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Blog from 'components/organisms/Blog/Blog';
import Logout from 'components/organisms/Logout/Logout';
import AllPosts from 'components/organisms/AllPosts/AllPosts';
import Favorites from 'components/organisms/Favorites/Favorites';

const MainPage = () => (
  <Router>
    <div>
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
        <Route exact path='/' exact>
          <Blog />
        </Route>
      </Switch>
      <Sidebar />
    </div>
  </Router>
);

export default MainPage;
