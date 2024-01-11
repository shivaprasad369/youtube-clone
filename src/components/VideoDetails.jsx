import { Box, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";

import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetails = () => {
  const [videos, setVideos] = useState("");
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  const fetchData = useCallback(async () => {
    const res = await fetchFromApi(
      `video/details?part=snippet,statistics&video_id=${id}`
    );
    setVideos(res);
    const data = await fetchFromApi(
      `video/recommendations?part=snippet,statistics&video_id=${id}`
    );
    setVideo(data?.videos);
  }, [id]);
  useEffect(() => {
    fetchData();
  },[fetchData]);
  console.log(video);
  if (!videos?.channel_id) return "Loading...";
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color={"#fff"} p={2} fontWeight={"bold"} variant="h5">
              {videos?.title}
            </Typography>
            <Stack
              direction={"row"}
              variant={"h5"}
              justifyContent={"space-between"}
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videos.channel_id}`}>
                <Typography
                  color={"#fff"}
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {videos?.author}
                  <CheckCircle />
                </Typography>
              </Link>
              <Stack>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videos?.number_of_views} Views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent={'center'} alignItems={'center'}>
              <Videos video={video} direction={'column'}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
