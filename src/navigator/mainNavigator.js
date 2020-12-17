import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen115852Navigator from '../features/CopyOfBlankScreen115852/navigator';
import BlankScreen015851Navigator from '../features/BlankScreen015851/navigator';
import BlankScreen115850Navigator from '../features/BlankScreen115850/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen115852: { screen: CopyOfBlankScreen115852Navigator },
BlankScreen015851: { screen: BlankScreen015851Navigator },
BlankScreen115850: { screen: BlankScreen115850Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
