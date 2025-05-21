import * as React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Chip, Button, useMediaQuery } from '@mui/material';
import { axiosPost } from "../../../utils/api";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function MainContent() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;
  
  const filteredPosts = posts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );
  
  const paginatedPosts = filteredPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );
  const [opacity, setOpacity] = useState(1);

  const handlePageChange = (direction) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentPage((prev) => prev + direction);
      setOpacity(1);
    }, 200);
  };

  const isMobile = useMediaQuery('(max-width:1299px)');

  const navigateToPost = (slug) => {
    navigate(`/blog/${slug}`);
  };

    useEffect(() => {
      fetchPosts();
      fetchCategories();
    }, []);

    useEffect(() => {
      setCurrentPage(0);
    }, [selectedCategory]);

      const fetchPosts = async () => {
        try {
          // var formData = new FormData();
          // formData.append("Filters_completed", filters.completed);
          // formData.append("PaginationInfo_Page", page + 1);
          // formData.append("PaginationInfo_RowsPerPage", rowsPerPage);
    
          const response = await axiosPost("/posts/fetchAllPosts");
    
          if (response && response.posts) {
            setPosts(response.posts);
          }
    
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      };
      const fetchCategories = async () => {
        try {
          var formData = new FormData();
          formData.append("type", "posts");
          const response = await axiosPost("/posts/fetchCategories", formData);
          if (response && response.categories) {
            setCategories(response.categories);
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
      const navigate = useNavigate();


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h2" >
          Blog
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'center', // ← changed from 'space-between'
          alignItems: 'center', 
          gap: 4,
          overflow: 'auto',
        }}
      >
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          gap: 1,
          flexWrap: 'wrap',           // optional: wraps chips on small screens
          justifyContent: 'center',   // centers horizontally
        }}
      >
        <Chip
          label="All"
          clickable
          onClick={() => setSelectedCategory('All')}
          sx={{
            backgroundColor: selectedCategory === 'All' ? '#7947a2' : 'default',
            color: selectedCategory === 'All' ? '#fff' : 'inherit',
            '&:hover': {
              backgroundColor: selectedCategory === 'All' ? '#6b3f90' : 'rgba(0, 0, 0, 0.04)',
            },
          }}
        />

        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            clickable
            onClick={() => setSelectedCategory(category.name)}
            sx={{
              backgroundColor: selectedCategory === category.name ? '#7947a2' : 'default',
              color: selectedCategory === category.name ? '#fff' : 'inherit',
              '&:hover': {
                backgroundColor: selectedCategory === category.name ? '#6b3f90' : 'rgba(0, 0, 0, 0.04)',
              },
            }}
          />

        ))}
      </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
        </Box>
      </Box>
      <Box sx={{ position: 'relative', mt: 4 }}>
  {/* Desktop Arrows (left & right of grid) */}
  {!isMobile && (
    <>
      <Button
        onClick={() => handlePageChange(-1)}
        disabled={currentPage === 0}
        sx={{
          position: 'absolute',
          top: '50%',
          left: -70,
          transform: 'translateY(-50%)',
          zIndex: 2,
          minWidth: 0,
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: 3,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        ←
      </Button>
      <Button
        onClick={() => handlePageChange(1)}
        disabled={(currentPage + 1) * postsPerPage >= filteredPosts.length}
        sx={{
          position: 'absolute',
          top: '50%',
          right: -70,
          transform: 'translateY(-50%)',
          zIndex: 2,
          minWidth: 0,
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: 3,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        →
      </Button>
    </>
  )}

  {/* Post Grid with smooth fade */}
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
      gap: 4,
      transition: 'opacity 0.4s ease',
      opacity: opacity,
    }}
  >
          {paginatedPosts.map((post) => (
            <Card
              key={post.id}
              onClick={() => navigateToPost(post.slug)}
              sx={{
                cursor: 'pointer',
                width: '100%',
                height: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
                position: 'relative',
                backgroundColor: '#fff',
              }}
            >
              <CardMedia
                component="img"
                image={`https://hha.ro/api/public/uploads/cards/${post.file_name}`}
                alt={post.title}
                sx={{
                  height: 220,
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {post.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 20,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '12px',
                    px: 1.5,
                    py: 0.5,
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {post.category}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 20,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '12px',
                    px: 1.5,
                    py: 0.5,
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {formatDate(post.created_at)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
{/* Mobile Arrows (below the cards) */}
{isMobile && (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Button
        onClick={() => handlePageChange(-1)}
        disabled={currentPage === 0}
        variant="outlined"
        sx={{ borderRadius: '50%', minWidth: 0, width: 40, height: 40 }}
      >
        ←
      </Button>
      <Button
        onClick={() => handlePageChange(1)}
        disabled={(currentPage + 1) * postsPerPage >= filteredPosts.length}
        variant="outlined"
        sx={{ borderRadius: '50%', minWidth: 0, width: 40, height: 40 }}
      >
        →
      </Button>
    </Box>
  )}
</Box>



    </Box>
  );
}
