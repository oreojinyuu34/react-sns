import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* アイコン */}
      <TwitterIcon className="sidebar__twitterIcon" />

      {/* サイドバーオプション */}
      <SidebarOption text="ホーム" Icon={HomeIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="お気に入りフォルダ" Icon={FolderSpecialIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />

      {/* ボタン */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
