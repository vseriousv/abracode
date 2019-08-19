export const styles = theme => ({
  searchRoot: {
    marginBottom: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 6,
    display: 'flex',
  },
  root: {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hiden',
    height: 'calc( 100vh - 150px )'
  },
  root_filtr: {
    width: '100%',
    overflowX: 'auto',
    marginBottom: '10px'
  },
  imgTable: {
    width: '100px'
  },
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  formControlSelect: {
    marginTop: theme.spacing.unit * 2,
    width: '100%',
  },
});
