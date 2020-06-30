import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import CreateImageKarmaContainer from '../karma/create_image_karma_container';
import CreateStringKarmaContainer from '../karma/create_string_karma_container';
import RetrieveTreasureContainer from '../retrieve_treasure/retrieve_treasure_container';
import ImageContainer from '../image/image_container';
import ReportTreasureContainer from '../report_treasure/report_treasure_container';
import InstructionsContainer from '../main/instructions_container';
import './modal.css';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (Object.keys(modal)[0]) {
    case 'photo':
      component = <CreateImageKarmaContainer />;
      break;
    case 'type':
      component = <CreateStringKarmaContainer type={modal.type} />;
      break;
    case 'retrieve':
      component = <RetrieveTreasureContainer />;
      break;
    case 'image':
      component = <ImageContainer treasure={modal.image} />;
      break;
    case 'report':
      debugger;
      component = <ReportTreasureContainer treasure={modal.report} />;
      break;
    case 'instructions':
      component = <InstructionsContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
