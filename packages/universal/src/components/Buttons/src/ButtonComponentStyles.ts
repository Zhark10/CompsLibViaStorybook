import {StyleSheet} from 'react-native';

export const ButtonComponentStyles = StyleSheet.create({
  // types
  default: {
    borderRadius: 40,
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  regular: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  lightning: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
  },
  transparent: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  short: {
    borderRadius: 4,
    height: 50,
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: {height: 0, width: 0},
  },
});
