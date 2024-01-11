import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo } from '../utils/Constants'
import {Searchbar} from './index'
 export default function Navbar() {
  return (
    <Stack direction={'row'} p={2} alignItems={'center'} 
    sx={{position:'sticky', background:'#000', top:'0', justifyContent:'space-between' }}>
      <Link to={'/'} style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>
      <Searchbar/>
    </Stack>
  )
}
