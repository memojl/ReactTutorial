import { Link } from "react-router-dom"

export default function Users() {
  const userId = 10;
  return (<>
    <div>Users</div>
    <Link to={`/user/${userId}`}>Ver Usuario 10</Link>
  </>)
}
