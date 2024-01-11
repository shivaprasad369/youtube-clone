import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { setText } from '../store'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
const dispatch=useDispatch()
  return (  
    <Stack direction={'row'} sx={{overflowY:'auto',height:{sx:'auto', sm: '358px',md:'95%'},flexDirection:{md:'column'}}}>
      {categories.map((data)=>(
        <button className='category-btn' onClick={()=>{setSelectedCategory(data.name);dispatch(setText(""))}} style={{background:data.name===selectedCategory && '#FC1503',color:'white'}} key={data.name}>
            <span style={{color:data.name===selectedCategory ? 'white' : 'red', marginRight:'15px'}}>{data.icon}</span>
            <span style={{opacity:data.name===selectedCategory? '1':'0.8'}}>{data.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar
