import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Hls from 'hls.js'

export default class extends React.Component {
    static async getInitialProps ({ query: { id } }) {
        console.log(id);

        return {id: id}
    }

    async componentWillMount() {
        const res = await fetch(`http://loli.vc/play/${this.props.id}?uid=B6F19453-D852-4592-B6F1-70B537C1FF1F&token=B7CACBD2A0004E6487038F59EA906228`);
        const data = await res.json();
        this.setState({url: data.Message});

        if(Hls.isSupported()) {
            var video = document.querySelector('.test');
            var hls = new Hls();
            hls.loadSource(this.state.url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
              video.play();
            });
        }
    }

    constructor (props) {
        super(props);
        this.state = {url: ""};
    }

    render() {
        return (
            <div className="movie">
                <video className="test"></video>
                <style jsx>{`
                    body {
                        margin: 0;
                    }
                `}</style>
            </div>
        )
    }
}