import {
    GroupOutlined,
    HearingOutlined,
    HomeOutlined,
    List,
    MovieCreationOutlined,
    PhotoSizeSelectActualOutlined,
    ScheduleOutlined,
    Settings,
    ShoppingBasketOutlined,
  } from "@material-ui/icons";
  import ExitToAppIcon from '@mui/icons-material/ExitToApp';
  import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
  import React from "react";
  import MenuLink from "../menuLink/MenuLink";
  import "./leftbar.css";
  
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeOutlined />} text="Homepage" />
          <MenuLink icon={<List />} text="Lists" />
          <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
          <MenuLink icon={<GroupOutlined />} text="Groups" />
          <MenuLink icon={<FileCopyOutlinedIcon />} text="Pages" />
          <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
          <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
          <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
          <MenuLink icon={<HearingOutlined />} text="Wishlist" />
          <MenuLink icon={<Settings />} text="Settings" />
          <MenuLink icon={<ExitToAppIcon />} text="Logout" />
        </div>
      </div>
    );
  }