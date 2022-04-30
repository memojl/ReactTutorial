import { useNavigate, Link, Outlet } from "react-router-dom";
//import NotFoundPage from "./NotFoundPage";

export default function Dashboard() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>

            <Link to="welcome">Welcome</Link>
            <Outlet />
        </div>
    )
}
