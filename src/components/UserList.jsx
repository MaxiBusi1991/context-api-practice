import { useContext, useEffect } from "react"
import UserContext from "../context/User/UserContext"

function UserList() {

  const {users, getUsers, getProfile} = useContext(UserContext)

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="list-group h-100">
      {
        users.map(user => (
            <a className="list-group-item list-group-item-action fs-3 d-flex flex-row justify-content-start bg-dark text-white border border-dark-subtle"
            href="#!"
            key={user.id} onClick={() => getProfile(user.id) }>
              <img
              className="img-fluid mr-4 rounded-circle"
              width='80'
              src={user.avatar}
              alt={user.first_name} />
              <p className="px-3 d-flex align-items-center m-0">
                {`${user.first_name} ${user.last_name}`}
              </p>
            </a>
        ))
      }
    </div>
  )
}

export default UserList