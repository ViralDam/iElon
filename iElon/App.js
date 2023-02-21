import useFonts from './hooks/useFonts';
import ChatScreen from './src/screens/ChatScreen';
import StartScreen from './src/screens/StartScreen';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text } from 'react-native';


export default function App() {
  const [screen, setScreen] = useState('start');
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const handleStartClick = () => {
    if (screen === 'start') {
      setScreen('chat');
    }
  }

  const getScreen = () => {
    switch (screen) {
      case 'start':
        return <StartScreen handleStartClick={handleStartClick} />
      case 'chat':
        return <ChatScreen />
      default:
        return <Text>Hello</Text>
    }
  }

  return (
    <>
      <StatusBar hidden={true} />
      {getScreen()}
    </>
  )
}
