import React from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';

import withHocs from './ProductionportfoliocartsFormHoc';

class ProductionportfoliocartsForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose, addProductionportfoliocart, updateProductionportfoliocart  } = this.props;
    const { id, img, header, text, url } = selectedValue;
    id ?
    updateProductionportfoliocart({  id, img, header, text, url  }) :
    addProductionportfoliocart({ img, header, text, url  });
    onClose();
  };

  render() { //opsectionsQuery = {}, imageFilesQuery = {},
    const {       classes, open, handleChange, handleSelectChange, handleCheckboxChange, selectedValue = {} } = this.props;
    const { img, header, text, url } = selectedValue;
    //const { opsection = [] } = opsectionsQuery;
    //const { imagefiles = [] } = imageFilesQuery;
    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Карточки портфолио</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">

          <TextField
            id="outlined-img"
            label="Изображение"
            className={classes.textField}
            value={img}
            onChange={handleChange('img')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-header"
            label="Заголовок"
            className={classes.textField}
            value={header}
            onChange={handleChange('header')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-text"
            label="Текст"
            className={classes.textField}
            value={text}
            onChange={handleChange('text')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-url"
            label="URL"
            className={classes.textField}
            value={url}
            onChange={handleChange('url')}
            margin="normal"
            variant="outlined"
          />

          <div className={classes.wrapper}>
            <Button onClick={this.handleSave} variant="contained" color="primary" className={classes.button}>
              <SaveIcon /> Сохранить
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
};

  export default withHocs(ProductionportfoliocartsForm);
