import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {CreateCorrection} from "./pages/Corrections/CreateCorrection";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CreateCorrection />
);
