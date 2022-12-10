import {
    StyleSheet,
    Dimensions,
} from 'react-native';



const {width} = Dimensions.get('window');
const height = width * 100 / 70;

const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013'},
    container: {marginTop: 0},
    header : {
        marginTop: 30,
        color: 'white',
        marginHorizontal: 16,
        fontFamily : 'Montserrat', 
        fontSize: 22, 
        fontWeight: 'bold',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    nav: {
        marginTop: 30,
        marginHorizontal: 6,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nav_image:{
        height: 24,
        width: 24,
        resizeMode: 'contain',
        marginStart: 12
    },
    nav_header:{
        color: 'white',
        fontFamily : 'Montserrat', 
        fontSize: 22, 
        marginLeft:5,
        fontWeight: 'bold',
    },
    bg:{
        backgroundColor:'#1E1E1E',
        paddingTop:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop:20
    },
    bottomButtons : { 
        flex: 1, 
        flexDirection: "column", 
        justifyContent: "space-around", 
        marginHorizontal: 16
    },
    btn2 : {
        backgroundColor: '#0F1013',
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width:(width * 0.92),
    },
    btn1: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F79D16',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
        width:(width * 0.92),
    },
    btn_abs : {
        position: 'absolute',
        bottom:0,
        left: 0,
        right:0,
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#FFBE18',
        borderRadius: 10,
        borderWidth: 1,
        width:(width * 0.92),
        marginHorizontal: 16,
    },
    submitText:{
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    }
  });


export default styles;
