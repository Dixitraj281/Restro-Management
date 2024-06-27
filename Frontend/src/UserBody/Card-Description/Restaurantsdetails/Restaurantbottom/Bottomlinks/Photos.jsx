import React from 'react';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import './photos.css'

const Photos = ({ photo }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {photo.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
            <Card className='photocard-item'>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                height="200"
                image={items.src}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Photos;
