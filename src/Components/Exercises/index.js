import React, { Fragment } from 'react'
import { Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'

const styles = {
  Paper: {
    overflowY: 'auto',
    height: 500,
    marginTop: 10,
    marginBottom: 10,
    padding: 20
  },
}

export default ({exercises, category}) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment>
                <Typography 
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>

                <List component="ul">
                  {exercises.map(({title}) =>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  )}
                  
                </List>
              </Fragment>
            : null          
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
          Welcome!
        </Typography>
        <Typography 
          variant="subheading" 
          style={{marginTop: 20}}
        >
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>