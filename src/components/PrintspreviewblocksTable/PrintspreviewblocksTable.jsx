import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import PrintspreviewblocksDialog from '../PrintspreviewblocksDialog/PrintspreviewblocksDialog';

import withHocs from './PrintspreviewblocksTableHoc';

class PrintspreviewblocksTable extends React.Component {
  state = {
    anchorEl: null,
    openDialog: false,
  };

  handleDialogOpen = () => { this.setState({ openDialog: true }); };
  handleDialogClose = () => { this.setState({ openDialog: false }); };

  handleClick = ({ currentTarget }, data) => {
    this.setState({
      anchorEl: currentTarget,
      data,
    });
  };

  handleClose = () => { this.setState({ anchorEl: null }); };

  handleEdit = (row) => {
    this.props.onOpen(this.state.data);
    this.handleClose();
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {} } = this.state;

    const { classes, data } = this.props;

    const { printspreviewblocks = [] } = data;

    return (
      <>
        <PrintspreviewblocksDialog open={openDialog} handleClose={this.handleDialogClose} id={activeElem.id} />
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                {/*<TableCell>Изображение</TableCell>*/}
                <TableCell>Раздел</TableCell>
                <TableCell>Заголовок</TableCell>
                {/*<TableCell>Контекст_1</TableCell>
                <TableCell>Контекст_2</TableCell>
                <TableCell>Контекст_3</TableCell>
                <TableCell>Кнопка_1</TableCell>
                <TableCell>Ссылка на кнопку</TableCell>
                <TableCell>Кнопка_2</TableCell>
                <TableCell>Ссылка на кнопку</TableCell>*/}
                <TableCell>URL</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {printspreviewblocks.map(previewItem => {
                return (
                  <TableRow key={previewItem.id}>
                    {/*<TableCell>{previewItem.img}</TableCell>*/}
                    <TableCell>{previewItem.opsection.name}</TableCell>
                    <TableCell>{previewItem.titlepage}</TableCell>
                    {/*<TableCell>{previewItem.subtext_1}</TableCell>
                    <TableCell>{previewItem.subtext_2}</TableCell>
                    <TableCell>{previewItem.subtext_3}</TableCell>
                    <TableCell>{previewItem.button_1}</TableCell>
                    <TableCell>{previewItem.url_btn_1}</TableCell>
                    <TableCell>{previewItem.button_2}</TableCell>
                    <TableCell>{previewItem.url_btn_2}</TableCell>*/}
                    <TableCell>{previewItem.url}</TableCell>
                    <TableCell align="right">
                      <>
                        <IconButton color="inherit" onClick={(e) => this.handleClick(e, previewItem)}>
                          <MoreIcon />
                        </IconButton>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose} >
                          <MenuItem onClick={this.handleEdit}><CreateIcon /> Edit</MenuItem>
                          <MenuItem onClick={this.handleDelete}><DeleteIcon /> Delete</MenuItem>
                        </Menu>
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
};
export default withHocs(PrintspreviewblocksTable);
