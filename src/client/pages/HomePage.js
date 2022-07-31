import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>New Homepage with nodemon</div>
      <button onClick={()=> console.log('this is console.log')}>Click on me</button>
    </div>
  )
}

export default {
  component: HomePage
}