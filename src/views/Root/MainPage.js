import React from 'react';
import Button from 'styledHelpers/Button';
import Input from 'styledHelpers/Input';
import GlobalStyle from 'styledHelpers/GlobalStyle';

const MainPage = () => (
  <div>
    <GlobalStyle />

    <h1>blog</h1>
    <Button>Add new note</Button>
    <Button secondary>Delete note</Button>
    <Input placeholder='test' />
    <Input search placeholder='search' />
  </div>
);

export default MainPage;
