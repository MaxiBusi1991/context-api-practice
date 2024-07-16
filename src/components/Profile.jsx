import { useContext } from "react"
import UserContext from "../context/User/UserContext"


function Profile() {

  const {selectedUser} = useContext(UserContext)
  

  return (
    <>
      {selectedUser ?(
        <div className="card card-body text-center bg-dark text-white border border-dark-subtle">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.first_name}
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{width: 180}} />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3 className="text-light text-opacity-50">email: {selectedUser.email}</h3>
        </div>)
        :
        (<h1 className="text-white">No user selected</h1>)}
    </>
  )
}

export default Profile