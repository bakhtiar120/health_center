/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import React, { Fragment, useEffect } from 'react';
import { View, Text, Image, Platform, Dimensions, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';
// import Dimensions from '../../styles/dimensions';
import Colors from '../../styles/colors';
import Styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileView = () => {
    return (

        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#ff6666" translucent={true} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ff6666', height: 100 }}>
                <View style={{ marginTop: 50, marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Profile</Text>

                </View>
                <View style={{ marginTop: 50, marginRight: 20 }}>
                    <Icon name="bell" color={"white"} size={20} />
                </View>
            </View>
            <View style={{ flexDirection:'row', marginTop: 20, marginLeft: 20, marginRight: 20, backgroundColor: 'white', height: 100, borderRadius: 10 }}>
                <View style={{marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                    <Avatar
                        rounded
                        size={50}
                        source={require("../../assets/icons/user.png")}
                    />
                </View> 
                <View style={{marginLeft:10,justifyContent:'center',marginTop:-20}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>
                        Bakhtiar Hanafi
                    </Text>
                    <Text style={{color:'grey',textDecorationLine:'underline'}}>
                        Edit Profile >
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginTop: 20, marginLeft: 20, marginRight: 20, backgroundColor: 'white', height: 60, borderRadius: 10 }}>
               
                <View style={{flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="history" color={"#ff6666"} size={18} />
                        <Text style={{color:'#ff6666',marginLeft:10,fontSize:18}}>History</Text>
                </View>
                <View style={{marginRight:20,justifyContent:'center',alignItems:'center'}}>
                 <Icon name="chevron-right" color={"#ff6666"} size={18} />
                </View>
                
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginTop: 10, marginLeft: 20, marginRight: 20, backgroundColor: 'white', height: 60, borderRadius: 10 }}>
               
                <View style={{flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="wallet" color={"#ff6666"} size={18} />
                        <Text style={{color:'#ff6666',marginLeft:10,fontSize:18}}>Payment</Text>
                </View>
                <View style={{marginRight:20,justifyContent:'center',alignItems:'center'}}>
                 <Icon name="chevron-right" color={"#ff6666"} size={18} />
                </View>
                
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginTop: 10, marginLeft: 20, marginRight: 20, backgroundColor: 'white', height: 60, borderRadius: 10 }}>
               
                <View style={{flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="question-circle" color={"#ff6666"} size={18} />
                        <Text style={{color:'#ff6666',marginLeft:10,fontSize:18}}>Help Center</Text>
                </View>
                <View style={{marginRight:20,justifyContent:'center',alignItems:'center'}}>
                 <Icon name="chevron-right" color={"#ff6666"} size={18} />
                </View>
                
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginTop: 10, marginLeft: 20, marginRight: 20, backgroundColor: 'white', height: 60, borderRadius: 10 }}>
               
                <View style={{flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="wrench" color={"#ff6666"} size={18} />
                        <Text style={{color:'#ff6666',marginLeft:10,fontSize:18}}>Setting</Text>
                </View>
                <View style={{marginRight:20,justifyContent:'center',alignItems:'center'}}>
                 <Icon name="chevron-right" color={"#ff6666"} size={18} />
                </View>
                
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginTop: 10, marginLeft: 20, marginRight: 20, backgroundColor: 'white', height: 60, borderRadius: 10 }}>
               
                <View style={{flexDirection:'row',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="sign-out-alt" color={"#ff6666"} size={18} />
                        <Text style={{color:'#ff6666',marginLeft:10,fontSize:18}}>Logout</Text>
                </View>
                <View style={{marginRight:20,justifyContent:'center',alignItems:'center'}}>
                 <Icon name="chevron-right" color={"#ff6666"} size={18} />
                </View>
                
                
            </View>
        </View>
    );
}

export default ProfileView;