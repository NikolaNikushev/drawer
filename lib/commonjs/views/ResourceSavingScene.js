var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeScreens=require("react-native-screens");var _jsxFileName="/Users/brentvatne/coding/react-navigation-drawer/src/views/ResourceSavingScene.tsx";var FAR_FAR_AWAY=3000;var ResourceSavingScene=function(_React$Component){(0,_inherits2.default)(ResourceSavingScene,_React$Component);function ResourceSavingScene(){(0,_classCallCheck2.default)(this,ResourceSavingScene);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ResourceSavingScene).apply(this,arguments));}(0,_createClass2.default)(ResourceSavingScene,[{key:"render",value:function render(){if(_reactNativeScreens.screensEnabled&&(0,_reactNativeScreens.screensEnabled)()){var _this$props=this.props,_isVisible=_this$props.isVisible,_rest=(0,_objectWithoutProperties2.default)(_this$props,["isVisible"]);return React.createElement(_reactNativeScreens.Screen,(0,_extends2.default)({active:_isVisible?1:0},_rest,{__source:{fileName:_jsxFileName,lineNumber:22}}));}var _this$props2=this.props,isVisible=_this$props2.isVisible,children=_this$props2.children,style=_this$props2.style,rest=(0,_objectWithoutProperties2.default)(_this$props2,["isVisible","children","style"]);return React.createElement(_reactNative.View,(0,_extends2.default)({style:[styles.container,style],collapsable:false,removeClippedSubviews:_reactNative.Platform.OS==='ios'?!isVisible:true,pointerEvents:isVisible?'auto':'none'},rest,{__source:{fileName:_jsxFileName,lineNumber:27}}),React.createElement(_reactNative.View,{style:isVisible?styles.attached:styles.detached,__source:{fileName:_jsxFileName,lineNumber:38}},children));}}]);return ResourceSavingScene;}(React.Component);exports.default=ResourceSavingScene;var styles=_reactNative.StyleSheet.create({container:{flex:1,overflow:'hidden'},attached:{flex:1},detached:{flex:1,top:FAR_FAR_AWAY}});
//# sourceMappingURL=ResourceSavingScene.js.map