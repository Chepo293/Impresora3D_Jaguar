import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/homePageSections/partsStyle.js";

const useStyles = makeStyles(styles);

export default function PartsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer></GridContainer>
    </div>
  );
}
