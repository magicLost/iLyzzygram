import React from "react";
//import classes from './Alert.module.scss';
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { Color } from "@material-ui/lab/Alert";

interface IAlertProps {
  type: Color;
  isShow: boolean;
  message: string;
  hideAlert: () => void | undefined;
}

/* const useStyles = makeStyles({
  root: {
    display: "block",
  },
}); */

const Alert = ({ type, isShow, message, hideAlert }: IAlertProps) => {
  //const classes = useStyles();
  return (
    <Snackbar
      open={isShow}
      autoHideDuration={6000}
      onClose={hideAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert
        onClose={hideAlert}
        severity={type}
        elevation={6}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
