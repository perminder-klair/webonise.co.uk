import React, { Component } from 'react';
//
//export default class MainLayout extends Component {
//    render() {
//        return (
//            <div>
//                <header>
//                    This is our header
//                </header>
//                <main>
//                    {this.props.content}
//                </main>
//            </div>
//        );
//    }
//}
//

const App = ({content}) => (
    <div>
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="#" className="header item">
                    Meteor Starter
                </a>
                <a href="#" className="item">Home</a>
            </div>
        </div>
        {content}
    </div>
);

export default App;