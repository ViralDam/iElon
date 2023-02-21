import styles from "../../assets/styles/screens/ChatScreen";
import getPrompt from "../utility/getPrompt";
import { Ionicons } from "@expo/vector-icons";
import openai from "../utility/openai";
import React, { Component } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, Keyboard, ImageBackground, StyleSheet } from 'react-native';
import 'react-native-url-polyfill/auto'

const image = require("../../assets/chat-background.jpg");

class ChatScreen extends Component {
    constructor(props) {
        super(props);
    }

    getResponse = (chat_log) => {
        let prompt = getPrompt(chat_log);
        openai.createCompletion({
            "model": "text-davinci-003",
            "prompt": prompt,
            "max_tokens": 100,
            "temperature": 0,
            "top_p": 1,
            "n": 1,
            "stream": false,
          }).then(res => this.setState({ chat_log: [...chat_log, { 'text': res.data.choices[0].text.trim(), 'isUser': false }] })).catch(err=> console.error(err));
    }

    state = {
        chat_log: [],
        message: '',
        keyboardOffset: 50,
    }

    handleSend = () => {
        const { message, chat_log } = this.state;
        if (message) {
            const new_chat_log = [...chat_log, { 'text': message, 'isUser': true }]
            this.setState({ message: '', chat_log: new_chat_log });
            Keyboard.dismiss();
            this.getResponse(new_chat_log);
        }
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardWillShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardWillHide',
            this._keyboardDidHide,
        );
        this.getResponse([]);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = (event) => {
        this.setState({
            keyboardOffset: event.endCoordinates.height,
        })
    }

    _keyboardDidHide = () => {
        this.setState({
            keyboardOffset: 50,
        })
    }

    render() {
        const { chat_log } = this.state;
        return (
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        // style={{ backgroundColor: "#eeeeee" }}
                        data={chat_log}
                        ref={ref => (this.FlatListRef = ref)}
                        contentContainerStyle={{ flexDirection: 'column-reverse', paddingTop: 16 }}
                        inverted
                        renderItem={({ item, index }) => {
                            rowId = { index }
                            if (item.isUser) {
                                return (
                                    <View style={styles.rightBubble} key={index}>
                                        <Text style={{ fontSize: 16, color: "#fff", }} key={index}> {item.text}</Text>
                                        <View style={styles.rightArrow} />
                                        <View style={styles.rightArrowOverlap} />
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={styles.leftBubble} key={index}>
                                        <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }} key={index}> {item.text}</Text>
                                        <View style={styles.leftArrow} />
                                        <View style={styles.leftArrowOverlap} />
                                    </View>
                                )
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ flex: 0.15, backgroundColor: 'white' }}>
                    <View style={{ position: 'absolute', bottom: this.state.keyboardOffset, backgroundColor: 'white', flexDirection: 'row', padding: 12, justifyContent: 'center', alignContent: 'center' }} >
                        <TextInput style={styles.inputStyle} value={this.state.message} onChangeText={text => this.setState({ message: text })} onSubmitEditing={Keyboard.dismiss}></TextInput>
                        <TouchableOpacity onPress={() => this.handleSend()}>
                            <Ionicons name="send" size={24} style={{ marginTop: 4, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default ChatScreen;