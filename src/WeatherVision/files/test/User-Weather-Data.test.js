import { render, screen } from '@testing-library/react';
import UserWeatherData from '../User-Weather-Data';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


let userData = [];


it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <UserWeatherData userData={userData} />
    </BrowserRouter>, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});