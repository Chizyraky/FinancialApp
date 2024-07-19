import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.location}>{transaction.location}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Transaction Date</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>
    </View>
  );
};


export default TransactionDetail;
