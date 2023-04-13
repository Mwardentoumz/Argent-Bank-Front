import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeNamesAction, editNamesAction } from '../../scripts/store';
import './EditNamesButton.css';

/**
 * React component to create a button updating Redux state when clicked
 * @param { {title: String} } props - title: shown text
 * @returns { React.ReactElement } EditNamesButton component
 */
function EditNamesButton(props) {
   const dispatch = useDispatch();

   return (
      <button
         className="edit_names_button"
         onClick={() => {
            if (props.title === 'Save') {
               dispatch(changeNamesAction());
            }
            dispatch(editNamesAction());
         }}
      >
         {props.title}
      </button>
   );
}

EditNamesButton.propTypes = {
   title: propTypes.string.isRequired,
};

export default EditNamesButton;