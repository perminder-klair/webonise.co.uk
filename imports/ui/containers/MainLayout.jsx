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

const MainLayout = ({content}) => (
    <div>
        <header>
            This is our header
        </header>
        <main>
            {content}
        </main>
    </div>
);

export default MainLayout;