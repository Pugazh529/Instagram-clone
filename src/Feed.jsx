import React from 'react'
import Content from './Content'
import Reel from './Reel'

function Feed() {
  return (
    <div className='parent'>
        <div className='Reel-page'><Reel/></div>
        <div className=''><Content/></div>
    </div>
  )
}

export default Feed