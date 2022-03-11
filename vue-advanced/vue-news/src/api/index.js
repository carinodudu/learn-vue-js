import axios from 'axios'; // node_modules에서 가져올 경우 경로 생략 가능

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`); // ES6 문법
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`); 
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList
}