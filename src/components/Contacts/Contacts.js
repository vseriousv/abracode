import React,{Component} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ContactsTable from '../ContactsTable/ContactsTable';

import withHocs from './ContactsHoc';

class Contacts extends Component {
  state = {
    open: false,
    title: '',
    type: '',
    context_1: '',
    context_2: '',
    watched: false
  }

  handleClickOpen = (data = {}) => {
    this.setState({
      open: true,
      ...data
    });
  };

  handleClose = () => {
    this.setState({
      title: '',
      type: '',
      context_1: '',
      context_2: '',
      watched: false,
      open: false
    });
  };

  handleSelectChange = ({ target }) => { this.setState({ [target.name]: target.value }); };
  handleCheckboxChange = title => ({ target }) => { this.setState({ [title]: target.checked }); };
  handleChange = title => ({ target }) => { this.setState({ [title]: target.value }); };

   render() {
    const { classes } = this.props;
    return (
      <>
      <div className={classes.wrapper}>
        <ContactsTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
        <Fab onClick={() => this.handleClickOpen()} color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
      </>
    );
  }
}
export default withHocs(Contacts);
