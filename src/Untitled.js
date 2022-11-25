import axios from "axios";

const arr = [];

const request = 'manchester';
const maxRes = 2;

const res = async () => {
    const  {data}  = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${request}&maxResults=${maxRes}&type=video&key=AIzaSyDhVD6w4H7iP-d8c-n8XfNSzGzTcTu5hTU`);

    const newData = {
        id: request,
        maxResult: maxRes,
        data: data.items
    }

    arr.push(newData);
}

res();
console.log(arr);

