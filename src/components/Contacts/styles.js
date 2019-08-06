export const styles = theme => ({
  wrapper: {
    position: 'relative',
    minHeight: 'calc(100vh - 24px * 2 - 72px)',
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
