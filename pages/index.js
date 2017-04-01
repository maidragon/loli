import React from 'react'
import Link from 'next/link'
import Content from '../components/content'
import Head from 'next/head'
import Header from '../components/header'
import Pagination from '../components/pagination'
import Footer from '../components/footer'
import verify from '../lib/tool'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    async componentWillMount() {
        if (localStorage.getItem("userid") != null) {
            verify();
        }
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
                <Content page={1}/>
                <Footer/>
                <style jsx>{`
                    body {
                        margin: 0;
                    }
                `}</style>
            </div>
        )
    }
}