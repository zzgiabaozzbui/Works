import axios from 'axios';


export const data = [
    {"id":1,
    "title":"Take out the trash",
    "description":"Don't forget the ones behind the counter",
    "date":"2022-09-30T17:00:00.000Z",
    "priority":0,
    "finish":1},
    {"id":2,
    "title":"Do homework",
    "description":"Write an essay about World War II",
    "date":"2023-10-01T17:00:00.000Z","priority":1,"finish":0},
    {"id":3,
    "title":"Mown the lawn",
    "description":"It's my turn this week :(",
    "date":"2022-10-01T17:00:00.000Z",
    "priority":1,
    "finish":0},
    {"id":4,
    "title":"Visit grandma",
    "description":"make to bring some fresh veggies",
    "date":"2023-10-01T17:00:00.000Z",
    "priority":0,
    "finish":1},
    {"id":5,"title":"Go to school",
    "description":"learn match in the school",
    "date":"2022-10-01T17:00:00.000Z",
    "priority":1,"finish":1}];
    
    



    async function getAll() {
        let response = null;
        const params = {};
        response = await axios.get('http://localhost:3001/getAll');
        
        return response.data;
    }

