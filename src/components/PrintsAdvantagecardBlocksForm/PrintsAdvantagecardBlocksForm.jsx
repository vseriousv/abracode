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

import withHocs from './PrintsAdvantagecardBlocksFormHoc';

class PrintsAdvantagecardBlocksForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose, addPrintsadvantagecardblock, updatePrintsadvantagecardblock  } = this.props;
    const { id, title, cart_1_img, cart_1_header, cart_1_text, cart_2_img, cart_2_header, cart_2_text, cart_3_img, cart_3_header, cart_3_text, url } = selectedValue;
    id ?
    updatePrintsadvantagecardblock({ id, title, cart_1_img, cart_1_header, cart_1_text, cart_2_img, cart_2_header, cart_2_text, cart_3_img, cart_3_header, cart_3_text, url }) :
    addPrintsadvantagecardblock({ title, cart_1_img, cart_1_header, cart_1_text, cart_2_img, cart_2_header, cart_2_text, cart_3_img, cart_3_header, cart_3_text, url });
    onClose();
  };

  render() { //opsectionsQuery = {}, imageFilesQuery = {},
    const {       classes, open, handleChange, handleSelectChange, handleCheckboxChange, selectedValue = {} } = this.props;
    const { title, cart_1_img, cart_1_header, cart_1_text, cart_2_img, cart_2_header, cart_2_text, cart_3_img, cart_3_header, cart_3_text, url} = selectedValue;
    //const { opsection = [] } = opsectionsQuery;
    //const { imagefiles = [] } = imageFilesQuery;
    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Блок ADVANTAGE на странице продукции</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">

          <TextField
            id="outlined-title"
            label="Заголовок"
            className={classes.textField}
            value={title}
            onChange={handleChange('title')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_1_img"
            label="Изображение первой карточки"
            value={cart_1_img}
            onChange={handleChange('cart_1_img')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_1_header"
            label="Заголовок первой карточки"
            value={cart_1_header}
            onChange={handleChange('cart_1_header')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_1_text"
            label="Текст первой карточки"
            value={cart_1_text}
            onChange={handleChange('cart_1_text')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_2_img"
            label="Изображение второй карточки"
            value={cart_2_img}
            onChange={handleChange('cart_2_img')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_2_header"
            label="Заголовок второй карточки"
            value={cart_2_header}
            onChange={handleChange('cart_2_header')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_2_text"
            label="Текст второй карточки"
            value={cart_2_text}
            onChange={handleChange('cart_2_text')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_3_img"
            label="Изображение третьей  карточки"
            value={cart_3_img}
            onChange={handleChange('cart_3_img')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_3_header"
            label="Заголовок третьей карточки"
            value={cart_3_header}
            onChange={handleChange('cart_3_header')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-cart_3_text"
            label="Текст третьей карточки"
            value={cart_3_text}
            onChange={handleChange('cart_3_text')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-url"
            label="URL"
            value={url}
            onChange={handleChange('url')}
            className={classes.textField}
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

  export default withHocs(PrintsAdvantagecardBlocksForm);
