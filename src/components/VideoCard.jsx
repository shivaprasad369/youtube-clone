import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/Constants'
import { CheckCircle } from '@mui/icons-material'

export default function VideoCard({video}) {
   // console.log(video.thumbnails[0].url)
  return (
    <Card sx={{width:{ xs: '100%', sm: '358px', md: "320px"},boxShadow:'none',borderRadius:0}}>
     <Link to={video?.video_id ? `/video/${video.video_id}`: demoVideoUrl}>
     <CardMedia image={video?.thumbnails[0]?.url}
     alt={video.title}
     sx={{width:358,height:180}}
     />
     </Link>
     <CardContent sx={{background:'#1e1e1e', height:'106px'}}>
     <Link to={video?.video_id ? `/video/${video.video_id}`: demoVideoUrl}>
        <Typography variant='subtitle' fontWeight={'bold'} color={'#fff'}>
            {video.title.slice(0,35)|| demoVideoTitle.slice(0,35)}
        </Typography>
     </Link>
     <Link to={video?.channel_id ? `/channel/${video.channel_id}`: demoChannelUrl}>
        <Typography variant='subtitle1' fontWeight={'bold'} color={'gray'}>
            {video.author}
            <CheckCircle sx={{fontSize:12,color:'gray', ml:'5px'}}/>
        </Typography>
     </Link>

     </CardContent>
    </Card>
  )
}
