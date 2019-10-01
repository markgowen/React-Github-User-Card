import React from 'react'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = theme => ({
    card: {
      minWidth: 365,
      maxWidth: 365,
      minHeight: 365,
      flexWrap: 'wrap'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    text: {
      minHeight: 40,
    },
    avatar: {
        
      },
});

class GitHubCard extends React.Component {
    
   
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="GitHub User" className={classes.avatar} src={this.props.avatar}>
                        </Avatar> 
                    }
                    title={this.props.name}
                />
                <CardContent>
                    <Typography paragraph>
                        {this.props.bio}
                    </Typography>
                    <Typography paragraph>
                        {this.props.location} 
                    </Typography>
                    <Typography paragraph>
                        Followers: {this.props.followersCount}  
                    </Typography>
                    <Typography paragraph>
                        Following: {this.props.followingCount} 
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(useStyles) (GitHubCard);