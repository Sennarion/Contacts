import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { CssBaseline } from '@mui/material';
import 'styles/index.css';
import App from 'components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="contacthub">
          <CssBaseline>
            <App />
          </CssBaseline>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
