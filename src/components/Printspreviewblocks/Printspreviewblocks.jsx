import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import PrintspreviewblocksTable from '../PrintspreviewblocksTable/PrintspreviewblocksTable';

import withHocs from './PrintspreviewblocksHoc';

class Printspreviewblocks extends React.Component {
  state = {
    open: false,
    name: '',
    age: 0,
  }

  handleClickOpen = (data) => {
    this.setState({
      open: true,
      ...data,
    });
  };

  handleClose = () => { this.setState({ name: '', age: 0, id: null, open: false }); };

  handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

  render() {
    const { name, age, id, open } = this.state;
    const { classes } = this.props;

    return (
      <>
        <div className={classes.wrapper}>
          <PrintspreviewblocksTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
          <Fab onClick={() => this.handleClickOpen(null)} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
      </> 
    );
  }
};
export default withHocs(Printspreviewblocks);
