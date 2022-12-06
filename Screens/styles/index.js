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
        color: 'white',
        marginTop: 30,
        marginHorizontal: 16,
        fontFamily : 'Montserrat', 
        fontSize: 22, 
        fontWeight: 'bold',
        flexDirection:'row',
        alignItems: 'center'
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
        marginTop: 10,
        backgroundColor: '#0F1013',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
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
