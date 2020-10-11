"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonComponentStyles = void 0;

var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/cjs/exports/StyleSheet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonComponentStyles = _StyleSheet.default.create({
  default: {
    borderRadius: 40
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 4
  },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  regular: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  lightning: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5
  },
  transparent: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  short: {
    borderRadius: 4,
    height: 50,
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
});

exports.ButtonComponentStyles = ButtonComponentStyles;
//# sourceMappingURL=ButtonComponentStyles.js.map