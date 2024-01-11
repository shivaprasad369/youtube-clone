import { Box, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { SideBar, Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";
// import { useSelector } from "react-redux";
//md= media
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Btth");
  const [video, setVideo] = useState([]);
  
  // console.log(searchText)

  const fetchData = useCallback(
     async() => {
      const data = await fetchFromApi(
        `search/?part=snippet&query=${selectedCategory}&order_by=this_month`
      );
      console.log(data?.videos);
      setVideo(data?.videos);
    
  }, [selectedCategory]);
  useEffect(()=>{
    fetchData();

  },[fetchData])

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body1"
          sx={{ mt: "1.5", color: "#fff" }}
        >
          Copyright 2024 multimeadia
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          style={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "red" }}> video</span>
        </Typography>
        <Videos video={video} />
      </Box>
    </Stack>
  );
};
export default Feed;
