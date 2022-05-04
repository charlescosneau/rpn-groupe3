import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Calculator() {
  return (
    <Grid>
      <Grid container>
        <Grid>
          <Grid>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
          </Grid>
          <Grid>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </Grid>
          <Grid>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </Grid>
          <Grid>
            <Button fullWidth>0</Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Button>/</Button>
            <Button>*</Button>
          </Grid>
          <Grid>
            <Button>+</Button>
            <Button>-</Button>
          </Grid>
          <Grid>
            <Button fullWidth>=</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
