import React from 'react'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="thumbnail">
                <img src={this.props.src}/>

                <style jsx>{`
                    .thumbnail {
                        position: relative;
                        padding-top: 66.7%;
                    }
                    .thumbnail img {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        display: block;
                        max-width: 100%;
                        height: auto;
                    }
                `}</style>
            </div>
            
            
        )
    }
}