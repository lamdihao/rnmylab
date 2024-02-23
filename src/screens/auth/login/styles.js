import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
    container: {
        
        height: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 70,
        textAlign:'center',
        
    },
    innerTitle: {
        marginTop: 10,
        fontSize: 18,
        marginRight: 150,

    },
    innerTitleOr: {
        paddingTop: 70,
        fontSize: 18,
        fontWeight: '',
    },
    innerTitle1: {
        fontSize: 14,
        marginBottom:  300,
    },
    innerTitleRe: {
        flex: 1, 
        marginLeft: 40,
    },
    innerTitleFo: {
        flex: 1, 
        textAlign: 'right', 
        marginRight: 35,
        color:'blue',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        marginLeft: 20,
        width: '100%', 
    },
    signUpText: {
        color: 'blue', 
        textDecorationLine: 'underline', 
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 75,
    },
    dontHaveAccountText: {
        color: 'black', 
        marginRight: -20,
    },
});