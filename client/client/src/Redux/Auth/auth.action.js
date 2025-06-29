import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
  GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE,
  SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE
} from "./auth.actionType";
import { API_BASE_URL } from '../../config/api.js';
import axios from "axios"; 
import { api } from '../../config/api.js';



export const loginUserAction = (loginData) => async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST});
    try{
        const {data} = await axios.post(
            `${API_BASE_URL}/auth/signin`, 
            loginData);

        if(data.token){
            localStorage.setItem("jwt", data.token);
            
        }

        console.log("login success", data);

        dispatch({type:LOGIN_SUCCESS, payload:data.token})

    }catch(error){

        console.log("---------", error)
        dispatch({type:LOGIN_FAILURE, payload:error});
    }
}

export const registerUserAction = (loginData) => async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST});
    try{
        const {data} = await axios.post(
            `${API_BASE_URL}/auth/signup`, 
            loginData.data);

        if(data.token){
            localStorage.setItem("jwt", data.token);
            
        }

        console.log("register-----", data)

        dispatch({type:LOGIN_SUCCESS, payload:data.token});

    }catch(error){

        console.log("---------", error)
        dispatch({type:LOGIN_FAILURE, payload:error});
    }
}

export const getProfileAction = (jwt) => async(dispatch)=>{

    dispatch({type:GET_PROFILE_REQUEST});
    try{
        const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`,
 
 {
                headers:{
    Authorization:`Bearer ${jwt}`, 
},
 }  );
    

        console.log("profile-----", data)

        dispatch({type:GET_PROFILE_SUCCESS, payload:data})

    }catch(error){

        console.log("---------", error)
        dispatch({type:GET_PROFILE_FAILURE, payload:error})
    }
};

export const updateProfileAction = (reqData) => async(dispatch)=>{

    dispatch({type:UPDATE_PROFILE_REQUEST});
    try{
        const {data} = await api.put(`${API_BASE_URL}/api/users`,reqData);
    

        console.log("update profile-----", data)

        dispatch({type:UPDATE_PROFILE_SUCCESS, payload:data})

    }catch(error){

        console.log("---------", error)
        dispatch({type:UPDATE_PROFILE_FAILURE, payload:error})
    }
};

export const searchUser = (query) => async(dispatch)=>{

    dispatch({type:SEARCH_USER_REQUEST});
    try{
        const jwt = localStorage.getItem("jwt");
        const {data} = await axios.get(
            `${API_BASE_URL}/api/users/search?query=${query}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            }
        );
    
  

        console.log("search user-----", data);

        dispatch({type:SEARCH_USER_SUCCESS, payload:data});

    }catch(error){

        console.log("---------", error);
        dispatch({type:SEARCH_USER_FAILURE
            , payload:error});
    }
};



