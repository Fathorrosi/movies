import axios from "axios";

export const GET_MOVIE_LIST = "GET_MOVIE_LIST";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const UPDATE_LOADING = "UPDATE_LOADING";
export const UPDATE_POPUP = "UPDATE_POPUP";


let page = 0;

export function getMovieList(title, isNew) {
    setTimeout(() => {
    }, 5000);
    isNew ? page = 0 : page = page + 1;
    page = page + 1
    let limit = page;
    let listMovie = [];
    let iteration;
    return (dispatch) => {
        for (let i = 1; i < page + 1; i++) {
            isNew ? iteration = 1 : iteration = i;
            // console.log(iteration)
            axios.get("http://omdbapi.com/?apikey=faf7e5bb&s=" + title + "&page=" + iteration).then((response) => {
                let temp = response.data.Search
                let counter = 0;
                for (let x of temp) {
                    listMovie.push(x)
                    counter = counter + 1
                }
                if (i === limit) {
                    // console.log(listMovie)
                    return dispatch({
                        type: GET_MOVIE_LIST,
                        payload: {
                            data: listMovie,
                            errorMessage: false,
                        }
                    });
                }

            }).catch(function (error) {
                if (error.response) {
                    if(error.response.data.Error === 'Request limit reached!'){
                        alert(error.response.data.Error + '\n\nPlease check your API, maybe it\'s down or there is some other problem')
                    } else {
                        alert(error.response.data.Error)
                    }
                }
            });

        }
    }
}

export function setTtile(newTitle) {
    return (dispatch) => {
        return dispatch({
            type: UPDATE_TITLE,
            newTitle: newTitle
        })
    }
}

export function setSelected(selectedMovie) {
    return (dispatch) => {
        return dispatch({
            type: UPDATE_SELECTED,
            selectedMovie: selectedMovie
        })
    }
}

export function setLoading(loading) {
    return (dispatch) => {
        return dispatch({
            type: UPDATE_LOADING,
            loading: loading
        })
    }
}

export function setPopup(showPopup) {
    return (dispatch) => {
        return dispatch({
            type: UPDATE_POPUP,
            showPopup: showPopup
        })
    }
}




