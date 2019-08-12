import React from 'react';
import './App.css';
import RootComponent from './components/root/root';
import Layout from './components/Layout/Layout.component';

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
