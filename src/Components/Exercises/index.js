import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const styles = {
  Paper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20
  }
}

export default props =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        Left pane
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        Right pane
      </Paper>
    </Grid>
  </Grid>