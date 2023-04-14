import React from "react";
import Movie from "../components/Movie/Movie";
import { HomeTemplate } from "../templates/HomeTemplate/HomeTemplate";

export default function AllMovie() {
  return ( 
    <HomeTemplate>
      <Movie />
    </HomeTemplate>
  )
}
