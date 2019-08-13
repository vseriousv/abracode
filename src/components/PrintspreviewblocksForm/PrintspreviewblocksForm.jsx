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

import withHocs from './PrintspreviewblocksFormHoc';

class PrintspreviewblocksForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose, addPrintspreviewblock, updatePrintspreviewblock } = this.props;
    const { id, imgid, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url } = selectedValue;
    id ?
    updatePrintspreviewblock({ id, imgid, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url }) :
    addPrintspreviewblock({ imgid, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url });
    onClose();
  };

  render() {
    const { opsectionsQuery = {}, imageFilesQuery = {}, classes, open, handleChange, handleSelectChange, handleCheckboxChange, selectedValue = {} } = this.props;
    const { imgid, opsectionid, titlepage, subtext_1, subtext_2, subtext_3, button_1, url_btn_1, button_2, url_btn_2, url } = selectedValue;
    const { opsection = [] } = opsectionsQuery;
    const { imagefiles = [] } = imageFilesQuery;
    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Блок PREVIEW на страницу продуктов</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">

          <FormControl variant="outlined" className={classes.formControlSelect}>
            <InputLabel
              ref={ref => { this.InputLabelRef = ref; }}
              htmlFor="outlined-opsectionid-simple">Раздел</InputLabel>
            <Select
              value={opsectionid}
              onChange={handleSelectChange('opsectionid')}
              input={<OutlinedInput name="opsectionid" id="outlined-opsectionid" labelWidth={57} />}
            >
            {opsection.map(section => <MenuItem key={section.id} value={section.id}>{section.name}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControlSelect}>
              <InputLabel
                ref={ref => { this.InputLabelRef = ref; }}
                htmlFor="outlined-img-simple">Изображение</InputLabel>
              <Select
                value={imgid}
                onChange={handleSelectChange('imgid')}
                input={<OutlinedInput name="imgid" id="outlined-imgid" labelWidth={105} />}
              >
              {imagefiles.map(image =>
                <MenuItem key={image.id} value={image.id}>
                  <img className={classes.imgFuidselect} src={"http://gavrilov.site/static/images/PrintsPreviewBlocks/"+image.name} />{image.name}
                </MenuItem>)}
              </Select>
          </FormControl>

          <TextField
            id="outlined-titlepage"
            label="Заголовок"
            className={classes.textField}
            value={titlepage}
            onChange={handleChange('titlepage')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-subtext_1"
            label="Префекс текста"
            value={subtext_1}
            onChange={handleChange('subtext_1')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-subtext_2"
            label="Текст"
            value={subtext_2}
            onChange={handleChange('subtext_2')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-subtext_3"
            label="Постфикс текста"
            value={subtext_3}
            onChange={handleChange('subtext_3')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-button_1"
            label="Текст первой кнопки"
            value={button_1}
            onChange={handleChange('button_1')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-url_btn_1"
            label="URL первой кнопки"
            value={url_btn_1}
            onChange={handleChange('url_btn_1')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-button_2"
            label="Текст второй кнопки"
            value={button_2}
            onChange={handleChange('button_2')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-url_btn_2"
            label="URL второй кнопки"
            value={url_btn_2}
            onChange={handleChange('url_btn_2')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-url"
            label="URL размещения блока"
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

  export default withHocs(PrintspreviewblocksForm);
