import Profile from "./components/Profile"
import UserList from "./components/UserList"
import 'bootstrap/dist/css/bootstrap.min.css';

//CONTEXT

import UserState from "./context/User/UserState"

function App() {

  return (
    <UserState>
      <div className="p-4 bg-dark vh-100">
        <h1 className="text-white text-center my-3">useContext</h1>
        <div className="row">
          <div className="col-md-7">
      <UserList/>
          </div>
          <div className="col-md-5">
      <Profile/>
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App
