import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'styledHelpers/GlobalStyle';

const MainPage = () => (
  <div>
    <GlobalStyle />

    <h1>blog</h1>
    <Button>Add new note</Button>
    <Button secondary>Delete note</Button>
  </div>
);

export default MainPage;
