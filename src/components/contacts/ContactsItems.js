import React from 'react';
import './ContactsItems.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const filtredArr = (contactsItems, filter) => {
  return filter
    ? contactsItems.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : contactsItems;
};
function ContactsItems({ contactsItems, deleteContact, filter }) {
  return (
    <TransitionGroup component="ul" className="list">
      {filtredArr(contactsItems, filter).map(el => (
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
  contactsItems: state.contacts.contacts,
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsItems);
