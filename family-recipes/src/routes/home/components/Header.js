import React,{ useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js'
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
  <header id="header">
    <div className="inner">
      <a href="\#" className="image avatar"><img src="/images/avatar.jpg" alt="" /></a>
      <h1><strong>Secret Family Recipes</strong>, your place for <br />
        generation after generation of tradition</h1>
    </div>
  </header>
  )
}

export default Header;