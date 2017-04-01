import React from 'react'
import Container from './container'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Container flex={true} small={true}>
                    <p className="copyright">Copyright © 2017 Loli. All rights reserved.</p>
                </Container>
                
                
                <style jsx>{`
                    .footer {
                        background: #000;
                        padding-bottom: 25px;
                    }
                    .copyright {
                        color: #666;
                        font-size: 12px;
                    }
                `}</style>
            </div>
        )
    }
}