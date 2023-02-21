import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    rightBubble: {
        backgroundColor: "#0078fe",
        padding: 10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
    },

    rightArrow: {
        position: "absolute",
        backgroundColor: "#0078fe",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },

    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#0A0E21",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20

    },

    /*Arrow head for recevied messages*/
    leftBubble: {
        backgroundColor: "#dedede",
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        borderRadius: 20,
    },

    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },

    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#0A0E21",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20

    },

    inputStyle: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 100,
        fontSize: 16,
        padding: 8,
    },

    image: {
        flex: 1,
    },
})