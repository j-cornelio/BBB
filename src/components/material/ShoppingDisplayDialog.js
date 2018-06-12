import React, { Component } from 'react';
import Button               from '@material-ui/core/Button';
import Dialog               from '@material-ui/core/Dialog';
import DialogActions        from '@material-ui/core/DialogActions';
import DialogContent        from '@material-ui/core/DialogContent';

class ShoppingDisplay extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { data } =  this.props;

    return (
      <div>
        <Button onMouseOver={this.handleClickOpen} color="primary" className="primary-dialog">see cart</Button>

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

export default ShoppingDisplay;

ShoppingDisplay.defaultProps = {

};

