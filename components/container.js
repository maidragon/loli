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
                `}</style>
            </div>
        )
    }
}