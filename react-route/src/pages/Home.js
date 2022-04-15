import { Link } from "react-router-dom"


const userId = 10;

export default function Home() {
  return (<>
    <div>Home</div>
    <Link to={`/users/${userId}`}>Usuarios</Link>
    </>)
}
