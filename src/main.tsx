/* eslint-disable react/jsx-props-no-spreading */
import 'aos/dist/aos.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { StoriesAPIProvider } from 'react-stories-api';

import storiesAPIConfig from './configs/storiesAPIConfig';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <StoriesAPIProvider {...storiesAPIConfig}>
        <RouterProvider router={router} />
      </StoriesAPIProvider>
    </ParallaxProvider>
  </React.StrictMode>,
);
