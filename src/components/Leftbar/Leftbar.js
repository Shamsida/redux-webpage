import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HearingOutlinedIcon from '@mui/icons-material/HearingOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ListIcon from '@mui/icons-material/List';
import React from "react";
import MenuLink from "../MenuLink/MenuLink";
import "./leftbar.css";
  
export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeOutlinedIcon />} text="Homepage" />
          <MenuLink icon={<ListIcon />} text="Lists" />
          <MenuLink icon={<ShoppingBasketOutlinedIcon />} text="Products" />
          <MenuLink icon={<GroupOutlinedIcon />} text="Groups" />
          <MenuLink icon={<FileCopyOutlinedIcon />} text="Pages" />
          <MenuLink icon={<PhotoSizeSelectActualOutlinedIcon />} text="Photos" />
          <MenuLink icon={<MovieCreationOutlinedIcon />} text="Videos" />
          <MenuLink icon={<ScheduleOutlinedIcon />} text="Schedule" />
          <MenuLink icon={<HearingOutlinedIcon />} text="Wishlist" />
          <MenuLink icon={<SettingsOutlinedIcon />} text="Settings" />
          <MenuLink icon={<ExitToAppIcon />} text="Logout" />
        </div>
      </div>
    );
  }