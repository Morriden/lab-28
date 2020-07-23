import React, { Component } from 'react';
import Form from '../Form/Form';
import Display from '../Display/Display';
import List from '../List/List';
import { chosenRoute } from '../../Services/ActionRoutes';

export default class MainContainer extends Component {
    state = {
      responseInfo: '',
      linkInput: '',
      bodyInput: '',
      lists: [],
      method: ''
    }

    handleLinkInputChange = ({ target }) => {
      this.setState({ linkInput: target.value });
    }

    handleBodyInputChange = ({ target }) => {
      this.setState({ bodyInput: target.value });
    }

    handleOptionChange = ({ target }) => {
      this.setState({ method: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const { method, linkInput, bodyInput } = this.state;
      return chosenRoute(linkInput, bodyInput, method)
        .then(responseInfo => this.setState({ responseInfo }));
      
    }

    render() {
      const { linkInput, bodyInput, responseInfo, lists, method } = this.state;
      return (
        <>
          <Form 
            linkInput={linkInput} 
            bodyInput={bodyInput} 
            onLinkChange={this.handleLinkInputChange} 
            onBodyChange={this.handleBodyInputChange} 
            handleOptionChange={this.handleOptionChange}
            method={method}
            onSubmit={this.handleSubmit} 
          />
          <Display responseInfo={responseInfo}/>
          <List lists={lists}/>
        </>
      );
    }
}
