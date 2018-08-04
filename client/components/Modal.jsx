import React from 'react';
import PropTypes from 'prop-types';
import './ModalStyles.css';
import ArrowKeysReact from 'arrow-keys-react';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }


  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }
  // Handle the key press event.

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  render() {
    // Render nothing if the "show" prop is false
    const {
      onCloseRequest,
    } = this.props;

    if (!this.props.show) {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: 'transparent',
      borderRadius: 5,
      maxWidth: 654,
      maxHeight: 438,
      margin: '0 auto',
      padding: 30,
    };

    return (
      <div {...ArrowKeysReact.events} className="backdrop" style={backdropStyle}>
        <div>
          <button
            type="button"
            onClick ={this.props.increment} 
            className="rightChevron"
          >
            <i className="fas fa-chevron-right fa-6x" />
          </button>
          <button
            type="button"
            className="leftChevron"
            onClick={this.props.decrement}
          >
            <i className="fas fa-chevron-left fa-6x" />
          </button>
        </div>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="footer">

            <button
              type="button"
              className="closeButton"
              onClick={onCloseRequest}
            >
              <i className="fas fa-times fa-3x" />
            </button>

          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
