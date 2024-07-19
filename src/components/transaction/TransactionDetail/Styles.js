import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#800000',
    padding: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  amount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 5, 
  },
  location: {
    fontSize: 17,
    color: '#ffffff',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#808080',
  },
});

export default styles;