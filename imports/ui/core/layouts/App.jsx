import React, { Component } from 'react';

import Header from '../containers/Header.jsx';
import Footer from '../containers/Footer.jsx';

const App = ({content}) => (
    <div>
        <Header />
        {content}
        <Footer />
    </div>
);

export default App;