import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    details: {
        marginLeft: 50,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 20,
    },
    firstLine: {
        color: 'white',
        fontSize: 50,
    },
    secondLine: {
        color: 'white',
        fontSize: 50,
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        paddingBottom: 50,
    },
});