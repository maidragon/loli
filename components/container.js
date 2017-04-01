import React from 'react'
import classNames from 'classnames'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        var containerClass = classNames({
            'container': true,
            'flex': this.props.flex,
            'small': this.props.small
        });
        return (
            <div className={containerClass}>
                {this.props.children}
                <style jsx>{`
                    .container.small {
                        width: 1050px;
                    }
                    .container {
                        height: 100%;
                        margin: 0 auto;
                    }
                    .container.flex {
                        display: flex;
                        justify-content: space-between;
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