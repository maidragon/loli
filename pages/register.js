import React from 'react'
import Link from 'next/link'
import Content from '../components/content'
import Head from 'next/head'
import Header from '../components/header'
import Pagination from '../components/pagination'
import Footer from '../components/footer'
import LoginContent from '../components/loginContent'
import Hoshi from '../components/hoshi'
import Button from '../components/button'
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
                <LoginContent>
                    <Hoshi width={500} type="password" name="用户名"/>
                    <Hoshi name="密码" type="password"/>
                    <Button>提交</Button>
                </LoginContent>
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