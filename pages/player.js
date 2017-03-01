import React from 'react'
import PlayerButton from '../components/playerButton'

export default class extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isPlaying: false
        }

        this.test = this.test.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.timeFormat = this.timeFormat.bind(this);

        this.state = {
            currentTime: 0,
            duration: 0
        }
        
    }

    updateTime(e) {
        e.preventDefault();
        this.setState({currentTime: e.target.currentTime});
        // console.log(e.target.currentTime);
    }

    test(e) {
        e.preventDefault();
        console.log("default");
    }

    componentDidMount() {
        let video = document.querySelector('.player-video');
        
        this.setState({duration: video.duration});
        // this.duration = video.duration;
    }

    togglePlay(e) {
        e.preventDefault();
        let video = document.querySelector('.player-video');
        
        if (this.state.isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        
        this.state.isPlaying = !this.state.isPlaying;
    }

    timeFormat(value) {
        var time = parseInt(value);
        var minute = parseInt(value / 60);
        var hour = parseInt(value / 3600);
        var second = time - hour * 3600 - minute * 60;

        var timeStr = "";

        if (hour > 0) {
            timeStr = `${hour}:`;
        } 

        if (minute >= 10) {
            timeStr += `${minute}:`;
        } else {
            timeStr += `0${minute}:`;
        }

        if (second >= 10) {
            timeStr += `${second}`;
        } else {
            timeStr += `0${second}`;
        }

        return timeStr;
    }

    render() {
        return (
            <div className="player" onClick={this.togglePlay}>
                <video className="player-video" onContextMenu={this.test} onTimeUpdate={this.updateTime}>
                    <source src="https://rishabhp.github.io/bideo.js/night.mp4" type="video/mp4"></source>
                </video>
                <div className="video-info">
                    <PlayerButton></PlayerButton>
                    <span>{this.timeFormat(this.state.currentTime)}</span>
                    <span>{this.timeFormat(this.state.duration)}</span>
                </div> 
                <style jsx>{`
                    .player {
                        position: relative;
                        width: 640px;
                        height: 360px;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                    }
                    .video-info {
                        position: absolute;
                        bottom: 6px;
                        width: 80%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .video-info span {
                        margin: 0 8px;
                        font-size: 13px;
                        color: #fff;
                    }
                `}</style>
            </div>
        )
    }
}