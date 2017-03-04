import React from 'react'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
                <style jsx>{`
                    .container {
                        width: 1050px;
                        height: 100%;
                        margin: 0 auto;
                    }
                    @media screen and (min-height: 630px) and (min-width: 1294px) {
                        .container {
                            width: 1066px;
                        }
                    }
                    @media screen and (min-height: 870px) and (min-width: 1320px) {
                        .container {
                            width: 1280px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}