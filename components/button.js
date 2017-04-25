import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    async componentDidMount() {
    }

    render() {

        return (
            <div className="button">
                <button type="button">
                    <span>{this.props.children}</span>
                </button>
                
                <style jsx>{`
                    button {
                        display: inline-block;
                        margin-bottom: 0;
                        font-weight: 500;
                        text-align: center;
                        -ms-touch-action: manipulation;
                        touch-action: manipulation;
                        cursor: pointer;
                        background-image: none;
                        border: 1px solid transparent;
                        white-space: nowrap;
                        line-height: 1.5;
                        padding: 4px 15px;
                        font-size: 12px;
                        border-radius: 4px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
                        transition: all .3s cubic-bezier(.645,.045,.355,1);
                        position: relative;
                        color: rgba(0,0,0,.65);
                        background-color: #fff;
                        border-color: #d9d9d9;
                    }
                `}</style>
            </div>
        )
    }
}