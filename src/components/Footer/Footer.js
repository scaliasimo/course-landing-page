import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../images/logo.png";

const FooterGroup = styled.div`
    background: #f1f3f5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: 486791;
    max-width: 600px;
    margin: 0 auto;
`

const Button = styled.button`
    background: linear-gradient(93.96deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;  
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    margin: 0 auto;
    justify-self: center;
    cursor: pointer;
    transition: 0.8s ;

    &:hover {
        box-shadow: 0 20px 40px  rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
`

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

const Footer = ({ data, children }) => (
    <FooterGroup>
        <Text>
            Prototype and build apps today with React and Swift.
        </Text>
        <div style={{ textAlign: 'center' }}>
            <StripeCheckout amount={5000} currency="eur" image={logo} token={handlePurchase} stripeKey={''} style={{ textAlign: 'center' }}>
                <Button>Start free trial</Button>
            </StripeCheckout >
        </div>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
                <a key={edge.node.title} href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup >
)

export default Footer