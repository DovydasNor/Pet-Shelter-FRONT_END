import React, { useState } from 'react'
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material'
import './DonationsPageItem.scss'

const DonationsPageItem = () => {
  const [donationAmount, setDonationAmount] = useState('')
  const [donorName, setDonorName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log('Donation submitted:', { donationAmount, donorName, message })

    alert('Thank you for your donation!')
    setDonationAmount('')
    setDonorName('')
    setMessage('')
  }

  return (
    <Container className="donations-page" maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Support Our Shelter
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Your generous donations help us provide food, medical care, and a safe haven for pets in need. Every contribution makes a difference.
      </Typography>

      <form onSubmit={handleSubmit} className="donation-form">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Donation Amount"
              variant="outlined"
              fullWidth
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Donate Now
            </Button>
          </Grid>
        </Grid>
      </form>

      <section className="recent-donations">
        <Typography variant="h4" component="h2" gutterBottom>
          Recent Donations
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  John Doe
                </Typography>
                <Typography variant="body2" component="p">
                  $50 - "Keep up the great work!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Jane Smith
                </Typography>
                <Typography variant="body2" component="p">
                  $100 - "Happy to support such a wonderful cause."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Bob Johnson
                </Typography>
                <Typography variant="body2" component="p">
                  $25 - "Every little bit helps!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Container>
  )
}

export default DonationsPageItem