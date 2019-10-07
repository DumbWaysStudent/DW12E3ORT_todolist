import React, { Component } from 'react';
import { Container, Content, List, ListItem, Button, Text, Input, Item, Body, Icon, Right, Left, CheckBox } from 'native-base';

class Todos extends Component{
  constructor() {
        super();
        this.state = {
          inputValue : '',
          update: {
            condition: false,
            index : 0,
            isCheck: false
          },
          dataActivity: [
            {
              todo: 'work',
              check: true
            },
            {
              todo: 'swim',
              check: true
            },
            {
              todo: 'study',
              check: false
            },
            {
              todo: 'sleep',
              check: false
            },
            {
              todo:'run',
              check: false
            }
          ]
        } 
      }

    setInputValue = (input) => {
      this.setState({inputValue: input})
    }

    onClick = () => {
      if (!this.state.inputValue){
        return;
      }
      const addData = {
        todo: this.state.inputValue,
        check: this.state.update.isCheck
      };

      let newDataActivity;
      if (this.state.update.condition){
        this.state.dataActivity.splice(this.state.update.index, 1, addData);
        this.setUpdateValue(false, 0);
        newDataActivity = this.state.dataActivity;
      } else  {
        newDataActivity = this.state.dataActivity.concat(addData);
      }
      this.setState({dataActivity: newDataActivity, inputValue: ''})
  }

    onDelete = (index) => {
      const newDataActivity = this.state.dataActivity.filter((value, idx, arr) => {
          return (index != idx)
      });
      this.setState({dataActivity: newDataActivity})
    }

    onCheck = (index) => {
      const checkingBox = this.state.dataActivity.map((key,idx) => {
        if (index == idx){
          key.check = !key.check;
        }
        return key 
      });
      this.setState({dataActivity: checkingBox})
    }

    onUpdate = (index) => {
      const updateData = this.state.dataActivity.map((key,idx) => {
        if (index == idx){
          this.setInputValue(key.todo);
          this.setUpdateValue(true, idx, key.check);
        }
        return key
      });
      this.setState({dataActivity: updateData})
    }

    setUpdateValue = (input, idx, check) => {
      const data = {
        condition: input,
        index: idx,
        isCheck: check
      }
      this.setState({update: data})
    }

    renderList = () => {
      return this.state.dataActivity.map((key, index) => {
        return (
          <ListItem icon key={index}>
            <Left>
              <CheckBox checked={key.check} color='green' onPress={() => this.onCheck(index)}/>
            </Left>
            <Body>
              <Text>{key.todo}</Text>
            </Body>
            <Right>
              <Button onPress={() => this.onUpdate(index)}>
                <Icon active name="create"/>
                </Button>
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
              <Button bordered style={styles.childOfTexBox2} onPress={this.onClick}>
                <Text>{this.state.update.condition ? 'EDIT' : 'ADD'}</Text>
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