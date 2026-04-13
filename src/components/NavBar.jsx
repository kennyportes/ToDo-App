import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg mb-4"
            style={{ backgroundColor: "#e3f2fd", fontWeight: "bold" }}
            data-bs-theme="light"
        >
            <Link className="navbar-brand text-Black" to="/Task">
                Task Management App
            </Link>
            <div>
                
                <Link className="btn btn-dark mx-2" to="/Task">
                    Tasks
                </Link>

                <Link className="btn btn-dark" to="/Contact">
                    Contact
                </Link>
            </div>

        </nav>
    )
}

export default NavBar;