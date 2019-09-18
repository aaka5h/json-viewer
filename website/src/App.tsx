import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout.component';
import RootComponent from './components/root/root';

function App() {
    return (
        <div className="App">
            <Layout>
                <RootComponent/>
            </Layout>
        </div>
    );
}

export default App;
