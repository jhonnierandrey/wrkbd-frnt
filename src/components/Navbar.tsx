import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout();
    const { state } = useAuthContext();

    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    Workout Buddy
                </Link>
                <nav>
                    {
                        state.user ?
                            <div>
                                <span>{state?.user?.email}</span>
                                <button onClick={handleClick}>Logout</button>
                            </div>
                            :
                            <div>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Sign up</Link>
                            </div>
                    }
                </nav>
            </div>
        </header>
    )
}

export default Navbar