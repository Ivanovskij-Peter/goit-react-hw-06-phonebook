import React, { Component } from 'react';
import Filter from '../filter/Filter';
import ContactsForm from '../contacts/ContactsForm';
import ContactsItems from '../contacts/ContactsItems';
import './PhoneBook.css';
import { CSSTransition } from 'react-transition-group';

class PhoneBook extends Component {
  state = {
    isExsist: false,
  };

  // filterItems = () => {
  //   return this.state.filter
  //     ? this.state.contacts.filter(el =>
  //         el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
  //       )
  //     : this.state.contacts;
  // };

  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="Phone-slideIn"
          timeout={1000}
          unmountOnExit
        >
          <h1 className="Phone">PhoneBook</h1>
        </CSSTransition>
        <CSSTransition
          in={this.state.isExsist}
          classNames="alert"
          timeout={500}
          unmountOnExit
        >
          <h2 className="alert">This name is already in contacts!</h2>
        </CSSTransition>
        <ContactsForm />
        <Filter />
        <ContactsItems />
      </div>
    );
  }
}

export default PhoneBook;

//  this.state.contacts.length > 1 && <Filter />;
