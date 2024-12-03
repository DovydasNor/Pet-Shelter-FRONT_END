import React, { useState, useEffect } from 'react'
import { useDonations } from './donationsContext'
import { fetchDonations, createDonation } from '../../actions/donationsActions'
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material'
import './DonationsPageItem.scss'

const DonationsPageItem = () => {
  const { state, dispatch } = useDonations()
  const [donationAmount, setDonationAmount] = useState('')
  const [donorName, setDonorName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchDonations(dispatch)
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const donation = { amount: donationAmount, name: donorName, message }
    await createDonation(dispatch, donation)
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
          {Array.isArray(state.donations) && state.donations.map((donation) => (
            <Grid item xs={12} sm={6} md={4} key={donation._id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {donation.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Amount - ${donation.amount}
                  </Typography>
                  <Typography variant="body2" component="p">
                    "{donation.message}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  )
}

export default DonationsPageItem