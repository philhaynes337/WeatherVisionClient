import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <NotFound />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});