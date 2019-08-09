import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import PrintsAdvantagecardBlocksTable from '../PrintsAdvantagecardBlocksTable/PrintsAdvantagecardBlocksTable';
import PrintsAdvantagecardBlocksForm from '../PrintsAdvantagecardBlocksForm/PrintsAdvantagecardBlocksForm'

import withHocs from './PrintsAdvantagecardBlocksHoc';

class PrintsAdvantagecardBlocks extends React.Component {
  state = {
    open: false,
    title: '',
    cart_1_img: '',
    cart_1_header: '',
    cart_1_text: '',
    cart_2_img: '',
    cart_2_header: '',
    cart_2_text: '',
    cart_3_img: '',
    cart_3_header: '',
    cart_3_text: '',
    url: '',
  }

  handleClickOpen = (data) => {
    this.setState({
      open: true,
      ...data,
    });
  };

  handleClose = () => {
    this.setState({
      id: null,
      open: false,
      title: '',
      cart_1_img: '',
      cart_1_header: '',
      cart_1_text: '',
      cart_2_img: '',
      cart_2_header: '',
      cart_2_text: '',
      cart_3_img: '',
      cart_3_header: '',
      cart_3_text: '',
      url: '', });
    };
  handleSelectChange = name => ({ target }) =>  { this.setState({ [name]: target.value }); };
  handleCheckboxChange = name => ({ target }) => { this.setState({ [name]: target.checked }); };
  handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

  render() {
    const { id, open, title, cart_1_img, cart_1_header, cart_1_text, cart_2_img, cart_2_header, cart_2_text, cart_3_img, cart_3_header, cart_3_text, url } = this.state;
    const { classes } = this.props;

    return (
      <>
      <PrintsAdvantagecardBlocksForm handleChange={this.handleChange}
                  handleSelectChange={this.handleSelectChange}
                  handleCheckboxChange={this.handleCheckboxChange}
                  selectedValue={{ id, open, title, cart_1_img, cart_1_header, cart_1_text, cart_2_img, cart_2_header, cart_2_text, cart_3_img, cart_3_header, cart_3_text, url}}
                  open={open} onClose={this.handleClose} />
        <div className={classes.wrapper}>
          <PrintsAdvantagecardBlocksTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
          <Fab onClick={() => this.handleClickOpen(null)} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
      </>
    );
  }
};
export default withHocs(PrintsAdvantagecardBlocks);
