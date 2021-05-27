import React from 'react'

function Intro() {
    return (
        <section id="one">
        <header className="major">
          <h2>Anyone can go out and buy a cookbook,<br />
            but you want a place to store all your<br /> 
            secret family recipes, handed down<br/>
            from generation to generation.</h2>
        </header>
        <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
        <ul className="actions">
          <li><a href="/register" className="button">Register Here</a></li>
          <li><a href="/login" className="button primary">Log In</a></li>
        </ul>
      </section>
    )
}

export default Intro
