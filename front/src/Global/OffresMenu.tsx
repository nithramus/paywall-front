import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AppBarContainer from "Components/AppBarContainer";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}));

interface Props {
  componentId: number;
  componentOne: JSX.Element;
  componentOneText: string;
  componentTwo: JSX.Element;
  componentTwoText: string;
  componentThree: JSX.Element;
  componentThreeText: string;
  componentFour: JSX.Element;
  componentFourText: string;
}

export default function OffreMenu(props: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" variant="outlined" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          variant="fullWidth"
          textColor="primary"
        >
          <Tab label={props.componentOneText} {...a11yProps(0)} />
          <Tab label={props.componentTwoText} {...a11yProps(1)} />
          <Tab label={props.componentThreeText} {...a11yProps(2)} />
          <Tab label={props.componentFourText} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AppBarContainer>{props.componentOne}</AppBarContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.componentTwo}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.componentThree}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.componentFour}
      </TabPanel>
    </div>
  );
}
