import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainLayout } from './app/layout/MainLayout';
import { RouteList } from './app/RouteList';
import { sidebar } from './app/config/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainLayout
    title="React MuiGridX"
    sidebar={sidebar}
  >
    <RouteList />
  </MainLayout>
);