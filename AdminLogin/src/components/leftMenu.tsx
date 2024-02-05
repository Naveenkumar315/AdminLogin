import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../index.css";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const leftMenu = (props: any) => {
  const pages = ["Dashboard", "Pricing", "Pricing_"];
  const icons = [<GridViewIcon />, <AddIcon />, <AddTaskIcon />];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [drawer, setDrawer] = useState({
    width: 200,
    opacity: 1,
    leftArrow: false,
  });
  const handleToggleDrawer = () => {
    setDrawer((previous) => ({
      ...previous, // Spread the previous state
      width: previous.width === 200 ? 60 : 200, // Update the width property
      opacity: previous.width === 200 ? 0 : 1,
      leftArrow: !previous.leftArrow, //previous.width === 200 ? false : true,
    }));
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <div className="leftMenu">
        <div>
          <div>
            {!drawer.leftArrow && (
              <span
                onClick={handleToggleDrawer}
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
                className="arrowBtn"
              >
                <KeyboardDoubleArrowRightIcon />
              </span>
            )}
            {drawer.leftArrow && (
              <span
                onClick={handleToggleDrawer}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
                className="arrowBtn"
              >
                <KeyboardDoubleArrowLeftIcon />
              </span>
            )}
          </div>
          {pages.map((page, index) => {
            return (
              <div
                className="sideBarItem"
                style={{
                  width: `${drawer.width}px`,
                  transition: "width 0.2s ease-in-out",
                }}
                key={`icon${index}`}
              >
                <Button
                  sx={{
                    my: 0,
                    color: "#000",
                  }}
                  className={`page`}
                  id={`icon${index}`}
                >
                  {icons[index]}
                </Button>
                <div
                  className={`pageName`}
                  id={`page${index}`}
                  style={{ opacity: drawer.opacity }}
                  onClick={() => handleCloseNavMenu()}
                >
                  {page}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default leftMenu;
