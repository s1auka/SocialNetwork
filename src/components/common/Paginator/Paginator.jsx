import React from "react";
import styles from "./Paginator.module.css";

class Paginator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pagesCount: 0,
            pages: [],
            portionsOfPages: 0,
            currentPortion: 1,
        }
    }

    componentDidMount() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.usersOnPage);
        let portionsOfPages = Math.ceil(pagesCount / this.props.pagesInPortion);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        this.setState({
            pagesCount: pagesCount,
            portionsOfPages: portionsOfPages,
            pages: pages,
            currentPortion: Math.ceil(this.props.currentPage / this.props.usersOnPage),
        })
    }

    changePortion = (e) => {
        let changePortionBy = 0;
        if (e.target.name === "prevPortion") {
            changePortionBy = -1;
        } else if (e.target.name === "nextPortion") {
            changePortionBy = 1;
        }
        this.setState({
            currentPortion: this.state.currentPortion + changePortionBy,
        })
    }

    render() {
        let leftPortionPageNumber = (this.state.currentPortion - 1) * this.props.pagesInPortion + 1;
        let rightPortionPageNumber = this.state.currentPortion * this.props.pagesInPortion;
        return (
            <div className={styles.pagination} onClick={(e) => this.changePortion(e)}>
                {(this.state.currentPortion !== 1) ?
                    <>
                        <button name="prevPortion">Prev</button>
                        <span className={(this.props.currentPage === 1) ? styles.selectedPage : undefined} onClick={(e) => { this.props.onPageChanged(1) }}>{1}</span>
                        <span>...</span>
                    </>
                    : ''
                }
                {this.state.pages
                    .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
                    .map((p, index) => {
                        return <span key={index.toString()} className={(this.props.currentPage === p) ? styles.selectedPage : undefined} onClick={(e) => { this.props.onPageChanged(p) }}>{p}</span>
                    })
                }
                {(this.state.currentPortion !== this.state.portionsOfPages) ?
                    <>
                        <span>...</span>
                        <span className={(this.props.currentPage === this.state.pagesCount) ? styles.selectedPage : undefined} onClick={(e) => { this.props.onPageChanged(this.state.pagesCount) }}>{this.state.pagesCount}</span>
                        <button name="nextPortion">Next</button>
                    </>
                    : ''
                }
            </div>

        )
    }
}

export default Paginator;