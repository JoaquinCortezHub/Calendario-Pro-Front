

function Header (props) {
    const logIn = <button className="header-button-border">Log In</button>
    const signUp = <button className="header-button-border">Sign Up</button>

    return(
        <div className='header'>
            <h2 className='header-title'>CalendarioPro</h2>
            <div  className='header-buttons'>
                
                {props.isLoggedIn ? logIn : signUp}
                <button className="header-button">Start Now</button>
            </div>
        </div>
    );
};

export default Header;