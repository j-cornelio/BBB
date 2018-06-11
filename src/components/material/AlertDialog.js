import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class AlertDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    let { upc, title, list_price, handleShopping } = this.props;

    this.setState({ open: true });

    let session = [];

    if(!!sessionStorage.cart)
      session = JSON.parse(sessionStorage.cart)

    let data = {
      upc,
      list_price,
      title,
    }

    session.push(data);

    handleShopping(session);
    
    sessionStorage.cart = JSON.stringify(session);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color="primary" className="primary-dialog">Add to cart</Button>
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

AlertDialog.defaultProps = {
  title: '',
  url: '',
  list_price: '',
  upc: '',
  handleShopping: function(){}
};

