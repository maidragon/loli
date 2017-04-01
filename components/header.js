import React from 'react'
import Container from './container'
import MenuItem from './menuItem';

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Container flex={true}>                                     
                    <img src="/static/logo.svg"/>                       
                        
                    <div className="menu">
                        <MenuItem>注册</MenuItem>
                        <MenuItem>登录</MenuItem>
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