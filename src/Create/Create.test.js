import { render, screen } from '@testing-library/react';
import Create from './Create';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Create />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});