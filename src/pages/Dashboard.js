import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components"; // import everything in ../components/index.js by default
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
