import './App.css';
import '@aws-amplify/ui-react/styles.css';

import { useAuthenticator, Authenticator, Button, Heading, View, Image, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, Hub, graphqlOperation, Storage } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
// import { Snackbar, Alert } from '@mui/material';
import {
  ChecklistCollection, NavBar
} from './ui-components';


import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link, useNavigate } from "react-router-dom";

// Snackbar stuff
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();


function App() {
  const { route } = useAuthenticator(context => [context.route])

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="DoD SAPRO logo"
            src="https://www.sapr.mil/sites/default/files/SAPRO_Seal_160x160.png"
          />
        </View>
      );
    },
  }

  const services = {
    async handleSignUp(formData) {
      let { attributes, username, password } = formData;
      attributes.email = attributes.email.toLowerCase();

      // This is how we check if the email is from an approved domain
      console.log("I'm in the email checker"); //TODO: Remove this logging
      if (/^\w+([.-]?\w+)*@usna.edu$/.test(attributes.email)) {
        console.log("email check success");
        return Auth.signUp({
          attributes,
          username,
          password,
        });
      } else {
        console.log("email check fail");
        // TODO: fix this to make it a bit cleaner of an error than a popup message
        // alert("This email domain is not permitted. Please sign up with a permitted email.");
        <Snackbar open={true} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert severity="error" sx={{ width: '100%' }}>
            This email domain is not permitted. Please sign up with a permitted email.
          </Alert>
        </Snackbar>
        attributes.email = "nope";
        return Auth.signUp({
          attributes,
          username,
          password,
        });
      }
    },
  }

  const navigate = useNavigate()
  const opentest = (id) => {
    navigate("/CommandDetail/foob");
  };

  return (
    <>
      {/* <NavBar position="fixed" /> */}

      <Authenticator services={services} components={components} initialState="signIn">

        {/*TODO: this is kinda a shitty way of discovering if the user is authenticated, potentially change this */}
        {route === 'authenticated' &&
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: '#D3D3D3',
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Command Search
                </Typography>

                {/* <Link to="/CommandDetail/foob">Login</Link>
                <Button
                  sx={{ my: 2, color: 'blue', display: 'block' }}
                  onClick={opentest}
                >
                  Login
                </Button> */}
              </Container>

              <Container maxWidth="sm" sx={{ pt: 6, pb: 6 }}>
                <ChecklistCollection />

              </Container>
            </Box>
          </main>

          // </div>
        }
      </Authenticator>

    </>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  checklist: { marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  checklistName: { fontSize: 20, fontWeight: 'bold' },
  checklistDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
};

export default App;
