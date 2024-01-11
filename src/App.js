import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css';
import { ChannelDetails, Feed, Navbar, SearchFeed, VideoDetails } from './components';

const App=()=> (
  <BrowserRouter>
  <Box sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Feed/>}/>
      <Route exact path='/video/:id' element={<VideoDetails/>}/>
      <Route path='/channel/:id' element={<ChannelDetails/>}/>
      <Route path='/search/:searchTerms' element={<SearchFeed/>}/>  
    </Routes>


  </Box>
  </BrowserRouter>
)

export default App;
