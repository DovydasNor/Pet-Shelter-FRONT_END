import { Container, Grid, Typography, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a dedicated pet shelter providing a safe haven for pets in need. Our mission is to rescue, rehabilitate, and rehome abandoned and neglected pets.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@petshelter.com
            </Typography>
            <Typography variant="body2">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2">
              Address: 123 Pet Street, Pet City, PC 12345
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div className="social-links">
              <IconButton href="https://www.facebook.com/" target="_blank" color="inherit" className="social-link">
                <Facebook />
              </IconButton>
              <IconButton href="https://x.com/" target="_blank" color="inherit" className="social-link">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com/" target="_blank" color="inherit" className="social-link">
                <Instagram />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" className="footer-bottom">
          © {new Date().getFullYear()} Pet Shelter. All rights reserved.
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer