import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ProductionportfoliocartsTable from '../ProductionportfoliocartsTable/ProductionportfoliocartsTable';
import ProductionportfoliocartsForm from '../ProductionportfoliocartsForm/ProductionportfoliocartsForm'

import withHocs from './ProductionportfoliocartsHoc';

class Productionportfoliocarts extends React.Component {
  state = {
    open: false,
    img: '',
    header: '',
    text: '',
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
      img: '',
      header: '',
      text: '',
      url: '', });
    };
  handleSelectChange = name => ({ target }) =>  { this.setState({ [name]: target.value }); };
  handleCheckboxChange = name => ({ target }) => { this.setState({ [name]: target.checked }); };
  handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

  render() {
    const { id, open, img, header, text, url } = this.state;
    const { classes } = this.props;

    return (
      <>
      <ProductionportfoliocartsForm handleChange={this.handleChange}
                  handleSelectChange={this.handleSelectChange}
                  handleCheckboxChange={this.handleCheckboxChange}
                  selectedValue={{ id, open, img, header, text, url}}
                  open={open} onClose={this.handleClose} />
        <div className={classes.wrapper}>
          <ProductionportfoliocartsTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
          <Fab onClick={() => this.handleClickOpen(null)} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
      </>
    );
  }
};
export default withHocs(Productionportfoliocarts);
