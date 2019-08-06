import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CameraIcon from '@material-ui/icons/Call';

import Contacts from '../Contacts/Contacts';

import withHocs from './TabsHoc';

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => { this.setState({ value }); };
  handleChangeIndex = index => { this.setState({ value: index }); };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs variant='scrollable' value={value} onChange={this.handleChange}>
            {/*Тут писать табы*/}
            <Tab label="Контакты" icon={<CameraIcon />} />
          </Tabs>
        </AppBar>
        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={this.handleChangeIndex} >
            {/*Тут подключать компоненты к табам*/}
          <TabContainer dir={theme.direction}><Contacts /></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withHocs(SimpleTabs);
