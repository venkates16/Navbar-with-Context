// Write your code here

// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = isDarkTheme && ['darkTheme', 'colorText']
      return (
        <>
          <NavBar />
          <div className={`containerHome ${darkTheme[0]}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="imgHome"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="imgHome"
              />
            )}
            <h1 className={`${darkTheme[1]}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
