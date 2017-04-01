import React from 'react'
import Container from './container'

export default class extends React.Component {

    constructor (props) {
        super(props);
        this.lastPage = this.lastPage.bind(this);
    }

    lastPage() {
        var lastPage = +this.props.page - 1;

        if (lastPage > 0) {
            window.location.href = '/p/' + lastPage;
        } 
    }

    render() {
        return (
            <div className="pagination">
                
                <a className="last-page" onClick={this.lastPage}>上一页</a>
                <a className="next-page" href={'/p/' + (+this.props.page + 1)}>下一页</a>
                
                <style jsx>{`
                    .pagination {
                        padding: 30px 0;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                    }
                    .last-page {
                        color: #fff;
                        -webkit-transition: opacity .1s linear;
                        transition: opacity .1s linear;
                    }
                    .last-page:hover {
                        opacity: .7;
                    }
                    .next-page {
                        color: #fff;
                        -webkit-transition: opacity .1s linear;
                        transition: opacity .1s linear;
                    }
                    .next-page:hover {
                        opacity: .7;
                    }
                `}</style>
            </div>
        )
    }
}