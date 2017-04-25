import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    async componentDidMount() {
    }

    render() {
        var input;

        return (
            <div className="hoshi">
                <span className="input input--hoshi">
                    {this.props.type == 'text' && (<input className="input__field input__field--hoshi" type="text" id="input-4" />)}
                    {this.props.type == 'password' && (<input className="input__field input__field--hoshi" type="password" id="input-4" />)}
                    <label className="input__label input__label--hoshi input__label--hoshi-color-4" for="input-4">
                        <span className="input__label-content input__label-content--hoshi">{this.props.name}</span>
                    </label>
                </span>
                
                <style jsx>{`
                    
                    #input-4:valid .input__label-content--hoshi {
                        visibility: hidden;
                    }
                    
                    @import url(http://fonts.googleapis.com/css?family=Raleway:200,500,700,800);

                    @font-face {
                        font-weight: normal;
                        font-style: normal;
                        font-family: 'codropsicons';
                        src:url('../fonts/codropsicons/codropsicons.eot');
                        src:url('../fonts/codropsicons/codropsicons.eot?#iefix') format('embedded-opentype'),
                            url('../fonts/codropsicons/codropsicons.woff') format('woff'),
                            url('../fonts/codropsicons/codropsicons.ttf') format('truetype'),
                            url('../fonts/codropsicons/codropsicons.svg#codropsicons') format('svg');
                    }

                    *, *:after, *:before { -webkit-box-sizing: border-box; box-sizing: border-box; }

                    body {
                        background: #f9f7f6;
                        color: #404d5b;
                        font-weight: 500;
                        font-size: 1.05em;
                        font-family: 'Raleway', Arial, sans-serif;
                      margin: 0 auto;
                        text-align: center;
                    }


                    .bgcolor-1 { background: #f0efee; }
                    .bgcolor-2 { background: #f9f9f9; }
                    .bgcolor-3 { background: #e8e8e8; }
                    .bgcolor-4 { background: #2f3238; color: #fff; }
                    .bgcolor-5 { background: #df6659; color: #521e18; }
                    .bgcolor-6 { background: #2fa8ec; }
                    .bgcolor-7 { background: #d0d6d6; }
                    .bgcolor-8 { background: #3d4444; color: #fff; }


                    /* Component Start */
                    .input {
                        position: relative;
                        z-index: 1;
                        display: inline-block;
                        margin: 1em;
                        max-width: 400px;
                        width: 260px;
                        vertical-align: top;
                    }

                    .input__field {
                        position: relative;
                        display: block;
                        float: right;
                        padding: 0.8em;
                        width: 60%;
                        border: none;
                        border-radius: 0;
                        background: #f0f0f0;
                        color: #aaa;
                        font-weight: bold;
                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                        -webkit-appearance: none; /* for box shadows to show on iOS */
                        font-size: 19px;
                    }

                    .input__field:focus {
                        outline: none;
                    }

                    .input__label {
                        display: inline-block;
                        float: right;
                        padding: 0 1em;
                        width: 40%;
                        color: #6a7989;
                        font-weight: bold;
                        font-size: 70.25%;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;
                        -khtml-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }

                    .input__label-content {
                        position: relative;
                        display: block;
                        padding: .7em 0;
                        width: 100%;
                    }

                    .graphic {
                        position: absolute;
                        top: 0;
                        left: 0;
                        fill: none;
                    }

                    .icon {
                        color: #ddd;
                        font-size: 150%;
                    }

                    /* Individual styles */

                    /* Hoshi */
                    .input--hoshi {
                        overflow: hidden;
                    }

                    .input__field--hoshi {
                        margin-top: 1em;
                        padding: 0.85em 0.15em;
                        width: 100%;
                        background: transparent;
                        color: #595F6E;
                    }

                    .input__label--hoshi {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        padding: 0 0.25em;
                        width: 100%;
                        height: calc(100% - 1em);
                        text-align: left;
                        pointer-events: none;
                    }

                    .input__label-content--hoshi {
                        position: absolute;
                    }

                    .input__label--hoshi::before,
                    .input__label--hoshi::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: calc(100% - 10px);
                        border-bottom: 1px solid #B9C1CA;
                    }

                    .input__label--hoshi::after {
                        margin-top: 2px;
                        border-bottom: 2px solid red;
                        -webkit-transform: translate3d(-100%, 0, 0);
                        transform: translate3d(-100%, 0, 0);
                        -webkit-transition: -webkit-transform 0.3s;
                        transition: transform 0.3s;
                    }

                    .input__label--hoshi-color-1::after {
                        border-color: hsl(200, 100%, 50%);
                    }

                    .input__label--hoshi-color-2::after {
                        border-color: hsl(160, 100%, 50%);
                    }

                    .input__label--hoshi-color-3::after {
                        border-color: hsl(20, 100%, 50%);
                    }
                    .input__label--hoshi-color-4::after {
                        border-color: #fff;
                    }

                    .input__field--hoshi:focus + .input__label--hoshi::after,
                    .input--filled .input__label--hoshi::after {
                        -webkit-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
                    }

                    .input__field--hoshi:focus + .input__label--hoshi .input__label-content--hoshi,
                    .input--filled .input__label-content--hoshi {
                        -webkit-animation: anim-1 0.3s forwards;
                        animation: anim-1 0.3s forwards;
                    }

                    @-webkit-keyframes anim-1 {
                        50% {
                            opacity: 0;
                            -webkit-transform: translate3d(1em, 0, 0);
                            transform: translate3d(1em, 0, 0);
                        }
                        51% {
                            opacity: 0;
                            -webkit-transform: translate3d(-1em, -40%, 0);
                            transform: translate3d(-1em, -40%, 0);
                        }
                        100% {
                            opacity: 1;
                            -webkit-transform: translate3d(0, -40%, 0);
                            transform: translate3d(0, -40%, 0);
                        }
                    }

                    @keyframes anim-1 {
                        50% {
                            opacity: 0;
                            -webkit-transform: translate3d(1em, 0, 0);
                            transform: translate3d(1em, 0, 0);
                        }
                        51% {
                            opacity: 0;
                            -webkit-transform: translate3d(-1em, -40%, 0);
                            transform: translate3d(-1em, -40%, 0);
                        }
                        100% {
                            opacity: 1;
                            -webkit-transform: translate3d(0, -40%, 0);
                            transform: translate3d(0, -40%, 0);
                        }
                    }
                `}</style>
            </div>
        )
    }
}