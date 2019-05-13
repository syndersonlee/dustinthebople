import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: 'com.concat.FirstScreen',
                passProps: {
                  text: 'This is tab 1'
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Tab 1',
                icon: require('./images/fbmask.png'),
                testID: 'FIRST_TAB_BAR_BUTTON'
              }
            }
          }
        },
        {
          component: {
            name: 'com.concat.SecondScreen',
            passProps: {
              text: 'This is tab 2'
            },
            options: {
              bottomTab: {
                text: 'Tab 2',
                icon: require('./images/fbmask.png'),
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        }]
      }
    }
  });
})
// Navigation.push(this.props.componentId, {
//   component: {
//     name: 'com.CONCAT.FirstTabScreen',
//     passProps: {
//       text: 'Pushed screen'
//     },
//     options: {
//       topBar: {
//         title: {
//           text: 'Pushed screen title'
//         }
//       }
//     }
//   }
// });