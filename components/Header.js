import React from 'react';
import BouncyDrawer from 'react-native-bouncy-drawer'
import { StyleSheet, Text, View, Button } from 'react-native';
import MAIcon from 'react-native-vector-icons/MaterialIcons'
import { createStackNavigator } from 'react-navigation';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        
    }
    handlePress = (routeLocation) => {
        this.props.navigation.navigate(routeLocation);
        console.log("route to" + {routeLocation});
    }
    
    renderButton = (name, routeLocation) => (
        <View smp row vcenter>
            <Button onPress={() => {this.props.navigation.navigate(routeLocation);}} title={name}>
                {name}
            </Button>
        </View>
    )

    renderContent = () => (
        <View flex hcenter mdpr style={{ backgroundColor: '#3F3C4C', alignItems: 'center', zIndex: 1}}>
            <View flex>
                <View style={{ flex: 1 }} />
                {this.renderButton("HOME", 'Home')}
                {this.renderButton("ABOUT", 'About')}
                {this.renderButton("ACTIVITY", 'Activity')}
                <View mdp/>
                <View style={{ flex: 3 }} />
            </View>
        </View>
    )
    render() {
        return (
            <BouncyDrawer
                willOpen={() => console.log('will open')}
                didOpen={() => console.log('did open')}
                willClose={() => console.log('will close')}
                didClose={() => console.log('did close')}

                title="Activity"
                titleStyle={{
                    color: '#fff',
                    fontFamily: 'Helvetica Neue',
                    fontSize: 20,
                    marginLeft: -3
                }}
                closedHeaderStyle={{ backgroundColor: '#3F3C4C' }}
                defaultOpenButtonIconColor="#fff"
                defaultCloseButtonIconColor="#fff"
                renderContent={this.renderContent}
                openedHeaderStyle={{ backgroundColor: '#3F3C4C' }}
                openFriction={100}
                closeFriction={100}
            />
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        marginLeft: -3 
    },
    
});