/*
 Date Created       : 19 Februari 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, C Fransisca S
*/

import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Dimensi from './dimensions';
import GLS_Colors from './colors';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const ratio_x = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratio_y = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 16;
const unit = base_unit * ratio_x;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

// We add an em() shortcut function 
function em(value) {
    return unit * value;
}

export default Styles = StyleSheet.create({
    background_container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container_loading : {
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 70
    },
    loading_style : {
        flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 80
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: GLS_Colors.white
    },
    container_main_absolute: {
        // alignItems:'center',
        flex: 1,
        backgroundColor: GLS_Colors.background_color,
    },
    container_main: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: GLS_Colors.background_color,
    },
    image_slider: {
        height: responsiveWidth(60),
        width: responsiveWidth(60),
    },
    icon_tab: {
        height: 24,
        width: 24,
    },
    text_slider: {
        fontSize: 16,
        color: GLS_Colors.grey,
        fontFamily: Platform.select({
            android: 'Lato-Regular'
        }),
        textAlign: 'center'
    },
    title_slider: {
        color: GLS_Colors.black,
        fontFamily: Platform.select({
            android: 'Lato-Regular'
        }),
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textFontFamily: {
        fontSize: 16,
        fontFamily: Platform.select({
            android: 'Lato-Regular'
        }),

    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 150,
    },
    active_dot_style: {
        backgroundColor: GLS_Colors.default_color,
    },
    text_grey: {
        color: GLS_Colors.grey,
        fontFamily: Platform.select({
            android: 'Lato-Regular'
        }),
    },
    text_link: {
        color: GLS_Colors.default_color,
        fontFamily: Platform.select({
            android: 'Lato-Regular'
        }),
    },
    text_button_center_blue: {
        color: GLS_Colors.default_card_blue,
        fontSize: 16,
        fontWeight: 'bold'
    },
    default_button: {
        backgroundColor: GLS_Colors.default_color,
        width: responsiveWidth(94),
        height: responsiveWidth(11),
        borderRadius: 4,
        alignSelf: 'center',
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        // shadowOffset: { height: 1, width: 1 }, // IOS
        // shadowOpacity: 1, // IOS
        // shadowRadius: 1, //IOS
        // elevation: 2, // Android
    },
    text_button_center_white: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    default_font_text: {
        margin: 16,
        fontSize: 16,
        fontWeight: 'normal',
        color: GLS_Colors.grey,
        textAlign: 'center',
        fontFamily: Platform.select({
            android: 'Lato-Regular'
        })
    },
    logout_button: {
        backgroundColor: GLS_Colors.default_color,
        // width: responsiveWidth(43),
        width: responsiveWidth(90),
        height: 52,
        borderRadius: 4,
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    modal_button: {
        backgroundColor: GLS_Colors.default_color,
        // width: responsiveWidth(43),
        width: '90%',
        height: 52,
        borderRadius: 4,
        alignSelf: 'center',
        // untuk buat shadows
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    text_center: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    text_button_center_white: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    tab_navigator_labelstyle: {
        fontSize: 12
    },
    tab_navigator_indicatorstyle: {
        backgroundColor: GLS_Colors.active_tab,
        borderWidth: 3,
        borderColor: GLS_Colors.active_tab
    },
    tab_navigator_style: {
        backgroundColor: GLS_Colors.white,
        elevation: 0
    },
    header_style: {
        backgroundColor: GLS_Colors.app_bar,
        elevation: 0
    },
    header_title_style: {
        fontSize: 16
    },
});
