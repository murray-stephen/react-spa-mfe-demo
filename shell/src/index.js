import React from 'react';
import ReactDOM from 'react-dom';
import { registerApplication, start } from 'single-spa';
import './index.css';
import App from './App';

// Register your MFEs here
registerApplication({
    name: 'mfe1',
    app: () => System.import('mfe1'),
    activeWhen: ['/mfe1'],
});

registerApplication({
    name: 'mfe2',
    app: () => System.import('mfe2'),
    activeWhen: ['/mfe2'],
});

// Start the single-spa applications
start();

ReactDOM.render(<App />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// reportWebVitals();
