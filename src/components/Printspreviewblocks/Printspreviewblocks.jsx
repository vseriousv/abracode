import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import PrintspreviewblocksTable from '../PrintspreviewblocksTable/PrintspreviewblocksTable';

import withHocs from './PrintspreviewblocksHoc';

class Printspreviewblocks extends React.Component {
  state = {
    open: false,
    img: '',
    opsectionid: '',
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
      open: false,
      img: '',
      opsectionid: '',
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
  handleChange = img => ({ target }) => { this.setState({ [img]: target.value }); };

  render() {
    const { open, img, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url } = this.state;
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
