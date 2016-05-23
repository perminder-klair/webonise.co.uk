import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const App = ({content}) => (
    <div>
        <Header />
        {content}
        <Footer />
    </div>
);

export default App;