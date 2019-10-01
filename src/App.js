import React from 'react'
import axios from 'axios'

// Material UI
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

// Components
import GitHubCard from './components/GitHubCard'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
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
  gridItem: {
    padding: theme.spacing(2)
  },
  container: {
    marginTop: -80
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
    console.log('Constructor is running!')
  }

  componentDidMount() {
    console.log('cDM is running and fetching GitHub Users');

    axios
      .get('https://api.github.com/users/markgowen')
      .then(res => {
        this.setState({
          user: [res.data]
        });
      })
      .catch(err => console.log(err));

      axios
      .get('https://api.github.com/users/markgowen/followers')
      .then(res => {
        const tempFollowers = res.data;
        tempFollowers.forEach(data => {
          axios
          .get(data.url)
          .then(res => {
            this.setState({
              followers: [...this.state.followers, res.data]
              })
          })
        });
      })
      .catch(err => console.log(err));
 }

  componentDidUpdate() {
    console.log('cDU is updating...')
  }

  render() {
    console.log('rendering...');
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GitHub Users
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.root} justify="center">
        {this.state.user.map(data => {
          return (
            <Grid item className={classes.gridItem} s>
              <GitHubCard
                key={data.id}
                avatar={data.avatar_url}
                name={data.name}
                bio={data.bio}
                location={data.location}
                followersCount={data.followers}
                followingCount={data.following}
              />
            </Grid>
          );
        })}
        {this.state.followers.map(data => {
          return (
            <Grid item className={classes.gridItem} s>
              <GitHubCard
                key={data.id}
                avatar={data.avatar_url}
                name={data.name}
                bio={data.bio}
                location={data.location}
                followersCount={data.followers}
                followingCount={data.following}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles) (App);
