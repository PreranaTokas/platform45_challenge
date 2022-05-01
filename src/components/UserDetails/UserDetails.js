import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';


const clearForm = () => {
  const inputs = document.getElementsByTagName('input');
  const totalInputs = inputs.length;
  for (let i = 0; i < totalInputs; i++) {
    inputs[i].value = "";
  }
}


const UserDetails = () => (
  <div id="form" data-testid="UserDetails">
    <table>
      <tbody>
        <tr>
          <td id="formName">Name</td>
          <td><input type="text" className="formInputFields" placeholder="" /></td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td id="formGender">Gender</td>
          <td id="formGenderM">Male</td>
          <td id="formGenderF">Female</td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td id="formDoB">Date of Birth</td>
          <td ><input type="date" className="formInputFields" /></td>
        </tr>
        <tr>
          <td id="formEmail">Email</td>
          <td><input type="email" className="formInputFields" /></td>
        </tr>
        <tr>
          <td id="formMobile">Mobile</td>
          <td><input type="tel" className="formInputFields" /></td>
        </tr>
        <tr>
          <td id="formCustomerID">Customer ID</td>
          <td><input type="text" className="formInputFields" /></td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td id="formMembership">Membership</td>
          <td id="formMembershipclassNameic" className="formMembershipCards">Classic</td>
          <td id="formMembershipSilver" className="formMembershipCards">Silver</td>
          <td id="formMembershipGold" className="formMembershipCards">Gold</td>
        </tr>
      </tbody>
    </table>
    <div id="formNavButtonContainer">
      <div id="formCancel" className="formNavButtons" onClick={clearForm}>CANCEL</div>
      <div id="formSave" className="formNavButtons">SAVE</div>
    </div>
  </div>
);

UserDetails.propTypes = {};

UserDetails.defaultProps = {};

export default UserDetails;
