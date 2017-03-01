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
                    }
                    .thumbnail img {
                        display: block;
                        max-width: 100%;
                        height: auto;
                    }
                `}</style>
            </div>
            
            
        )
    }
}