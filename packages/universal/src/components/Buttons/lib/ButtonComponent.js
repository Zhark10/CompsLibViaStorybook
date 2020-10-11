"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _TouchableOpacity = _interopRequireDefault(require("react-native-web/dist/cjs/exports/TouchableOpacity"));

var _Text = _interopRequireDefault(require("react-native-web/dist/cjs/exports/Text"));

var _ButtonComponentStyles = require("./ButtonComponentStyles");

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class ButtonComponent extends React.Component {
  pressEventHandler = () => {
    const {
      onPress
    } = this.props;
    onPress && onPress();
  };

  render() {
    const {
      type,
      color,
      text,
      styles,
      marginBottom,
      marginTop,
      disabled,
      shadow,
      children,
      backgroundColor
    } = this.props;
    const buttonColor = disabled ? {
      backgroundColor: '#cccccc',
      color: '#666666'
    } : {
      backgroundColor,
      color
    };
    const shadowStyles = shadow && _ButtonComponentStyles.ButtonComponentStyles['shadow'];
    return React.createElement(_TouchableOpacity.default, {
      activeOpacity: disabled ? 1 : 0.7,
      onPress: this.pressEventHandler,
      disabled: disabled,
      style: [{
        backgroundColor: buttonColor.backgroundColor
      }, {
        marginTop: marginTop ? 4 : 0
      }, {
        marginBottom: marginBottom ? 4 : 0
      }, styles, _ButtonComponentStyles.ButtonComponentStyles[type], shadowStyles]
    }, React.createElement(_Text.default, {
      style: {
        color: buttonColor.color,
        ...styles
      }
    }, text.toUpperCase()), React.createElement(_nativeBase.Spinner, null));
  }

}

var _default = ButtonComponent;
exports.default = _default;
//# sourceMappingURL=ButtonComponent.js.map