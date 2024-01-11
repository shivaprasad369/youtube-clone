import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const ChannelDetails = () => {
  const [ChannelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVedios] = useState([]);
  const { id } = useParams();
  const fetchData = useCallback(async () => {
    await fetchFromApi(`channel/details?part=snippet&channel_id=${id}`).then(
      (data) => setChannelDetails(data)
    );

    await fetchFromApi(`channel/videos?channel_id=${id}`).then((item) =>
      setChannelVedios(item?.videos)
    );
  }, [id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(channelVideos);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(115,215,237,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "-93px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={ChannelDetails?.avatar[2]?.url}
              alt={ChannelDetails?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            <Typography variant="h4">
              {ChannelDetails?.title}
              <CheckCircle />
            </Typography>
            <Typography variant="h5">
              {ChannelDetails?.subscriber_count}
            </Typography>
            <Typography variant="h6">{ChannelDetails?.view_count}</Typography>
          </CardContent>
        </Box>
      </Box>
        <Box display={'flex'} p={2}>
          <Box sx={{mr:{sm:'100px'}}}/>
              <Videos video={channelVideos}/>
        </Box>
    </Box>
  );
};

export default ChannelDetails;
