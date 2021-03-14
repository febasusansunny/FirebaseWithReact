import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        height: 48,
        borderRadius: 5,
        margin:50,
        marginBottom:50,
        paddingBottom:120       
    },footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    footerLinks: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16,
        top:20,

        position: 'absolute',
                right: 10,
                top: 5,
    },
    button:
    {
        width: 700,
        margin:50,
        top:20,
        position:'absolute',
        marginTop:100,
        marginBottom:50,
        paddingBottom:120 
    }
    
}
)