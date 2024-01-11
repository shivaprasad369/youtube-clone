import { IconButton, Paper } from "@mui/material";
import React from "react";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../store";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.text.text)
  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/search/${data}`)
  };
  return (
    <Paper
      component={"form"}
      onSubmit={
        submitHandler
     }
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3 ",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => {
          setTimeout(()=>{
            dispatch(setText(e.target.value));
            return ()=>{
              clearTimeout()
            }
          },[5000])
        }}
        style={{ height: "95%", border: "none" }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
