import logo from './logo.svg'
import './App.css'

// const functions = require('firebase-functions')
// const request = require('request-promise')

const { REACT_APP_ENV } = process.env

function App () {
  console.log(REACT_APP_ENV)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {REACT_APP_ENV}
        </a>
      </header>
    </div>
  )
}

export default App
