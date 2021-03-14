import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: 'white',
      margin: 10,
      padding: 8,
      color: 'black',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
       alignItems:'center'
    }, 
    buttonContainer: {
        height:45,
        margin: 10,
      padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:350,
        borderRadius:14,
      },
      signupButton: {
        backgroundColor: "#788eec",
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16}
})