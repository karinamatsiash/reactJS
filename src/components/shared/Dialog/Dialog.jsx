import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import './Dialog.scss';
import { IoCloseOutline } from 'react-icons/io5';

const Dialog = ({ title, children, width, onClose }) => {
  return (
    <Portal node={document.body}>
      <div className='dialog-overlay'>
        <div className='dialog' style={{ width }}>
          <div className='dialog_header'>
            <span className='dialog_header_title'>{title}</span>
            <IoCloseOutline className='dialog_header_close-btn' onClick={onClose} />
          </div>
          <div className='dialog_body'>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Dialog;
