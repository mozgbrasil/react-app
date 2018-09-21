import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrintiRequest from './PrintiRequest';
import PrintiResponse from './PrintiResponse';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AutoGrid extends React.Component {

  constructor(props) {
     super(props);
     console.log('AutoGrid', props);
     console.log('AutoGrid_this', this);
     this.state = {
       counter: 0,
       response: ''
     };
   }

   onUpdate = (state) => {
     console.log('AutoGrid_onUpdate_this', this);
     console.log('AutoGrid_onUpdate_state', state);
     this.setState(state)
   };

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper>
              <PrintiRequest onUpdate={this.onUpdate} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper>
              <PrintiResponse callbackCounter={ this.state.counter } callbackString={ this.state.response } />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
