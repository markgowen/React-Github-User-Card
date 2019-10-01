import React from 'react';
import axios from 'axios'

// Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#24292d',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});







class App extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GitHub Followers
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles) (App);
