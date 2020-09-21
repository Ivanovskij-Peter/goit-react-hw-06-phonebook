import React from 'react';
import './ContactsItems.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import actions from '../redux/actions';

function ContactsItems({ contactsItems, deleteContact }) {
  return (
    <TransitionGroup component="ul" className="list">
      {contactsItems.map(el => (
        <CSSTransition key={el.id} timeout={300} classNames="list-fade">
          <li key={el.id} className="item">
            <p>{el.name}</p>
            <p>{el.number}</p>
            <button className="btn" onClick={() => deleteContact(el.id)}>
              X
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
const mapStateToProps = state => ({
  contactsItems:
    state.contacts.newFilterArr.length > 0
      ? state.contacts.newFilterArr
      : state.contacts.contacts,
});
const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsItems);
