import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Header, Content, Container, Left, Button, Icon, Right} from 'native-base';
export default class ordersScreen extends Component {
    render() {
        return (
            <Container>
                <Header  style={styles.headerBar}>
                    <Left>

                        <Icon name='menu'  style={{color: 'white'}} onPress={()=>
                            this.props.navigation.openDrawer()}/>
                    </Left>
                    <Text  style={styles.Brand}> My Orders </Text>
                    <Right>
                        <Icon name="md-search" style={{color: 'white'}}/>
                    </Right>

                </Header>
                <Content contentContainerStyle={styles.container}>
                    <Text>Orders Screen</Text>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red'
    }
});
AppRegistry.registerComponent('ordersScreen', ()=> ordersScreen);