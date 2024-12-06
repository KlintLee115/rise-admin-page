"use client";

import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  People,
  Home as HomeIcon,
  ManageAccounts,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg";

export default function NavMenu() {
  const [openManage, setOpenManage] = useState(false);

  return (
    <div className="h-screen w-64 border-r border-gray-300 p-4">
      {/* Logo at the top */}
      <Link href="/" passHref>
        <div className="flex justify-center mb-8">
          <Image src={RiseLogo} alt="Rise Logo" width={150} height={50} />
        </div>
      </Link>

      {/* Navigation Menu */}
      <List component="nav">
        {/* Home Link */}
        <ListItemButton component={Link} href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Manage Section */}
        <ListItemButton onClick={() => setOpenManage(!openManage)}>
          <ListItemIcon>
            <ManageAccounts />
          </ListItemIcon>
          <ListItemText primary="Manage" />
          {openManage ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* Manage Submenu */}
        <Collapse in={openManage} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              href="/manage/clients"
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItemButton>
            {/* Add more submenu items here if needed */}
          </List>
        </Collapse>
      </List>
    </div>
  );
}