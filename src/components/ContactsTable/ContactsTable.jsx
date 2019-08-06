import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

//import MoviesDialog from '../MoviesDialog/MoviesDialog';

import withHocs from './ContactsTableHoc';

const contacts = [
  { id: 1, title: 'phone_1', type: 'phone_mobil', context_1: "+7 (383) 207 93 93", context_2: "(Новосибирск)"  },
  { id: 2, title: 'phone_2', type: 'phone_mobil', context_1: "8 800 555 61 53", context_2: "(Звонок бесплатный)"  }
];

class ContactsTable extends React.Component {
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

  handleEdit = () => {
    this.props.onOpen(this.state.data);
    this.handleClose();
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {} } = this.state;

    const { classes } = this.props;

    return (
      <>

        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>НАЗВАНИЕ</TableCell>
                <TableCell>ТИП</TableCell>
                <TableCell>НОМЕР ТЕЛЕФОНА</TableCell>
                <TableCell>ОПИСАНИЕ</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map(contact => {
                return (
                  <TableRow key={contact.id}>
                    <TableCell component="th" scope="row">{contact.title}</TableCell>
                    <TableCell>{contact.type}</TableCell>
                    <TableCell>{contact.context_1}</TableCell>
                    <TableCell>{contact.context_2}</TableCell>
                    <TableCell align="right">
                      <>
                        <IconButton color="inherit" onClick={(e) => this.handleClick(e, contact)}>
                          <MoreIcon />
                        </IconButton>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose} >
                          <MenuItem onClick={this.handleEdit}><CreateIcon /> Edit</MenuItem>
                          <MenuItem onClick={this.handleDelete}><DeleteIcon/> Delete</MenuItem>
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
export default withHocs(ContactsTable);
