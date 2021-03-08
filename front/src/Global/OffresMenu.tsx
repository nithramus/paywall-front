import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { getOffre } from "actions/offres.actions";
import { RootState } from "app/store";
import AppBarContainer from "Components/AppBarContainer";
import Abonnement from "Pages/Offres/Offre/Abonnement";
import Sites from "Pages/Offres/Offre/Sites";
import React from "react";
import { useSelector } from "react-redux";

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
export default function OffreMenu(props: { offreId: string }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const offre = useSelector((state: RootState) =>
    getOffre(state, props.offreId)
  );
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
          <Tab label="Abonnement" {...a11yProps(0)} />
          <Tab label="Sites" {...a11yProps(1)} />
          <Tab label="Utilisateurs" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AppBarContainer>
          <Abonnement />
        </AppBarContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sites />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Utilisateurs
      </TabPanel>
    </div>
  );
}
