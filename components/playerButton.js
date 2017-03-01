import React from 'react'

export default class extends React.Component {

    constructor (props) {
        super(props);

        this.togglePaused = this.togglePaused.bind(this);
        this.state = {
            paused: true
        }
    }

    togglePaused() {
        this.setState({paused: !this.state.paused});
    }

    render() {
        return (
            <a className="play-button" onClick={this.togglePaused}>
                <div className="left"></div>
                <div className="right"></div>
                <div className="triangle-1"></div>
                <div className="triangle-2"></div>
                <style jsx>{`
                    .play-button {
                        display: inline-block;
                        height: 16px;
                        width: 16px;
                        z-index: 999;
                        overflow: hidden;
                        position: relative;
                    }

                    .left {
                        height: 100%;
                        float: left;
                        background-color: white;
                        width: 36%;
                        transition: all 0.25s ease;
                        overflow: hidden;
                    }
                    .triangle-1 {
                        transform: translate(0, -100%);
                    }
                    .triangle-2 {
                        transform: translate(0, 100%);
                    }

                    .triangle-1, 
                    .triangle-2 {
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: transparent;
                        width: 0;
                        height: 0;
                        border-right: 16px solid #c0392b;
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                        transition: transform 0.25s ease;
                    }
                    .right {
                        height: 100%;
                        float: right;
                        width: 36%;
                        background-color: white;
                        transition: all 0.25s ease;
                    }
                    .paused .left {
                        width: 50%;
                    }
                    .paused .right {
                        width: 50%;
                    }
                    .paused .triangle-1 {
                        transform: translate(0, -50%);
                    }
                    .paused .triangle-2 {
                        transform: translate(0, 50%);
                    }
                `}</style>
            </a>
        )
    }
}