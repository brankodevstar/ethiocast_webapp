import EStyleSheet from 'react-native-extended-stylesheet';
var GLOBALModule = require('../datalayer/global');
var GLOBAL = GLOBALModule.default;

const baseStyle = EStyleSheet.create({
    //Generic styles
    Error: {
        fontSize: '$font_size_extra + 0.8 + rem',
        color: '#fff',
    },
    Button: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        width: '20rem',
        height: '4rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonInput: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        //backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '18rem',
        height: '3.5rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    // InputFake: {

    //     backgroundColor: 'rgba(0, 0, 0, 0.40)',
    //     width: '17rem',
    //     height: '3.5rem',
    //     margin: 5,
    //     borderRadius: 5
    // },
    InputFakeApple: {
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '25rem',
        height: '6rem',
        margin: 5,
        borderRadius: 5,
    },
    ButtonNormal: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '17rem',
        height: '3.5rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonNormalApple: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        //backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '25rem',
        height: '6rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonNormalSmartTV: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '20rem',
        height: '4rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonNormalPlayer: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        //backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '17rem',
        height: '2.5rem',
        margin: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonNormalLeft: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '18rem',
        height: '3.5rem',
        justifyContent: 'center',
        margin: 2,
    },
    ButtonNormalLeftApple: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        //backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '25rem',
        height: '6rem',
        justifyContent: 'center',
        margin: 2,
    },
    ButtonNormalLeftMobile: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        // color: '#fff',
        //backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '12rem',
        height: '2rem',
        justifyContent: 'center',
        margin: 2,
    },
    RadioButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        margin: 5,
        //borderColor: '#666',
        borderWidth: 3,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    ButtonSizedAppleLeft: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '4rem',
        margin: 2,

        borderRadius: 5,
    },
    ButtonSizedSmartTVLeft: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '3rem',
        margin: 2,

        borderRadius: 5,
    },
    ButtonSizedLeft: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '2rem',
        margin: 2,

        borderRadius: 5,
    },

    ButtonSizedApple: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '6rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonSizedSmartTV: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '4rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonSized: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        //  backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '3rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonFullSize: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '3.5rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonFullSizeAppleTV: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '6rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonFullSizeSmartTV: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '4rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonAutoSize: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '3rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonAutoSizeApple: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '6rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    ButtonAutoSizeSmartTV: {
        //  fontSize: '$font_size_extra + 0.8 + rem',
        //  color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: '4rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },

    ButtonSmall: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        ///color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.80)',
        width: '6rem',
        height: '2rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonSmallSmartTV: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        ///color: '#fff',
        //backgroundColor: 'rgba(0, 0, 0, 0.80)',
        width: '6rem',
        height: '3rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonSmallAppleTV: {
        // fontSize: '$font_size_extra + 0.8 + rem',
        ///color: '#fff',
        // backgroundColor: 'rgba(0, 0, 0, 0.80)',
        width: '10rem',
        height: '4rem',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ButtonMini: {
        // fontSize: '$font_size_extra + 0.7 + rem',
        // color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        width: '4.5rem',
        height: '3rem',
        margin: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    InputNoLine: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        padding: 5,
        margin: 5,
        textAlign: 'left',
    },
    Bold: {
        fontFamily: 'OpenSans-Bold',
    },
    Input: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        padding: 5,
        margin: 5,
        textAlign: 'left',
    },
    InputMobile: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        padding: 5,
        margin: 5,
        textAlign: 'left',

        paddingLeft: 15,
    },
    InputWeb: {
        fontSize: '$font_size_extra + 1 + rem',
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
        padding: 5,
        margin: 5,
        textAlign: 'left',
        borderColor: '#fff',
        borderWidth: 1,
    },
    InputBig: {
        fontSize: '$font_size_extra + 3 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        padding: 5,
        margin: 5,
        textAlign: 'left',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
    },
    InputSleek: {
        fontSize: '$font_size_extra + 2 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        textAlign: 'left',
        marginLeft: 15,
        letterSpacing: 15,
        marginRight: 15,
    },
    InputSearch: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        textAlign: 'left',
        marginLeft: 15,
        letterSpacing: 2,
        marginRight: 15,
    },
    InputFake: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.80)',

        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    InputStandard: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        fontFamily: 'OpenSans-Regular',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    InputCode: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    Loader: {
        fontSize: '$font_size_extra + 2 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Huge: {
        fontSize: '$font_size_extra + 4 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    EvenBigger: {
        fontSize: '$font_size_extra + 1.6 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Bigger: {
        fontSize: '$font_size_extra + 1.4 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Big: {
        fontSize: '$font_size_extra + 1.2+ rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Large: {
        fontSize: '$font_size_extra + 1.1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Standard: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    MediumPlus: {
        fontSize: '$font_size_extra + 0.9 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Medium: {
        fontSize: '$font_size_extra + 0.8 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Small: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    SmallTags: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        margin: 5,
    },
    Mini: {
        fontSize: '$font_size_extra + 0.5 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H000: {
        fontSize: '$font_size_extra + 4.5 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H00: {
        fontSize: '$font_size_extra + 2.5 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H0: {
        fontSize: '$font_size_extra + 2.0 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H1: {
        fontSize: '$font_size_extra + 1.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H2: {
        fontSize: '$font_size_extra + 1.3 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H3: {
        fontSize: '$font_size_extra + 1.2 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H4: {
        fontSize: '$font_size_extra + 1.1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    H5: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    PopupHeader: {
        fontSize: '$font_size_extra + 1 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Subtext: {
        fontSize: '$font_size_extra + 0.9 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    SubtextSmall: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '$sub_color',
    },
    DateTime: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '$sub_color',
    },
    DateTimeWhite: {
        fontSize: '$font_size_extra + 0.6 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Date: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '$sub_color',
    },
    DateSmall: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: '$font_size_extra + 0.6 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '$sub_color',
    },
    Time: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '$sub_color',
    },
    TimeHeader: {
        fontSize: '$font_size_extra + 0.8 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    News: {
        fontSize: '$font_size_extra + 0.75 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
    },
    Menu: {
        fontSize: '$font_size_extra + 0.8 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        paddingLeft: 9,
        paddingRight: 9,
    },
    MenuSquare: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        paddingLeft: 3,
        paddingRight: 3,
    },
    MenuIcons: {
        fontSize: '$font_size_extra + 0.8 + rem',
        color: '#fff',
        marginLeft: 9,
        marginRight: 9,
    },
    MenuWidth_100: {
        width: '5rem',
    },
    IconsItvSmall: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.6 + rem',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    IconsItv: {
        color: '#fff',
        fontSize: '$font_size_extra + 1.1 + rem',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    IconsMenu: {
        color: '#fff',
        fontSize: '$font_size_extra + 1.1 + rem',
        margin: 8,
    },
    IconsMenuSmall: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.7 + rem',
        margin: 3,
    },
    IconsTelevision: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.9 + rem',
        margin: 3,
    },
    IconsMenuStandard: {
        color: '#fff',
        fontSize: '$font_size_extra + 1 + rem',
        margin: 3,
    },
    IconsMenuMedium: {
        color: '#fff',
        fontSize: '$font_size_extra + 1.5 + rem',
        margin: 3,
    },
    IconsMenuLarge: {
        color: '#fff',
        fontSize: '$font_size_extra + 2 + rem',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconsMenuHuge: {
        color: '#fff',
        fontSize: '$font_size_extra + 3.2 + rem',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconsIMDB: {
        color: '#fec205',
        fontSize: '$font_size_extra + 2 + rem',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconsIMDBSmall: {
        color: '#fec205',
        fontSize: '$font_size_extra + 1.4 + rem',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconsMenuBig: {
        color: '#fff',
        fontSize: '$font_size_extra + 3.2 + rem',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconsMenuNormal: {
        color: '#fff',
        fontSize: '$font_size_extra + 1.2 + rem',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconsMenuSmall: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.7 + rem',
        margin: 5,
    },
    IconsMenuSmaller: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.5 + rem',
    },
    IconsMenuMini: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.4 + rem',
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    CenterText: {
        textAlign: 'center',
        //verticalAlign: 'center'
    },
    CenterImage: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },
    CenterList: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    Circle_35: {
        width: 35,
        height: 35,
        borderRadius: 100 / 2,
        backgroundColor: '#444',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    Circle_45: {
        width: 45,
        height: 45,
        borderRadius: 100 / 2,
        backgroundColor: '#444',
        marginLeft: 5,
        marginRight: 5,
    },
    Circle_45_White: {
        width: 45,
        height: 45,
        borderRadius: 100 / 2,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
    },
    Width_100_Percent: {
        width: '100%',
    },
    Width_80_Percent: {
        width: '80%',
    },
    Footer: {
        height: '$footer_height',
        backgroundColor: '#000',
    },
    Categories: {
        height: '$header_height',
        backgroundColor: '#000',
    },
    Categories_Offset: {
        top: '$header_height',
    },
    Header: {
        height: '$header_height',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    Header_Logo: {
        height: '$logo_height',
        width: '$logo_height * 3',
    },
    Color_LightGray: {
        color: '$sub_color',
    },
    ButtonCirle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'transparent',
    },
    Shadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    BoldTextSmall: {
        fontSize: '$font_size_extra + 0.7 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    BoldTextBig: {
        fontSize: '$font_size_extra + 0.9 + rem',
        fontFamily: 'OpenSans-Regular',
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    //custom styles
    square_button_text: {
        color: '#fff',
        fontSize: '$font_size_extra + 0.5 + rem',
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
        justifyContent: 'center',
    },
    square_button: {
        backgroundColor: 'rgba(0, 0, 0, 0.43)',
        width: '$square_width_height',
        height: '$square_width_height',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    square_button_icon: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '1rem',
        height: '1rem',
        margin: 3,
    },
    tvguide_bar: {
        height: '$tvguide_bar_height',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    tvguide_program: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    button_wide: {
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

export default baseStyle;

EStyleSheet.build({
    // always call EStyleSheet.build() even if you don't use global variables!
    $header_height: 50,
    $logo_height: 50,
    $footer_height: 50,
    $tvguide_bar_height: 100,
    $bar_height: 100,
    $sub_color: '#fff',
    $font_size_extra: 0,
    $square_width_height: '5rem',
});