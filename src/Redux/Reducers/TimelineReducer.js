const initialState = {
    timelinePosts:[],
    loading: false,
    error: false, 
}

const TimelineReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "RETREVING_START":
            return {...state, loading:true, error:false}
        case "RETREVING_SUCCESS":
            return {...state, timelinePosts:[action.timelinePosts, ...state.timelinePosts],
                loading: false, error:false}
        case "RETREVING_FAILED":
            return {...state, loading: false, error:true}
        default: 
            return state
    }
}
export default TimelineReducer;
