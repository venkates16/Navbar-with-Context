// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navContainer = isDarkTheme && 'navContainer'
      return (
        <div className={navContainer}>
          <nav>
            <ul className="navbar">
              {' '}
              {isDarkTheme ? (
                <img
                  alt="website logo"
                  className="imgLogo"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                />
              ) : (
                <img
                  alt="website logo"
                  className="imgLogo"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                />
              )}
              <Link to="/">
                <li>
                  <p className="font">Home</p>
                </li>
              </Link>
              <Link to="/about">
                {' '}
                <li>
                  <p className="font">About</p>
                </li>
              </Link>
              {isDarkTheme ? (
                <button
                  type="button"
                  data-testid="theme"
                  onClick={() => {
                    toggleTheme()
                  }}
                >
                  <img
                    alt="theme"
                    className="imgLogo"
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  data-testid="theme"
                  onClick={() => {
                    toggleTheme()
                  }}
                >
                  <img
                    className="imgLogo"
                    alt="theme"
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  />
                </button>
              )}
            </ul>
          </nav>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
