import {request} from "./request"

export function getHomeBlogs(){
    return request ({
        url:'blogs.json'
    })
}