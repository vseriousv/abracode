import React from 'react';
import Typography from '@material-ui/core/Typography';
import withHocs from './TabsHoc';
import Productionportfoliocarts from "../Productionportfoliocarts/Productionportfoliocarts";
import PrintsAdvantagecardBlocks from "../PrintsAdvantagecardBlocks/PrintsAdvantagecardBlocks";
import Printspreviewblocks from "../Printspreviewblocks/Printspreviewblocks";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const TabContainer = ({ children, dir }) => (
    <Typography component="div" dir={dir} style={{ paddingLeft: 8 * 3, paddingRight: 8 * 3, paddingTop: 8 * 3, height: '100%'}}>
        {children}
    </Typography>
);

class SimpleTabs extends  React.Component {
    state = {
        value: 0,
        open: false,
    };
    handleChange = (event, value) => { this.setState({ value }); };


render()
{
    const { classes, theme } = this.props;
    const { open, value } = this.state;
    return (
       <>
           <Tabs variant='scrollable' value={value} onChange={this.handleChange}>
               {/*Тут писать табы*/}
               <Tab label="Первый экран"  />
               <Tab label="Преимущества" />
               <Tab label="Портфолио"  />
           </Tabs>
           <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={this.handleChangeIndex} >
               {/*Тут подключать компоненты к табам*/}
               <TabContainer dir={theme.direction}><Printspreviewblocks /></TabContainer>
               <TabContainer dir={theme.direction}><PrintsAdvantagecardBlocks /></TabContainer>
               <TabContainer dir={theme.direction}><Productionportfoliocarts /></TabContainer>
           </SwipeableViews>
       </>
    );
  }
}

export default withHocs(SimpleTabs);