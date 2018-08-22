import React from 'react'
import { Paper, Tab, Tabs } from '@material-ui/core'

const Footer = ({muscles}) => (
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {muscles.map(group =>
        <Tab label={group} />
      )}
    </Tabs>
  </Paper>
)

export default Footer