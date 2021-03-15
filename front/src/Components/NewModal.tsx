import { Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/Inbox";
import React, { PropsWithChildren, FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      minWidth: 300,
      maxWidth: 600,
      display: "flex",
      justifyContent: "center",
      flexGrow: 1,
      backgroundColor: "white",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function NewModal(
  props: PropsWithChildren<{
    siteID: number;
    buttonText: string;
    component: FunctionComponent<{ siteID: number; handleClose: Function }>;
  }>
) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<InboxIcon />}
        onClick={handleOpen}
      >
        {props.buttonText}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.root}>
            {
              <props.component
                siteID={props.siteID}
                handleClose={handleClose}
              />
            }
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
