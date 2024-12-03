import React from 'react'
import {  Typography, Grid, Card, CardContent } from '@mui/material'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='home-page'>
      <header className="hero-section">
        <div className="hero-overlay">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our Pet Shelter
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            We provide a safe haven for pets in need and help them find loving homes.
          </Typography>
        </div>
      </header>

      <section className="about-section">
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Our pet shelter is dedicated to rescuing and rehabilitating abandoned and neglected pets. We provide them with the care and love they need until they find their forever homes. Join us in making a difference in the lives of these wonderful animals.
        </Typography>
      </section>

      <section className="services-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Pet Adoption
                </Typography>
                <Typography variant="body1" component="p">
                  Find your new best friend from our list of adoptable pets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Volunteer
                </Typography>
                <Typography variant="body1" component="p">
                  Join our team of dedicated volunteers and help us care for the pets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Donate
                </Typography>
                <Typography variant="body1" component="p">
                  Support our mission by making a donation to our shelter.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </div>
   
  )
}

export default HomePage