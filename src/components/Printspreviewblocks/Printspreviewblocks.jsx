import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import PrintspreviewblocksTable from '../PrintspreviewblocksTable/PrintspreviewblocksTable';
import PrintspreviewblocksForm from '../PrintspreviewblocksForm/PrintspreviewblocksForm'

import withHocs from './PrintspreviewblocksHoc';

class Printspreviewblocks extends React.Component {
  state = {
    open: false,
    img: '5d4ab469848c2113381b848b',
    opsectionid: '5d3ab05fcab6685a0b98ab5c',
    titlepage: '',
    subtext_1: '',
    subtext_2: '',
    subtext_3: '',
    button_1: '',
    url_btn_1: '',
    button_2: '',
    url_btn_2: '',
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
      img: '5d4ab469848c2113381b848b',
      opsectionid: '5d3ab05fcab6685a0b98ab5c',
      titlepage: '',
      subtext_1: '',
      subtext_2: '',
      subtext_3: '',
      button_1: '',
      url_btn_1: '',
      button_2: '',
      url_btn_2: '',
      url: '', });
    };
  handleSelectChange = name => ({ target }) =>  { this.setState({ [name]: target.value }); };
  handleCheckboxChange = name => ({ target }) => { this.setState({ [name]: target.checked }); };
  handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

  render() {
    const { id, open, img, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url } = this.state;
    const { classes } = this.props;

    return (
      <>
      <PrintspreviewblocksForm handleChange={this.handleChange}
                  handleSelectChange={this.handleSelectChange}
                  handleCheckboxChange={this.handleCheckboxChange}
                  selectedValue={{ id, open, img, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url }}
                  open={open} onClose={this.handleClose} />
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
