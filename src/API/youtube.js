import axios from "axios";
const KEY='AIzaSyDc6Wr8AcRnCas9l-KICnncZY08elDS4Hk';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});