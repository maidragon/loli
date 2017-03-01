import React from 'react'
import Link from 'next/link'
import Content from '../components/content'
import Head from 'next/head'
import Header from '../components/header'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>loli 3.0</title>
                    <meta charSet='utf-8' />
                    <link rel="stylesheet" href="/static/global.css" />
                </Head>

                <Header/>
                <Content/>
                <style jsx>{`
                    body {
                        margin: 0;
                    }
                `}</style>
            </div>
        )
    }
}