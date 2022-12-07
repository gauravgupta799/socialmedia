import * as PostApi from "../api/UploadRequest";

const getTimelinePosts =(id)=> async(dispatch)=>{
    dispatch({type:"RETREVING_START"});
    try {
        const {data} = await PostApi.getTimelinePosts(id);
        dispatch({type:"RETREVING_SUCCESS", timelinePosts:data});
    } catch (error) {
        console.log(error);
        dispatch({type:"RETREVING_FAILED"});
    }
}

export default getTimelinePosts