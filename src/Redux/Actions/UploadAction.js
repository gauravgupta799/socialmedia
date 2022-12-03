import * as UploadApi from "../api/UploadRequest";

export const UploadImage = (data) => async(dispatch)=> {
    try {
        await UploadApi.uploadImage(data);
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (data)=> async(dispatch) =>{
    dispatch({type:"UPLOAD_START"})
  try {
    const newPost = await UploadApi.uploadPost(data);
    // const newPost = await axios.post(`${baseUrl}/post/createNewPost`, data)
    dispatch({type:"UPLOAD_SUCCESS", postData:newPost.data});
  } catch (error) {
    console.log(error)
    dispatch({type:"UPLOAD_FAILED"})
  }
}