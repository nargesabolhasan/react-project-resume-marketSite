import React from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Authentication = (props) => {
  const{children,displayXs}=props
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state);
  const handleAuthentication = () => {
    if (Object.keys(user?.user).length !== 0 ) {
      navigate("/PanelProducts");
    } else {
      navigate("/PanelLogin");
    }
  };
  return (
    <IconButton
      variant="h6"
      component="div"
      sx={{
        mr: 2,
        display: { xs:displayXs, md: "flex", lg: "flex", color:"black" },
      }}
      onClick={handleAuthentication}
    >
      <div>{children}</div>
      
    </IconButton>
  );
};

export default Authentication;
