// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

import './index.css'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="imgHome"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="imgHome"
              />
            )}
            <h1 className={`${darkTheme[1]}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
