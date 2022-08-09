import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{
    backgroundColor: "#1D2A35",color:"#ffffff"
  }}>
  <React.StrictMode >
    <App />
  </React.StrictMode></div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
