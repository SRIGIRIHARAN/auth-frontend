import React from 'react'
import '../styles/Home.css'
import { Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
        <h1>Welcome to Our Website</h1>
        <p>We are here to serve you</p>
        <Button variant='primary' type='submit'>Get Strated</Button>
    </Container>
  )
}

export default Home