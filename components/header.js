import React from 'react'
import Container from './container'
import MenuItem from './menuItem';
import Link from 'next/link'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Container flex={true}>
                    <Link href="/">
                        <img src="/static/logo.svg"/> 
                    </Link>
                        
                    <div className="menu">
                        <a href="/register">
                            <MenuItem>注册</MenuItem>
                        </a>

                        <a href="/login">
                            <MenuItem>登录</MenuItem>
                        </a>
                        
                        <MenuItem>关于</MenuItem>
                    </div>
                </Container>

                <style jsx>{`
                    .header {
                        position: fixed;
                        height: 40px;
                        background: #000;
                        width: 100%;
                        z-index: 9999;
                    }
                    .header img {
                        display: block;
                        max-height: 100%;
                        width: 40px;
                    }
                    .container {
                        width: 1050px;
                        height: 100%;
                        margin: 0 auto;
                        display: flex;
                    }
                    .menu {
                        display: flex;
                        align-items: center;
                    }
                `}</style>
            </div>
        )
    }
}