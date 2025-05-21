import React, { useEffect, useState } from 'react';
import { axiosPost } from '../../utils/api';
import { Box, Typography, Grid } from '@mui/material';
import Footer from '../../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostContent() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const formData = new FormData();
        formData.append('slug', slug);
        const response = await axiosPost('/posts/fetchPostBySlug', formData);
        if (response && response.post) {
          setPost(response.post);
        }else {
          navigate('/blog', { replace: true }); 
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/blog', { replace: true }); // Redirect on error too
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return '';
  }

  return (
    <>
    <Box sx={{ padding: 4 }}>
        <div  className="section-title blog-header">
          <h2>{post.title}</h2>
        </div>
      <Typography style={{padding: '0px 40px'}} variant="body1" dangerouslySetInnerHTML={{ __html: post.page_content }} />
      {post.photos && post.photos.length > 0 && (
        <Grid container spacing={2} sx={{ mb: 4, justifyContent: 'center' }}>
          {post.photos.map((photo) => (
            <Grid item xs={12} sm={6} md={4} key={photo.id} sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                  padding: 1,
                }}
              >
              <Box
                component="img"
                src={`https://hha.ro/api/public/uploads/pages/${photo.file_name}`}
                alt={post.title}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 1,
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 4,
                  },
                }}
              />

              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
    <Footer />
    </>
  );
}
