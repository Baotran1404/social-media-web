import { CREATE_MESSAGE_SUCCESS } from "./message.actionType";
import { CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_FAILURE, 
  CREATE_CHAT_REQUEST, CREATE_CHAT_SUCCESS, CREATE_CHAT_FAILURE,
  GET_ALL_CHAT_REQUEST, GET_ALL_CHAT_SUCCESS, GET_ALL_CHAT_FAILURE } from "./message.actionType";

import * as actionType from "./message.actionType";


const initialState = {
  messages: [],
  loading: false,
  error: null,
  chats: [],
  message: null
}

export const messageReducer = (state = initialState, action) => {
switch (action.type){
      case actionType.CREATE_MESSAGE_SUCCESS:
        return {
          ...state,
          message:action.payload
        }

    case actionType.CREATE_CHAT_SUCCESS:
        return {
          ...state,
          chats: [...state.chats, action.payload]
        }

    case actionType.GET_ALL_CHAT_SUCCESS:
        return {
          ...state,
          chats: action.payload
        }
      
  default:
    return state;
}
};
