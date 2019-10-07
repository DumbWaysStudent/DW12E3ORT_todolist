import React, { Component } from 'react';
import { Container, Content, List, ListItem, Button, Text, Input, Item, Body, Icon, Right } from 'native-base';

class Todos extends Component{
  constructor() {
        super();
        this.state = {
          dataActivity: [
            'work',
            'swim',
            'study',
            'sleep',
            'run'
          ]
        } 
      }

    renderList = () => {
      return this.state.dataActivity.map((key, index) => {
        return (
          <ListItem icon key={index}>
            <Body>
              <Text>{key}</Text>
            </Body>
          </ListItem>
        );
      });
    }

    render(){
      return(
        <Container>
          <Content>
            <List>
              {this.renderList()}
            </List>
          </Content>
        </Container>
      );
    }
}

export default Todos
