import * as actionType from "./message.actionType"
import { api } from '../../config/api.js';


export const createMessage = (message) => async(dispatch)=>{
    dispatch({type:actionType.CREATE_MESSAGE_REQUEST});
    try{

        const {data} = await api.post(`/api/messages/chat/${message.chatId}`, message);
        console.log("Message created successfully", data);
        dispatch({type:actionType.CREATE_MESSAGE_SUCCESS, payload:data});

    }catch(error){
        console.log("Error in creating message", error);
        dispatch({type:actionType.CREATE_MESSAGE_FAILURE, payload:error});
    }
}

export const createChat = (chat) => async(dispatch)=>{
    dispatch({type:actionType.CREATE_CHAT_REQUEST});
    try{

        const {data} = await api.post(`/api/chats`, chat);
        console.log("Chat created successfully", data);
        
        dispatch({type:actionType.CREATE_CHAT_SUCCESS, payload:data});

    }catch(error){
        console.log("Error in creating chat", error);
        dispatch({type:actionType.CREATE_CHAT_FAILURE, payload:error});
    }
}

export const getAllChats = () => async(dispatch)=>{
    dispatch({type:actionType.GET_ALL_CHAT_REQUEST});
    try{

        const {data} = await api.get(`/api/chats`);
        console.log("All chats ", data);

        dispatch({type:actionType.GET_ALL_CHAT_SUCCESS, payload:data});

    }catch(error){
        console.log("Error in fetching all chats", error);
        dispatch({type:actionType.GET_ALL_CHAT_FAILURE, payload:error});
    }
}

