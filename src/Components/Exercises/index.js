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

export default ({
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  }, 
  exercises, 
  category, 
  onSelect,
  }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography 
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>

                <List component="ul">
                  {exercises.map(({id, title}) =>
                    <ListItem
                      key={id}
                      button 
                      onClick={() => onSelect(id)}
                    >
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
          {title}
        </Typography>
        <Typography 
          variant="subheading" 
          style={{marginTop: 20}}
        >
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>