import axios from "axios";


const BASE_PATH = `http://localhost:80/movieList`


export const getMovieList = async () => {
    const res = await axios.get(`${BASE_PATH}`)
    return res.data
}

export const getMovie = async (id) => {
    const res = await axios.get(`${BASE_PATH}/${id}`)
    return res.data
}

export const insertMovie = async (movie) => {
    movie.path = movie.path || 'https://breffee.net/data/editor/2210/20221013104826_fd5326c8ac17c04c88d91f03a8d313d8_5r8y.jpg'
    await axios.post(`${BASE_PATH}`, movie)
        .then(res => console.log(`정상적으로 추가되었습니다.`))
        .catch(error => console.error(error))
}

export const saveMovie = async (movie) => {
    await axios.put(`${BASE_PATH}`, movie)
        .then(res => console.log(`정상적으로 추가되었습니다.`))
        .catch(error => console.error(error))
}

export const deleteMovie = async (id) => {
    await axios.delete(`${BASE_PATH}/${id}`)
        .then(res => {console.log(`영화가 정상적으로 삭제되었습니다.`)})
        .catch(error => {console.error(error)})
}