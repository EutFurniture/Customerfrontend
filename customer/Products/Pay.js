import React,{Fragment,useMemo,useState} from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import './product.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  gift:{
    padding:"20px",
    position:"relative",
    right:"20%",
    marginTop:'80%',
    backgroundCloor:"black",
    color:'white',
  },
  
 
});



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Pay() {

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }; 

   
    return (
        <Fragment>
         
          <div className="shap">
        
      <Button  className='btn btn-primary ' onClick={handleClickOpen}>
       Check
      </Button>
  
     
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <h3 className="gitt"> Surprise gift !</h3>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           <img src="../../images/giftt.jpg" className="giftt" />
          </Typography>
          <Typography gutterBottom>
            You got 15 points
            so we a give small gift for you.
          </Typography>
          <Typography gutterBottom>
           So you can order gift below Rs.1500 (15 points * Rs.100).
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} class='btn btn-primary'>
              <Link to='/customer/product/' className="ass">
            Select gift
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  
     
        </Fragment>
    )
}











 







  

    
 
