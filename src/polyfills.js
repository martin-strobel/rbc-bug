/*
  Babel Polyfill import by usage
*/
import '@babel/polyfill';

/*
  React Polyfill IE 11
  Contains:
    - promise
    - whatwg-fetch
    - object-assign
    - for...of
    - ...item
*/
import 'react-app-polyfill/ie11';

/*
  Polyfill Element.closest in IE 11
  Required by: react-big-calendar dnd-addon (check on update)
*/
if (!Element.prototype.matches)
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
