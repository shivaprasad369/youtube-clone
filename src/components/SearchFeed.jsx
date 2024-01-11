import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

import { useParams } from "react-router-dom";
//md= media
const SearchFeed = () => {

  const [video, setVideo] = useState([]);
  // const searchText=useSelector((state)=>state.text.text)
  const {searchTerms}=useParams()
  console.log(searchTerms)

  const fetchData = useCallback(
     async() => {
      const data = await fetchFromApi(
        `search/?part=snippet&order_by=this_month&query=${searchTerms}`
      );
      // console.log(data?.videos);
      setVideo(data?.videos);
    
  }, [searchTerms]);
  useEffect(()=>{
    fetchData();

  },[fetchData])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          style={{ color: "white" }}
        >
         Search results for :- {searchTerms} <span style={{ color: "red" }}> video</span>
        </Typography>
        <Videos video={video} />
      </Box>
  );
};
export default SearchFeed;
