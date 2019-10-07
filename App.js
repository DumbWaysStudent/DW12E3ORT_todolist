import React, { Component } from 'react';
import { Container, Content, List, ListItem, Button, Text, Input, Item, Body, Icon, Right } from 'native-base';

class Todos extends Component{
  constructor() {
        super();
        this.state = {
          inputValue : '',
          dataActivity: [
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
      const newDataActivity = this.state.dataActivity.concat(this.state.inputValue)
      this.setState({dataActivity: newDataActivity, inputValue: ''})
    }

    onDelete = (index) => {
      const newDataActivity = this.state.dataActivity.filter((value, idx, arr) => {
          return (index != idx)
      });
      this.setState({dataActivity: newDataActivity})
    }

    renderList = () => {
      return this.state.dataActivity.map((key, index) => {
        return (
          <ListItem icon key={index}>
            <Body>
              <Text>{key}</Text>
            </Body>
            <Right>
             <Button danger onPress = {() => this.onDelete(index)}>
               <Icon active name="trash" />
             </Button>
            </Right>
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