import { AppRegistry, Platform } from 'react-native';
import ReactNativeWeb from './App';

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
const renderWeb = Platform.select({
    web: true
});
{
    renderWeb && AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') })
}
