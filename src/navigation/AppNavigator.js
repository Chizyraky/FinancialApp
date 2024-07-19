import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TransactionDetail from '../components/transaction/TransactionDetail/TransactionDetailScreen';
import TransactionList from '../components/transaction/TransactionList/TransactionListScreen';
import Summary from '../components/summary/SummaryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='TransactionList'
      component={TransactionList}
      options={{
        headerTitle: 'Transactions List',
        headerStyle: { backgroundColor: '#800000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    />
    <Stack.Screen
      name='TransactionDetail'
      component={TransactionDetail}
      options={{
        headerTitle: 'Transaction Detail',
        headerStyle: { backgroundColor: '#800000' },
        headerTintColor: '#fff',
      }}
    />
  </Stack.Navigator>
);

const SummaryStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='SummaryScreen'
      component={Summary}
      options={{
        headerTitle: 'Summary',
        headerStyle: {
          backgroundColor: '#800000',
        },
        headerTintColor: '#fff',
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Transactions') {
            return (
              <FontAwesome
                name='list-alt'
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Summary') {
            return (
              <FontAwesome5
                name='info-circle'
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarActiveTintColor: '#800000',
        tabBarInactiveTintColor: '#808080',
      })}
      initialRouteName='Transactions'
    >
      <Tab.Screen
        name='Transactions'
        component={TransactionsStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Summary'
        component={SummaryStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
