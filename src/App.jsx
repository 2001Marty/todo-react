import React,{useState} from 'react';
import Form from './Form';
import {CssBaseline, Grid, Button, Typography, Box, ThemeProvider, createTheme, Checkbox} from '@mui/material'
import { Check} from '@mui/icons-material';


const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    },
    
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});




function App() {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem('theme')));
  const [todos,setTodos] = useState([]);

  const toggleComplate = (i) => setTodos(todos.map((todo,k) => k ===i ? {
    ...todo,
    complate: !todo.complate
  } :todo)
  );
  return( 
  <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
    <Button onClick={() => {setLight((prev) => !prev); localStorage.setItem('theme', !light)}}>Změnit Téma</Button>
    <Grid container paddingTop={5} spacing={4} justifyContent='center' direction='column' alignItems = 'center'>
      <Grid item>
        <Form onSubmit={text =>{ if(text !== ''){setTodos([{ text, complate: false}, ...todos])}}}></Form>
      </Grid>
      <Grid item>
        {
          todos.map(({ text, complate}, i)=>(
            <Typography variant='h6' key={i} onClick={() => toggleComplate(i)}>
              {text} {complate ? <Check/> : ''}
            </Typography>
          ))
        }
      </Grid>
      <Grid item> 
        <Button  sx={{mx:1}} variant='contained'  onClick={() => setTodos([])}>Vymaž Vše</Button>
        <Button  sx={{mx:1}} variant='outlined' onClick={() => setTodos(todos.filter((todo => !todo.complate)))}>Vymaž Splněné</Button>
      </Grid>
      <Grid item>
        <Typography variant='h6'>Zbývá ti: {todos.filter(todo => !todo.complate).length} z {todos.length}</Typography>
      </Grid>
    </Grid>
  </ThemeProvider>);
}

export default App;
