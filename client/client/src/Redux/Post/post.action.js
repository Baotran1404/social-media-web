import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"
import {api} from "../../config/api"
import { CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE } from './post.actionType';


export const createPostAction=(postData)=>async(dispatch)=>{

    dispatch({type:CREATE_POST_REQUEST});

    try {
        const{data} = await api.post(`/api/posts`, postData)
        dispatch({type:CREATE_POST_SUCCESS, payload:data});
        console.log("create post", data)

    }catch (error){
        console.log("error", error)
     dispatch({type:CREATE_POST_FAILURE, payload:error});
    }

};

export const getAllPostAction=()=>async(dispatch)=>{

    dispatch({type:GET_ALL_POST_REQUEST});

    try {
        const{data} = await api.get(`/api/posts`)
        dispatch({type:GET_ALL_POST_SUCCESS, payload:data});
        console.log("get all post", data)

    }catch (error){
        console.log("error", error)
     dispatch({type:GET_ALL_POST_FAILURE   , payload:error});
    }

};

export const getUsersPostAction=(userId)=>async(dispatch)=>{

    dispatch({type:GET_USERS_POST_REQUEST});

    try {
        const{data} = await api.get(`/api/posts/user/${userId}`)
        dispatch({type:GET_USERS_POST_SUCCESS, payload:data});
        console.log("get all post of users", data)

    }catch (error){
        console.log("error", error)
     dispatch({type:GET_USERS_POST_FAILURE   , payload:error});
    }

};

export const likePostAction=(postId)=>async(dispatch)=>{

    dispatch({type:LIKE_POST_REQUEST});

    try {
        const{data} = await api.put(`/api/posts/like/${postId}`)
        dispatch({type:LIKE_POST_SUCCESS, payload:data});
        console.log("like post", data)

    }catch (error){
        console.log("error", error)
     dispatch({type:LIKE_POST_FAILURE , payload:error});
    }

};

export const createCommentAction=(reqData)=>async(dispatch)=>{

    dispatch({type: CREATE_COMMENT_REQUEST});

    try {
        const{data} = await api.post
        (`/api/comments/posts/${reqData.postId}`, reqData.data);

        dispatch({type: CREATE_COMMENT_SUCCESS, payload:data});
        console.log("create comment", data)

    }catch (error){
        console.log("error", error)
     dispatch({type: CREATE_COMMENT_FAILURE, payload:error});
    }

};