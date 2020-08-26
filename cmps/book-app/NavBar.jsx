const { NavLink, withRouter } = ReactRouterDOM

export function _NavBar(props) {
    function goBack() {
        props.history.goBack()
    }

    return (
        <nav>
            <NavLink to="/">Home</NavLink>|
            <NavLink to="/about">About</NavLink>|
            <NavLink to="/book">Books</NavLink>|
            <NavLink to="/bookAdd">Book Add</NavLink>|
            <button onClick={goBack}>Back</button>
        </nav>
    )
}

export const NavBar = withRouter(_NavBar)