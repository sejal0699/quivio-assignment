
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';


import BottomStack from './BottomStack';


    const Drawer = createDrawerNavigator();
    
    function DrawerStack() {
      return (
        <Drawer.Navigator>
      <Drawer.Screen name ="bottomStack" component={BottomStack} options={{headerShown:false}}/> 
        {/* <Drawer.Screen name ="Notification" component={Notification}/>  */}
  

        </Drawer.Navigator>
      );
    }
 

export default DrawerStack