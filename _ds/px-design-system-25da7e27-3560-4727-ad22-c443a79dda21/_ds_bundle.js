/* @ds-bundle: {"format":4,"namespace":"PXDesignSystem_25da7e","components":[{"name":"Card","sourcePath":"components/containers/Card.jsx"},{"name":"Modal","sourcePath":"components/containers/Modal.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"Status","sourcePath":"components/core/Status.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"LoadingIndicator","sourcePath":"components/feedback/LoadingIndicator.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"InputField","sourcePath":"components/forms/InputField.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"SelectionCard","sourcePath":"components/forms/SelectionCard.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/containers/Card.jsx":"8a9b5c5fba90","components/containers/Modal.jsx":"0c4ff5105c0c","components/core/Avatar.jsx":"8b7ce1202b4b","components/core/Button.jsx":"9fe0c80a2563","components/core/Chip.jsx":"8e76325c671d","components/core/Divider.jsx":"59bf249ed783","components/core/Icon.jsx":"1fd3db14ee4b","components/core/IconButton.jsx":"91d865433adb","components/core/Link.jsx":"0db5bfc29707","components/core/Status.jsx":"5a59d114e0f9","components/core/Tag.jsx":"ae9aa45a002f","components/feedback/Alert.jsx":"23ba95893a4a","components/feedback/EmptyState.jsx":"4f3fba1d2ad5","components/feedback/LoadingIndicator.jsx":"9f80c433ff00","components/feedback/Toast.jsx":"e27cc10dcb78","components/feedback/Tooltip.jsx":"aa7afa8a444f","components/forms/Checkbox.jsx":"b6454c0c0fee","components/forms/InputField.jsx":"59c3440bd519","components/forms/RadioGroup.jsx":"4b937d883afc","components/forms/SegmentedControl.jsx":"4639e3526688","components/forms/SelectionCard.jsx":"1880825f5740","components/forms/Textarea.jsx":"2d592e608d57","components/forms/Toggle.jsx":"6db4d404d60c","components/navigation/Menu.jsx":"406d5eecbd36","components/navigation/Pagination.jsx":"35b05ae25de4","components/navigation/Stepper.jsx":"549fd8e40b86","components/navigation/Tabs.jsx":"af05ced0ba05","ui_kits/customer-area/App.jsx":"7ff373229947","ui_kits/customer-area/Chrome.jsx":"35a57bd8abf4","ui_kits/customer-area/HomeView.jsx":"0809a82b4e3d","ui_kits/customer-area/PaymentsView.jsx":"386074923804"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PXDesignSystem_25da7e = window.PXDesignSystem_25da7e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/containers/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Bento Card. Container surface. border 1px, radius 12px. background primary|secondary.
   Header (title/description + right-slot actions), body content, and footer actions. */
function Card({
  title,
  description,
  background = 'primary',
  clickable = false,
  headerActions,
  footer,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const bgBase = background === 'secondary' ? 'var(--b-color-background-secondary)' : 'var(--b-color-background-primary)';
  const bgHover = background === 'secondary' ? 'var(--b-color-background-secondary-hover)' : 'var(--b-color-background-primary-hover)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => clickable && setHover(true),
    onMouseLeave: () => clickable && setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: clickable && hover ? bgHover : bgBase,
      border: '1px solid var(--b-color-outline-primary)',
      borderRadius: 'var(--b-border-radius-l)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background 150ms var(--b-animation-easing-standard)',
      ...style
    }
  }, rest), (title || headerActions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--b-spacer-070)',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--b-spacer-020)',
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontFamily: 'var(--b-text-title-font-family)',
      fontSize: 'var(--b-text-title-font-size)',
      fontWeight: 'var(--b-text-title-font-weight)',
      lineHeight: 'var(--b-text-title-line-height)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)'
    }
  }, description)), headerActions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--b-spacer-040)',
      flexShrink: 0
    }
  }, headerActions)), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 16px',
      marginTop: 'auto'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  s: 24,
  m: 32,
  l: 40,
  xl: 48
};

/** Bento Avatar. Circular; shows an image, initials, or a Bento icon fallback. */
function Avatar({
  src,
  initials,
  name,
  size = 'm',
  style,
  ...rest
}) {
  const px = SIZES[size] || size;
  const label = initials || (name ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '');
  const common = {
    width: px,
    height: px,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name || 'avatar',
      style: {
        ...common,
        objectFit: 'cover'
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...common,
      background: 'var(--b-color-background-tertiary)',
      color: 'var(--b-color-label-primary)',
      fontFamily: 'var(--b-text-body-font-family)',
      fontWeight: 'var(--b-text-body-strongest-font-weight)',
      fontSize: px <= 24 ? 11 : px <= 32 ? 13 : 15
    }
  }, rest), label);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Divider. Thin separator; horizontal (default) or vertical. */
function Divider({
  orientation = 'horizontal',
  style,
  ...rest
}) {
  const isV = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    style: {
      backgroundColor: 'var(--b-color-separator-primary)',
      width: isV ? 'var(--b-border-width-s)' : '100%',
      height: isV ? '100%' : 'var(--b-border-width-s)',
      alignSelf: 'stretch',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
/**
 * Resolve the base URL for Bento icon SVGs. Order of precedence:
 * 1. explicit `base` prop
 * 2. <html data-bento-icon-base="…"> attribute
 * 3. default "assets/icons/"
 */
function resolveBase(base) {
  if (base) return base;
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-bento-icon-base');
    if (attr) return attr;
  }
  return 'assets/icons/';
}
const SIZES = {
  16: 16,
  24: 24,
  32: 32,
  40: 40
};
const cache = {};

/**
 * Icon — renders a Bento UI-asset SVG as a monochrome, colourable glyph.
 * Fetches the SVG markup and inlines it with every fill/stroke forced to
 * `currentColor`, so the glyph inherits `color` (matching how Bento tints icons)
 * while still actually painting the shape (CSS mask does not paint in all hosts).
 */
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  base,
  title,
  style,
  ...rest
}) {
  const px = SIZES[size] || size;
  const url = `${resolveBase(base)}${name}.svg`;
  const [markup, setMarkup] = useState(cache[url] || null);
  useEffect(() => {
    let alive = true;
    if (cache[url]) {
      setMarkup(cache[url]);
      return;
    }
    fetch(url).then(r => r.ok ? r.text() : Promise.reject(new Error(String(r.status)))).then(txt => {
      // Force tintable: drop hardcoded fills/strokes so currentColor wins.
      let s = txt.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"').replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');
      // Make the root <svg> fill its box.
      s = s.replace(/<svg /, '<svg width="100%" height="100%" ');
      cache[url] = s;
      if (alive) setMarkup(s);
    }).catch(() => {
      if (alive) setMarkup('');
    });
    return () => {
      alive = false;
    };
  }, [url]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    dangerouslySetInnerHTML: markup ? {
      __html: markup
    } : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      flexShrink: 0,
      color,
      lineHeight: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/containers/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Modal. Centered dialog over a scrim. title + body + footer actions + close. */
function Modal({
  open = true,
  title,
  description,
  footer,
  onClose,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,18,34,0.5)',
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--b-color-background-modal)',
      borderRadius: 'var(--b-border-radius-l)',
      boxShadow: 'var(--b-shadow-high)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--b-spacer-070)',
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--b-spacer-020)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontFamily: 'var(--b-text-title-font-family)',
      fontSize: 'var(--b-text-title-m-font-size)',
      fontWeight: 'var(--b-text-title-m-font-weight)',
      lineHeight: 'var(--b-text-title-m-line-height)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-wide-line-height)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      display: 'flex',
      cursor: 'pointer',
      color: 'var(--b-color-label-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cross",
    size: 24
  }))), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      overflow: 'auto',
      color: 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-wide-line-height)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--b-spacer-060)',
      padding: '0 20px 20px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containers/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Bento Button. Faithful to packages/vue2/.../button.scss:
   radius 8px, gap 8px, padding 8/12 (condensed 4/10), tertiary is underlined & pad
   -less, secondary subtracts its 1px border from padding. */

function useInteract(disabled) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  };
  return {
    hover,
    active,
    handlers
  };
}
function pick(base, hover, active, isHover, isActive) {
  if (isActive) return active;
  if (isHover) return hover;
  return base;
}
function Button({
  variant = 'primary',
  critical = false,
  condensed = false,
  disabled = false,
  inverse = false,
  iconLeft,
  iconRight,
  iconOnly = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const {
    hover,
    active,
    handlers
  } = useInteract(disabled);
  const key = `${variant}${critical ? '-critical' : ''}`;
  const border = '1px';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--b-spacer-040)',
    fontFamily: 'var(--b-text-body-font-family)',
    fontSize: 'var(--b-text-body-font-size)',
    fontWeight: 'var(--b-text-body-stronger-font-weight)',
    lineHeight: '20px',
    borderRadius: 'var(--b-border-radius-m)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'color 100ms linear, background-color 100ms linear, box-shadow 100ms linear',
    padding: condensed ? '4px 10px' : '8px 12px'
  };
  let v = {};
  const dis = disabled;
  if (key === 'primary') {
    v = {
      backgroundColor: dis ? 'var(--b-color-background-disabled)' : pick('var(--b-color-background-inverse-primary)', 'var(--b-color-background-inverse-primary-hover)', 'var(--b-color-background-inverse-primary-active)', hover, active),
      color: dis ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-inverse-primary)'
    };
  } else if (key === 'primary-critical') {
    v = {
      backgroundColor: dis ? 'var(--b-color-background-disabled)' : pick('var(--b-color-background-critical-strong)', 'var(--b-color-background-critical-strong-hover)', 'var(--b-color-background-critical-strong-active)', hover, active),
      color: dis ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-inverse-primary)'
    };
  } else if (key === 'secondary') {
    v = {
      backgroundColor: pick('var(--b-color-background-primary)', 'var(--b-color-background-primary-hover)', 'var(--b-color-background-primary-active)', hover && !dis, active && !dis),
      border: `${border} solid ${dis ? 'var(--b-color-outline-disabled)' : 'var(--b-color-outline-secondary)'}`,
      color: dis ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-primary)'
    };
  } else if (key === 'secondary-critical') {
    v = {
      backgroundColor: (hover || active) && !dis ? 'var(--b-color-background-critical-weak)' : 'var(--b-color-background-primary)',
      border: `${border} solid ${dis ? 'var(--b-color-outline-disabled)' : 'var(--b-color-outline-critical)'}`,
      color: dis ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-critical)'
    };
  } else if (key === 'tertiary' || key === 'tertiary-critical') {
    const crit = key === 'tertiary-critical';
    v = {
      backgroundColor: 'transparent',
      padding: 0,
      border: 'none',
      textDecoration: (hover || active) && !dis ? 'none' : 'underline',
      color: dis ? 'var(--b-color-label-disabled)' : crit ? pick('var(--b-color-label-critical)', 'var(--b-color-label-critical-hover)', 'var(--b-color-label-critical-active)', hover, active) : pick('var(--b-color-label-primary)', 'var(--b-color-label-primary-hover)', 'var(--b-color-label-primary-active)', hover, active)
    };
  } else if (key === 'tertiary-with-background' || key === 'tertiary-with-background-critical') {
    const crit = key.endsWith('critical');
    v = {
      backgroundColor: (hover || active) && !dis ? crit ? 'var(--b-color-background-critical-weak)' : 'var(--b-color-background-primary-hover)' : 'transparent',
      color: dis ? 'var(--b-color-label-disabled)' : crit ? 'var(--b-color-label-critical)' : 'var(--b-color-label-primary)'
    };
  }

  // icon-only padding
  if (iconOnly && !key.startsWith('tertiary')) {
    v.padding = condensed ? '6px' : '10px';
  }
  const iconSize = 16;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    style: {
      ...base,
      ...v,
      ...style
    }
  }, handlers, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  }), !iconOnly && children != null && /*#__PURE__*/React.createElement("span", null, children), iconOnly && !iconLeft && !iconRight && children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Bento Chip. Removable/selectable token. bg secondary, radius 4px, padding 2/6. */
function Chip({
  label,
  disabled = false,
  readonly = false,
  error = false,
  condensed = false,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  let bg = 'var(--b-color-background-secondary)';
  let color = 'var(--b-color-label-primary)';
  if (error) {
    bg = 'var(--b-color-background-critical-weak)';
    color = 'var(--b-color-label-on-background-critical-weak)';
  } else if (disabled || readonly) {
    bg = 'var(--b-color-background-disabled)';
    color = 'var(--b-color-label-disabled)';
  } else if (hover) {
    bg = 'var(--b-color-background-secondary-hover)';
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => !disabled && !readonly && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--b-spacer-010)',
      background: bg,
      color,
      borderRadius: 'var(--b-border-radius-s)',
      padding: condensed ? '0 var(--b-spacer-020)' : 'var(--b-spacer-010) var(--b-spacer-030)',
      fontFamily: 'var(--b-text-body-font-family)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)',
      cursor: disabled ? 'not-allowed' : 'default',
      pointerEvents: readonly ? 'none' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, label), onRemove && !readonly && /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onRemove,
    style: {
      display: 'inline-flex',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cross-small",
    size: 16
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IconButton — a square, icon-only Button. Thin wrapper over Button. */
function IconButton({
  icon,
  variant = 'tertiary',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    iconOnly: true,
    iconLeft: icon
  }, rest));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Bento Link. Inline text link. variant primary (blue) or quiet (inherits label). */
function Link({
  href = '#',
  variant = 'primary',
  external = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const color = variant === 'quiet' ? hover ? 'var(--b-color-link-quiet-hover)' : 'var(--b-color-link-quiet)' : hover ? 'var(--b-color-link-primary-hover)' : 'var(--b-color-link-primary)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color,
      textDecoration: hover ? 'underline' : 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'inherit',
      fontWeight: 'var(--b-text-body-stronger-font-weight)',
      ...style
    }
  }, rest), children, external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link-small",
    size: 16
  }));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/core/Status.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DOT = {
  blue: 'var(--b-color-decorative-blue)',
  green: 'var(--b-color-decorative-green)',
  grey: 'var(--b-color-decorative-grey)',
  orange: 'var(--b-color-decorative-orange)',
  red: 'var(--b-color-decorative-red)',
  yellow: 'var(--b-color-decorative-yellow)'
};

/** Bento Status. A 12px coloured indicator dot + label. gap 12px. */
function Status({
  variant = 'grey',
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      columnGap: '12px',
      color: 'var(--b-color-label-primary)',
      fontFamily: 'var(--b-text-body-font-family)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      flexShrink: 0,
      background: DOT[variant] || DOT.grey
    }
  }), /*#__PURE__*/React.createElement("span", null, label ?? children));
}
Object.assign(__ds_scope, { Status });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Status.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  grey: {
    bg: 'var(--b-color-background-secondary)',
    fg: 'var(--b-color-label-secondary)'
  },
  blue: {
    bg: 'var(--b-color-background-highlight-weak)',
    fg: 'var(--b-color-label-on-background-highlight-weak)'
  },
  green: {
    bg: 'var(--b-color-background-success-weak)',
    fg: 'var(--b-color-label-on-background-success-weak)'
  },
  orange: {
    bg: 'var(--b-color-background-warning-weak)',
    fg: 'var(--b-color-label-on-background-warning-weak)'
  },
  red: {
    bg: 'var(--b-color-background-critical-weak)',
    fg: 'var(--b-color-label-on-background-critical-weak)'
  },
  white: {
    bg: 'var(--b-color-background-primary)',
    fg: 'var(--b-color-label-primary)'
  }
};

/** Bento Tag. Compact coloured label. radius 4px, padding 2/8, caption type. */
function Tag({
  label,
  variant = 'grey',
  icon,
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.grey;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      borderRadius: 'var(--b-border-radius-s)',
      padding: 'var(--b-spacer-010) var(--b-spacer-040)',
      backgroundColor: v.bg,
      color: v.fg,
      fontFamily: 'var(--b-text-caption-font-family)',
      fontSize: 'var(--b-text-caption-font-size)',
      fontWeight: 'var(--b-text-caption-stronger-font-weight)',
      lineHeight: 'var(--b-text-caption-line-height)',
      width: 'fit-content',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, label ?? children));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPES = {
  success: {
    bg: 'var(--b-color-background-success-weak)',
    icon: 'checkmark-circle',
    iconColor: 'var(--b-color-background-success-strong)'
  },
  highlight: {
    bg: 'var(--b-color-background-highlight-weak)',
    icon: 'info-filled',
    iconColor: 'var(--b-color-background-highlight-strong)'
  },
  warning: {
    bg: 'var(--b-color-background-warning-weak)',
    icon: 'warning-filled',
    iconColor: 'var(--b-color-background-warning-strong)'
  },
  critical: {
    bg: 'var(--b-color-background-critical-weak)',
    icon: 'warning-circle-fill',
    iconColor: 'var(--b-color-background-critical-strong)'
  }
};

/** Bento Alert. Inline contextual message. types: success/highlight/warning/critical; tip = compact. */
function Alert({
  type = 'highlight',
  variant = 'default',
  title,
  description,
  icon,
  onClose,
  actions,
  children,
  style,
  ...rest
}) {
  const t = TYPES[type] || TYPES.highlight;
  const tip = variant === 'tip';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: tip ? 'var(--b-spacer-060)' : 'var(--b-spacer-060)',
      background: t.bg,
      borderRadius: 'var(--b-border-radius-m)',
      padding: tip ? 'var(--b-spacer-050) var(--b-spacer-060)' : 'var(--b-spacer-080)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      lineHeight: 0,
      color: t.iconColor
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: tip ? 16 : 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      fontWeight: 'var(--b-text-body-strongest-font-weight)',
      lineHeight: 'var(--b-text-body-wide-line-height)'
    }
  }, title), (description || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-wide-line-height)',
      marginTop: title ? 'var(--b-spacer-020)' : 0
    }
  }, description || children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--b-spacer-070)',
      marginTop: 'var(--b-spacer-050)'
    }
  }, actions)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      display: 'flex',
      cursor: 'pointer',
      color: 'var(--b-color-label-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cross",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento EmptyState. Centered icon + title + description + optional action, for no-data views. */
function EmptyState({
  icon = 'search-list',
  title,
  description,
  action,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--b-spacer-060)',
      padding: 'var(--b-spacer-120) var(--b-spacer-070)',
      maxWidth: 420,
      margin: '0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--b-color-background-secondary)',
      color: 'var(--b-color-label-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontFamily: 'var(--b-text-subtitle-font-family)',
      fontSize: 'var(--b-text-subtitle-font-size)',
      fontWeight: 'var(--b-text-subtitle-font-weight)',
      lineHeight: 'var(--b-text-subtitle-line-height)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-wide-line-height)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--b-spacer-020)'
    }
  }, action), children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LoadingIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento LoadingIndicator. Circular spinner using the standard easing/duration. */
function LoadingIndicator({
  size = 24,
  color = 'var(--b-color-label-primary)',
  style,
  ...rest
}) {
  const stroke = Math.max(2, Math.round(size / 12));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: `${stroke}px solid var(--b-color-background-tertiary)`,
      borderTopColor: color,
      animation: 'b-spin 700ms linear infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes b-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { LoadingIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LoadingIndicator.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Toast. Transient notification (dark surface). Renders inline; position with CSS if needed. */
function Toast({
  message,
  action,
  onAction,
  onClose,
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--b-spacer-060)',
      background: 'var(--b-color-background-inverse-primary)',
      color: 'var(--b-color-label-inverse-primary)',
      borderRadius: 'var(--b-border-radius-m)',
      boxShadow: 'var(--b-shadow-high)',
      padding: 'var(--b-spacer-060) var(--b-spacer-070)',
      maxWidth: 360,
      fontFamily: 'var(--b-text-body-font-family)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--b-color-label-inverse-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'var(--b-color-blue-900)',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'var(--b-text-body-stronger-font-weight)'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      display: 'flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cross-small",
    size: 16,
    color: "var(--b-color-label-inverse-primary)"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Bento Tooltip. Dark hover label. Wraps a trigger; shows content on hover/focus. */
function Tooltip({
  content,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 6
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 6
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 700,
      ...pos,
      background: 'var(--b-color-background-inverse-primary)',
      color: 'var(--b-color-label-inverse-primary)',
      padding: 'var(--b-spacer-030) var(--b-spacer-050)',
      borderRadius: 'var(--b-border-radius-s)',
      fontSize: 'var(--b-text-caption-font-size)',
      lineHeight: 'var(--b-text-caption-line-height)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--b-shadow-medium)',
      pointerEvents: 'none',
      ...style
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Checkbox. 16px box, radius s; checked = dark fill + white checkmark. Supports indeterminate. */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  description,
  id,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  const box = {
    width: 16,
    height: 16,
    flexShrink: 0,
    borderRadius: 'var(--b-border-radius-s)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: disabled ? 'var(--b-color-background-disabled)' : on ? 'var(--b-color-background-inverse-primary)' : 'var(--b-color-background-primary)',
    border: on ? '1px solid transparent' : `1px solid ${disabled ? 'var(--b-color-outline-disabled)' : 'var(--b-color-outline-tertiary)'}`,
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--b-spacer-060)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: box
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus-small",
    size: 16,
    color: "var(--b-color-label-inverse-primary)"
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark-small",
    size: 16,
    color: "var(--b-color-label-inverse-primary)"
  }) : null), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: disabled ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-caption-font-size)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Bento InputField. box 36px (condensed 28px), 1px tertiary border, radius 8px. */
function InputField({
  label,
  description,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  condensed = false,
  disabled = false,
  readonly = false,
  error = false,
  errorMessage,
  iconBefore,
  iconAfter,
  staticValue,
  staticValuePosition = 'start',
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const showErr = error || !!errorMessage;
  let borderColor = 'var(--b-color-outline-tertiary)';
  if (showErr) borderColor = 'var(--b-color-outline-critical)';else if (focus) borderColor = 'var(--b-color-outline-tertiary-active)';
  const boxBg = disabled || readonly ? 'var(--b-color-background-disabled)' : 'var(--b-color-background-primary)';
  const staticEl = staticValue != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--b-color-background-secondary)',
      borderRadius: 'var(--b-border-radius-s)',
      color: 'var(--b-color-label-primary)',
      height: condensed ? 20 : 28,
      padding: 'var(--b-spacer-020) var(--b-spacer-030)',
      margin: staticValuePosition === 'start' ? '0 0 0 4px' : '0 4px 0 0',
      whiteSpace: 'nowrap'
    }
  }, staticValue);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--b-text-body-font-family)',
      fontSize: 'var(--b-text-body-font-size)',
      fontWeight: 'var(--b-text-body-stronger-font-weight)',
      color: 'var(--b-color-label-primary)',
      marginBottom: 'var(--b-spacer-020)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--b-text-caption-font-size)',
      color: 'var(--b-color-label-secondary)',
      marginBottom: 'var(--b-spacer-040)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: condensed ? 28 : 36,
      background: boxBg,
      border: `1px solid ${borderColor}`,
      outline: focus && !showErr ? '0.5px solid var(--b-color-outline-tertiary-active)' : 'none',
      borderRadius: 'var(--b-border-radius-m)'
    }
  }, staticValuePosition === 'start' && staticEl, iconBefore && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      marginLeft: condensed ? 10 : 12,
      color: 'var(--b-color-label-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconBefore,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    readOnly: readonly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      color: disabled || readonly ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-primary)',
      fontFamily: 'inherit',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)',
      margin: condensed ? '4px 10px' : '8px 12px',
      padding: 0
    }
  }, rest)), iconAfter && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      marginRight: condensed ? 10 : 12,
      color: 'var(--b-color-label-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: 16
  })), staticValuePosition === 'end' && staticEl), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--b-spacer-020)',
      marginTop: 'var(--b-spacer-040)'
    }
  }, errorMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--b-text-caption-font-size)',
      color: 'var(--b-color-label-critical)'
    }
  }, errorMessage), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--b-text-caption-font-size)',
      color: 'var(--b-color-label-secondary)',
      textAlign: 'right'
    }
  }, hint)));
}
Object.assign(__ds_scope, { InputField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputField.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  value,
  checked,
  disabled,
  label,
  description,
  name,
  onChange
}) {
  const ring = {
    width: 16,
    height: 16,
    flexShrink: 0,
    borderRadius: '50%',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: disabled ? 'var(--b-color-background-disabled)' : 'var(--b-color-background-primary)',
    border: checked ? `5px solid ${disabled ? 'var(--b-color-label-disabled)' : 'var(--b-color-background-inverse-primary)'}` : `1px solid ${disabled ? 'var(--b-color-outline-disabled)' : 'var(--b-color-outline-tertiary)'}`
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--b-spacer-060)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: ring
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: disabled ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-caption-font-size)'
    }
  }, description)));
}

/** Bento RadioGroup. Renders a set of radios; single selection. */
function RadioGroup({
  options = [],
  value,
  onChange,
  name = 'radio-group',
  direction = 'column',
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 24 : 12,
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    checked: value === o.value,
    disabled: disabled || o.disabled,
    label: o.label,
    description: o.description,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento SegmentedControl. Pill group; the selected segment sits on a white raised surface. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  condensed = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      gap: 'var(--b-spacer-020)',
      padding: 'var(--b-spacer-020)',
      background: 'var(--b-color-background-secondary)',
      borderRadius: 'var(--b-border-radius-m)',
      ...style
    }
  }, rest), options.map(o => {
    const selected = value === o.value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--b-spacer-040)',
        border: 0,
        cursor: 'pointer',
        padding: condensed ? '4px 10px' : '6px 12px',
        borderRadius: 'var(--b-border-radius-s)',
        background: selected ? 'var(--b-color-background-primary)' : 'transparent',
        boxShadow: selected ? 'var(--b-shadow-low)' : 'none',
        color: selected ? 'var(--b-color-label-primary)' : 'var(--b-color-label-secondary)',
        fontFamily: 'var(--b-text-body-font-family)',
        fontSize: 'var(--b-text-body-font-size)',
        fontWeight: 'var(--b-text-body-stronger-font-weight)',
        lineHeight: '20px',
        transition: 'background 100ms linear, color 100ms linear'
      }
    }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 16
    }), o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento SelectionCard. A bordered card acting as a radio/checkbox option. */
function SelectionCard({
  selected = false,
  disabled = false,
  control = 'radio',
  title,
  description,
  icon,
  onSelect,
  children,
  style,
  ...rest
}) {
  const borderColor = disabled ? 'var(--b-color-outline-disabled)' : selected ? 'var(--b-color-outline-selected)' : 'var(--b-color-outline-primary)';
  const bg = selected && !disabled ? 'var(--b-color-background-selected)' : 'var(--b-color-background-primary)';
  const ctrl = control === 'checkbox' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      flexShrink: 0,
      borderRadius: 'var(--b-border-radius-s)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      background: selected ? 'var(--b-color-background-inverse-primary)' : 'var(--b-color-background-primary)',
      border: selected ? '1px solid transparent' : '1px solid var(--b-color-outline-tertiary)'
    }
  }, selected && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark-small",
    size: 16,
    color: "var(--b-color-label-inverse-primary)"
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      flexShrink: 0,
      borderRadius: '50%',
      boxSizing: 'border-box',
      border: selected ? '5px solid var(--b-color-background-inverse-primary)' : '1px solid var(--b-color-outline-tertiary)',
      background: 'var(--b-color-background-primary)'
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: disabled ? undefined : onSelect,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--b-spacer-060)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--b-border-radius-l)',
      background: bg,
      padding: 'var(--b-spacer-070)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color 100ms linear, background 100ms linear',
      ...style
    }
  }, rest), ctrl, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--b-color-label-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--b-spacer-020)',
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      fontWeight: 'var(--b-text-body-strongest-font-weight)',
      lineHeight: 'var(--b-text-body-line-height)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-caption-font-size)',
      lineHeight: 'var(--b-text-caption-line-height)'
    }
  }, description), children));
}
Object.assign(__ds_scope, { SelectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Bento Textarea. Multiline input matching InputField styling. */
function Textarea({
  label,
  description,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 4,
  disabled = false,
  readonly = false,
  error = false,
  errorMessage,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const showErr = error || !!errorMessage;
  let borderColor = 'var(--b-color-outline-tertiary)';
  if (showErr) borderColor = 'var(--b-color-outline-critical)';else if (focus) borderColor = 'var(--b-color-outline-tertiary-active)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--b-text-body-font-family)',
      fontSize: 'var(--b-text-body-font-size)',
      fontWeight: 'var(--b-text-body-stronger-font-weight)',
      color: 'var(--b-color-label-primary)',
      marginBottom: 'var(--b-spacer-020)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--b-text-caption-font-size)',
      color: 'var(--b-color-label-secondary)',
      marginBottom: 'var(--b-spacer-040)'
    }
  }, description), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    readOnly: readonly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: 'vertical',
      background: disabled || readonly ? 'var(--b-color-background-disabled)' : 'var(--b-color-background-primary)',
      border: `1px solid ${borderColor}`,
      outline: focus && !showErr ? '0.5px solid var(--b-color-outline-tertiary-active)' : 'none',
      borderRadius: 'var(--b-border-radius-m)',
      color: 'var(--b-color-label-primary)',
      fontFamily: 'inherit',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)',
      padding: '8px 12px'
    }
  }, rest)), errorMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--b-text-caption-font-size)',
      color: 'var(--b-color-label-critical)',
      marginTop: 'var(--b-spacer-040)'
    }
  }, errorMessage));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Toggle. track 36×20, radius l; checked = dark track, handle grows 12→16px, slides right. */
function Toggle({
  checked = false,
  onChange,
  disabled = false,
  readonly = false,
  label,
  description,
  labelFirst = false,
  id,
  style,
  ...rest
}) {
  const trackBg = disabled ? checked ? 'var(--b-color-background-quaternary)' : 'var(--b-color-background-secondary)' : checked ? 'var(--b-color-background-inverse-primary)' : 'var(--b-color-background-primary)';
  const handleBg = checked ? disabled ? 'var(--b-color-background-disabled)' : 'var(--b-color-background-primary)' : disabled ? 'var(--b-color-label-disabled)' : 'var(--b-color-background-inverse-primary)';
  const control = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      width: 36,
      height: 20,
      borderRadius: 'var(--b-border-radius-l)',
      background: trackBg,
      border: checked ? '0' : '1px solid var(--b-color-outline-tertiary)',
      padding: checked ? '2px' : '2px 4px',
      boxSizing: 'border-box',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      transition: 'background 150ms var(--b-animation-easing-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: checked ? 16 : 12,
      height: checked ? 16 : 12,
      borderRadius: 'var(--b-border-radius-l)',
      background: handleBg,
      transition: 'all 150ms var(--b-animation-easing-standard)'
    }
  }));
  const text = (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: labelFirst ? '0 16px 0 0' : '0 0 0 16px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-primary)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 'var(--b-text-caption-font-size)',
      paddingTop: 'var(--b-spacer-020)'
    }
  }, description));
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      flexDirection: labelFirst ? 'row-reverse' : 'row',
      userSelect: 'none',
      pointerEvents: readonly ? 'none' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), control, text);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Menu. A floating list surface of actions (as used by dropdowns / overflow menus). */
function Menu({
  items = [],
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menu",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: 200,
      background: 'var(--b-color-background-primary)',
      border: '1px solid var(--b-color-outline-primary)',
      borderRadius: 'var(--b-border-radius-m)',
      boxShadow: 'var(--b-shadow-medium)',
      padding: 'var(--b-spacer-020)',
      ...style
    }
  }, rest), items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: `d${i}`,
    style: {
      height: 1,
      background: 'var(--b-color-separator-primary)',
      margin: 'var(--b-spacer-020) 0'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: it.value || i,
    role: "menuitem",
    type: "button",
    disabled: it.disabled,
    onClick: () => !it.disabled && onSelect && onSelect(it.value),
    onMouseEnter: e => {
      if (!it.disabled) e.currentTarget.style.background = 'var(--b-color-background-primary-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--b-spacer-060)',
      border: 0,
      background: 'transparent',
      cursor: it.disabled ? 'not-allowed' : 'pointer',
      padding: 'var(--b-spacer-050) var(--b-spacer-060)',
      borderRadius: 'var(--b-border-radius-s)',
      textAlign: 'left',
      width: '100%',
      color: it.disabled ? 'var(--b-color-label-disabled)' : it.critical ? 'var(--b-color-label-critical)' : 'var(--b-color-label-primary)',
      fontFamily: 'var(--b-text-body-font-family)',
      fontSize: 'var(--b-text-body-font-size)',
      lineHeight: 'var(--b-text-body-line-height)'
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-tertiary)',
      fontSize: 'var(--b-text-caption-font-size)'
    }
  }, it.shortcut))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function pageList(current, total) {
  const out = [];
  const add = n => out.push(n);
  if (total <= 7) {
    for (let i = 1; i <= total; i++) add(i);
    return out;
  }
  add(1);
  if (current > 3) add('…');
  const s = Math.max(2, current - 1),
    e = Math.min(total - 1, current + 1);
  for (let i = s; i <= e; i++) add(i);
  if (current < total - 2) add('…');
  add(total);
  return out;
}

/** Bento Pagination. Prev/next arrows + page numbers; active page filled dark. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style,
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= total && p !== page && onChange) onChange(p);
  };
  const cell = extra => ({
    minWidth: 28,
    height: 28,
    padding: '0 6px',
    borderRadius: 'var(--b-border-radius-s)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'var(--b-text-body-font-family)',
    fontSize: 'var(--b-text-body-font-size)',
    ...extra
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--b-spacer-020)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    style: cell({
      background: 'transparent',
      color: page <= 1 ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-primary)',
      cursor: page <= 1 ? 'not-allowed' : 'pointer'
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), pageList(page, total).map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      minWidth: 28,
      textAlign: 'center',
      color: 'var(--b-color-label-tertiary)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => go(p),
    style: cell(p === page ? {
      background: 'var(--b-color-background-inverse-primary)',
      color: 'var(--b-color-label-inverse-primary)'
    } : {
      background: 'transparent',
      color: 'var(--b-color-label-primary)'
    })
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(page + 1),
    disabled: page >= total,
    style: cell({
      background: 'transparent',
      color: page >= total ? 'var(--b-color-label-disabled)' : 'var(--b-color-label-primary)',
      cursor: page >= total ? 'not-allowed' : 'pointer'
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Stepper. Horizontal progress steps; done = filled dark w/ check, current = ringed, upcoming = grey. */
function Stepper({
  steps = [],
  current = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, rest), steps.map((s, i) => {
    const done = i < current,
      active = i === current;
    const circleBg = done ? 'var(--b-color-background-inverse-primary)' : active ? 'var(--b-color-background-primary)' : 'var(--b-color-background-secondary)';
    const circleBorder = active ? '2px solid var(--b-color-outline-primary-active)' : done ? '2px solid transparent' : '2px solid var(--b-color-outline-primary)';
    const numColor = done ? 'var(--b-color-label-inverse-primary)' : active ? 'var(--b-color-label-primary)' : 'var(--b-color-label-tertiary)';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--b-spacer-050)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        background: circleBg,
        border: circleBorder,
        color: numColor,
        fontSize: 'var(--b-text-caption-font-size)',
        fontWeight: 'var(--b-text-body-strongest-font-weight)'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "checkmark-small",
      size: 16,
      color: "var(--b-color-label-inverse-primary)"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        color: active || done ? 'var(--b-color-label-primary)' : 'var(--b-color-label-tertiary)',
        fontSize: 'var(--b-text-body-font-size)',
        fontWeight: active ? 'var(--b-text-body-strongest-font-weight)' : 'var(--b-text-body-font-weight)',
        whiteSpace: 'nowrap'
      }
    }, s.label || s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 24,
        height: 2,
        margin: '0 12px',
        background: i < current ? 'var(--b-color-background-inverse-primary)' : 'var(--b-color-separator-primary)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento Tabs. Horizontal tab bar with an underline indicator on the active tab. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--b-spacer-090)',
      borderBottom: '1px solid var(--b-color-separator-primary)',
      ...style
    }
  }, rest), tabs.map(t => {
    const active = value === t.value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": active,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--b-spacer-040)',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 var(--b-spacer-060)',
        marginBottom: -1,
        borderBottom: `2px solid ${active ? 'var(--b-color-outline-primary-active)' : 'transparent'}`,
        color: active ? 'var(--b-color-label-primary)' : 'var(--b-color-label-secondary)',
        fontFamily: 'var(--b-text-body-font-family)',
        fontSize: 'var(--b-text-body-font-size)',
        fontWeight: 'var(--b-text-body-stronger-font-weight)',
        lineHeight: 'var(--b-text-body-line-height)'
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--b-color-background-secondary)',
        color: 'var(--b-color-label-secondary)',
        borderRadius: 'var(--b-border-radius-s)',
        padding: '0 6px',
        fontSize: 'var(--b-text-caption-font-size)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer-area/App.jsx
try { (() => {
/* Customer Area — app shell wiring nav → views. */
const {
  EmptyState,
  Button
} = window.PXDesignSystem_25da7e;
const TITLES = {
  home: 'Home',
  payments: 'Payments',
  balances: 'Balances',
  analytics: 'Analytics',
  disputes: 'Risk & disputes',
  reports: 'Reports'
};
function App() {
  const [view, setView] = React.useState('home');
  const [live, setLive] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--b-color-background-secondary)',
      fontFamily: 'var(--b-text-body-font-family)'
    }
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    title: TITLES[view],
    live: live,
    setLive: setLive
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, view === 'home' && /*#__PURE__*/React.createElement(window.HomeView, null), view === 'payments' && /*#__PURE__*/React.createElement(window.PaymentsView, null), !['home', 'payments'].includes(view) && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "graph",
    title: `${TITLES[view]} is not in this demo`,
    description: "This UI kit implements the Home and Payments surfaces. Other sections are stubbed.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setView('payments')
    }, "Go to Payments")
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer-area/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer-area/Chrome.jsx
try { (() => {
/* Customer Area — sidebar navigation + top bar. Uses DS primitives from the bundle. */
const {
  Icon,
  Avatar,
  IconButton,
  Tag
} = window.PXDesignSystem_25da7e;
const NAV = [{
  id: 'home',
  label: 'Home',
  icon: 'nav-home'
}, {
  id: 'payments',
  label: 'Payments',
  icon: 'nav-payments'
}, {
  id: 'balances',
  label: 'Balances',
  icon: 'nav-balances'
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: 'nav-analytics'
}, {
  id: 'disputes',
  label: 'Risk & disputes',
  icon: 'nav-risk'
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'nav-reports'
}];
function Sidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flexShrink: 0,
      background: 'var(--b-color-background-primary)',
      borderRight: '1px solid var(--b-color-separator-primary)',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      background: 'var(--b-color-grey-3200)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "adyen-a-filled",
    size: 16,
    color: "var(--b-color-green-900)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--b-font-family-primary)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--b-color-label-primary)'
    }
  }, "Bento Pay")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(n => {
    const active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setView(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: 0,
        cursor: 'pointer',
        padding: '9px 10px',
        borderRadius: 8,
        textAlign: 'left',
        width: '100%',
        background: active ? 'var(--b-color-background-navigation)' : 'transparent',
        color: 'var(--b-color-label-primary)',
        fontFamily: 'var(--b-text-body-font-family)',
        fontSize: 14,
        fontWeight: active ? 600 : 400
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'var(--b-color-background-primary-hover)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 16
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: navFootStyle()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "help-center",
    size: 16
  }), "Help"), /*#__PURE__*/React.createElement("button", {
    style: navFootStyle()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 16
  }), "Settings")));
}
function navFootStyle() {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: '9px 10px',
    borderRadius: 8,
    textAlign: 'left',
    width: '100%',
    color: 'var(--b-color-label-secondary)',
    fontFamily: 'var(--b-text-body-font-family)',
    fontSize: 14
  };
}
function TopBar({
  title,
  live,
  setLive
}) {
  const {
    SegmentedControl
  } = window.PXDesignSystem_25da7e;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      borderBottom: '1px solid var(--b-color-separator-primary)',
      background: 'var(--b-color-background-primary)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--b-text-title-font-family)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--b-color-label-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    condensed: true,
    value: live ? 'live' : 'test',
    onChange: v => setLive(v === 'live'),
    options: [{
      value: 'test',
      label: 'Test'
    }, {
      value: 'live',
      label: 'Live'
    }]
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "notification",
    variant: "tertiary"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Mira Chen",
    size: "m"
  })));
}
Object.assign(window, {
  Sidebar,
  TopBar,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer-area/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer-area/HomeView.jsx
try { (() => {
/* Customer Area — Home overview. Metric cards + recent activity + task alert. */
const {
  Card,
  Tag,
  Status,
  Button,
  Divider,
  Alert
} = window.PXDesignSystem_25da7e;
function Metric({
  label,
  value,
  delta,
  deltaVariant,
  icon
}) {
  const {
    Icon
  } = window.PXDesignSystem_25da7e;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--b-color-label-secondary)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--b-text-title-font-family)',
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--b-color-label-primary)',
      letterSpacing: '-0.01em'
    }
  }, value), delta && /*#__PURE__*/React.createElement(Tag, {
    variant: deltaVariant,
    label: delta
  })));
}
const RECENT = [['Order 10492', 'Visa ···4242', '€49.99', 'green', 'Authorised'], ['Order 10491', 'iDEAL', '€128.00', 'green', 'Authorised'], ['Order 10490', 'Mastercard ···1088', '€12.50', 'orange', 'Pending'], ['Order 10489', 'Klarna', '€340.00', 'red', 'Refused']];
function HomeView() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    type: "warning",
    title: "Finish verifying your account",
    description: "Upload a proof of address to lift your payout hold.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary"
    }, "Upload document"),
    onClose: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Net volume",
    value: "\u20AC1,284,930",
    delta: "+4.2% vs last week",
    deltaVariant: "green",
    icon: "graph-up"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Transactions",
    value: "18,204",
    delta: "+312 today",
    deltaVariant: "green",
    icon: "card-stack"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Refunds",
    value: "\u20AC8,120",
    delta: "1.2% of volume",
    deltaVariant: "grey",
    icon: "refund"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Disputes",
    value: "3 open",
    delta: "Action needed",
    deltaVariant: "orange",
    icon: "nav-risk"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recent payments",
    headerActions: /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      iconRight: "chevron-right"
    }, "View all")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, RECENT.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 500,
      color: 'var(--b-color-label-primary)',
      fontSize: 14
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--b-color-label-secondary)',
      fontSize: 14
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 100,
      textAlign: 'right',
      fontFamily: 'var(--b-font-family-secondary)',
      color: 'var(--b-color-label-primary)',
      fontSize: 14
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Status, {
    variant: r[3],
    label: r[4]
  }))))))));
}
Object.assign(window, {
  HomeView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer-area/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer-area/PaymentsView.jsx
try { (() => {
/* Customer Area — Payments list: filter bar, data grid, pagination, row → detail modal. */
const {
  Card,
  Tabs,
  InputField,
  Chip,
  Button,
  IconButton,
  Status,
  Pagination,
  Modal,
  Tag,
  Divider,
  Menu,
  Tooltip
} = window.PXDesignSystem_25da7e;
const ALL_ROWS = [['PSP-9F2K10492', '17 Jul 2026, 14:22', 'Visa', '···4242', '€49.99', 'green', 'Authorised', 'Netherlands'], ['PSP-9F2K10491', '17 Jul 2026, 14:05', 'iDEAL', 'ING', '€128.00', 'green', 'Authorised', 'Netherlands'], ['PSP-9F2K10490', '17 Jul 2026, 13:47', 'Mastercard', '···1088', '€12.50', 'orange', 'Pending', 'Germany'], ['PSP-9F2K10489', '17 Jul 2026, 13:31', 'Klarna', 'Pay later', '€340.00', 'red', 'Refused', 'Sweden'], ['PSP-9F2K10488', '17 Jul 2026, 12:58', 'Visa', '···9931', '€76.20', 'green', 'Authorised', 'France'], ['PSP-9F2K10487', '17 Jul 2026, 12:40', 'PayPal', 'wallet', '€19.00', 'blue', 'Refunded', 'Spain'], ['PSP-9F2K10486', '17 Jul 2026, 12:12', 'Amex', '···0005', '€512.75', 'green', 'Authorised', 'United States'], ['PSP-9F2K10485', '17 Jul 2026, 11:50', 'Mastercard', '···2244', '€8.99', 'orange', 'Pending', 'Italy']];
function HeaderCell({
  children,
  w,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      flex: w ? undefined : 1,
      textAlign: right ? 'right' : 'left',
      color: 'var(--b-color-label-secondary)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.03em'
    }
  }, children);
}
function PaymentsView() {
  const [tab, setTab] = React.useState('all');
  const [page, setPage] = React.useState(1);
  const [detail, setDetail] = React.useState(null);
  const [hoverRow, setHoverRow] = React.useState(-1);
  const filtered = tab === 'all' ? ALL_ROWS : ALL_ROWS.filter(r => r[6].toLowerCase() === (tab === 'authorised' ? 'authorised' : tab));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: t => {
      setTab(t);
      setPage(1);
    },
    tabs: [{
      value: 'all',
      label: 'All',
      count: ALL_ROWS.length
    }, {
      value: 'authorised',
      label: 'Authorised'
    }, {
      value: 'pending',
      label: 'Pending'
    }, {
      value: 'refused',
      label: 'Refused'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    condensed: true,
    placeholder: "Search reference\u2026",
    iconBefore: "search"
  })), /*#__PURE__*/React.createElement(Chip, {
    label: "Last 7 days",
    onRemove: () => {}
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "EUR",
    onRemove: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    condensed: true,
    iconLeft: "filter"
  }, "Add filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Export CSV"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    variant: "secondary"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh",
    variant: "secondary"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 8px 10px',
      borderBottom: '1px solid var(--b-color-separator-primary)'
    }
  }, /*#__PURE__*/React.createElement(HeaderCell, {
    w: 150
  }, "Reference"), /*#__PURE__*/React.createElement(HeaderCell, {
    w: 150
  }, "Date"), /*#__PURE__*/React.createElement(HeaderCell, null, "Method"), /*#__PURE__*/React.createElement(HeaderCell, {
    w: 110,
    right: true
  }, "Amount"), /*#__PURE__*/React.createElement(HeaderCell, {
    w: 140
  }, "Status")), filtered.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    onClick: () => setDetail(r),
    onMouseEnter: () => setHoverRow(i),
    onMouseLeave: () => setHoverRow(-1),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '13px 8px',
      cursor: 'pointer',
      borderBottom: '1px solid var(--b-color-separator-primary)',
      background: hoverRow === i ? 'var(--b-color-background-primary-hover)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      fontFamily: 'var(--b-font-family-secondary)',
      fontSize: 13,
      color: 'var(--b-color-label-primary)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      color: 'var(--b-color-label-secondary)',
      fontSize: 14
    }
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--b-color-label-primary)'
    }
  }, r[2], " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-tertiary)'
    }
  }, r[3])), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      textAlign: 'right',
      fontFamily: 'var(--b-font-family-secondary)',
      fontSize: 14,
      color: 'var(--b-color-label-primary)'
    }
  }, r[4]), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140
    }
  }, /*#__PURE__*/React.createElement(Status, {
    variant: r[5],
    label: r[6]
  })))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--b-color-label-secondary)'
    }
  }, "No payments match this filter.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-secondary)',
      fontSize: 13
    }
  }, filtered.length, " of ", ALL_ROWS.length, " payments"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 6,
    onChange: setPage
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!detail,
    onClose: () => setDetail(null),
    width: 480,
    title: detail ? detail[0] : '',
    description: "Payment detail",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDetail(null)
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      critical: true
    }, "Refund"))
  }, detail && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Status"
  }, /*#__PURE__*/React.createElement(Status, {
    variant: detail[5],
    label: detail[6]
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Row, {
    k: "Amount"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--b-font-family-secondary)'
    }
  }, detail[4])), /*#__PURE__*/React.createElement(Row, {
    k: "Method"
  }, detail[2], " ", detail[3]), /*#__PURE__*/React.createElement(Row, {
    k: "Date"
  }, detail[1]), /*#__PURE__*/React.createElement(Row, {
    k: "Country"
  }, detail[7]), /*#__PURE__*/React.createElement(Row, {
    k: "Risk score"
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "green",
    label: "Low \xB7 12"
  })))));
}
function Row({
  k,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b-color-label-primary)'
    }
  }, children));
}
Object.assign(window, {
  PaymentsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer-area/PaymentsView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Status = __ds_scope.Status;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.LoadingIndicator = __ds_scope.LoadingIndicator;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.InputField = __ds_scope.InputField;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.SelectionCard = __ds_scope.SelectionCard;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
