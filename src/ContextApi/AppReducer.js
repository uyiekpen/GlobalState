export const AppReducer = (state,action)=>{
  switch(action.type){
    case "ADD_STUDENT":
      return {
        ...state,
        student: [action.payload, ...state.student]
      }
    default:
      return state
  }
}