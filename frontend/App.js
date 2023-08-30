import { View ,Image} from 'react-native';
import LogoText from './assets/fonts/LogoText';
import TextBox from './components/textBox';
import Welcome from './screens/welcome';
import SignInScreen from './screens/signin';
import CommonHeaderComponent from './components/headerComponent/CommonHeaderComponent';


export default function App() {
  return (
    <View>
        <CommonHeaderComponent title="My Header" />
        {/* Rest of your components */}
      </View>
  )
  
}


