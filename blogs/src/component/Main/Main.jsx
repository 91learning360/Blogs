import React from 'react'
import Cards from './Cards/Cards'

const Main = () => {
  return (
    <div style={{border: '2px solid black', height: "100vh", overflowY: "scroll"}}>
        <Cards />
    </div>
  )
}

export default Main