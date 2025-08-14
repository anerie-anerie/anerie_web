import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-100px', // moves form down without resizing background
  }}
  >
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: '#BBE6E9',
        padding: 6,
        borderRadius: 2,
        width: '100%',
        maxWidth: 600,
        textAlign: 'center',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        mx: 'auto',
        mt: 40,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, color: '#0A005B' }}>
        Contact Me Form
      </Typography>

      {submitted ? (
        <Typography sx={{ color: '#0A005B', fontWeight: 'bold' }}>
          Thank you for reaching out, {name}! I’ll get back to you soon.
        </Typography>
      ) : (
        <>
          {error && (
            <Typography sx={{ color: '#B80386', mb: 2 }}>
              {error}
            </Typography>
          )}

          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              mb: 2,
              input: { backgroundColor: '#BBE6E9' },
              label: { color: '#0A005B' },
            }}
          />

          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              input: { backgroundColor: '#BBE6E9' },
              label: { color: '#0A005B' },
            }}
          />

          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            multiline
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              mb: 2,
              input: { backgroundColor: '#fff' },
              label: { color: '#0A005B' },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#0A005B',
              color: '#BBE6E9',
              '&:hover': {
                backgroundColor: '#070046',
              },
            }}
          >
            Send
          </Button>
        </>
      )}
    </Box>
    </div>
  );
};

export default ContactForm;
