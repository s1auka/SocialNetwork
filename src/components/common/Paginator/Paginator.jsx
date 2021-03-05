import React from "react";
import styles from "./Paginator.module.css";

class Paginator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pagesCount: 0,
            pages: [],
        }
    }

    componentDidMount() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.usersOnPage);
        let getPages = () => {
            let pages = [];
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }
            return pages;
        }

        this.setState({
            pagesCount: pagesCount,
            pages: getPages(),
        })
    }

    render() {
        return (
            <div className={styles.pagination}>
                {this.state.pages.map((p, index) => {
                    return <span key={index.toString()} className={(this.props.currentPage === p) ? styles.selectedPage : undefined} onClick={(e) => { this.props.onPageChanged(p) }}>{p}</span>
                })
                }
            </div>
        )
    }
}

export default Paginator;