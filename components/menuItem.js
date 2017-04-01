import React from 'react'
import Container from './container'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <li className="menu-item">
                {this.props.children}

                <style jsx>{`
                    .menu-item {
                        color: #fff;
                        padding: 5px 0;
                        position: relative;
                        text-decoration: none;
                        -webkit-transition: opacity .1s linear;
                        transition: opacity .1s linear;
                        margin-right: 20px;
                        cursor: pointer;
                    }
                    .menu-item:after {
                        border-bottom: 2px solid #6fb900;
                        bottom: 0;
                        content: "";
                        left: 0;
                        pointer-events: none;
                        position: absolute;
                        right: 0;
                    }
                    .menu-item:hover {
                        opacity: .7;
                    }
                `}</style>
            </li>
        )
    }
}