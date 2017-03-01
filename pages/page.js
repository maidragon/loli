import React from 'react'
import Link from 'next/link'
import Container from '../components/container'
import MovieItem from '../components/movieItem'
import 'isomorphic-fetch'

export default class extends React.Component {

    constructor (props) {
        super(props);
        this.state = {movies: []}
    }

    async componentWillMount() {
        const res = await fetch('http://loli.vc/category/-1?page=1');
        const json = await res.json();
        this.setState({movies: json.Message.Movies});
    }

    render() {
        // console.log(this.state.movies);
        const movieList = this.state.movies.map((movie) => 
            <MovieItem key={movie.MovieID} movieInfo={movie}></MovieItem>
        );

        return (
            <div className="content">

                <div className="container">
                    {movieList}
                </div>
                
                <style jsx>{`
                    .content {
                        background: #f5f5f5;
                        width: 100%;
                        min-height: 800px;
                    }
                    .container {
                        display: flex;
                        justify-content: space-between;
                        width: 1050px;
                        height: 100%;
                        margin: 0 auto;
                        padding-top: 9px;
                        padding-bottom: 9px;
                        flex-flow: row wrap;
                    }
                `}</style>
            </div>
        )
    }
}