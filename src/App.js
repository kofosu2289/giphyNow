import React, { Component } from 'react';
import { PageHeader, Tabs, Tab } from 'react-bootstrap';
import './App.css';

import Search from './Search';
import Functionalities from './Functionalities';

var GphApiClient = require('giphy-js-sdk-core')

class App extends Component {

    constructor() {
        super();
        this.state = {
            giphy: GphApiClient("8XADJBZWvzB75qIDyCpfWLbnE5otD7wG"),
            searchQuery: ""
        };

       
    }

    search = async (e) => {
        e.preventDefault();

        await this.state.giphy.search('gifs', { "q": this.state.searchQuery })
            .then((response) => {
                response.data.forEach((gifObject) => {
                    console.log(gifObject);
                })
            })
            .catch((err) => {
                
            });
    }

    updateQuery = (e) => {
        this.setState({
            searchQuery: e.target.value
        });
    }

    render() {
        return (
            <section>
                <PageHeader>
                    giphyNow
                </PageHeader>
            <Search
              query={this.state.searchQuery}
              search={this.search}
              handleChange={this.updateQuery}
            />
            <Functionalities />
            </section>
        );
    }
}

export default App;
