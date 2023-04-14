import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const theme = createTheme({
  // palette: {
  //   background: {
  //     paper: 'blue'
  //   }
  // }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
