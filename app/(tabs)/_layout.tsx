import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Branches',
          tabBarIcon: ({ color }) => //<IconSymbol size={28} name="..\'..'\assets\images\ic location.png" color={color} />, 
          <Image resizeMode='contain' style={{width:23, height:28}} source={require('../../assets/images/ic location.png')}/>
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Vehicles',
          tabBarIcon: ({ color }) => <Image resizeMode='contain' style={{width:23, height:28}} source={require('../../assets/images/ic main.png')}/>,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <Image resizeMode='contain' style={{width:23, height:28}} source={require('../../assets/images/ic user.png')}/>,
        }}
      />
    </Tabs>
    
  );
}
