import React from 'react'
import Container from './container'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Container>
                    <img src="http://i.phbai.com/logo.svg"/>
                </Container>

                <style jsx>{`
                    .header {
                        height: 40px;
                        background: #fff;
                        width: 100%;

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
                    }
                `}</style>
            </div>
        )
    }
}