import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Hls from 'hls.js'
import Head from 'next/head'
import Header from '../components/header'
import Container from '../components/container'
import verify from '../lib/tool'

export default class extends React.Component {
    static async getInitialProps ({ query: { id } }) {
        console.log(id);

        return {id: id}
    }

    async componentWillMount() {
        let uid = localStorage.getItem("userid");
        let token = localStorage.getItem("token");

        // 直接从 url 进入组件
        if (uid == null || token == null) {
            verify();
        }

        let res = await fetch(`http://loli.vc/play/${this.props.id}?uid=${uid}&token=${token}`);
        let data = await res.json();

        if (data.Result == 0) {
            // 认证已过期, 需要重新认证
            verify();

            // 重新认证后发请求
            res = await fetch(`http://loli.vc/play/${this.props.id}?uid=${uid}&token=${token}`);
            data = await res.json();
        }

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
                <Head>
                    <title>loli 3.0</title>
                    <meta charSet='utf-8' />
                    <link rel="stylesheet" href="/static/global.css" />
                </Head>
                <Header/>

                <div className="mask">
                    <Container>
                        <video className="test"></video>
                    </Container>
                </div>
                
                <style jsx>{`
                    .test {
                        display: block;
                        height: 100%;
                        margin: 0 auto;
                    }
                    .mask {
                        height: 480px;
                        background: #000;
                    }
                `}</style>
            </div>
        )
    }
}