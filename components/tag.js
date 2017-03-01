import React from 'react'
import Link from 'next/link'
import Container from './container'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="tag">
                <span>{this.props.name}</span>
                <style jsx>{`
                    .tag {
                        display: inline-block;
                        background: #4886ff;
                        line-height: 20px;
                        height: 22px;
                        padding: 0 8px;
                        border-radius: 4px;
                        border: 1px solid #e9e9e9;
                        font-size: 12px;
                        opacity: 1;
                        margin-right: 8px;
                        cursor: pointer;
                        white-space: nowrap;
                        vertical-align: middle;
                    }
                    .tag span {
                        color: #fff;
                    }
                `}</style>
            </div>
        )
    }
}