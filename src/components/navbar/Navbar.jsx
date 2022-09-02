import React from 'react'

const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-12 text-white'>
      <li className='nav-link'><a href="#">home</a></li>
      <li className='nav-link'><a href="#">about us</a></li>
      <li className='nav-link'><a href="#">our works</a></li>
      <li className='nav-link'><a href="#">local groups</a></li>
      <li className='nav-link'><a href="#">blogs</a></li>
    </ul> 
</nav>
  )
}

export default Navbar