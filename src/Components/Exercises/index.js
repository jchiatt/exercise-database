import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

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
      <LeftPane styles={styles} />
    </Grid>
    <Grid item sm>
      <RightPane styles={styles} />
    </Grid>
  </Grid>