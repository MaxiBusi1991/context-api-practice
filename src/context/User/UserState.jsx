import { useReducer } from "react"
import UserReducer from './UserReducer'
import UserContext from "./UserContext"
import axios from "axios"


const UserState = (props) => {

  const initialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    try {
      const res = await axios.get('https://reqres.in/api/users');
    dispatch({
      type: 'GET_USERS',
      payload: res.data.data
    })
    } catch (error) {
      console.log(error)
    }
  }

  const getProfile = async (id) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      const { data } = res;
    dispatch({
      type: 'GET_PROFILE',
      payload: data.data
    })
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
    }}>
      {props.children}
    </UserContext.Provider>
  )

}

export default UserState;