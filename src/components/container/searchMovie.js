import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from '../action/action';
import Popup from './Popup';

class SearchMovie extends Component {

    componentDidMount() {
        // Detect when scrolled to bottom
        this.refs.myscroll.addEventListener("scroll", () => {
            if (
                Math.ceil(this.refs.myscroll.scrollTop) + this.refs.myscroll.clientHeight >=
                this.refs.myscroll.scrollHeight
            ) {
                this.loadMore();
            }
        });
    }

    setTitle = (val) => {
        this.props.setTtile(val.target.value)
    }

    togglePopup() {
        this.props.setPopup(!this.props.showPopup)
    }

    showPopUp(img) {
        this.props.setSelected(img)
        this.props.setPopup(!this.props.showPopup)
        this.props.setLoading(false)
    }

    searchMovie(title, isNew) {
        this.props.setLoading(true)
        setTimeout(() => {
            this.props.getMovieList(title, isNew)
            this.props.setLoading(false)
        }, 1000);
    }


    loadMore() {
        this.props.setLoading(true)
        setTimeout(() => {
            this.props.getMovieList(this.props.title, false);
            this.props.setLoading(false)
        }, 2000);
    }

    render() {
        return (
            <div align="center" className="App" ref="myscroll" style={{ height: "770px", overflow: "auto" }}>
                <header className="App-header">
                    <h1 className="App-title">Welcome to Movie</h1>
                </header>
                <ul>
                    <input type="text" onChange={this.setTitle} />
                    <button onClick={() => this.searchMovie(this.props.title, true)}>search</button>
                    <br></br>
                    {this.props.listMovie.map(listMovie =>
                        <div>
                            <h2 >{listMovie.Title}</h2>
                            <img onClick={() => this.showPopUp(listMovie.Poster)} src={listMovie.Poster} />
                            <p >Year : {listMovie.Year}</p>
                            <p >Type : {listMovie.Type}</p>
                            <br></br>
                        </div>
                    )}
                </ul>
                {
                    this.props.loading
                        ? <p className="App-intro">
                            loading ...
                </p>
                        : ""
                }

                {this.props.showPopup ?
                    <Popup
                        img={this.props.selected}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, action)(SearchMovie);