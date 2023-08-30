import { View ,Image,StyleSheet} from 'react-native';
import LogoText from './assets/fonts/LogoText';
import TextBox from './components/textBox';
import Welcome from './screens/welcome';
import SignInScreen from './screens/signin';
import CommonHeaderComponent from './components/headerComponent/CommonHeaderComponent';
import CommonBottomComponent from './components/bottomComponent/CommonBottomComponent';


export default function App() {
  return (
    <>
    <CommonHeaderComponent/>
    <View style={styles.appContainer}>
      {/* Add your other UI elements here */}
      <CommonBottomComponent />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


