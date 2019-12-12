import React from 'react';
import './App.css';
import  { RoutedContent }  from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from "./layout/default";

const basePath = '/';

const App = () => {
    return (
        <Router basename={basePath}>
            <AppLayout>
            <RoutedContent/>
            </AppLayout>
        </Router>
    );
}

export default App;
