import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Gugi': require('../assets/fonts/Gugi-Regular.ttf'),
    'TGL 0-17': require('../assets/fonts/TGL017.ttf'),
  });