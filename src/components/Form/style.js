import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "75%",
        height: "60%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width:"100%",
        height:"65%",
        marginTop:30,
        padding:10,
        alignItems: '100%'
    },
    formLabel: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    }, 
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        width: 315,
        margin: 12,
        paddingLeft: 10,
    },
    ButtonCalculator:{
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%',
        backgroundColor:'#ff0043',
        color:'#000000',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
        width: 200,
    },

    textCalculateIMC: {
        fontSize: 20,
        color: '#ffffff',
    },
});

export default styles;
