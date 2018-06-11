import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    let { upc, title, list_price, handleShopping } = this.props;

    this.setState({ open: true });

    let session = [];

    if(!!sessionStorage.cart)
      session = JSON.parse(window.sessionStorage.cart)



    let data = {
      upc,
      list_price,
      title,
    }

    session.push(data);

    handleShopping(session);
    
    window.sessionStorage.cart = JSON.stringify(session);

    console.log('CART SESSION -> ', sessionStorage.cart)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { upc } = this.props.upc;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Add to cart</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
          <DialogContent>
            {this.props.children}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;