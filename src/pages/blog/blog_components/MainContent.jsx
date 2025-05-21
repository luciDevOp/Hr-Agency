import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const posts = [
  {
    id: 1,
    title: 'Sample Post 1',
    description: 'This is a sample description for post 1.',
    image: 'assets/img/sample1.jpg',
    date: '17 April 2025',
  },
  {
    id: 2,
    title: 'Sample Post 2',
    description: 'This is a sample description for post 2.',
    image: 'assets/img/sample2.jpg',
    date: '18 April 2025',
  },
  // ...add more posts as needed...
];

function MainContent() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 4,
      }}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            width: 300,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={post.image}
            alt={post.title}
            sx={{
              height: 180,
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {post.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {post.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default MainContent;
