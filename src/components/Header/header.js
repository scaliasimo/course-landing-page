import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={
        hasScrolled ? "header HeaderScrolled" : "header"
      }>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </header>
    </>
  )
}

export default Header
