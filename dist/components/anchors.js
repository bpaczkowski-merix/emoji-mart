'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svgs = require('../svgs');

var _svgs2 = _interopRequireDefault(_svgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchors = function (_React$PureComponent) {
  (0, _inherits3.default)(Anchors, _React$PureComponent);

  function Anchors(props) {
    (0, _classCallCheck3.default)(this, Anchors);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Anchors.__proto__ || (0, _objectGetPrototypeOf2.default)(Anchors)).call(this, props));

    var defaultCategory = props.categories.filter(function (category) {
      return category.first;
    })[0];

    _this.state = {
      selected: defaultCategory.name
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Anchors, [{
    key: 'getSVG',
    value: function getSVG(id) {
      this.SVGs || (this.SVGs = {});

      if (this.SVGs[id]) {
        return this.SVGs[id];
      } else {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">\n       ' + _svgs2.default[id] + '\n      </svg>';

        this.SVGs[id] = svg;
        return svg;
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var index = e.currentTarget.getAttribute('data-index');
      var _props = this.props;
      var categories = _props.categories;
      var onAnchorClick = _props.onAnchorClick;


      onAnchorClick(categories[index], index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var categories = _props2.categories;
      var onAnchorClick = _props2.onAnchorClick;
      var color = _props2.color;
      var i18n = _props2.i18n;
      var selected = this.state.selected;


      return _react2.default.createElement(
        'div',
        { className: 'emoji-mart-anchors' },
        categories.map(function (category, i) {
          var id = category.id;
          var name = category.name;
          var anchor = category.anchor;
          var isSelected = name == selected;

          if (anchor === false) {
            return null;
          }

          return _react2.default.createElement(
            'span',
            {
              key: id,
              title: i18n.categories[id],
              'data-index': i,
              onClick: _this2.handleClick,
              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
              style: { color: isSelected ? color : null }
            },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _this2.getSVG(id) } }),
            _react2.default.createElement('span', {
              className: 'emoji-mart-anchor-bar',
              style: { backgroundColor: color }
            })
          );
        })
      );
    }
  }]);
  return Anchors;
}(_react2.default.PureComponent);

exports.default = Anchors;


Anchors.defaultProps = {
  categories: [],
  onAnchorClick: function onAnchorClick() {}
};