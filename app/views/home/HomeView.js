/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import React, { Fragment, useEffect } from 'react';
import { View, Text, Image, Platform, Dimensions, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';

// import Dimensions from '../../styles/dimensions';
import Colors from '../../styles/colors';
import Styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeView = () => {
    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#ff6666" translucent={true} />
            <View style={{ backgroundColor: '#ff6666', height: 170 }}>
                <View style={{ marginTop: 50, marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Hello,</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Bakhtiar Hanafi</Text>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10, height: 30, backgroundColor: '#ff7f7f' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                        <Icon name="search" color={"#00FFFFFF"} size={15} />
                        <Text style={{ marginLeft: 5, color: '#00FFFFFF' }}>Search</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 20, marginTop: 20, marginRight: 20, backgroundColor: '#ff7f7f', height: 120, borderRadius: 10 }}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                    <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Have problems with</Text>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>your health?</Text>
                </View>
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'red',
                        width: 100,
                        height: 30,
                        borderRadius: 10,
                    }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 10, color: 'white' }}>Contact a Doctor</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                    </View>
                    <View style={{marginRight:20,marginTop:10}}>
                    <Image style={{ height: 100, width: 100 }} source={require('../../assets/icons/doctor.png')} />
                    </View>
                </View>

            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>All Services</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/covid.png')} />
                    <Text style={{ color: 'white' }}>Covid-19</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/consultation.png')} />
                    <Text style={{ color: 'white' }}>Consultation</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/pill.png')} />
                    <Text style={{ color: 'white' }}>Pharmacy</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/appointment.png')} />
                    <Text style={{ color: 'white' }}>Appointment</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/lab_test.png')} />
                    <Text style={{ color: 'white' }}>Lab Test</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/more.png')} />
                    <Text style={{ color: 'white' }}>More</Text>
                </View>

            </View>
            {/* <View style={{
        flexDirection: 'row',
        marginLeft:20,marginRight:20,marginTop:10
      }}>
          <View>
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
        </View>
        <View>
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
        </View>
        <View>
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
        </View>
      </View> */}
        </View>
    );
}

export default HomeView;