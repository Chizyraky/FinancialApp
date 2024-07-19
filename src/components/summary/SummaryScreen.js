import React from 'react';
import { Text, View } from 'react-native';
import transactions from '../../data/transactions';
import styles from './Styles';

const Summary = () => {
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const highSpending = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const lowSpending = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.accentLabel}>High Spending</Text>
        <View style={styles.subRow}>
          <Text style={styles.value}>{highSpending.name}</Text>
          <Text style={styles.subValue}>${highSpending.amount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.accentLabel}>Low Spending</Text>
        <View style={styles.subRow}>
          <Text style={styles.value}>{lowSpending.name}</Text>
          <Text style={styles.subValue}>${lowSpending.amount.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Summary;
