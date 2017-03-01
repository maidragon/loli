import React from 'react'
import Image from './image'
import Tag from './tag'
import Link from 'next/link'

export default class extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="movie-item">
                
                <a href={'/m/' + this.props.movieInfo.MovieID} target="_blank">
                    <Image src={this.props.movieInfo.CoverImg}></Image>
                </a>

                <div className="description">
                    <Tag name="素人"></Tag>

                    <a href={'/m/' + this.props.movieInfo.MovieID} target="_blank">
                        <p className="title">{this.props.movieInfo.Name}</p>
                    </a>
                </div>
                
                <style jsx>{`
                    .movie-item {
                        width: calc(50% - 4px);
                        margin-top: 8px;
                        margin-bottom: 8px;
                    }
                    .description {
                        background: #fff;
                        text-align: center;
                    }
                    .description .title {
                        display: inline-block;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        font-size: 1.5rem;
                        height: 26px;
                        line-height: 26px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-align: center;
                        font-weight: 400;
                        cursor: pointer;
                        vertical-align: middle;
                        max-width: 400px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                `}</style>
            </div>
        )
    }
}