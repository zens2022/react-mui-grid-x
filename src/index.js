import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainLayout } from './app/layout/MainLayout';
import { RouteList } from './app/router/RouteList';
import { sidebar } from './app/config/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainLayout
    title="MuiGridX"
    sidebar={sidebar}
  >
    <RouteList />
  </MainLayout>
);