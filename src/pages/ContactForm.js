import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Replace these with your actual EmailJS IDs
  const SERVICE_ID = "service_c4u8ufx";
  const TEMPLATE_ID = "template_gejyarg";
  const PUBLIC_KEY = "c2G5iIse4WE2boFGh";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "aneriep@gmail.com", // recipient email
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setError("");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-100px' }}>
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
              sx={{ mb: 2, input: { backgroundColor: '#BBE6E9' }, label: { color: '#0A005B' } }}
            />

            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2, input: { backgroundColor: '#BBE6E9' }, label: { color: '#0A005B' } }}
            />

            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 2, input: { backgroundColor: '#fff' }, label: { color: '#0A005B' } }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: '#0A005B', color: '#BBE6E9', '&:hover': { backgroundColor: '#070046' } }}
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
