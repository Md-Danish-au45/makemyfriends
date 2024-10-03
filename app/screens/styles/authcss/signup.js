import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  androidButton: {
    backgroundColor: '#a4c639',
  },
  iosButton: {
    backgroundColor: '#007aff',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;