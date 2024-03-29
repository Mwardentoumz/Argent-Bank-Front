import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './scripts/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </PersistGate>
   </Provider>
);
