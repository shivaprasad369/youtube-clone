import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({video,direction}) => {
  if(!video?.length) return 'Loading..'
  console.log(video)
  return (
    <Stack direction={direction || "row"} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
     {video?.map((item,index)=>(
      <Box key={index}>
        {item?.video_id && <VideoCard video={item}/>}
      {/* {item.channel_id && <ChannelCard video={item}/>} */}
      </Box>
     ))}

     
    </Stack>
  )
}

export default Videos
