import React, { Component } from 'react';
import { Container, Content, List, ListItem, Button, Text, Input, Item, Body, Icon, Right } from 'native-base';

class Todos extends Component{
  constructor() {
        super();
        this.state = {
          inputValue : '',
          dataKegiatan: [
            'work',
            'swim',
            'study',
            'sleep',
            'run'
          ]
        } 
      }

    setInputValue = (input) => {
      this.setState({inputValue: input})
    }

    onClickAdd = () => {
      const newDataKegiatan = this.state.dataKegiatan.concat(this.state.inputValue)
      this.setState({dataKegiatan: newDataKegiatan, inputValue: ''})
    }

    renderList = () => {
      return this.state.dataKegiatan.map((key, index) => {
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
            <Body style={styles.TextBox1}>
              <Item regular style={styles.childOfTexBox1}>
                <Input
                  placeholder='New to do'
                  onChangeText={e => this.setInputValue(e)}
                  value={this.state.inputValue}
                />
              </Item>
              <Button bordered style={styles.childOfTexBox2} onPress={this.onClickAdd}>
                <Text>Add</Text>
              </Button>
              </Body>
            <List>
              {this.renderList()}
            </List>
          </Content>
        </Container>
      );
    }
}

const styles = {
  TextBox1:{
    flexDirection: 'row'
  },
  childOfTexBox1:{
    flex: 8
  },
  childOfTexBox2:{
    flex: 2
  }
}

export default Todos