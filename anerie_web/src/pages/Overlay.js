import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Overlay({ text, onClose }) {
  if (!text) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(10,0,91,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        textAlign: 'center',
      }}
    >
      <Box
        onClick={e => e.stopPropagation()}
        sx={{
          position: 'relative',
          bgcolor: '#625B9D',
          fontSize: 20,
          p: 4,
          borderRadius: 2,
          color: 'common.white',
          maxWidth: 400,
          width: '90%',
          boxShadow: 3,
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="close overlay"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'common.white',
          }}
          size="large"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>

        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
