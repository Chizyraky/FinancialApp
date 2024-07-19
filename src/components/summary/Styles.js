import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#800000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#800000',
  },
  column: {
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#800000',
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  accentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 5,
  },

  value: {
    fontSize: 18,
    color: '#333',
  },
  subValue: {
    fontSize: 16,
    color: '#333',
  },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;