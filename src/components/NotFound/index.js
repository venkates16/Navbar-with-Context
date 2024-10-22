// Write your code here
// Write your code here

import NavBar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <NavBar />
    <div className="containerHome">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notfound"
      />

      <div>
        <h1>Lost Your Way?</h1>
        <p>We cannot seem to find the page</p>
      </div>
    </div>
  </>
)

export default Home
