import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './components/Main'
import {ShopContextProvider} from "./context/shop-context";
import {BrowserRouter} from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
<ShopContextProvider>
    <BrowserRouter>
    <React.StrictMode>

        <Main/>


    </React.StrictMode>
</BrowserRouter>
</ShopContextProvider>
);





