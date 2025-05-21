import * as React from 'react';
import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { useMediaQuery, useTheme, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { axiosPost } from "../../../utils/api";

const ExpandableText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'expanded'
})(({ expanded }) => ({
  maxHeight: expanded ? '500px' : '3em',  // adjust as needed
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: expanded ? 'unset' : 2,
}));


const ExpandableTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'expanded',
})(({ expanded, theme }) => ({
  overflow: 'hidden',
  whiteSpace: expanded ? 'normal' : 'nowrap',
  textOverflow: 'ellipsis',
  display: 'block',
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));


export default function Latest() {
  const [latestThoughts, setLatestThoughts] = useState([]);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const latestToughtsPerPage = 6;
  const [expandedCardId, setExpandedCardId] = useState(null);


  const filteredLatestToughts = latestThoughts.filter(
    (latestThoughts) => selectedCategory === 'All' || latestThoughts.category_name === selectedCategory
  );

  const [opacity, setOpacity] = useState(1);

  const paginatedLatestToughts = filteredLatestToughts.slice(
    currentPage * latestToughtsPerPage,
    (currentPage + 1) * latestToughtsPerPage
  );

  const handlePageChange = (direction) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentPage((prev) => prev + direction);
      setOpacity(1);
    }, 200);
  };

  const isMobile = useMediaQuery('(max-width:1299px)');

  const handleToggleExpand = (id) => {
    setExpandedCardId(prevId => (prevId === id ? null : id));
  };

  useEffect(() => {
    fetchLatestThoughts();
    fetchCategories();
  }, []);

  const fetchLatestThoughts = async () => {
    try {
      const response = await axiosPost("/latestToughts/fetchAllLatestToughts");
      if (response && response.latest_toughts) {
        setLatestThoughts(response.latest_toughts);
      }
    } catch (error) {
      console.error("Error fetching latest thoughts:", error);
    }
  };
  const fetchCategories = async () => {
    try {
      var formData = new FormData();
      formData.append("type", "latest_toughts");
      const response = await axiosPost("/posts/fetchCategories", formData);
      if (response && response.categories) {
        setCategories(response.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div>
      {latestThoughts.length > 0 && (
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h2" >
            Latest toughts
          </Typography>
        </div>
            <Box
              sx={{
                display: 'flex',
                marginBottom: 3,
                marginTop: 3,
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
                    disabled={(currentPage + 1) * latestToughtsPerPage >= filteredLatestToughts.length}
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
      <Grid container spacing={4} alignItems="flex-start">
      {paginatedLatestToughts.map((article, index) => (
        <Grid key={index} item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                transition: 'opacity 0.4s ease',
                opacity: opacity,
                height: 'auto',
              }}
            >
              <Typography gutterBottom variant="caption">
                {article.category_name}
              </Typography>
              <Box
                onClick={() => handleToggleExpand(article.id)}
                sx={{ position: 'relative', cursor: 'pointer' }}
              >
                <ExpandableTitle
                  variant="h6"
                  expanded={expandedCardId === article.id}
                  gutterBottom
                >
                  {article.title}
                </ExpandableTitle>
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{
                    fontSize: '1rem',
                    position: 'absolute',
                    right: -10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.7,
                  }}
                />
              </Box>

              <ExpandableText
                variant="body2"
                color="text.secondary"
                expanded={expandedCardId === article.id}
                gutterBottom
              >
                {article.description}
              </ExpandableText>
              <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'right' }}>
                {formatDate(article.created_at)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
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
              disabled={(currentPage + 1) * latestToughtsPerPage >= filteredLatestToughts.length}
              variant="outlined"
              sx={{ borderRadius: '50%', minWidth: 0, width: 40, height: 40 }}
            >
              →
            </Button>
          </Box>
        )}
        </Box>
        </>
    )}
  </div>
  );
}
