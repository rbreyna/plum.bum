
import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className="navbar is-light">
        <div className="container">
          
            {/* logo */}
            <a href ="/" className="navbar-brand">
            <img id="nav-logo" src="./assets/images/plumbum-main.png" alt="" />
            </a>

            {/* menu items */}
            <div className="navbar-end">
              {/* if there is no user. show the login button */}
              {!isLoading && !user && (
                <>
                <a href='/about' className="navbar-item">About</a>
                <a href="/" className="navbar-item">Dashboard</a>
                <button onClick={loginWithRedirect} className="navbar-item">
                  Login
                </button>
                </>
              )}

              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <span className="navbar-item">Hello {user.name}!</span>
                  <a href='/about' className="navbar-item">About</a>
                  <a href="/" className="navbar-item">Dashboard</a>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          
        </div>
      </nav>
    </header>
  );
}
