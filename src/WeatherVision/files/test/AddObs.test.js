import { render, screen } from '@testing-library/react';
import AddObs from '../AddObs';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <AddObs />
    </BrowserRouter>, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});