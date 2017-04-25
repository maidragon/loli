import React from 'react'
import Link from 'next/link'
import Container from './container'
import MovieItem from './movieItem'
import Pagination from './pagination'
import Hoshi from './hoshi'
import Button from './button'
import 'isomorphic-fetch'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div className="content">

                <div className="container">
                    <div className="login">
                        {this.props.children}
                    </div>
                </div>
                

                <style jsx>{`
                    .content {
                        padding-top: 60px;
                        background: #000;
                        width: 100%;
                        min-height: 800px;
                        height: calc(100vh - 99px);
                    }
                    .container {
                        display: flex;
                        justify-content: space-between;
                        width: 1050px;
                        height: 100%;
                        margin: 0 auto;
                        padding-top: 9px;
                        padding-bottom: 9px;
                        flex-flow: row wrap;
                    }
                    .login {
                        width: 100%;
                        padding-top: 200px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                `}</style>
            </div>
        )
    }
}