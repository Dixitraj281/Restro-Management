import React from 'react'
import { Container, Grid, Card, CardMedia } from '@mui/material';
import './menu.css'

export const Menu = ({menu}) => {
    return (
        <>
            <Container>
      <Grid container spacing={3}>
        {menu.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
            <Card className='photocard-item'>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                height="100%"
                image={items.src}
                className='menucard-img'
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
        </>
    )
}

export default Menu;