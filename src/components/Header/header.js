import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import "./Header.css"
import StripeCheckout from "react-stripe-checkout"

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

  const handlePurchase = (token) => {
    const amount = 5000
    const description = "React Course Subscription"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  return (
    <>
      <header className={
        hasScrolled ? "header HeaderScrolled" : "header"
      }>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" alt="React Dojo official logo" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <StripeCheckout amount={5000} currency="eur" image={logo} token={handlePurchase} stripeKey={''}>
            <button>Try for free</button>
          </StripeCheckout>
        </div>
      </header>
    </>
  )
}

export default Header
