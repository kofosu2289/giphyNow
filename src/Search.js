import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Discover: </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Search</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Search;
