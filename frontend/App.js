import { View } from 'react-native';
import LogoText from './assets/fonts/LogoText';
import TextBox from './components/textBox';
import Welcome from './screens/welcome';


export default function App() {
  return (
   <View>
    <LogoText children="VISION GUARD"/>
    <TextBox content="hello"/>
    {/* // <Welcome/> */}
    </View> 
  )
  
}


