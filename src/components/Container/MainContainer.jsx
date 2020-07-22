import React, { Component } from 'react';
import Form from '../Form/Form';
import Display from '../Display/Display';
import List from '../List/List';

export default class MainContainer extends Component {
    state = {
        responseInfo: '',
        linkInput: '',
        bodyInput: '',
        responseInfo: '',
        lists: [],
    }

    // linkInputChange = ({  }) => {

    // }

    // bodyInputChange = ({  }) => {

    // }


    render() {
        const { linkInput, bodyInput, responseInfo, lists } = this.state;
        return (
            <>
            <Form linkInput={linkInput} bodyInput={bodyInput} onLinkChange={this.onLinkChange} onBodyChange={this.onBodyChange} onSubmit={this.handleSubmit} />
            <Display responseInfo={responseInfo}/>
            <List lists={lists}/>
            </>
        )
    }
}
