import { IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const LinkComponent = ({hoverText, linkPath, icon}) => {
  const [color, setColor] = useState("primary");
  const location = useLocation();

  useEffect(() => {
    let newColor = location.pathname === linkPath ? "secondary" : "primary";
    setColor(newColor);
  }, [location.pathname, linkPath]);

  return (
    <div>
      <NavLink to={linkPath}>
        <Tooltip title={hoverText} placement="left">
          <IconButton color="primary">
            {icon({color: color})}
          </IconButton>
        </Tooltip>
      </NavLink>
    </div>
  );
}

export default LinkComponent;
