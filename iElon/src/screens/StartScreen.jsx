import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
      flex: 1,
    },
    startButtonText: {
        textAlign: 'center',
        fontFamily: 'TGL 0-17',
        fontSize: 20,
    },
    titleView: {
        flex: 0.7,
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleText: {
        textAlign: 'center',
        fontFamily: 'Gugi',
        fontSize: 70,
        color: 'white'
    },
    subTitleText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'TGL 0-17',
        paddingTop: 12,
    },
    startButton: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1
    },
});

const image = require("../../assets/start-background.jpg");

const StartScreen = ({ handleStartClick }) => {
    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={{backgroundColor: '#00000011', flex: 1}}>
                    <View style={styles.titleView}>
                    <Text style={styles.titleText}>iElon</Text>
                    <Text style={styles.subTitleText}>Since. 2070</Text>
                    </View>
                    <TouchableOpacity style={styles.startButton} onPress={() => handleStartClick()}>
                        <Text style={styles.startButtonText}>Start</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}

export default StartScreen;