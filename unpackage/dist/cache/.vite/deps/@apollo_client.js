import {
  BREAK,
  Kind,
  isSelectionNode,
  parse,
  print,
  visit
} from "./chunk-ESH2MEWL.js";
import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray
} from "./chunk-JRL72YIJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-624QZG55.js";

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../../../../../Users/daily/Desktop/d9/boka/node_modules/react/cjs/react.development.js"(exports, module2) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type)
          return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type)
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function isValidElementType(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? true : false;
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign2({}, props, { value: prevLog }),
            info: assign2({}, props, { value: prevInfo }),
            warn: assign2({}, props, { value: prevWarn }),
            error: assign2({}, props, { value: prevError }),
            group: assign2({}, props, { value: prevGroup }),
            groupCollapsed: assign2({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign2({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame)
          return frame;
        reentry = true;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      var control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                      "function" === typeof fn && componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type)
          return "";
        if ("function" === typeof type) {
          var prototype2 = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype2 || !prototype2.isReactComponent)
          );
        }
        if ("string" === typeof type)
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return type = describeNativeComponentFrame(type.render, false), type;
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype2 = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype2));
              } catch (x) {
              }
          }
        return "";
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidKey(config) {
        if (hasOwnProperty9.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning)
            return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self2, source, owner, props) {
        self2 = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self2 ? self2 : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          void 0,
          void 0,
          oldElement._owner,
          oldElement.props
        );
        newKey._store.validated = oldElement._store.validated;
        return newKey;
      }
      function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
          if (isArrayImpl(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
            for (; !(node = i.next()).done; )
              isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
          ownerHasKeyUseWarning[parentType] = true;
          var childOwner = "";
          element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function() {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function noop$1() {
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type)
          children = null;
        var invokeCallback = false;
        if (null === children)
          invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children)
          return children;
        var result2 = [], count = 0;
        mapIntoArray(children, result2, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result2;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ctor = payload._result;
          ctor = ctor();
          ctor.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 1, payload._result = moduleObject;
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 2, payload._result = error;
            }
          );
          -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status)
          return ctor = payload._result, void 0 === ctor && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ctor
          ), "default" in ctor || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ctor
          ), ctor.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function noop4() {
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module2 && module2[requireString]).call(
              module2,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else
            ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else
                  break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign2 = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, fnName;
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign2(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null
      }, hasOwnProperty9 = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event))
            return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result2 = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result2 && "object" === typeof result2 && "function" === typeof result2.then) {
          var thenable = result2;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$2) {
                      ReactSharedInternals.thrownErrors.push(error$2);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else
                    resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result2;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign2({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty9.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty9.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName)
          props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props);
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key], props.type);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        if (isValidElementType(type))
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i], type);
        else {
          i = "";
          if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
            i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          if (null === type)
            var typeString = "null";
          else
            isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            typeString,
            i
          );
        }
        var propName;
        i = {};
        typeString = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
            hasOwnProperty9.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength)
          i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        typeString && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        return {
          $$typeof: REACT_LAZY_TYPE,
          _payload: { _status: -1, _result: ctor },
          _init: lazyInitializer
        };
      };
      exports.memo = function(type, compare) {
        isValidElementType(type) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop4, reportGlobalError);
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough2, reducer) {
        return resolveDispatcher().useOptimistic(passthrough2, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.0.0";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/react/index.js
var require_react = __commonJS({
  "../../../../../../Users/daily/Desktop/d9/boka/node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_development();
    }
  }
});

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/rehackt/index.js
var require_rehackt = __commonJS({
  "../../../../../../Users/daily/Desktop/d9/boka/node_modules/rehackt/index.js"(exports, module2) {
    "use strict";
    if (0) {
      module2.exports = null;
    }
    module2.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0;
    module2.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0;
    module2.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0;
    Object.assign(module2.exports, require_react());
  }
});

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/ts-invariant/lib/invariant.js
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf;
var setPrototypeOf = _a === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;
var InvariantError = (
  /** @class */
  function(_super) {
    __extends(InvariantError2, _super);
    function InvariantError2(message) {
      if (message === void 0) {
        message = genericMessage;
      }
      var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
      _this.framesToPop = 1;
      _this.name = genericMessage;
      setPrototypeOf(_this, InvariantError2.prototype);
      return _this;
    }
    return InvariantError2;
  }(Error)
);
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant4) {
  invariant4.debug = wrapConsoleMethod("debug");
  invariant4.log = wrapConsoleMethod("log");
  invariant4.warn = wrapConsoleMethod("warn");
  invariant4.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
  var old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/version.js
var version = "3.12.3";

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/globals/maybe.js
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/globals/global.js
var global_default = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return window;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
maybe(function() {
  return maybe.constructor("return this")();
});

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/makeUniqueId.js
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function stringifyForDisplay(value, space) {
  if (space === void 0) {
    space = 0;
  }
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }, space).split(JSON.stringify(undefId)).join("<undefined>");
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function wrap(fn) {
  return function(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof message === "number") {
      var arg0 = message;
      message = getHandledErrorMsg(arg0);
      if (!message) {
        message = getFallbackErrorMsg(arg0, args);
        args = [];
      }
    }
    fn.apply(void 0, [message].concat(args));
  };
}
var invariant2 = Object.assign(function invariant3(condition, message) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (!condition) {
    invariant(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
  }
}, {
  debug: wrap(invariant.debug),
  log: wrap(invariant.log),
  warn: wrap(invariant.warn),
  error: wrap(invariant.error)
});
function newInvariantError(message) {
  var optionalParams = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    optionalParams[_i - 1] = arguments[_i];
  }
  return new InvariantError(getHandledErrorMsg(message, optionalParams) || getFallbackErrorMsg(message, optionalParams));
}
var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + version);
function stringify(arg) {
  if (typeof arg == "string") {
    return arg;
  }
  try {
    return stringifyForDisplay(arg, 2).slice(0, 1e3);
  } catch (_a2) {
    return "<non-serializable>";
  }
}
function getHandledErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return global_default[ApolloErrorMessageHandler] && global_default[ApolloErrorMessageHandler](message, messageArgs.map(stringify));
}
function getFallbackErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
    version,
    message,
    args: messageArgs.map(stringify)
  })));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/globals/index.js
var DEV = globalThis.__DEV__ !== false;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/directives.js
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      invariant2(evaledValue !== void 0, 78, directive.name.value);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root2, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root2, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
  return document && hasDirectives(["client", "export"], document, true);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result2 = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      invariant2(directiveArguments && directiveArguments.length === 1, 79, directiveName);
      var ifArgument = directiveArguments[0];
      invariant2(ifArgument.name && ifArgument.name.value === "if", 80, directiveName);
      var ifValue = ifArgument.value;
      invariant2(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 81, directiveName);
      result2.push({ directive, ifArgument });
    });
  }
  return result2;
}
function getFragmentMaskMode(fragment) {
  var _a2, _b;
  var directive = (_a2 = fragment.directives) === null || _a2 === void 0 ? void 0 : _a2.find(function(_a3) {
    var name = _a3.name;
    return name.value === "unmask";
  });
  if (!directive) {
    return "mask";
  }
  var modeArg = (_b = directive.arguments) === null || _b === void 0 ? void 0 : _b.find(function(_a3) {
    var name = _a3.name;
    return name.value === "mode";
  });
  if (globalThis.__DEV__ !== false) {
    if (modeArg) {
      if (modeArg.value.kind === Kind.VARIABLE) {
        globalThis.__DEV__ !== false && invariant2.warn(82);
      } else if (modeArg.value.kind !== Kind.STRING) {
        globalThis.__DEV__ !== false && invariant2.warn(83);
      } else if (modeArg.value.value !== "migrate") {
        globalThis.__DEV__ !== false && invariant2.warn(84, modeArg.value.value);
      }
    }
  }
  if (modeArg && "value" in modeArg.value && modeArg.value.value === "migrate") {
    return "migrate";
  }
  return "unmask";
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@wry/trie/lib/index.js
var defaultMakeData = () => /* @__PURE__ */ Object.create(null);
var { forEach, slice } = Array.prototype;
var { hasOwnProperty } = Object.prototype;
var Trie = class _Trie {
  constructor(weakness = true, makeData = defaultMakeData) {
    this.weakness = weakness;
    this.makeData = makeData;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(array) {
    let node = this;
    forEach.call(array, (key) => node = node.getChildTrie(key));
    return hasOwnProperty.call(node, "data") ? node.data : node.data = this.makeData(slice.call(array));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(array) {
    let node = this;
    for (let i = 0, len = array.length; node && i < len; ++i) {
      const map = node.mapFor(array[i], false);
      node = map && map.get(array[i]);
    }
    return node && node.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(array) {
    let data;
    if (array.length) {
      const head = array[0];
      const map = this.mapFor(head, false);
      const child = map && map.get(head);
      if (child) {
        data = child.removeArray(slice.call(array, 1));
        if (!child.data && !child.weak && !(child.strong && child.strong.size)) {
          map.delete(head);
        }
      }
    } else {
      data = this.data;
      delete this.data;
    }
    return data;
  }
  getChildTrie(key) {
    const map = this.mapFor(key, true);
    let child = map.get(key);
    if (!child)
      map.set(key, child = new _Trie(this.weakness, this.makeData));
    return child;
  }
  mapFor(key, create) {
    return this.weakness && isObjRef(key) ? this.weak || (create ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (create ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/canUse.js
var isReactNative = maybe(function() {
  return navigator.product;
}) == "ReactNative";
var canUseWeakMap = typeof WeakMap === "function" && !(isReactNative && !global.HermesInternal);
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof maybe(function() {
  return window.document.createElement;
}) === "function";
var usingJSDOM = (
  // Following advice found in this comment from @domenic (maintainer of jsdom):
  // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
  //
  // Since we control the version of Jest and jsdom used when running Apollo
  // Client tests, and that version is recent enought to include " jsdom/x.y.z"
  // at the end of the user agent string, I believe this case is all we need to
  // check. Testing for "Node.js" was recommended for backwards compatibility
  // with older version of jsdom, but we don't have that problem.
  maybe(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  }) || false
);
var canUseLayoutEffect = (canUseDOM || isReactNative) && !usingJSDOM;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/objects.js
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/fragments.js
function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw newInvariantError(
        85,
        definition.operation,
        definition.name ? " named '".concat(definition.name.value, "'") : ""
      );
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    invariant2(fragments.length === 1, 86, fragments.length);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      invariant2(fragment, 87, fragmentName);
      return fragment || null;
    }
    default:
      return null;
  }
}
function isFullyUnmaskedOperation(document) {
  var isUnmasked = true;
  visit(document, {
    FragmentSpread: function(node) {
      isUnmasked = !!node.directives && node.directives.some(function(directive) {
        return directive.name.value === "unmask";
      });
      if (!isUnmasked) {
        return BREAK;
      }
    }
  });
  return isUnmasked;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@wry/caches/lib/strong.js
function defaultDispose() {
}
var StrongCache = class {
  constructor(max = Infinity, dispose = defaultDispose) {
    this.max = max;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const { older, newer } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  }
  clean() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@wry/caches/lib/weak.js
function noop() {
}
var defaultDispose2 = noop;
var _WeakRef = typeof WeakRef !== "undefined" ? WeakRef : function(value) {
  return { deref: () => value };
};
var _WeakMap = typeof WeakMap !== "undefined" ? WeakMap : Map;
var _FinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : function() {
  return {
    register: noop,
    unregister: noop
  };
};
var finalizationBatchSize = 10024;
var WeakCache = class {
  constructor(max = Infinity, dispose = defaultDispose2) {
    this.max = max;
    this.dispose = dispose;
    this.map = new _WeakMap();
    this.newest = null;
    this.oldest = null;
    this.unfinalizedNodes = /* @__PURE__ */ new Set();
    this.finalizationScheduled = false;
    this.size = 0;
    this.finalize = () => {
      const iterator = this.unfinalizedNodes.values();
      for (let i = 0; i < finalizationBatchSize; i++) {
        const node = iterator.next().value;
        if (!node)
          break;
        this.unfinalizedNodes.delete(node);
        const key = node.key;
        delete node.key;
        node.keyRef = new _WeakRef(key);
        this.registry.register(key, node, node);
      }
      if (this.unfinalizedNodes.size > 0) {
        queueMicrotask(this.finalize);
      } else {
        this.finalizationScheduled = false;
      }
    };
    this.registry = new _FinalizationRegistry(this.deleteNode.bind(this));
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const { older, newer } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.scheduleFinalization(node);
    this.map.set(key, node);
    this.size++;
    return node.value;
  }
  clean() {
    while (this.oldest && this.size > this.max) {
      this.deleteNode(this.oldest);
    }
  }
  deleteNode(node) {
    if (node === this.newest) {
      this.newest = node.older;
    }
    if (node === this.oldest) {
      this.oldest = node.newer;
    }
    if (node.newer) {
      node.newer.older = node.older;
    }
    if (node.older) {
      node.older.newer = node.newer;
    }
    this.size--;
    const key = node.key || node.keyRef && node.keyRef.deref();
    this.dispose(node.value, key);
    if (!node.keyRef) {
      this.unfinalizedNodes.delete(node);
    } else {
      this.registry.unregister(node);
    }
    if (key)
      this.map.delete(key);
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      this.deleteNode(node);
      return true;
    }
    return false;
  }
  scheduleFinalization(node) {
    this.unfinalizedNodes.add(node);
    if (!this.finalizationScheduled) {
      this.finalizationScheduled = true;
      queueMicrotask(this.finalize);
    }
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/caching/caches.js
var scheduledCleanup = /* @__PURE__ */ new WeakSet();
function schedule(cache2) {
  if (cache2.size <= (cache2.max || -1)) {
    return;
  }
  if (!scheduledCleanup.has(cache2)) {
    scheduledCleanup.add(cache2);
    setTimeout(function() {
      cache2.clean();
      scheduledCleanup.delete(cache2);
    }, 100);
  }
}
var AutoCleanedWeakCache = function(max, dispose) {
  var cache2 = new WeakCache(max, dispose);
  cache2.set = function(key, value) {
    var ret = WeakCache.prototype.set.call(this, key, value);
    schedule(this);
    return ret;
  };
  return cache2;
};
var AutoCleanedStrongCache = function(max, dispose) {
  var cache2 = new StrongCache(max, dispose);
  cache2.set = function(key, value) {
    var ret = StrongCache.prototype.set.call(this, key, value);
    schedule(this);
    return ret;
  };
  return cache2;
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/caching/sizes.js
var cacheSizeSymbol = Symbol.for("apollo.cacheSize");
var cacheSizes = __assign({}, global_default[cacheSizeSymbol]);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/caching/getMemoryInternals.js
var globalCaches = {};
function registerGlobalCache(name, getSize) {
  globalCaches[name] = getSize;
}
var getApolloClientMemoryInternals = globalThis.__DEV__ !== false ? _getApolloClientMemoryInternals : void 0;
var getInMemoryCacheMemoryInternals = globalThis.__DEV__ !== false ? _getInMemoryCacheMemoryInternals : void 0;
var getApolloCacheMemoryInternals = globalThis.__DEV__ !== false ? _getApolloCacheMemoryInternals : void 0;
function getCurrentCacheSizes() {
  var defaults = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(defaults).map(function(_a2) {
    var k = _a2[0], v = _a2[1];
    return [
      k,
      cacheSizes[k] || v
    ];
  }));
}
function _getApolloClientMemoryInternals() {
  var _a2, _b, _c, _d, _e;
  if (!(globalThis.__DEV__ !== false))
    throw new Error("only supported in development mode");
  return {
    limits: getCurrentCacheSizes(),
    sizes: __assign({ print: (_a2 = globalCaches.print) === null || _a2 === void 0 ? void 0 : _a2.call(globalCaches), parser: (_b = globalCaches.parser) === null || _b === void 0 ? void 0 : _b.call(globalCaches), canonicalStringify: (_c = globalCaches.canonicalStringify) === null || _c === void 0 ? void 0 : _c.call(globalCaches), links: linkInfo(this.link), queryManager: {
      getDocumentInfo: this["queryManager"]["transformCache"].size,
      documentTransforms: transformInfo(this["queryManager"].documentTransform)
    } }, (_e = (_d = this.cache).getMemoryInternals) === null || _e === void 0 ? void 0 : _e.call(_d))
  };
}
function _getApolloCacheMemoryInternals() {
  return {
    cache: {
      fragmentQueryDocuments: getWrapperInformation(this["getFragmentDoc"])
    }
  };
}
function _getInMemoryCacheMemoryInternals() {
  var fragments = this.config.fragments;
  return __assign(__assign({}, _getApolloCacheMemoryInternals.apply(this)), { addTypenameDocumentTransform: transformInfo(this["addTypenameTransform"]), inMemoryCache: {
    executeSelectionSet: getWrapperInformation(this["storeReader"]["executeSelectionSet"]),
    executeSubSelectedArray: getWrapperInformation(this["storeReader"]["executeSubSelectedArray"]),
    maybeBroadcastWatch: getWrapperInformation(this["maybeBroadcastWatch"])
  }, fragmentRegistry: {
    findFragmentSpreads: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.findFragmentSpreads),
    lookup: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.lookup),
    transform: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.transform)
  } });
}
function isWrapper(f) {
  return !!f && "dirtyKey" in f;
}
function getWrapperInformation(f) {
  return isWrapper(f) ? f.size : void 0;
}
function isDefined(value) {
  return value != null;
}
function transformInfo(transform) {
  return recurseTransformInfo(transform).map(function(cache2) {
    return { cache: cache2 };
  });
}
function recurseTransformInfo(transform) {
  return transform ? __spreadArray(__spreadArray([
    getWrapperInformation(transform === null || transform === void 0 ? void 0 : transform["performWork"])
  ], recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["left"]), true), recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["right"]), true).filter(isDefined) : [];
}
function linkInfo(link) {
  var _a2;
  return link ? __spreadArray(__spreadArray([
    (_a2 = link === null || link === void 0 ? void 0 : link.getMemoryInternals) === null || _a2 === void 0 ? void 0 : _a2.call(link)
  ], linkInfo(link === null || link === void 0 ? void 0 : link.left), true), linkInfo(link === null || link === void 0 ? void 0 : link.right), true).filter(isDefined) : [];
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/canonicalStringify.js
var canonicalStringify = Object.assign(function canonicalStringify2(value) {
  return JSON.stringify(value, stableObjectReplacer);
}, {
  reset: function() {
    sortingMap = new AutoCleanedStrongCache(
      cacheSizes.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("canonicalStringify", function() {
    return sortingMap.size;
  });
}
var sortingMap;
canonicalStringify.reset();
function stableObjectReplacer(key, value) {
  if (value && typeof value === "object") {
    var proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto === null) {
      var keys = Object.keys(value);
      if (keys.every(everyKeyInOrder))
        return value;
      var unsortedKey = JSON.stringify(keys);
      var sortedKeys = sortingMap.get(unsortedKey);
      if (!sortedKeys) {
        keys.sort();
        var sortedKey = JSON.stringify(keys);
        sortedKeys = sortingMap.get(sortedKey) || keys;
        sortingMap.set(unsortedKey, sortedKeys);
        sortingMap.set(sortedKey, sortedKeys);
      }
      var sortedObject_1 = Object.create(proto);
      sortedKeys.forEach(function(key2) {
        sortedObject_1[key2] = value[key2];
      });
      return sortedObject_1;
    }
  }
  return value;
}
function everyKeyInOrder(key, i, keys) {
  return i === 0 || keys[i - 1] <= key;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/storeUtils.js
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw newInvariantError(96, name.value, value.kind);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
];
var storeKeyNameStringify = canonicalStringify;
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(storeKeyNameStringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = storeKeyNameStringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(storeKeyNameStringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = storeKeyNameStringify;
    storeKeyNameStringify = s;
    return previous;
  }
});
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result2, selectionSet, fragmentMap) {
  var fragments;
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result2[resultKeyNameFromField(selection)];
      }
    } else if (fragments) {
      fragments.push(selection);
    } else {
      fragments = [selection];
    }
  }
  if (typeof result2.__typename === "string") {
    return result2.__typename;
  }
  if (fragments) {
    for (var _b = 0, fragments_1 = fragments; _b < fragments_1.length; _b++) {
      var selection = fragments_1[_b];
      var typename = getTypenameFromResult(result2, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/getFromAST.js
function checkDocument(doc) {
  invariant2(doc && doc.kind === "Document", 88);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw newInvariantError(89, definition.kind);
    }
    return definition;
  });
  invariant2(operations.length <= 1, 90, operations.length);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && !!definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  invariant2(queryDef && queryDef.operation === "query", 91);
  return queryDef;
}
function getFragmentDefinition(doc) {
  invariant2(doc.kind === "Document", 92);
  invariant2(doc.definitions.length <= 1, 93);
  var fragmentDef = doc.definitions[0];
  invariant2(fragmentDef.kind === "FragmentDefinition", 94);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition = _a2[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw newInvariantError(95);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@wry/context/lib/slot.js
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = () => class Slot {
  constructor() {
    this.id = [
      "slot",
      idCounter++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let context = currentContext; context; context = context.parent) {
      if (this.id in context.slots) {
        const value = context.slots[this.id];
        if (value === MISSING_VALUE)
          break;
        if (context !== currentContext) {
          currentContext.slots[this.id] = value;
        }
        return true;
      }
    }
    if (currentContext) {
      currentContext.slots[this.id] = MISSING_VALUE;
    }
    return false;
  }
  getValue() {
    if (this.hasValue()) {
      return currentContext.slots[this.id];
    }
  }
  withValue(value, callback, args, thisArg) {
    const slots = {
      __proto__: null,
      [this.id]: value
    };
    const parent = currentContext;
    currentContext = { parent, slots };
    try {
      return callback.apply(thisArg, args);
    } finally {
      currentContext = parent;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(callback) {
    const context = currentContext;
    return function() {
      const saved = currentContext;
      try {
        currentContext = context;
        return callback.apply(this, arguments);
      } finally {
        currentContext = saved;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(callback, args, thisArg) {
    if (currentContext) {
      const saved = currentContext;
      try {
        currentContext = null;
        return callback.apply(thisArg, args);
      } finally {
        currentContext = saved;
      }
    } else {
      return callback.apply(thisArg, args);
    }
  }
};
function maybe2(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
var globalKey = "@wry/context:Slot";
var host = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  maybe2(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  maybe2(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
);
var globalHost = host;
var Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: true
    });
  } finally {
    return Slot2;
  }
}(makeSlotClass());

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@wry/context/lib/index.js
var { bind, noContext } = Slot;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/optimism/lib/context.js
var parentEntrySlot = new Slot();

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/optimism/lib/helpers.js
var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
var arrayFromSet = Array.from || function(set) {
  const array = [];
  set.forEach((item) => array.push(item));
  return array;
};
function maybeUnsubscribe(entryOrDep) {
  const { unsubscribe } = entryOrDep;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/optimism/lib/entry.js
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  const len = a.length;
  return (
    // Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]
  );
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = class _Entry {
  constructor(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++_Entry.count;
  }
  peek() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  }
  setDirty() {
    if (this.dirty)
      return;
    this.dirty = true;
    reportDirty(this);
    maybeUnsubscribe(this);
  }
  dispose() {
    this.setDirty();
    forgetChildren(this);
    eachParent(this, (parent, child) => {
      parent.setDirty();
      forgetChild(parent, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  }
  forgetDeps() {
    if (this.deps) {
      arrayFromSet(this.deps).forEach((dep2) => dep2.delete(this));
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  }
};
Entry.count = 0;
function rememberParent(child) {
  const parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  const { normalizeResult } = entry;
  let oldValueCopy;
  if (normalizeResult && entry.value.length === 1) {
    oldValueCopy = valueCopy(entry.value);
  }
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
    if (normalizeResult && oldValueCopy && !valueIs(oldValueCopy, entry.value)) {
      try {
        entry.value[0] = normalizeResult(entry.value[0], oldValueCopy[0]);
      } catch (_a2) {
      }
    }
  } catch (e) {
    entry.value[1] = e;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  const parentCount = child.parents.size;
  if (parentCount) {
    const parents = arrayFromSet(child.parents);
    for (let i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  const parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  const childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  const dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach((_value, child) => {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/optimism/lib/dep.js
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
  // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
  const depsByKey = /* @__PURE__ */ new Map();
  const subscribe = options && options.subscribe;
  function depend(key) {
    const parent = parentEntrySlot.getValue();
    if (parent) {
      let dep2 = depsByKey.get(key);
      if (!dep2) {
        depsByKey.set(key, dep2 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep2);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep2);
        dep2.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    const dep2 = depsByKey.get(key);
    if (dep2) {
      const m = entryMethodName && hasOwnProperty2.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      arrayFromSet(dep2).forEach((entry) => entry[m]());
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/optimism/lib/index.js
var defaultKeyTrie;
function defaultMakeCacheKey(...args) {
  const trie = defaultKeyTrie || (defaultKeyTrie = new Trie(typeof WeakMap === "function"));
  return trie.lookupArray(args);
}
var caches = /* @__PURE__ */ new Set();
function wrap2(originalFunction, { max = Math.pow(2, 16), keyArgs, makeCacheKey = defaultMakeCacheKey, normalizeResult, subscribe, cache: cacheOption = StrongCache } = /* @__PURE__ */ Object.create(null)) {
  const cache2 = typeof cacheOption === "function" ? new cacheOption(max, (entry) => entry.dispose()) : cacheOption;
  const optimistic = function() {
    const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    let entry = cache2.get(key);
    if (!entry) {
      cache2.set(key, entry = new Entry(originalFunction));
      entry.normalizeResult = normalizeResult;
      entry.subscribe = subscribe;
      entry.forget = () => cache2.delete(key);
    }
    const value = entry.recompute(Array.prototype.slice.call(arguments));
    cache2.set(key, entry);
    caches.add(cache2);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach((cache3) => cache3.clean());
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: () => cache2.size,
    configurable: false,
    enumerable: false
  });
  Object.freeze(optimistic.options = {
    max,
    keyArgs,
    makeCacheKey,
    normalizeResult,
    subscribe,
    cache: cache2
  });
  function dirtyKey(key) {
    const entry = key && cache2.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    const entry = key && cache2.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return key ? cache2.delete(key) : false;
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function identity(document) {
  return document;
}
var DocumentTransform = (
  /** @class */
  function() {
    function DocumentTransform2(transform, options) {
      if (options === void 0) {
        options = /* @__PURE__ */ Object.create(null);
      }
      this.resultCache = canUseWeakSet ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set();
      this.transform = transform;
      if (options.getCacheKey) {
        this.getCacheKey = options.getCacheKey;
      }
      this.cached = options.cache !== false;
      this.resetCache();
    }
    DocumentTransform2.prototype.getCacheKey = function(document) {
      return [document];
    };
    DocumentTransform2.identity = function() {
      return new DocumentTransform2(identity, { cache: false });
    };
    DocumentTransform2.split = function(predicate, left, right) {
      if (right === void 0) {
        right = DocumentTransform2.identity();
      }
      return Object.assign(new DocumentTransform2(
        function(document) {
          var documentTransform = predicate(document) ? left : right;
          return documentTransform.transformDocument(document);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: false }
      ), { left, right });
    };
    DocumentTransform2.prototype.resetCache = function() {
      var _this = this;
      if (this.cached) {
        var stableCacheKeys_1 = new Trie(canUseWeakMap);
        this.performWork = wrap2(DocumentTransform2.prototype.performWork.bind(this), {
          makeCacheKey: function(document) {
            var cacheKeys = _this.getCacheKey(document);
            if (cacheKeys) {
              invariant2(Array.isArray(cacheKeys), 77);
              return stableCacheKeys_1.lookupArray(cacheKeys);
            }
          },
          max: cacheSizes["documentTransform.cache"],
          cache: WeakCache
        });
      }
    };
    DocumentTransform2.prototype.performWork = function(document) {
      checkDocument(document);
      return this.transform(document);
    };
    DocumentTransform2.prototype.transformDocument = function(document) {
      if (this.resultCache.has(document)) {
        return document;
      }
      var transformedDocument = this.performWork(document);
      this.resultCache.add(transformedDocument);
      return transformedDocument;
    };
    DocumentTransform2.prototype.concat = function(otherTransform) {
      var _this = this;
      return Object.assign(new DocumentTransform2(
        function(document) {
          return otherTransform.transformDocument(_this.transformDocument(document));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: false }
      ), {
        left: this,
        right: otherTransform
      });
    };
    return DocumentTransform2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/print.js
var printCache;
var print2 = Object.assign(function(ast) {
  var result2 = printCache.get(ast);
  if (!result2) {
    result2 = print(ast);
    printCache.set(ast, result2);
  }
  return result2;
}, {
  reset: function() {
    printCache = new AutoCleanedWeakCache(
      cacheSizes.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
print2.reset();
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("print", function() {
    return printCache ? printCache.size : 0;
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/arrays.js
var isArray = Array.isArray;
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/graphql/transform.js
var TYPENAME_FIELD = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(configs) {
  var names = /* @__PURE__ */ new Map();
  var tests = /* @__PURE__ */ new Map();
  configs.forEach(function(directive) {
    if (directive) {
      if (directive.name) {
        names.set(directive.name, directive);
      } else if (directive.test) {
        tests.set(directive.test, directive);
      }
    }
  });
  return function(directive) {
    var config = names.get(directive.name.value);
    if (!config && tests.size) {
      tests.forEach(function(testConfig, test) {
        if (test(directive)) {
          config = testConfig;
        }
      });
    }
    return config;
  };
}
function makeInUseGetterFunction(defaultKey) {
  var map = /* @__PURE__ */ new Map();
  return function inUseGetterFunction(key) {
    if (key === void 0) {
      key = defaultKey;
    }
    var inUse = map.get(key);
    if (!inUse) {
      map.set(key, inUse = {
        // Variable and fragment spread names used directly within this
        // operation or fragment definition, as identified by key. These sets
        // will be populated during the first traversal of the document in
        // removeDirectivesFromDocument below.
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      });
    }
    return inUse;
  };
}
function removeDirectivesFromDocument(directives, doc) {
  checkDocument(doc);
  var getInUseByOperationName = makeInUseGetterFunction("");
  var getInUseByFragmentName = makeInUseGetterFunction("");
  var getInUse = function(ancestors) {
    for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
      if (isArray(ancestor))
        continue;
      if (ancestor.kind === Kind.OPERATION_DEFINITION) {
        return getInUseByOperationName(ancestor.name && ancestor.name.value);
      }
      if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
        return getInUseByFragmentName(ancestor.name.value);
      }
    }
    globalThis.__DEV__ !== false && invariant2.error(97);
    return null;
  };
  var operationCount = 0;
  for (var i = doc.definitions.length - 1; i >= 0; --i) {
    if (doc.definitions[i].kind === Kind.OPERATION_DEFINITION) {
      ++operationCount;
    }
  }
  var directiveMatcher = getDirectiveMatcher(directives);
  var shouldRemoveField = function(nodeDirectives) {
    return isNonEmptyArray(nodeDirectives) && nodeDirectives.map(directiveMatcher).some(function(config) {
      return config && config.remove;
    });
  };
  var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
  var firstVisitMadeChanges = false;
  var fieldOrInlineFragmentVisitor = {
    enter: function(node) {
      if (shouldRemoveField(node.directives)) {
        firstVisitMadeChanges = true;
        return null;
      }
    }
  };
  var docWithoutDirectiveSubtrees = visit(doc, {
    // These two AST node types share the same implementation, defined above.
    Field: fieldOrInlineFragmentVisitor,
    InlineFragment: fieldOrInlineFragmentVisitor,
    VariableDefinition: {
      enter: function() {
        return false;
      }
    },
    Variable: {
      enter: function(node, _key, _parent, _path, ancestors) {
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.variables.add(node.name.value);
        }
      }
    },
    FragmentSpread: {
      enter: function(node, _key, _parent, _path, ancestors) {
        if (shouldRemoveField(node.directives)) {
          firstVisitMadeChanges = true;
          return null;
        }
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.fragmentSpreads.add(node.name.value);
        }
      }
    },
    FragmentDefinition: {
      enter: function(node, _key, _parent, path) {
        originalFragmentDefsByPath.set(JSON.stringify(path), node);
      },
      leave: function(node, _key, _parent, path) {
        var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
        if (node === originalNode) {
          return node;
        }
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          operationCount > 0 && node.selectionSet.selections.every(function(selection) {
            return selection.kind === Kind.FIELD && selection.name.value === "__typename";
          })
        ) {
          getInUseByFragmentName(node.name.value).removed = true;
          firstVisitMadeChanges = true;
          return null;
        }
      }
    },
    Directive: {
      leave: function(node) {
        if (directiveMatcher(node)) {
          firstVisitMadeChanges = true;
          return null;
        }
      }
    }
  });
  if (!firstVisitMadeChanges) {
    return doc;
  }
  var populateTransitiveVars = function(inUse) {
    if (!inUse.transitiveVars) {
      inUse.transitiveVars = new Set(inUse.variables);
      if (!inUse.removed) {
        inUse.fragmentSpreads.forEach(function(childFragmentName) {
          populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function(varName) {
            inUse.transitiveVars.add(varName);
          });
        });
      }
    }
    return inUse;
  };
  var allFragmentNamesUsed = /* @__PURE__ */ new Set();
  docWithoutDirectiveSubtrees.definitions.forEach(function(def) {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function(childFragmentName) {
        allFragmentNamesUsed.add(childFragmentName);
      });
    } else if (def.kind === Kind.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
      allFragmentNamesUsed.add(def.name.value);
    }
  });
  allFragmentNamesUsed.forEach(function(fragmentName) {
    populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function(childFragmentName) {
      allFragmentNamesUsed.add(childFragmentName);
    });
  });
  var fragmentWillBeRemoved = function(fragmentName) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
  };
  var enterVisitor = {
    enter: function(node) {
      if (fragmentWillBeRemoved(node.name.value)) {
        return null;
      }
    }
  };
  return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: enterVisitor,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: enterVisitor,
    OperationDefinition: {
      leave: function(node) {
        if (node.variableDefinitions) {
          var usedVariableNames_1 = populateTransitiveVars(
            // If an operation is anonymous, we use the empty string as its key.
            getInUseByOperationName(node.name && node.name.value)
          ).transitiveVars;
          if (usedVariableNames_1.size < node.variableDefinitions.length) {
            return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions.filter(function(varDef) {
              return usedVariableNames_1.has(varDef.variable.name.value);
            }) });
          }
        }
      }
    }
  }));
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document;
  }
  var modifiedDoc = visit(document, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document);
  return modifiedDoc;
}
function addNonReactiveToNamedFragments(document) {
  checkDocument(document);
  return visit(document, {
    FragmentSpread: function(node) {
      var _a2;
      if ((_a2 = node.directives) === null || _a2 === void 0 ? void 0 : _a2.some(function(directive) {
        return directive.name.value === "unmask";
      })) {
        return;
      }
      return __assign(__assign({}, node), { directives: __spreadArray(__spreadArray([], node.directives || [], true), [
        {
          kind: Kind.DIRECTIVE,
          name: { kind: Kind.NAME, value: "nonreactive" }
        }
      ], false) });
    }
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/mergeDeep.js
var hasOwnProperty3 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = (
  /** @class */
  function() {
    function DeepMerger2(reconciler) {
      if (reconciler === void 0) {
        reconciler = defaultReconciler;
      }
      this.reconciler = reconciler;
      this.isObject = isNonNullObject;
      this.pastCopies = /* @__PURE__ */ new Set();
    }
    DeepMerger2.prototype.merge = function(target, source) {
      var _this = this;
      var context = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        context[_i - 2] = arguments[_i];
      }
      if (isNonNullObject(source) && isNonNullObject(target)) {
        Object.keys(source).forEach(function(sourceKey) {
          if (hasOwnProperty3.call(target, sourceKey)) {
            var targetValue = target[sourceKey];
            if (source[sourceKey] !== targetValue) {
              var result2 = _this.reconciler.apply(_this, __spreadArray([
                target,
                source,
                sourceKey
              ], context, false));
              if (result2 !== targetValue) {
                target = _this.shallowCopyForMerge(target);
                target[sourceKey] = result2;
              }
            }
          } else {
            target = _this.shallowCopyForMerge(target);
            target[sourceKey] = source[sourceKey];
          }
        });
        return target;
      }
      return source;
    };
    DeepMerger2.prototype.shallowCopyForMerge = function(value) {
      if (isNonNullObject(value)) {
        if (!this.pastCopies.has(value)) {
          if (Array.isArray(value)) {
            value = value.slice(0);
          } else {
            value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
          }
          this.pastCopies.add(value);
        }
      }
      return value;
    };
    return DeepMerger2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/zen-observable-ts/module.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x) {
  return x instanceof Observable;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m)
          m.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m)
          m.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m)
          m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = function() {
  function Subscription2(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }
    if (this._state === "initializing")
      this._state = "ready";
  }
  var _proto = Subscription2.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass(Subscription2, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription2;
}();
var SubscriptionObserver = function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable = function() {
  function Observable2(subscriber) {
    if (!(this instanceof Observable2))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable2.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map(fn) {
    var _this2 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter(fn) {
    var _this3 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value))
              return;
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          if (!hasValue && !hasSeed)
            return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat2() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscription;
      var index = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v) {
            observer.next(v);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (index === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }
          var inner = C.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0)
                subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0)
          observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable2.from = function from2(x) {
    var C = typeof this === "function" ? this : Observable2;
    if (x == null)
      throw new TypeError(x + " is not an object");
    var method = getMethod(x, SymbolObservable);
    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable)
        throw new TypeError(observable + " is not an object");
      if (isObservable(observable) && observable.constructor === C)
        return observable;
      return new C(function(observer) {
        return observable.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x, SymbolIterator);
      if (method) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x)) {
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x + " is not observable");
  };
  Observable2.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C = typeof this === "function" ? this : Observable2;
    return new C(function(observer) {
      enqueue(function() {
        if (observer.closed)
          return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed)
            return;
        }
        observer.complete();
      });
    });
  };
  _createClass(Observable2, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable2;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root2) {
  var result2;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result2 = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result2 = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result2 = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result2;
      } catch (err) {
      }
    }
  } else {
    result2 = "@@observable";
  }
  return result2;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/symbol-observable/es/index.js
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
var result = symbolObservablePonyfill(root);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/observables/Observable.js
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/promises/decoration.js
function createFulfilledPromise(value) {
  var promise = Promise.resolve(value);
  promise.status = "fulfilled";
  promise.value = value;
  return promise;
}
function createRejectedPromise(reason) {
  var promise = Promise.reject(reason);
  promise.catch(function() {
  });
  promise.status = "rejected";
  promise.reason = reason;
  return promise;
}
function isStatefulPromise(promise) {
  return "status" in promise;
}
function wrapPromiseWithState(promise) {
  if (isStatefulPromise(promise)) {
    return promise;
  }
  var pendingPromise = promise;
  pendingPromise.status = "pending";
  pendingPromise.then(function(value) {
    if (pendingPromise.status === "pending") {
      var fulfilledPromise = pendingPromise;
      fulfilledPromise.status = "fulfilled";
      fulfilledPromise.value = value;
    }
  }, function(reason) {
    if (pendingPromise.status === "pending") {
      var rejectedPromise = pendingPromise;
      rejectedPromise.status = "rejected";
      rejectedPromise.reason = reason;
    }
  });
  return promise;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function preventUnhandledRejection(promise) {
  promise.catch(function() {
  });
  return promise;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/cloneDeep.js
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (globalThis.__DEV__ !== false && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (globalThis.__DEV__ !== false) {
    deepFreeze(obj);
  }
  return obj;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/observables/iteration.js
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/observables/asyncMap.js
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var promiseQueue = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, key) {
      return function(arg) {
        if (examiner) {
          var both = function() {
            return observer.closed ? (
              /* will be swallowed */
              0
            ) : examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result2) {
            return observer.next(result2);
          }, function(error) {
            return observer.error(error);
          });
        } else {
          observer[key](arg);
        }
      };
    }
    var handler = {
      next: makeCallback(mapFn, "next"),
      error: makeCallback(catchFn, "error"),
      complete: function() {
        promiseQueue.then(function() {
          return observer.complete();
        });
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/observables/subclassing.js
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/observables/Concast.js
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = (
  /** @class */
  function(_super) {
    __extends(Concast2, _super);
    function Concast2(sources) {
      var _this = _super.call(this, function(observer) {
        _this.addObserver(observer);
        return function() {
          return _this.removeObserver(observer);
        };
      }) || this;
      _this.observers = /* @__PURE__ */ new Set();
      _this.promise = new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
      _this.handlers = {
        next: function(result2) {
          if (_this.sub !== null) {
            _this.latest = ["next", result2];
            _this.notify("next", result2);
            iterateObserversSafely(_this.observers, "next", result2);
          }
        },
        error: function(error) {
          var sub = _this.sub;
          if (sub !== null) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            _this.latest = ["error", error];
            _this.reject(error);
            _this.notify("error", error);
            iterateObserversSafely(_this.observers, "error", error);
          }
        },
        complete: function() {
          var _a2 = _this, sub = _a2.sub, _b = _a2.sources, sources2 = _b === void 0 ? [] : _b;
          if (sub !== null) {
            var value = sources2.shift();
            if (!value) {
              if (sub)
                setTimeout(function() {
                  return sub.unsubscribe();
                });
              _this.sub = null;
              if (_this.latest && _this.latest[0] === "next") {
                _this.resolve(_this.latest[1]);
              } else {
                _this.resolve();
              }
              _this.notify("complete");
              iterateObserversSafely(_this.observers, "complete");
            } else if (isPromiseLike(value)) {
              value.then(function(obs) {
                return _this.sub = obs.subscribe(_this.handlers);
              }, _this.handlers.error);
            } else {
              _this.sub = value.subscribe(_this.handlers);
            }
          }
        }
      };
      _this.nextResultListeners = /* @__PURE__ */ new Set();
      _this.cancel = function(reason) {
        _this.reject(reason);
        _this.sources = [];
        _this.handlers.error(reason);
      };
      _this.promise.catch(function(_) {
      });
      if (typeof sources === "function") {
        sources = [new Observable(sources)];
      }
      if (isPromiseLike(sources)) {
        sources.then(function(iterable) {
          return _this.start(iterable);
        }, _this.handlers.error);
      } else {
        _this.start(sources);
      }
      return _this;
    }
    Concast2.prototype.start = function(sources) {
      if (this.sub !== void 0)
        return;
      this.sources = Array.from(sources);
      this.handlers.complete();
    };
    Concast2.prototype.deliverLastMessage = function(observer) {
      if (this.latest) {
        var nextOrError = this.latest[0];
        var method = observer[nextOrError];
        if (method) {
          method.call(observer, this.latest[1]);
        }
        if (this.sub === null && nextOrError === "next" && observer.complete) {
          observer.complete();
        }
      }
    };
    Concast2.prototype.addObserver = function(observer) {
      if (!this.observers.has(observer)) {
        this.deliverLastMessage(observer);
        this.observers.add(observer);
      }
    };
    Concast2.prototype.removeObserver = function(observer) {
      if (this.observers.delete(observer) && this.observers.size < 1) {
        this.handlers.complete();
      }
    };
    Concast2.prototype.notify = function(method, arg) {
      var nextResultListeners = this.nextResultListeners;
      if (nextResultListeners.size) {
        this.nextResultListeners = /* @__PURE__ */ new Set();
        nextResultListeners.forEach(function(listener) {
          return listener(method, arg);
        });
      }
    };
    Concast2.prototype.beforeNext = function(callback) {
      var called = false;
      this.nextResultListeners.add(function(method, arg) {
        if (!called) {
          called = true;
          callback(method, arg);
        }
      });
    };
    return Concast2;
  }(Observable)
);
fixObservableSubclass(Concast);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/incrementalResult.js
function isExecutionPatchIncrementalResult(value) {
  return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
  return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
  return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
}
function isApolloPayloadResult(value) {
  return isNonNullObject(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result2) {
  var mergedData = prevResult;
  var merger = new DeepMerger();
  if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
    result2.incremental.forEach(function(_a2) {
      var data = _a2.data, path = _a2.path;
      for (var i = path.length - 1; i >= 0; --i) {
        var key = path[i];
        var isNumericKey = !isNaN(+key);
        var parent_1 = isNumericKey ? [] : {};
        parent_1[key] = data;
        data = parent_1;
      }
      mergedData = merger.merge(mergedData, data);
    });
  }
  return mergedData;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/errorHandling.js
function graphQLResultHasError(result2) {
  var errors = getGraphQLErrorsFromResult(result2);
  return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result2) {
  var graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors.slice(0) : [];
  if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
    result2.incremental.forEach(function(incrementalResult) {
      if (incrementalResult.errors) {
        graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
      }
    });
  }
  return graphQLErrors;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/compact.js
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result2 = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result2[key] = value;
      }
    });
  });
  return result2;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/utilities/common/mergeOptions.js
function mergeOptions(defaults, options) {
  return compact(defaults, options, options.variables && {
    variables: compact(__assign(__assign({}, defaults && defaults.variables), options.variables))
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/fromError.js
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/toPromise.js
function toPromise(observable) {
  var completed = false;
  return new Promise(function(resolve, reject) {
    observable.subscribe({
      next: function(data) {
        if (completed) {
          globalThis.__DEV__ !== false && invariant2.warn(45);
        } else {
          completed = true;
          resolve(data);
        }
      },
      error: reject
    });
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/fromPromise.js
function fromPromise(promise) {
  return new Observable(function(observer) {
    promise.then(function(value) {
      observer.next(value);
      observer.complete();
    }).catch(observer.error.bind(observer));
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/throwServerError.js
var throwServerError = function(response, result2, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result2;
  throw error;
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/validateOperation.js
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw newInvariantError(46, key);
    }
  }
  return operation;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/createOperation.js
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/transformOperation.js
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/utils/filterOperationVariables.js
function filterOperationVariables(variables, query) {
  var result2 = __assign({}, variables);
  var unusedNames = new Set(Object.keys(variables));
  visit(query, {
    Variable: function(node, _key, parent) {
      if (parent && parent.kind !== "VariableDefinition") {
        unusedNames.delete(node.name.value);
      }
    }
  });
  unusedNames.forEach(function(name) {
    delete result2[name];
  });
  return result2;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/core/ApolloLink.js
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var ApolloLink = (
  /** @class */
  function() {
    function ApolloLink2(request) {
      if (request)
        this.request = request;
    }
    ApolloLink2.empty = function() {
      return new ApolloLink2(function() {
        return Observable.of();
      });
    };
    ApolloLink2.from = function(links) {
      if (links.length === 0)
        return ApolloLink2.empty();
      return links.map(toLink).reduce(function(x, y) {
        return x.concat(y);
      });
    };
    ApolloLink2.split = function(test, left, right) {
      var leftLink = toLink(left);
      var rightLink = toLink(right || new ApolloLink2(passthrough));
      var ret;
      if (isTerminating(leftLink) && isTerminating(rightLink)) {
        ret = new ApolloLink2(function(operation) {
          return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
        });
      } else {
        ret = new ApolloLink2(function(operation, forward) {
          return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
        });
      }
      return Object.assign(ret, { left: leftLink, right: rightLink });
    };
    ApolloLink2.execute = function(link, operation) {
      return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
    };
    ApolloLink2.concat = function(first, second) {
      var firstLink = toLink(first);
      if (isTerminating(firstLink)) {
        globalThis.__DEV__ !== false && invariant2.warn(38, firstLink);
        return firstLink;
      }
      var nextLink = toLink(second);
      var ret;
      if (isTerminating(nextLink)) {
        ret = new ApolloLink2(function(operation) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op) || Observable.of();
          }) || Observable.of();
        });
      } else {
        ret = new ApolloLink2(function(operation, forward) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op, forward) || Observable.of();
          }) || Observable.of();
        });
      }
      return Object.assign(ret, { left: firstLink, right: nextLink });
    };
    ApolloLink2.prototype.split = function(test, left, right) {
      return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
    };
    ApolloLink2.prototype.concat = function(next) {
      return ApolloLink2.concat(this, next);
    };
    ApolloLink2.prototype.request = function(operation, forward) {
      throw newInvariantError(39);
    };
    ApolloLink2.prototype.onError = function(error, observer) {
      if (observer && observer.error) {
        observer.error(error);
        return false;
      }
      throw error;
    };
    ApolloLink2.prototype.setOnError = function(fn) {
      this.onError = fn;
      return this;
    };
    return ApolloLink2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/core/empty.js
var empty = ApolloLink.empty;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/core/from.js
var from = ApolloLink.from;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/core/split.js
var split = ApolloLink.split;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/core/concat.js
var concat = ApolloLink.concat;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/core/execute.js
var execute = ApolloLink.execute;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/iterators/async.js
function asyncIterator(source) {
  var _a2;
  var iterator = source[Symbol.asyncIterator]();
  return _a2 = {
    next: function() {
      return iterator.next();
    }
  }, _a2[Symbol.asyncIterator] = function() {
    return this;
  }, _a2;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/iterators/nodeStream.js
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error)
      return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError(err) {
    error = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error)
        return reject(error);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/iterators/promise.js
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/iterators/reader.js
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/responseIterator.js
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/errors/index.js
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result2) {
  if (result2.extensions) {
    return Array.isArray(result2.extensions[PROTOCOL_ERRORS_SYMBOL]);
  }
  return false;
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError)
    errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = (
  /** @class */
  function(_super) {
    __extends(ApolloError2, _super);
    function ApolloError2(_a2) {
      var graphQLErrors = _a2.graphQLErrors, protocolErrors = _a2.protocolErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
      var _this = _super.call(this, errorMessage) || this;
      _this.name = "ApolloError";
      _this.graphQLErrors = graphQLErrors || [];
      _this.protocolErrors = protocolErrors || [];
      _this.clientErrors = clientErrors || [];
      _this.networkError = networkError || null;
      _this.message = errorMessage || generateErrorMessage(_this);
      _this.extraInfo = extraInfo;
      _this.cause = __spreadArray(__spreadArray(__spreadArray([
        networkError
      ], graphQLErrors || [], true), protocolErrors || [], true), clientErrors || [], true).find(function(e) {
        return !!e;
      }) || null;
      _this.__proto__ = ApolloError2.prototype;
      return _this;
    }
    return ApolloError2;
  }(Error)
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var hasOwnProperty4 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, nextValue) {
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _a2, value, done, chunk, searchFrom, bi, message, i, headers, contentType_1, body, result2, next;
    var _b, _c;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_d = response.headers) === null || _d === void 0 ? void 0 : _d.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "\r\n--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _e.label = 1;
        case 1:
          if (!running)
            return [3, 3];
          return [4, iterator.next()];
        case 2:
          _a2 = _e.sent(), value = _a2.value, done = _a2.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          searchFrom = buffer.length - boundary.length + 1;
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary, searchFrom);
          while (bi > -1) {
            message = void 0;
            _b = [
              buffer.slice(0, bi),
              buffer.slice(bi + boundary.length)
            ], message = _b[0], buffer = _b[1];
            i = message.indexOf("\r\n\r\n");
            headers = parseHeaders(message.slice(0, i));
            contentType_1 = headers["content-type"];
            if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
              throw new Error("Unsupported patch content type: application/json is required.");
            }
            body = message.slice(i);
            if (body) {
              result2 = parseJsonBody(response, body);
              if (Object.keys(result2).length > 1 || "data" in result2 || "incremental" in result2 || "errors" in result2 || "payload" in result2) {
                if (isApolloPayloadResult(result2)) {
                  next = {};
                  if ("payload" in result2) {
                    if (Object.keys(result2).length === 1 && result2.payload === null) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    next = __assign({}, result2.payload);
                  }
                  if ("errors" in result2) {
                    next = __assign(__assign({}, next), { extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_c = {}, _c[PROTOCOL_ERRORS_SYMBOL] = result2.errors, _c)) });
                  }
                  nextValue(next);
                } else {
                  nextValue(result2);
                }
              } else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(result2).length === 1 && "hasNext" in result2 && !result2.hasNext
              ) {
                return [
                  2
                  /*return*/
                ];
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i = line.indexOf(":");
    if (i > -1) {
      var name_1 = line.slice(0, i).trim().toLowerCase();
      var value = line.slice(i + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  if (err.result && err.result.errors && err.result.data) {
    observer.next(err.result);
  }
  observer.error(err);
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result2) {
      if (!Array.isArray(result2) && !hasOwnProperty4.call(result2, "data") && !hasOwnProperty4.call(result2, "errors")) {
        throwServerError(response, result2, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result2;
    });
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/serializeFetchParameter.js
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = newInvariantError(42, label, e.message);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBody(operation, fallbackConfig) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  configs.unshift(fallbackConfig);
  return selectHttpOptionsAndBodyInternal.apply(void 0, __spreadArray([
    operation,
    defaultPrinter
  ], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), config.headers) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  if (options.headers) {
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
  }
  var operationName2 = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName: operationName2, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print2);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = {};
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = {};
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = {
      originalName: name,
      value: headers[name]
    };
  });
  var normalizedHeaders = {};
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/checkFetcher.js
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw newInvariantError(40);
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/createSignalIfSupported.js
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/selectURI.js
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/rewriteURIForGET.js
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/createHttpLink.js
var backupFetch = maybe(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print3 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  if (globalThis.__DEV__ !== false) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions, preserveHeaderCase },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    if (hasDirectives(["client"], operation.query)) {
      var transformedQuery = removeClientSetsFromDocument(operation.query);
      if (!transformedQuery) {
        return fromError(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      }
      operation.query = transformedQuery;
    }
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print3, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      body.variables = filterOperationVariables(body.variables, operation.query);
    }
    var controller;
    if (!options.signal && typeof AbortController !== "undefined") {
      controller = new AbortController();
      options.signal = controller.signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    var definitionIsSubscription = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "subscription";
    };
    var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
    var hasDefer = hasDirectives(["defer"], operation.query);
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDefer || isSubscription) {
      options.headers = options.headers || {};
      var acceptHeader = "multipart/mixed;";
      if (isSubscription && hasDefer) {
        globalThis.__DEV__ !== false && invariant2.warn(41);
      }
      if (isSubscription) {
        acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
      } else if (hasDefer) {
        acceptHeader += "deferSpec=20220824,application/json";
      }
      options.headers.accept = acceptHeader;
    }
    if (options.method === "GET") {
      var _c2 = rewriteURIForGET(chosenURI, body), newURI = _c2.newURI, parseError = _c2.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe(function() {
        return fetch;
      }) || backupFetch;
      var observerNext = observer.next.bind(observer);
      currentFetch(chosenURI, options).then(function(response) {
        var _a4;
        operation.setContext({ response });
        var ctype = (_a4 = response.headers) === null || _a4 === void 0 ? void 0 : _a4.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observerNext);
        } else {
          return parseAndCheckHttpResponse(operation)(response).then(observerNext);
        }
      }).then(function() {
        controller = void 0;
        observer.complete();
      }).catch(function(err) {
        controller = void 0;
        handleError(err, observer);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/link/http/HttpLink.js
var HttpLink = (
  /** @class */
  function(_super) {
    __extends(HttpLink2, _super);
    function HttpLink2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, createHttpLink(options).request) || this;
      _this.options = options;
      return _this;
    }
    return HttpLink2;
  }(ApolloLink)
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@wry/equality/lib/index.js
var { toString: toString2, hasOwnProperty: hasOwnProperty5 } = Object.prototype;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
var lib_default = equal;
function check(a, b) {
  if (a === b) {
    return true;
  }
  const aTag = toString2.call(a);
  const bTag = toString2.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a, b))
        return true;
      const aKeys = definedKeys(a);
      const bKeys = definedKeys(b);
      const keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (let k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty5.call(b, aKeys[k])) {
          return false;
        }
      }
      for (let k = 0; k < keyCount; ++k) {
        const key = aKeys[k];
        if (!check(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a)
        return b !== b;
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == `${b}`;
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size)
        return false;
      if (previouslyCompared(a, b))
        return true;
      const aIterator = a.entries();
      const isMap = aTag === "[object Map]";
      while (true) {
        const info = aIterator.next();
        if (info.done)
          break;
        const [aKey, aValue] = info.value;
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case "[object DataView]": {
      let len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  const fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  let bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/equalByQuery.js
function equalByQuery(query, _a2, _b, variables) {
  var aData = _a2.data, aRest = __rest(_a2, ["data"]);
  var bData = _b.data, bRest = __rest(_b, ["data"]);
  return lib_default(aRest, bRest) && equalBySelectionSet(getMainDefinition(query).selectionSet, aData, bData, {
    fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
    variables
  });
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
  if (aResult === bResult) {
    return true;
  }
  var seenSelections = /* @__PURE__ */ new Set();
  return selectionSet.selections.every(function(selection) {
    if (seenSelections.has(selection))
      return true;
    seenSelections.add(selection);
    if (!shouldInclude(selection, context.variables))
      return true;
    if (selectionHasNonreactiveDirective(selection))
      return true;
    if (isField(selection)) {
      var resultKey = resultKeyNameFromField(selection);
      var aResultChild = aResult && aResult[resultKey];
      var bResultChild = bResult && bResult[resultKey];
      var childSelectionSet = selection.selectionSet;
      if (!childSelectionSet) {
        return lib_default(aResultChild, bResultChild);
      }
      var aChildIsArray = Array.isArray(aResultChild);
      var bChildIsArray = Array.isArray(bResultChild);
      if (aChildIsArray !== bChildIsArray)
        return false;
      if (aChildIsArray && bChildIsArray) {
        var length_1 = aResultChild.length;
        if (bResultChild.length !== length_1) {
          return false;
        }
        for (var i = 0; i < length_1; ++i) {
          if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
            return false;
          }
        }
        return true;
      }
      return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
    } else {
      var fragment = getFragmentFromSelection(selection, context.fragmentMap);
      if (fragment) {
        if (selectionHasNonreactiveDirective(fragment))
          return true;
        return equalBySelectionSet(
          fragment.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          aResult,
          bResult,
          context
        );
      }
    }
  });
}
function selectionHasNonreactiveDirective(selection) {
  return !!selection.directives && selection.directives.some(directiveIsNonreactive);
}
function directiveIsNonreactive(dir) {
  return dir.name.value === "nonreactive";
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/masking/utils.js
var MapImpl = canUseWeakMap ? WeakMap : Map;
var SetImpl = canUseWeakSet ? WeakSet : Set;
var disableWarningsSlot = new Slot();
var issuedWarning = false;
function warnOnImproperCacheImplementation() {
  if (!issuedWarning) {
    issuedWarning = true;
    globalThis.__DEV__ !== false && invariant2.warn(52);
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/masking/maskDefinition.js
function maskDefinition(data, selectionSet, context) {
  return disableWarningsSlot.withValue(true, function() {
    var masked = maskSelectionSet(data, selectionSet, context, false);
    if (Object.isFrozen(data)) {
      maybeDeepFreeze(masked);
    }
    return masked;
  });
}
function getMutableTarget(data, mutableTargets) {
  if (mutableTargets.has(data)) {
    return mutableTargets.get(data);
  }
  var mutableTarget = Array.isArray(data) ? [] : /* @__PURE__ */ Object.create(null);
  mutableTargets.set(data, mutableTarget);
  return mutableTarget;
}
function maskSelectionSet(data, selectionSet, context, migration, path) {
  var _a2;
  var knownChanged = context.knownChanged;
  var memo = getMutableTarget(data, context.mutableTargets);
  if (Array.isArray(data)) {
    for (var _i = 0, _b = Array.from(data.entries()); _i < _b.length; _i++) {
      var _c = _b[_i], index = _c[0], item = _c[1];
      if (item === null) {
        memo[index] = null;
        continue;
      }
      var masked = maskSelectionSet(item, selectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", "[").concat(index, "]") : void 0);
      if (knownChanged.has(masked)) {
        knownChanged.add(memo);
      }
      memo[index] = masked;
    }
    return knownChanged.has(memo) ? memo : data;
  }
  for (var _d = 0, _e = selectionSet.selections; _d < _e.length; _d++) {
    var selection = _e[_d];
    var value = void 0;
    if (migration) {
      knownChanged.add(memo);
    }
    if (selection.kind === Kind.FIELD) {
      var keyName = resultKeyNameFromField(selection);
      var childSelectionSet = selection.selectionSet;
      value = memo[keyName] || data[keyName];
      if (value === void 0) {
        continue;
      }
      if (childSelectionSet && value !== null) {
        var masked = maskSelectionSet(data[keyName], childSelectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", ".").concat(keyName) : void 0);
        if (knownChanged.has(masked)) {
          value = masked;
        }
      }
      if (!(globalThis.__DEV__ !== false)) {
        memo[keyName] = value;
      }
      if (globalThis.__DEV__ !== false) {
        if (migration && keyName !== "__typename" && // either the field is not present in the memo object
        // or it has a `get` descriptor, not a `value` descriptor
        // => it is a warning accessor and we can overwrite it
        // with another accessor
        !((_a2 = Object.getOwnPropertyDescriptor(memo, keyName)) === null || _a2 === void 0 ? void 0 : _a2.value)) {
          Object.defineProperty(memo, keyName, getAccessorWarningDescriptor(keyName, value, path || "", context.operationName, context.operationType));
        } else {
          delete memo[keyName];
          memo[keyName] = value;
        }
      }
    }
    if (selection.kind === Kind.INLINE_FRAGMENT && (!selection.typeCondition || context.cache.fragmentMatches(selection, data.__typename))) {
      value = maskSelectionSet(data, selection.selectionSet, context, migration, path);
    }
    if (selection.kind === Kind.FRAGMENT_SPREAD) {
      var fragmentName = selection.name.value;
      var fragment = context.fragmentMap[fragmentName] || (context.fragmentMap[fragmentName] = context.cache.lookupFragment(fragmentName));
      invariant2(fragment, 47, fragmentName);
      var mode = getFragmentMaskMode(selection);
      if (mode !== "mask") {
        value = maskSelectionSet(data, fragment.selectionSet, context, mode === "migrate", path);
      }
    }
    if (knownChanged.has(value)) {
      knownChanged.add(memo);
    }
  }
  if ("__typename" in data && !("__typename" in memo)) {
    memo.__typename = data.__typename;
  }
  if (Object.keys(memo).length !== Object.keys(data).length) {
    knownChanged.add(memo);
  }
  return knownChanged.has(memo) ? memo : data;
}
function getAccessorWarningDescriptor(fieldName, value, path, operationName2, operationType) {
  var getValue = function() {
    if (disableWarningsSlot.getValue()) {
      return value;
    }
    globalThis.__DEV__ !== false && invariant2.warn(48, operationName2 ? "".concat(operationType, " '").concat(operationName2, "'") : "anonymous ".concat(operationType), "".concat(path, ".").concat(fieldName).replace(/^\./, ""));
    getValue = function() {
      return value;
    };
    return value;
  };
  return {
    get: function() {
      return getValue();
    },
    set: function(newValue) {
      getValue = function() {
        return newValue;
      };
    },
    enumerable: true,
    configurable: true
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/masking/maskFragment.js
function maskFragment(data, document, cache2, fragmentName) {
  if (!cache2.fragmentMatches) {
    if (globalThis.__DEV__ !== false) {
      warnOnImproperCacheImplementation();
    }
    return data;
  }
  var fragments = document.definitions.filter(function(node) {
    return node.kind === Kind.FRAGMENT_DEFINITION;
  });
  if (typeof fragmentName === "undefined") {
    invariant2(fragments.length === 1, 49, fragments.length);
    fragmentName = fragments[0].name.value;
  }
  var fragment = fragments.find(function(fragment2) {
    return fragment2.name.value === fragmentName;
  });
  invariant2(!!fragment, 50, fragmentName);
  if (data == null) {
    return data;
  }
  if (lib_default(data, {})) {
    return data;
  }
  return maskDefinition(data, fragment.selectionSet, {
    operationType: "fragment",
    operationName: fragment.name.value,
    fragmentMap: createFragmentMap(getFragmentDefinitions(document)),
    cache: cache2,
    mutableTargets: new MapImpl(),
    knownChanged: new SetImpl()
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/masking/maskOperation.js
function maskOperation(data, document, cache2) {
  var _a2;
  if (!cache2.fragmentMatches) {
    if (globalThis.__DEV__ !== false) {
      warnOnImproperCacheImplementation();
    }
    return data;
  }
  var definition = getOperationDefinition(document);
  invariant2(definition, 51);
  if (data == null) {
    return data;
  }
  return maskDefinition(data, definition.selectionSet, {
    operationType: definition.operation,
    operationName: (_a2 = definition.name) === null || _a2 === void 0 ? void 0 : _a2.value,
    fragmentMap: createFragmentMap(getFragmentDefinitions(document)),
    cache: cache2,
    mutableTargets: new MapImpl(),
    knownChanged: new SetImpl()
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/core/cache.js
var ApolloCache = (
  /** @class */
  function() {
    function ApolloCache2() {
      this.assumeImmutableResults = false;
      this.getFragmentDoc = wrap2(getFragmentQueryDocument, {
        max: cacheSizes["cache.fragmentQueryDocuments"] || 1e3,
        cache: WeakCache
      });
    }
    ApolloCache2.prototype.lookupFragment = function(fragmentName) {
      return null;
    };
    ApolloCache2.prototype.batch = function(options) {
      var _this = this;
      var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
      var updateResult;
      this.performTransaction(function() {
        return updateResult = options.update(_this);
      }, optimisticId);
      return updateResult;
    };
    ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
      this.performTransaction(transaction, optimisticId);
    };
    ApolloCache2.prototype.transformDocument = function(document) {
      return document;
    };
    ApolloCache2.prototype.transformForLink = function(document) {
      return document;
    };
    ApolloCache2.prototype.identify = function(object) {
      return;
    };
    ApolloCache2.prototype.gc = function() {
      return [];
    };
    ApolloCache2.prototype.modify = function(options) {
      return false;
    };
    ApolloCache2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
    };
    ApolloCache2.prototype.watchFragment = function(options) {
      var _this = this;
      var fragment = options.fragment, fragmentName = options.fragmentName, from2 = options.from, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, otherOptions = __rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
      var query = this.getFragmentDoc(fragment, fragmentName);
      var id = typeof from2 === "undefined" || typeof from2 === "string" ? from2 : this.identify(from2);
      var dataMasking = !!options[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== false) {
        var actualFragmentName = fragmentName || getFragmentDefinition(fragment).name.value;
        if (!id) {
          globalThis.__DEV__ !== false && invariant2.warn(1, actualFragmentName);
        }
      }
      var diffOptions = __assign(__assign({}, otherOptions), { returnPartialData: true, id, query, optimistic });
      var latestDiff;
      return new Observable(function(observer) {
        return _this.watch(__assign(__assign({}, diffOptions), { immediate: true, callback: function(diff) {
          var data = dataMasking ? maskFragment(diff.result, fragment, _this, fragmentName) : diff.result;
          if (
            // Always ensure we deliver the first result
            latestDiff && equalByQuery(query, { data: latestDiff === null || latestDiff === void 0 ? void 0 : latestDiff.result }, { data })
          ) {
            return;
          }
          var result2 = {
            data,
            complete: !!diff.complete
          };
          if (diff.missing) {
            result2.missing = mergeDeepArray(diff.missing.map(function(error) {
              return error.missing;
            }));
          }
          latestDiff = __assign(__assign({}, diff), { result: data });
          observer.next(result2);
        } }));
      });
    };
    ApolloCache2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
    };
    ApolloCache2.prototype.writeQuery = function(_a2) {
      var id = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
      return this.write(Object.assign(options, {
        dataId: id || "ROOT_QUERY",
        result: data
      }));
    };
    ApolloCache2.prototype.writeFragment = function(_a2) {
      var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(options, {
        query: this.getFragmentDoc(fragment, fragmentName),
        dataId: id,
        result: data
      }));
    };
    ApolloCache2.prototype.updateQuery = function(options, update) {
      return this.batch({
        update: function(cache2) {
          var value = cache2.readQuery(options);
          var data = update(value);
          if (data === void 0 || data === null)
            return value;
          cache2.writeQuery(__assign(__assign({}, options), { data }));
          return data;
        }
      });
    };
    ApolloCache2.prototype.updateFragment = function(options, update) {
      return this.batch({
        update: function(cache2) {
          var value = cache2.readFragment(options);
          var data = update(value);
          if (data === void 0 || data === null)
            return value;
          cache2.writeFragment(__assign(__assign({}, options), { data }));
          return data;
        }
      });
    };
    return ApolloCache2;
  }()
);
if (globalThis.__DEV__ !== false) {
  ApolloCache.prototype.getMemoryInternals = getApolloCacheMemoryInternals;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/core/types/Cache.js
var Cache;
/* @__PURE__ */ (function(Cache2) {
})(Cache || (Cache = {}));

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/core/types/common.js
var MissingFieldError = (
  /** @class */
  function(_super) {
    __extends(MissingFieldError2, _super);
    function MissingFieldError2(message, path, query, variables) {
      var _a2;
      var _this = _super.call(this, message) || this;
      _this.message = message;
      _this.path = path;
      _this.query = query;
      _this.variables = variables;
      if (Array.isArray(_this.path)) {
        _this.missing = _this.message;
        for (var i = _this.path.length - 1; i >= 0; --i) {
          _this.missing = (_a2 = {}, _a2[_this.path[i]] = _this.missing, _a2);
        }
      } else {
        _this.missing = _this.path;
      }
      _this.__proto__ = MissingFieldError2.prototype;
      return _this;
    }
    return MissingFieldError2;
  }(Error)
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/helpers.js
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? { id } : !isNullish(_id) ? { _id } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result2, variables) {
  if (isNonNullObject(result2)) {
    return isArray(result2) ? result2.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result2, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result2[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/entityStore.js
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = (
  /** @class */
  function() {
    function EntityStore2(policies, group) {
      var _this = this;
      this.policies = policies;
      this.group = group;
      this.data = /* @__PURE__ */ Object.create(null);
      this.rootIds = /* @__PURE__ */ Object.create(null);
      this.refs = /* @__PURE__ */ Object.create(null);
      this.getFieldValue = function(objectOrReference, storeFieldName) {
        return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
      };
      this.canRead = function(objOrRef) {
        return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
      };
      this.toReference = function(objOrIdOrRef, mergeIntoStore) {
        if (typeof objOrIdOrRef === "string") {
          return makeReference(objOrIdOrRef);
        }
        if (isReference(objOrIdOrRef)) {
          return objOrIdOrRef;
        }
        var id = _this.policies.identify(objOrIdOrRef)[0];
        if (id) {
          var ref = makeReference(id);
          if (mergeIntoStore) {
            _this.merge(id, objOrIdOrRef);
          }
          return ref;
        }
      };
    }
    EntityStore2.prototype.toObject = function() {
      return __assign({}, this.data);
    };
    EntityStore2.prototype.has = function(dataId) {
      return this.lookup(dataId, true) !== void 0;
    };
    EntityStore2.prototype.get = function(dataId, fieldName) {
      this.group.depend(dataId, fieldName);
      if (hasOwn.call(this.data, dataId)) {
        var storeObject = this.data[dataId];
        if (storeObject && hasOwn.call(storeObject, fieldName)) {
          return storeObject[fieldName];
        }
      }
      if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
        return this.policies.rootTypenamesById[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.get(dataId, fieldName);
      }
    };
    EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
      if (dependOnExistence)
        this.group.depend(dataId, "__exists");
      if (hasOwn.call(this.data, dataId)) {
        return this.data[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.lookup(dataId, dependOnExistence);
      }
      if (this.policies.rootTypenamesById[dataId]) {
        return /* @__PURE__ */ Object.create(null);
      }
    };
    EntityStore2.prototype.merge = function(older, newer) {
      var _this = this;
      var dataId;
      if (isReference(older))
        older = older.__ref;
      if (isReference(newer))
        newer = newer.__ref;
      var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
      var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
      if (!incoming)
        return;
      invariant2(typeof dataId === "string", 2);
      var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
      this.data[dataId] = merged;
      if (merged !== existing) {
        delete this.refs[dataId];
        if (this.group.caching) {
          var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
          if (!existing)
            fieldsToDirty_1.__exists = 1;
          Object.keys(incoming).forEach(function(storeFieldName) {
            if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
              fieldsToDirty_1[storeFieldName] = 1;
              var fieldName = fieldNameFromStoreName(storeFieldName);
              if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                fieldsToDirty_1[fieldName] = 1;
              }
              if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                delete merged[storeFieldName];
              }
            }
          });
          if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[dataId] === merged.__typename) {
            delete fieldsToDirty_1.__typename;
          }
          Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
            return _this.group.dirty(dataId, fieldName);
          });
        }
      }
    };
    EntityStore2.prototype.modify = function(dataId, fields) {
      var _this = this;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var changedFields_1 = /* @__PURE__ */ Object.create(null);
        var needToMerge_1 = false;
        var allDeleted_1 = true;
        var sharedDetails_1 = {
          DELETE,
          INVALIDATE,
          isReference,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(fieldNameOrOptions, from2) {
            return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
              fieldName: fieldNameOrOptions,
              from: from2 || makeReference(dataId)
            } : fieldNameOrOptions, { store: _this });
          }
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          var fieldName = fieldNameFromStoreName(storeFieldName);
          var fieldValue = storeObject[storeFieldName];
          if (fieldValue === void 0)
            return;
          var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
          if (modify) {
            var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
            if (newValue === INVALIDATE) {
              _this.group.dirty(dataId, storeFieldName);
            } else {
              if (newValue === DELETE)
                newValue = void 0;
              if (newValue !== fieldValue) {
                changedFields_1[storeFieldName] = newValue;
                needToMerge_1 = true;
                fieldValue = newValue;
                if (globalThis.__DEV__ !== false) {
                  var checkReference = function(ref) {
                    if (_this.lookup(ref.__ref) === void 0) {
                      globalThis.__DEV__ !== false && invariant2.warn(3, ref);
                      return true;
                    }
                  };
                  if (isReference(newValue)) {
                    checkReference(newValue);
                  } else if (Array.isArray(newValue)) {
                    var seenReference = false;
                    var someNonReference = void 0;
                    for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                      var value = newValue_1[_i];
                      if (isReference(value)) {
                        seenReference = true;
                        if (checkReference(value))
                          break;
                      } else {
                        if (typeof value === "object" && !!value) {
                          var id = _this.policies.identify(value)[0];
                          if (id) {
                            someNonReference = value;
                          }
                        }
                      }
                      if (seenReference && someNonReference !== void 0) {
                        globalThis.__DEV__ !== false && invariant2.warn(4, someNonReference);
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          if (fieldValue !== void 0) {
            allDeleted_1 = false;
          }
        });
        if (needToMerge_1) {
          this.merge(dataId, changedFields_1);
          if (allDeleted_1) {
            if (this instanceof Layer) {
              this.data[dataId] = void 0;
            } else {
              delete this.data[dataId];
            }
            this.group.dirty(dataId, "__exists");
          }
          return true;
        }
      }
      return false;
    };
    EntityStore2.prototype.delete = function(dataId, fieldName, args) {
      var _a2;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var typename = this.getFieldValue(storeObject, "__typename");
        var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
        return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
      }
      return false;
    };
    EntityStore2.prototype.evict = function(options, limit) {
      var evicted = false;
      if (options.id) {
        if (hasOwn.call(this.data, options.id)) {
          evicted = this.delete(options.id, options.fieldName, options.args);
        }
        if (this instanceof Layer && this !== limit) {
          evicted = this.parent.evict(options, limit) || evicted;
        }
        if (options.fieldName || evicted) {
          this.group.dirty(options.id, options.fieldName || "__exists");
        }
      }
      return evicted;
    };
    EntityStore2.prototype.clear = function() {
      this.replace(null);
    };
    EntityStore2.prototype.extract = function() {
      var _this = this;
      var obj = this.toObject();
      var extraRootIds = [];
      this.getRootIdSet().forEach(function(id) {
        if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
          extraRootIds.push(id);
        }
      });
      if (extraRootIds.length) {
        obj.__META = { extraRootIds: extraRootIds.sort() };
      }
      return obj;
    };
    EntityStore2.prototype.replace = function(newData) {
      var _this = this;
      Object.keys(this.data).forEach(function(dataId) {
        if (!(newData && hasOwn.call(newData, dataId))) {
          _this.delete(dataId);
        }
      });
      if (newData) {
        var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
        Object.keys(rest_1).forEach(function(dataId) {
          _this.merge(dataId, rest_1[dataId]);
        });
        if (__META) {
          __META.extraRootIds.forEach(this.retain, this);
        }
      }
    };
    EntityStore2.prototype.retain = function(rootId) {
      return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore2.prototype.release = function(rootId) {
      if (this.rootIds[rootId] > 0) {
        var count = --this.rootIds[rootId];
        if (!count)
          delete this.rootIds[rootId];
        return count;
      }
      return 0;
    };
    EntityStore2.prototype.getRootIdSet = function(ids) {
      if (ids === void 0) {
        ids = /* @__PURE__ */ new Set();
      }
      Object.keys(this.rootIds).forEach(ids.add, ids);
      if (this instanceof Layer) {
        this.parent.getRootIdSet(ids);
      } else {
        Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
      }
      return ids;
    };
    EntityStore2.prototype.gc = function() {
      var _this = this;
      var ids = this.getRootIdSet();
      var snapshot = this.toObject();
      ids.forEach(function(id) {
        if (hasOwn.call(snapshot, id)) {
          Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
          delete snapshot[id];
        }
      });
      var idsToRemove = Object.keys(snapshot);
      if (idsToRemove.length) {
        var root_1 = this;
        while (root_1 instanceof Layer)
          root_1 = root_1.parent;
        idsToRemove.forEach(function(id) {
          return root_1.delete(id);
        });
      }
      return idsToRemove;
    };
    EntityStore2.prototype.findChildRefIds = function(dataId) {
      if (!hasOwn.call(this.refs, dataId)) {
        var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
        var root2 = this.data[dataId];
        if (!root2)
          return found_1;
        var workSet_1 = /* @__PURE__ */ new Set([root2]);
        workSet_1.forEach(function(obj) {
          if (isReference(obj)) {
            found_1[obj.__ref] = true;
          }
          if (isNonNullObject(obj)) {
            Object.keys(obj).forEach(function(key) {
              var child = obj[key];
              if (isNonNullObject(child)) {
                workSet_1.add(child);
              }
            });
          }
        });
      }
      return this.refs[dataId];
    };
    EntityStore2.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore2;
  }()
);
var CacheGroup = (
  /** @class */
  function() {
    function CacheGroup2(caching, parent) {
      if (parent === void 0) {
        parent = null;
      }
      this.caching = caching;
      this.parent = parent;
      this.d = null;
      this.resetCaching();
    }
    CacheGroup2.prototype.resetCaching = function() {
      this.d = this.caching ? dep() : null;
      this.keyMaker = new Trie(canUseWeakMap);
    };
    CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
      if (this.d) {
        this.d(makeDepKey(dataId, storeFieldName));
        var fieldName = fieldNameFromStoreName(storeFieldName);
        if (fieldName !== storeFieldName) {
          this.d(makeDepKey(dataId, fieldName));
        }
        if (this.parent) {
          this.parent.depend(dataId, storeFieldName);
        }
      }
    };
    CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
      if (this.d) {
        this.d.dirty(
          makeDepKey(dataId, storeFieldName),
          // When storeFieldName === "__exists", that means the entity identified
          // by dataId has either disappeared from the cache or was newly added,
          // so the result caching system would do well to "forget everything it
          // knows" about that object. To achieve that kind of invalidation, we
          // not only dirty the associated result cache entry, but also remove it
          // completely from the dependency graph. For the optimism implementation
          // details, see https://github.com/benjamn/optimism/pull/195.
          storeFieldName === "__exists" ? "forget" : "setDirty"
        );
      }
    };
    return CacheGroup2;
  }()
);
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = (
    /** @class */
    function(_super) {
      __extends(Root2, _super);
      function Root2(_a2) {
        var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
        var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
        _this.stump = new Stump(_this);
        _this.storageTrie = new Trie(canUseWeakMap);
        if (seed)
          _this.replace(seed);
        return _this;
      }
      Root2.prototype.addLayer = function(layerId, replay) {
        return this.stump.addLayer(layerId, replay);
      };
      Root2.prototype.removeLayer = function() {
        return this;
      };
      Root2.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      };
      return Root2;
    }(EntityStore2)
  );
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (
  /** @class */
  function(_super) {
    __extends(Layer2, _super);
    function Layer2(id, parent, replay, group) {
      var _this = _super.call(this, parent.policies, group) || this;
      _this.id = id;
      _this.parent = parent;
      _this.replay = replay;
      _this.group = group;
      replay(_this);
      return _this;
    }
    Layer2.prototype.addLayer = function(layerId, replay) {
      return new Layer2(layerId, this, replay, this.group);
    };
    Layer2.prototype.removeLayer = function(layerId) {
      var _this = this;
      var parent = this.parent.removeLayer(layerId);
      if (layerId === this.id) {
        if (this.group.caching) {
          Object.keys(this.data).forEach(function(dataId) {
            var ownStoreObject = _this.data[dataId];
            var parentStoreObject = parent["lookup"](dataId);
            if (!parentStoreObject) {
              _this.delete(dataId);
            } else if (!ownStoreObject) {
              _this.group.dirty(dataId, "__exists");
              Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                _this.group.dirty(dataId, storeFieldName);
              });
            } else if (ownStoreObject !== parentStoreObject) {
              Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                  _this.group.dirty(dataId, storeFieldName);
                }
              });
            }
          });
        }
        return parent;
      }
      if (parent === this.parent)
        return this;
      return parent.addLayer(this.id, this.replay);
    };
    Layer2.prototype.toObject = function() {
      return __assign(__assign({}, this.parent.toObject()), this.data);
    };
    Layer2.prototype.findChildRefIds = function(dataId) {
      var fromParent = this.parent.findChildRefIds(dataId);
      return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer2.prototype.getStorage = function() {
      var p = this.parent;
      while (p.parent)
        p = p.parent;
      return p.getStorage.apply(
        p,
        // @ts-expect-error
        arguments
      );
    };
    return Layer2;
  }(EntityStore)
);
var Stump = (
  /** @class */
  function(_super) {
    __extends(Stump2, _super);
    function Stump2(root2) {
      return _super.call(this, "EntityStore.Stump", root2, function() {
      }, new CacheGroup(root2.group.caching, root2.group)) || this;
    }
    Stump2.prototype.removeLayer = function() {
      return this;
    };
    Stump2.prototype.merge = function(older, newer) {
      return this.parent.merge(older, newer);
    };
    return Stump2;
  }(Layer)
);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/object-canon.js
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = (
  /** @class */
  function() {
    function ObjectCanon2() {
      this.known = new (canUseWeakSet ? WeakSet : Set)();
      this.pool = new Trie(canUseWeakMap);
      this.passes = /* @__PURE__ */ new WeakMap();
      this.keysByJSON = /* @__PURE__ */ new Map();
      this.empty = this.admit({});
    }
    ObjectCanon2.prototype.isKnown = function(value) {
      return isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon2.prototype.pass = function(value) {
      if (isNonNullObject(value)) {
        var copy = shallowCopy(value);
        this.passes.set(copy, value);
        return copy;
      }
      return value;
    };
    ObjectCanon2.prototype.admit = function(value) {
      var _this = this;
      if (isNonNullObject(value)) {
        var original = this.passes.get(value);
        if (original)
          return original;
        var proto = Object.getPrototypeOf(value);
        switch (proto) {
          case Array.prototype: {
            if (this.known.has(value))
              return value;
            var array = value.map(this.admit, this);
            var node = this.pool.lookupArray(array);
            if (!node.array) {
              this.known.add(node.array = array);
              if (globalThis.__DEV__ !== false) {
                Object.freeze(array);
              }
            }
            return node.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(value))
              return value;
            var proto_1 = Object.getPrototypeOf(value);
            var array_1 = [proto_1];
            var keys = this.sortedKeys(value);
            array_1.push(keys.json);
            var firstValueIndex_1 = array_1.length;
            keys.sorted.forEach(function(key) {
              array_1.push(_this.admit(value[key]));
            });
            var node = this.pool.lookupArray(array_1);
            if (!node.object) {
              var obj_1 = node.object = Object.create(proto_1);
              this.known.add(obj_1);
              keys.sorted.forEach(function(key, i) {
                obj_1[key] = array_1[firstValueIndex_1 + i];
              });
              if (globalThis.__DEV__ !== false) {
                Object.freeze(obj_1);
              }
            }
            return node.object;
          }
        }
      }
      return value;
    };
    ObjectCanon2.prototype.sortedKeys = function(obj) {
      var keys = Object.keys(obj);
      var node = this.pool.lookupArray(keys);
      if (!node.keys) {
        keys.sort();
        var json = JSON.stringify(keys);
        if (!(node.keys = this.keysByJSON.get(json))) {
          this.keysByJSON.set(json, node.keys = { sorted: keys, json });
        }
      }
      return node.keys;
    };
    return ObjectCanon2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/readFromStore.js
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    options.context.canonizeResults
  ];
}
var StoreReader = (
  /** @class */
  function() {
    function StoreReader2(config) {
      var _this = this;
      this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
      this.config = compact(config, {
        addTypename: config.addTypename !== false,
        canonizeResults: shouldCanonizeResults(config)
      });
      this.canon = config.canon || new ObjectCanon();
      this.executeSelectionSet = wrap2(function(options) {
        var _a2;
        var canonizeResults = options.context.canonizeResults;
        var peekArgs = execSelectionSetKeyArgs(options);
        peekArgs[3] = !canonizeResults;
        var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
        if (other) {
          if (canonizeResults) {
            return __assign(__assign({}, other), {
              // If we previously read this result without canonizing it, we can
              // reuse that result simply by canonizing it now.
              result: _this.canon.admit(other.result)
            });
          }
          return other;
        }
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSelectionSetImpl(options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: execSelectionSetKeyArgs,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
          }
        }
      });
      this.executeSubSelectedArray = wrap2(function(options) {
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSubSelectedArrayImpl(options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(_a2) {
          var field = _a2.field, array = _a2.array, context = _a2.context;
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(field, array, context.varString);
          }
        }
      });
    }
    StoreReader2.prototype.resetCanon = function() {
      this.canon = new ObjectCanon();
    };
    StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
      var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
      var policies = this.config.cache.policies;
      variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
      var rootRef = makeReference(rootId);
      var execResult = this.executeSelectionSet({
        selectionSet: getMainDefinition(query).selectionSet,
        objectOrReference: rootRef,
        enclosingRef: rootRef,
        context: __assign({ store, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
      });
      var missing;
      if (execResult.missing) {
        missing = [
          new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)
        ];
        if (!returnPartialData) {
          throw missing[0];
        }
      }
      return {
        result: execResult.result,
        complete: !missing,
        missing
      };
    };
    StoreReader2.prototype.isFresh = function(result2, parent, selectionSet, context) {
      if (supportsResultCaching(context.store) && this.knownResults.get(result2) === selectionSet) {
        var latest = this.executeSelectionSet.peek(
          selectionSet,
          parent,
          context,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(result2)
        );
        if (latest && result2 === latest.result) {
          return true;
        }
      }
      return false;
    };
    StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
      var _this = this;
      var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
      if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
        };
      }
      var variables = context.variables, policies = context.policies, store = context.store;
      var typename = store.getFieldValue(objectOrReference, "__typename");
      var objectsToMerge = [];
      var missing;
      var missingMerger = new DeepMerger();
      if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
        objectsToMerge.push({ __typename: typename });
      }
      function handleMissing(result3, resultName) {
        var _a3;
        if (result3.missing) {
          missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result3.missing, _a3));
        }
        return result3.result;
      }
      var workSet = new Set(selectionSet.selections);
      workSet.forEach(function(selection) {
        var _a3, _b;
        if (!shouldInclude(selection, variables))
          return;
        if (isField(selection)) {
          var fieldValue = policies.readField({
            fieldName: selection.name.value,
            field: selection,
            variables: context.variables,
            from: objectOrReference
          }, context);
          var resultName = resultKeyNameFromField(selection);
          if (fieldValue === void 0) {
            if (!addTypenameToDocument.added(selection)) {
              missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
            }
          } else if (isArray(fieldValue)) {
            if (fieldValue.length > 0) {
              fieldValue = handleMissing(_this.executeSubSelectedArray({
                field: selection,
                array: fieldValue,
                enclosingRef,
                context
              }), resultName);
            }
          } else if (!selection.selectionSet) {
            if (context.canonizeResults) {
              fieldValue = _this.canon.pass(fieldValue);
            }
          } else if (fieldValue != null) {
            fieldValue = handleMissing(_this.executeSelectionSet({
              selectionSet: selection.selectionSet,
              objectOrReference: fieldValue,
              enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
              context
            }), resultName);
          }
          if (fieldValue !== void 0) {
            objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
          }
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw newInvariantError(10, selection.name.value);
          }
          if (fragment && policies.fragmentMatches(fragment, typename)) {
            fragment.selectionSet.selections.forEach(workSet.add, workSet);
          }
        }
      });
      var result2 = mergeDeepArray(objectsToMerge);
      var finalResult = { result: result2, missing };
      var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
      if (frozen.result) {
        this.knownResults.set(frozen.result, selectionSet);
      }
      return frozen;
    };
    StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
      var _this = this;
      var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
      var missing;
      var missingMerger = new DeepMerger();
      function handleMissing(childResult, i) {
        var _a3;
        if (childResult.missing) {
          missing = missingMerger.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
        }
        return childResult.result;
      }
      if (field.selectionSet) {
        array = array.filter(context.store.canRead);
      }
      array = array.map(function(item, i) {
        if (item === null) {
          return null;
        }
        if (isArray(item)) {
          return handleMissing(_this.executeSubSelectedArray({
            field,
            array: item,
            enclosingRef,
            context
          }), i);
        }
        if (field.selectionSet) {
          return handleMissing(_this.executeSelectionSet({
            selectionSet: field.selectionSet,
            objectOrReference: item,
            enclosingRef: isReference(item) ? item : enclosingRef,
            context
          }), i);
        }
        if (globalThis.__DEV__ !== false) {
          assertSelectionSetForIdValue(context.store, field, item);
        }
        return item;
      });
      return {
        result: context.canonizeResults ? this.canon.admit(array) : array,
        missing
      };
    };
    return StoreReader2;
  }()
);
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result2) {
    return result2;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        invariant2(
          !isReference(value),
          11,
          getTypenameFromStoreObject(store, value),
          field.name.value
        );
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache2) {
  var info = cacheInfoMap.get(cache2);
  if (!info) {
    cacheInfoMap.set(cache2, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache2) {
  getCacheInfo(cache2).vars.forEach(function(rv) {
    return rv.forgetCache(cache2);
  });
}
function recallCache(cache2) {
  getCacheInfo(cache2).vars.forEach(function(rv) {
    return rv.attachCache(cache2);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache3) {
          getCacheInfo(cache3).dep.dirty(rv);
          broadcast(cache3);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache2 = cacheSlot.getValue();
      if (cache2) {
        attach(cache2);
        getCacheInfo(cache2).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache2) {
    caches2.add(cache2);
    getCacheInfo(cache2).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache2) {
    return caches2.delete(cache2);
  };
  return rv;
}
function broadcast(cache2) {
  if (cache2.broadcastWatches) {
    cache2.broadcastWatches();
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/key-extractor.js
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from2, key) {
      return context.readField(key, from2);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(
        context.storeObject,
        schemaKeyPath,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        extract
      );
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      invariant2(extracted !== void 0, 5, schemaKeyPath.join("."), object);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(
            directiveArgs,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            keyPath.slice(1)
          );
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a2;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a2 = {}, _a2[path[i]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/policies.js
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = (
  /** @class */
  function() {
    function Policies2(config) {
      this.config = config;
      this.typePolicies = /* @__PURE__ */ Object.create(null);
      this.toBeAdded = /* @__PURE__ */ Object.create(null);
      this.supertypeMap = /* @__PURE__ */ new Map();
      this.fuzzySubtypes = /* @__PURE__ */ new Map();
      this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
      this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
      this.usingPossibleTypes = false;
      this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
      this.cache = this.config.cache;
      this.setRootTypename("Query");
      this.setRootTypename("Mutation");
      this.setRootTypename("Subscription");
      if (config.possibleTypes) {
        this.addPossibleTypes(config.possibleTypes);
      }
      if (config.typePolicies) {
        this.addTypePolicies(config.typePolicies);
      }
    }
    Policies2.prototype.identify = function(object, partialContext) {
      var _a2;
      var policies = this;
      var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
      if (typename === this.rootTypenamesById.ROOT_QUERY) {
        return ["ROOT_QUERY"];
      }
      var storeObject = partialContext && partialContext.storeObject || object;
      var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
        var options = normalizeReadFieldOptions(arguments, storeObject);
        return policies.readField(options, {
          store: policies.cache["data"],
          variables: options.variables
        });
      } });
      var id;
      var policy = typename && this.getTypePolicy(typename);
      var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
      disableWarningsSlot.withValue(true, function() {
        while (keyFn) {
          var specifierOrId = keyFn(__assign(__assign({}, object), storeObject), context);
          if (isArray(specifierOrId)) {
            keyFn = keyFieldsFnFromSpecifier(specifierOrId);
          } else {
            id = specifierOrId;
            break;
          }
        }
      });
      id = id ? String(id) : void 0;
      return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies2.prototype.addTypePolicies = function(typePolicies) {
      var _this = this;
      Object.keys(typePolicies).forEach(function(typename) {
        var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
        if (queryType)
          _this.setRootTypename("Query", typename);
        if (mutationType)
          _this.setRootTypename("Mutation", typename);
        if (subscriptionType)
          _this.setRootTypename("Subscription", typename);
        if (hasOwn.call(_this.toBeAdded, typename)) {
          _this.toBeAdded[typename].push(incoming);
        } else {
          _this.toBeAdded[typename] = [incoming];
        }
      });
    };
    Policies2.prototype.updateTypePolicy = function(typename, incoming) {
      var _this = this;
      var existing = this.getTypePolicy(typename);
      var keyFields = incoming.keyFields, fields = incoming.fields;
      function setMerge(existing2, merge) {
        existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
      }
      setMerge(existing, incoming.merge);
      existing.keyFn = // Pass false to disable normalization for this typename.
      keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
      if (fields) {
        Object.keys(fields).forEach(function(fieldName) {
          var existing2 = _this.getFieldPolicy(typename, fieldName, true);
          var incoming2 = fields[fieldName];
          if (typeof incoming2 === "function") {
            existing2.read = incoming2;
          } else {
            var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
            existing2.keyFn = // Pass false to disable argument-based differentiation of
            // field identities.
            keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
            if (typeof read === "function") {
              existing2.read = read;
            }
            setMerge(existing2, merge);
          }
          if (existing2.read && existing2.merge) {
            existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
          }
        });
      }
    };
    Policies2.prototype.setRootTypename = function(which, typename) {
      if (typename === void 0) {
        typename = which;
      }
      var rootId = "ROOT_" + which.toUpperCase();
      var old = this.rootTypenamesById[rootId];
      if (typename !== old) {
        invariant2(!old || old === which, 6, which);
        if (old)
          delete this.rootIdsByTypename[old];
        this.rootIdsByTypename[typename] = rootId;
        this.rootTypenamesById[rootId] = typename;
      }
    };
    Policies2.prototype.addPossibleTypes = function(possibleTypes) {
      var _this = this;
      this.usingPossibleTypes = true;
      Object.keys(possibleTypes).forEach(function(supertype) {
        _this.getSupertypeSet(supertype, true);
        possibleTypes[supertype].forEach(function(subtype) {
          _this.getSupertypeSet(subtype, true).add(supertype);
          var match = subtype.match(TypeOrFieldNameRegExp);
          if (!match || match[0] !== subtype) {
            _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
          }
        });
      });
    };
    Policies2.prototype.getTypePolicy = function(typename) {
      var _this = this;
      if (!hasOwn.call(this.typePolicies, typename)) {
        var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
        policy_1.fields = /* @__PURE__ */ Object.create(null);
        var supertypes_1 = this.supertypeMap.get(typename);
        if (!supertypes_1 && this.fuzzySubtypes.size) {
          supertypes_1 = this.getSupertypeSet(typename, true);
          this.fuzzySubtypes.forEach(function(regExp, fuzzy) {
            if (regExp.test(typename)) {
              var fuzzySupertypes = _this.supertypeMap.get(fuzzy);
              if (fuzzySupertypes) {
                fuzzySupertypes.forEach(function(supertype) {
                  return supertypes_1.add(supertype);
                });
              }
            }
          });
        }
        if (supertypes_1 && supertypes_1.size) {
          supertypes_1.forEach(function(supertype) {
            var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
            Object.assign(policy_1, rest);
            Object.assign(policy_1.fields, fields);
          });
        }
      }
      var inbox = this.toBeAdded[typename];
      if (inbox && inbox.length) {
        inbox.splice(0).forEach(function(policy) {
          _this.updateTypePolicy(typename, policy);
        });
      }
      return this.typePolicies[typename];
    };
    Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
      if (typename) {
        var fieldPolicies = this.getTypePolicy(typename).fields;
        return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
      }
    };
    Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
      var supertypeSet = this.supertypeMap.get(subtype);
      if (!supertypeSet && createIfMissing) {
        this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
      }
      return supertypeSet;
    };
    Policies2.prototype.fragmentMatches = function(fragment, typename, result2, variables) {
      var _this = this;
      if (!fragment.typeCondition)
        return true;
      if (!typename)
        return false;
      var supertype = fragment.typeCondition.name.value;
      if (typename === supertype)
        return true;
      if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
        var typenameSupertypeSet = this.getSupertypeSet(typename, true);
        var workQueue_1 = [typenameSupertypeSet];
        var maybeEnqueue_1 = function(subtype) {
          var supertypeSet2 = _this.getSupertypeSet(subtype, false);
          if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
            workQueue_1.push(supertypeSet2);
          }
        };
        var needToCheckFuzzySubtypes = !!(result2 && this.fuzzySubtypes.size);
        var checkingFuzzySubtypes = false;
        for (var i = 0; i < workQueue_1.length; ++i) {
          var supertypeSet = workQueue_1[i];
          if (supertypeSet.has(supertype)) {
            if (!typenameSupertypeSet.has(supertype)) {
              if (checkingFuzzySubtypes) {
                globalThis.__DEV__ !== false && invariant2.warn(7, typename, supertype);
              }
              typenameSupertypeSet.add(supertype);
            }
            return true;
          }
          supertypeSet.forEach(maybeEnqueue_1);
          if (needToCheckFuzzySubtypes && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          i === workQueue_1.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          selectionSetMatchesResult(fragment.selectionSet, result2, variables)) {
            needToCheckFuzzySubtypes = false;
            checkingFuzzySubtypes = true;
            this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
              var match = typename.match(regExp);
              if (match && match[0] === typename) {
                maybeEnqueue_1(fuzzyString);
              }
            });
          }
        }
      }
      return false;
    };
    Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName, false);
      return !!(policy && policy.keyFn);
    };
    Policies2.prototype.getStoreFieldName = function(fieldSpec) {
      var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
      var policy = this.getFieldPolicy(typename, fieldName, false);
      var storeFieldName;
      var keyFn = policy && policy.keyFn;
      if (keyFn && typename) {
        var context = {
          typename,
          fieldName,
          field: fieldSpec.field || null,
          variables: fieldSpec.variables
        };
        var args = argsFromFieldSpecifier(fieldSpec);
        while (keyFn) {
          var specifierOrString = keyFn(args, context);
          if (isArray(specifierOrString)) {
            keyFn = keyArgsFnFromSpecifier(specifierOrString);
          } else {
            storeFieldName = specifierOrString || fieldName;
            break;
          }
        }
      }
      if (storeFieldName === void 0) {
        storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
      }
      if (storeFieldName === false) {
        return fieldName;
      }
      return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    };
    Policies2.prototype.readField = function(options, context) {
      var objectOrReference = options.from;
      if (!objectOrReference)
        return;
      var nameOrField = options.field || options.fieldName;
      if (!nameOrField)
        return;
      if (options.typename === void 0) {
        var typename = context.store.getFieldValue(objectOrReference, "__typename");
        if (typename)
          options.typename = typename;
      }
      var storeFieldName = this.getStoreFieldName(options);
      var fieldName = fieldNameFromStoreName(storeFieldName);
      var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
      var policy = this.getFieldPolicy(options.typename, fieldName, false);
      var read = policy && policy.read;
      if (read) {
        var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
        return cacheSlot.withValue(this.cache, read, [
          existing,
          readOptions
        ]);
      }
      return existing;
    };
    Policies2.prototype.getReadFunction = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName, false);
      return policy && policy.read;
    };
    Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
      var policy = this.getFieldPolicy(parentTypename, fieldName, false);
      var merge = policy && policy.merge;
      if (!merge && childTypename) {
        policy = this.getTypePolicy(childTypename);
        merge = policy && policy.merge;
      }
      return merge;
    };
    Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
      var field = _a2.field, typename = _a2.typename, merge = _a2.merge;
      if (merge === mergeTrueFn) {
        return makeMergeObjectsFunction(context.store)(existing, incoming);
      }
      if (merge === mergeFalseFn) {
        return incoming;
      }
      if (context.overwrite) {
        existing = void 0;
      }
      return merge(existing, incoming, makeFieldFunctionOptions(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename,
          fieldName: field.name.value,
          field,
          variables: context.variables
        },
        context,
        storage || /* @__PURE__ */ Object.create(null)
      ));
    };
    return Policies2;
  }()
);
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from2 = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      // Default to objectOrReference only when no second argument was
      // passed for the from parameter, not when undefined is explicitly
      // passed as the second argument.
      from: argc > 1 ? from2 : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (globalThis.__DEV__ !== false && options.from === void 0) {
    globalThis.__DEV__ !== false && invariant2.warn(8, stringifyForDisplay(Array.from(readFieldArgs)));
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw newInvariantError(9);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/writeToStore.js
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = (
  /** @class */
  function() {
    function StoreWriter2(cache2, reader, fragments) {
      this.cache = cache2;
      this.reader = reader;
      this.fragments = fragments;
    }
    StoreWriter2.prototype.writeToStore = function(store, _a2) {
      var _this = this;
      var query = _a2.query, result2 = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
      var operationDefinition = getOperationDefinition(query);
      var merger = makeProcessedFieldsMerger();
      variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
      var context = __assign(__assign({ store, written: /* @__PURE__ */ Object.create(null), merge: function(existing, incoming) {
        return merger.merge(existing, incoming);
      }, variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
      var ref = this.processSelectionSet({
        result: result2 || /* @__PURE__ */ Object.create(null),
        dataId,
        selectionSet: operationDefinition.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context
      });
      if (!isReference(ref)) {
        throw newInvariantError(12, result2);
      }
      context.incomingById.forEach(function(_a3, dataId2) {
        var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
        var entityRef = makeReference(dataId2);
        if (mergeTree && mergeTree.map.size) {
          var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
          if (isReference(applied)) {
            return;
          }
          storeObject = applied;
        }
        if (globalThis.__DEV__ !== false && !context.overwrite) {
          var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
          fieldNodeSet.forEach(function(field) {
            if (field.selectionSet) {
              fieldsWithSelectionSets_1[field.name.value] = true;
            }
          });
          var hasSelectionSet_1 = function(storeFieldName) {
            return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
          };
          var hasMergeFunction_1 = function(storeFieldName) {
            var childTree = mergeTree && mergeTree.map.get(storeFieldName);
            return Boolean(childTree && childTree.info && childTree.info.merge);
          };
          Object.keys(storeObject).forEach(function(storeFieldName) {
            if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
              warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
            }
          });
        }
        store.merge(dataId2, storeObject);
      });
      store.retain(ref.__ref);
      return ref;
    };
    StoreWriter2.prototype.processSelectionSet = function(_a2) {
      var _this = this;
      var dataId = _a2.dataId, result2 = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
      var policies = this.cache.policies;
      var incoming = /* @__PURE__ */ Object.create(null);
      var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result2, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
      if ("string" === typeof typename) {
        incoming.__typename = typename;
      }
      var readField = function() {
        var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
        if (isReference(options.from)) {
          var info = context.incomingById.get(options.from.__ref);
          if (info) {
            var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
            if (result_1 !== void 0) {
              return result_1;
            }
          }
        }
        return policies.readField(options, context);
      };
      var fieldNodeSet = /* @__PURE__ */ new Set();
      this.flattenFields(
        selectionSet,
        result2,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        context,
        typename
      ).forEach(function(context2, field) {
        var _a3;
        var resultFieldKey = resultKeyNameFromField(field);
        var value = result2[resultFieldKey];
        fieldNodeSet.add(field);
        if (value !== void 0) {
          var storeFieldName = policies.getStoreFieldName({
            typename,
            fieldName: field.name.value,
            field,
            variables: context2.variables
          });
          var childTree = getChildMergeTree(mergeTree, storeFieldName);
          var incomingValue = _this.processFieldValue(
            value,
            field,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            field.selectionSet ? getContextFlavor(context2, false, false) : context2,
            childTree
          );
          var childTypename = void 0;
          if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
            childTypename = readField("__typename", incomingValue);
          }
          var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
          if (merge) {
            childTree.info = {
              // TODO Check compatibility against any existing childTree.field?
              field,
              typename,
              merge
            };
          } else {
            maybeRecycleChildMergeTree(mergeTree, storeFieldName);
          }
          incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
        } else if (globalThis.__DEV__ !== false && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !policies.getReadFunction(typename, field.name.value)) {
          globalThis.__DEV__ !== false && invariant2.error(13, resultKeyNameFromField(field), result2);
        }
      });
      try {
        var _b = policies.identify(result2, {
          typename,
          selectionSet,
          fragmentMap: context.fragmentMap,
          storeObject: incoming,
          readField
        }), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if (keyObject) {
          incoming = context.merge(incoming, keyObject);
        }
      } catch (e) {
        if (!dataId)
          throw e;
      }
      if ("string" === typeof dataId) {
        var dataRef = makeReference(dataId);
        var sets = context.written[dataId] || (context.written[dataId] = []);
        if (sets.indexOf(selectionSet) >= 0)
          return dataRef;
        sets.push(selectionSet);
        if (this.reader && this.reader.isFresh(result2, dataRef, selectionSet, context)) {
          return dataRef;
        }
        var previous_1 = context.incomingById.get(dataId);
        if (previous_1) {
          previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
          previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
          fieldNodeSet.forEach(function(field) {
            return previous_1.fieldNodeSet.add(field);
          });
        } else {
          context.incomingById.set(dataId, {
            storeObject: incoming,
            // Save a reference to mergeTree only if it is not empty, because
            // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
            // reused for entirely different parts of the result tree.
            mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
            fieldNodeSet
          });
        }
        return dataRef;
      }
      return incoming;
    };
    StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
      var _this = this;
      if (!field.selectionSet || value === null) {
        return globalThis.__DEV__ !== false ? cloneDeep(value) : value;
      }
      if (isArray(value)) {
        return value.map(function(item, i) {
          var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
          maybeRecycleChildMergeTree(mergeTree, i);
          return value2;
        });
      }
      return this.processSelectionSet({
        result: value,
        selectionSet: field.selectionSet,
        context,
        mergeTree
      });
    };
    StoreWriter2.prototype.flattenFields = function(selectionSet, result2, context, typename) {
      if (typename === void 0) {
        typename = getTypenameFromResult(result2, selectionSet, context.fragmentMap);
      }
      var fieldMap = /* @__PURE__ */ new Map();
      var policies = this.cache.policies;
      var limitingTrie = new Trie(false);
      (function flatten(selectionSet2, inheritedContext) {
        var visitedNode = limitingTrie.lookup(
          selectionSet2,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          inheritedContext.clientOnly,
          inheritedContext.deferred
        );
        if (visitedNode.visited)
          return;
        visitedNode.visited = true;
        selectionSet2.selections.forEach(function(selection) {
          if (!shouldInclude(selection, context.variables))
            return;
          var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
          if (
            // Since the presence of @client or @defer on this field can only
            // cause clientOnly or deferred to become true, we can skip the
            // forEach loop if both clientOnly and deferred are already true.
            !(clientOnly && deferred) && isNonEmptyArray(selection.directives)
          ) {
            selection.directives.forEach(function(dir) {
              var name = dir.name.value;
              if (name === "client")
                clientOnly = true;
              if (name === "defer") {
                var args = argumentsObjectFromField(dir, context.variables);
                if (!args || args.if !== false) {
                  deferred = true;
                }
              }
            });
          }
          if (isField(selection)) {
            var existing = fieldMap.get(selection);
            if (existing) {
              clientOnly = clientOnly && existing.clientOnly;
              deferred = deferred && existing.deferred;
            }
            fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
          } else {
            var fragment = getFragmentFromSelection(selection, context.lookupFragment);
            if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
              throw newInvariantError(14, selection.name.value);
            }
            if (fragment && policies.fragmentMatches(fragment, typename, result2, context.variables)) {
              flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
            }
          }
        });
      })(selectionSet, context);
      return fieldMap;
    };
    StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
      var _a2;
      var _this = this;
      if (mergeTree.map.size && !isReference(incoming)) {
        var e_1 = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !isArray(incoming) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0
        );
        var i_1 = incoming;
        if (e_1 && !getStorageArgs) {
          getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
        }
        var changedFields_1;
        var getValue_1 = function(from2, name) {
          return isArray(from2) ? typeof name === "number" ? from2[name] : void 0 : context.store.getFieldValue(from2, String(name));
        };
        mergeTree.map.forEach(function(childTree, storeFieldName) {
          var eVal = getValue_1(e_1, storeFieldName);
          var iVal = getValue_1(i_1, storeFieldName);
          if (void 0 === iVal)
            return;
          if (getStorageArgs) {
            getStorageArgs.push(storeFieldName);
          }
          var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
          if (aVal !== iVal) {
            changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
            changedFields_1.set(storeFieldName, aVal);
          }
          if (getStorageArgs) {
            invariant2(getStorageArgs.pop() === storeFieldName);
          }
        });
        if (changedFields_1) {
          incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
          changedFields_1.forEach(function(value, name) {
            incoming[name] = value;
          });
        }
      }
      if (mergeTree.info) {
        return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
      }
      return incoming;
    };
    return StoreWriter2;
  }()
);
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map = _a2.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map = _a2.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  globalThis.__DEV__ !== false && invariant2.warn(15, fieldName, parentType, childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", typeDotName, __assign({}, existing), __assign({}, incoming));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var InMemoryCache = (
  /** @class */
  function(_super) {
    __extends(InMemoryCache2, _super);
    function InMemoryCache2(config) {
      if (config === void 0) {
        config = {};
      }
      var _this = _super.call(this) || this;
      _this.watches = /* @__PURE__ */ new Set();
      _this.addTypenameTransform = new DocumentTransform(addTypenameToDocument);
      _this.assumeImmutableResults = true;
      _this.makeVar = makeVar;
      _this.txCount = 0;
      _this.config = normalizeConfig(config);
      _this.addTypename = !!_this.config.addTypename;
      _this.policies = new Policies({
        cache: _this,
        dataIdFromObject: _this.config.dataIdFromObject,
        possibleTypes: _this.config.possibleTypes,
        typePolicies: _this.config.typePolicies
      });
      _this.init();
      return _this;
    }
    InMemoryCache2.prototype.init = function() {
      var rootStore = this.data = new EntityStore.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = rootStore.stump;
      this.resetResultCache();
    };
    InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
      var _this = this;
      var previousReader = this.storeReader;
      var fragments = this.config.fragments;
      this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: shouldCanonizeResults(this.config),
        canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
        fragments
      }), fragments);
      this.maybeBroadcastWatch = wrap2(function(c, options) {
        return _this.broadcastWatch(c, options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(c) {
          var store = c.optimistic ? _this.optimisticData : _this.data;
          if (supportsResultCaching(store)) {
            var optimistic = c.optimistic, id = c.id, variables = c.variables;
            return store.makeCacheKey(
              c.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              c.callback,
              canonicalStringify({ optimistic, id, variables })
            );
          }
        }
      });
      (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(group) {
        return group.resetCaching();
      });
    };
    InMemoryCache2.prototype.restore = function(data) {
      this.init();
      if (data)
        this.data.replace(data);
      return this;
    };
    InMemoryCache2.prototype.extract = function(optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache2.prototype.read = function(options) {
      var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
      try {
        return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
      } catch (e) {
        if (e instanceof MissingFieldError) {
          return null;
        }
        throw e;
      }
    };
    InMemoryCache2.prototype.write = function(options) {
      try {
        ++this.txCount;
        return this.storeWriter.writeToStore(this.data, options);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.modify = function(options) {
      if (hasOwn.call(options, "id") && !options.id) {
        return false;
      }
      var store = options.optimistic ? this.optimisticData : this.data;
      try {
        ++this.txCount;
        return store.modify(options.id || "ROOT_QUERY", options.fields);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.diff = function(options) {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache2.prototype.watch = function(watch) {
      var _this = this;
      if (!this.watches.size) {
        recallCache(this);
      }
      this.watches.add(watch);
      if (watch.immediate) {
        this.maybeBroadcastWatch(watch);
      }
      return function() {
        if (_this.watches.delete(watch) && !_this.watches.size) {
          forgetCache(_this);
        }
        _this.maybeBroadcastWatch.forget(watch);
      };
    };
    InMemoryCache2.prototype.gc = function(options) {
      var _a2;
      canonicalStringify.reset();
      print2.reset();
      this.addTypenameTransform.resetCache();
      (_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.resetCaches();
      var ids = this.optimisticData.gc();
      if (options && !this.txCount) {
        if (options.resetResultCache) {
          this.resetResultCache(options.resetResultIdentities);
        } else if (options.resetResultIdentities) {
          this.storeReader.resetCanon();
        }
      }
      return ids;
    };
    InMemoryCache2.prototype.retain = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache2.prototype.release = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache2.prototype.identify = function(object) {
      if (isReference(object))
        return object.__ref;
      try {
        return this.policies.identify(object)[0];
      } catch (e) {
        globalThis.__DEV__ !== false && invariant2.warn(e);
      }
    };
    InMemoryCache2.prototype.evict = function(options) {
      if (!options.id) {
        if (hasOwn.call(options, "id")) {
          return false;
        }
        options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
      }
      try {
        ++this.txCount;
        return this.optimisticData.evict(options, this.data);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.reset = function(options) {
      var _this = this;
      this.init();
      canonicalStringify.reset();
      if (options && options.discardWatches) {
        this.watches.forEach(function(watch) {
          return _this.maybeBroadcastWatch.forget(watch);
        });
        this.watches.clear();
        forgetCache(this);
      } else {
        this.broadcastWatches();
      }
      return Promise.resolve();
    };
    InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
      var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
      if (newOptimisticData !== this.optimisticData) {
        this.optimisticData = newOptimisticData;
        this.broadcastWatches();
      }
    };
    InMemoryCache2.prototype.batch = function(options) {
      var _this = this;
      var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
      var updateResult;
      var perform = function(layer) {
        var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
        ++_this.txCount;
        if (layer) {
          _this.data = _this.optimisticData = layer;
        }
        try {
          return updateResult = update(_this);
        } finally {
          --_this.txCount;
          _this.data = data;
          _this.optimisticData = optimisticData;
        }
      };
      var alreadyDirty = /* @__PURE__ */ new Set();
      if (onWatchUpdated && !this.txCount) {
        this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch) {
          alreadyDirty.add(watch);
          return false;
        } }));
      }
      if (typeof optimistic === "string") {
        this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
      } else if (optimistic === false) {
        perform(this.data);
      } else {
        perform();
      }
      if (typeof removeOptimistic === "string") {
        this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
      }
      if (onWatchUpdated && alreadyDirty.size) {
        this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch, diff) {
          var result2 = onWatchUpdated.call(this, watch, diff);
          if (result2 !== false) {
            alreadyDirty.delete(watch);
          }
          return result2;
        } }));
        if (alreadyDirty.size) {
          alreadyDirty.forEach(function(watch) {
            return _this.maybeBroadcastWatch.dirty(watch);
          });
        }
      } else {
        this.broadcastWatches(options);
      }
      return updateResult;
    };
    InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
      return this.batch({
        update,
        optimistic: optimisticId || optimisticId !== null
      });
    };
    InMemoryCache2.prototype.transformDocument = function(document) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(document));
    };
    InMemoryCache2.prototype.fragmentMatches = function(fragment, typename) {
      return this.policies.fragmentMatches(fragment, typename);
    };
    InMemoryCache2.prototype.lookupFragment = function(fragmentName) {
      var _a2;
      return ((_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.lookup(fragmentName)) || null;
    };
    InMemoryCache2.prototype.broadcastWatches = function(options) {
      var _this = this;
      if (!this.txCount) {
        this.watches.forEach(function(c) {
          return _this.maybeBroadcastWatch(c, options);
        });
      }
    };
    InMemoryCache2.prototype.addFragmentsToDocument = function(document) {
      var fragments = this.config.fragments;
      return fragments ? fragments.transform(document) : document;
    };
    InMemoryCache2.prototype.addTypenameToDocument = function(document) {
      if (this.addTypename) {
        return this.addTypenameTransform.transformDocument(document);
      }
      return document;
    };
    InMemoryCache2.prototype.broadcastWatch = function(c, options) {
      var lastDiff = c.lastDiff;
      var diff = this.diff(c);
      if (options) {
        if (c.optimistic && typeof options.optimistic === "string") {
          diff.fromOptimisticTransaction = true;
        }
        if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
          return;
        }
      }
      if (!lastDiff || !equal(lastDiff.result, diff.result)) {
        c.callback(c.lastDiff = diff, lastDiff);
      }
    };
    return InMemoryCache2;
  }(ApolloCache)
);
if (globalThis.__DEV__ !== false) {
  InMemoryCache.prototype.getMemoryInternals = getInMemoryCacheMemoryInternals;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/cache/inmemory/fragmentRegistry.js
var FragmentRegistry = (
  /** @class */
  function() {
    function FragmentRegistry2() {
      var fragments = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
      }
      this.registry = /* @__PURE__ */ Object.create(null);
      this.resetCaches();
      if (fragments.length) {
        this.register.apply(this, fragments);
      }
    }
    FragmentRegistry2.prototype.register = function() {
      var _this = this;
      var fragments = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
      }
      var definitions = /* @__PURE__ */ new Map();
      fragments.forEach(function(doc) {
        getFragmentDefinitions(doc).forEach(function(node) {
          definitions.set(node.name.value, node);
        });
      });
      definitions.forEach(function(node, name) {
        if (node !== _this.registry[name]) {
          _this.registry[name] = node;
          _this.invalidate(name);
        }
      });
      return this;
    };
    FragmentRegistry2.prototype.invalidate = function(name) {
    };
    FragmentRegistry2.prototype.resetCaches = function() {
      var proto = FragmentRegistry2.prototype;
      this.invalidate = (this.lookup = wrap2(proto.lookup.bind(this), {
        makeCacheKey: function(arg) {
          return arg;
        },
        max: cacheSizes["fragmentRegistry.lookup"] || 1e3
      })).dirty;
      this.transform = wrap2(proto.transform.bind(this), {
        cache: WeakCache,
        max: cacheSizes["fragmentRegistry.transform"] || 2e3
      });
      this.findFragmentSpreads = wrap2(proto.findFragmentSpreads.bind(this), {
        cache: WeakCache,
        max: cacheSizes["fragmentRegistry.findFragmentSpreads"] || 4e3
      });
    };
    FragmentRegistry2.prototype.lookup = function(fragmentName) {
      return this.registry[fragmentName] || null;
    };
    FragmentRegistry2.prototype.transform = function(document) {
      var _this = this;
      var defined = /* @__PURE__ */ new Map();
      getFragmentDefinitions(document).forEach(function(def) {
        defined.set(def.name.value, def);
      });
      var unbound = /* @__PURE__ */ new Set();
      var enqueue2 = function(spreadName) {
        if (!defined.has(spreadName)) {
          unbound.add(spreadName);
        }
      };
      var enqueueChildSpreads = function(node) {
        return Object.keys(_this.findFragmentSpreads(node)).forEach(enqueue2);
      };
      enqueueChildSpreads(document);
      var missing = [];
      var map = /* @__PURE__ */ Object.create(null);
      unbound.forEach(function(fragmentName) {
        var knownFragmentDef = defined.get(fragmentName);
        if (knownFragmentDef) {
          enqueueChildSpreads(map[fragmentName] = knownFragmentDef);
        } else {
          missing.push(fragmentName);
          var def = _this.lookup(fragmentName);
          if (def) {
            enqueueChildSpreads(map[fragmentName] = def);
          }
        }
      });
      if (missing.length) {
        var defsToAppend_1 = [];
        missing.forEach(function(name) {
          var def = map[name];
          if (def) {
            defsToAppend_1.push(def);
          }
        });
        if (defsToAppend_1.length) {
          document = __assign(__assign({}, document), { definitions: document.definitions.concat(defsToAppend_1) });
        }
      }
      return document;
    };
    FragmentRegistry2.prototype.findFragmentSpreads = function(root2) {
      var spreads = /* @__PURE__ */ Object.create(null);
      visit(root2, {
        FragmentSpread: function(node) {
          spreads[node.name.value] = node;
        }
      });
      return spreads;
    };
    return FragmentRegistry2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/networkStatus.js
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
function isNetworkRequestSettled(networkStatus) {
  return networkStatus === 7 || networkStatus === 8;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/ObservableQuery.js
var assign = Object.assign;
var hasOwnProperty6 = Object.hasOwnProperty;
var ObservableQuery = (
  /** @class */
  function(_super) {
    __extends(ObservableQuery2, _super);
    function ObservableQuery2(_a2) {
      var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
      var _this = _super.call(this, function(observer) {
        try {
          var subObserver = observer._subscription._observer;
          if (subObserver && !subObserver.error) {
            subObserver.error = defaultSubscriptionObserverErrorCallback;
          }
        } catch (_a3) {
        }
        var first = !_this.observers.size;
        _this.observers.add(observer);
        var last = _this.last;
        if (last && last.error) {
          observer.error && observer.error(last.error);
        } else if (last && last.result) {
          observer.next && observer.next(_this.maskResult(last.result));
        }
        if (first) {
          _this.reobserve().catch(function() {
          });
        }
        return function() {
          if (_this.observers.delete(observer) && !_this.observers.size) {
            _this.tearDownQuery();
          }
        };
      }) || this;
      _this.observers = /* @__PURE__ */ new Set();
      _this.subscriptions = /* @__PURE__ */ new Set();
      _this.queryInfo = queryInfo;
      _this.queryManager = queryManager;
      _this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy);
      _this.isTornDown = false;
      _this.subscribeToMore = _this.subscribeToMore.bind(_this);
      _this.maskResult = _this.maskResult.bind(_this);
      var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
      var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
      _this.options = __assign(__assign({}, options), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy
      });
      _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
      var opDef = getOperationDefinition(_this.query);
      _this.queryName = opDef && opDef.name && opDef.name.value;
      return _this;
    }
    Object.defineProperty(ObservableQuery2.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObservableQuery2.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: false,
      configurable: true
    });
    ObservableQuery2.prototype.result = function() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        var observer = {
          next: function(result2) {
            resolve(result2);
            _this.observers.delete(observer);
            if (!_this.observers.size) {
              _this.queryManager.removeQuery(_this.queryId);
            }
            setTimeout(function() {
              subscription.unsubscribe();
            }, 0);
          },
          error: reject
        };
        var subscription = _this.subscribe(observer);
      });
    };
    ObservableQuery2.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    };
    ObservableQuery2.prototype.getCurrentFullResult = function(saveAsLastResult) {
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      var lastResult = this.getLastResult(true);
      var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
      var result2 = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
      var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        skipCacheDataFor(fetchPolicy) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
      ) {
      } else if (this.waitForOwnResult) {
        this.queryInfo["updateWatch"]();
      } else {
        var diff = this.queryInfo.getDiff();
        if (diff.complete || this.options.returnPartialData) {
          result2.data = diff.result;
        }
        if (equal(result2.data, {})) {
          result2.data = void 0;
        }
        if (diff.complete) {
          delete result2.partial;
          if (diff.complete && result2.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
            result2.networkStatus = NetworkStatus.ready;
            result2.loading = false;
          }
        } else {
          result2.partial = true;
        }
        if (globalThis.__DEV__ !== false && !diff.complete && !this.options.partialRefetch && !result2.loading && !result2.data && !result2.error) {
          logMissingFieldErrors(diff.missing);
        }
      }
      if (saveAsLastResult) {
        this.updateLastResult(result2);
      }
      return result2;
    };
    ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      return this.maskResult(this.getCurrentFullResult(saveAsLastResult));
    };
    ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult, variables) {
      if (!this.last) {
        return true;
      }
      var documentInfo = this.queryManager.getDocumentInfo(this.query);
      var dataMasking = this.queryManager.dataMasking;
      var query = dataMasking ? documentInfo.nonReactiveQuery : this.query;
      var resultIsDifferent = dataMasking || documentInfo.hasNonreactiveDirective ? !equalByQuery(query, this.last.result, newResult, this.variables) : !equal(this.last.result, newResult);
      return resultIsDifferent || variables && !equal(this.last.variables, variables);
    };
    ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
      var last = this.last;
      if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
        return last[key];
      }
    };
    ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
      return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
      return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery2.prototype.resetLastResults = function() {
      delete this.last;
      this.isTornDown = false;
    };
    ObservableQuery2.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery2.prototype.refetch = function(variables) {
      var _a2;
      var reobserveOptions = {
        // Always disable polling for refetches.
        pollInterval: 0
      };
      var fetchPolicy = this.options.fetchPolicy;
      if (fetchPolicy === "cache-and-network") {
        reobserveOptions.fetchPolicy = fetchPolicy;
      } else if (fetchPolicy === "no-cache") {
        reobserveOptions.fetchPolicy = "no-cache";
      } else {
        reobserveOptions.fetchPolicy = "network-only";
      }
      if (globalThis.__DEV__ !== false && variables && hasOwnProperty6.call(variables, "variables")) {
        var queryDef = getQueryDefinition(this.query);
        var vars = queryDef.variableDefinitions;
        if (!vars || !vars.some(function(v) {
          return v.variable.name.value === "variables";
        })) {
          globalThis.__DEV__ !== false && invariant2.warn(
            21,
            variables,
            ((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || queryDef
          );
        }
      }
      if (variables && !equal(this.options.variables, variables)) {
        reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
      }
      this.queryInfo.resetLastWrite();
      return this.reobserve(reobserveOptions, NetworkStatus.refetch);
    };
    ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
      var _this = this;
      var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.options.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      combinedOptions.query = this.transformDocument(combinedOptions.query);
      var qid = this.queryManager.generateQueryId();
      this.lastQuery = fetchMoreOptions.query ? this.transformDocument(this.options.query) : combinedOptions.query;
      var queryInfo = this.queryInfo;
      var originalNetworkStatus = queryInfo.networkStatus;
      queryInfo.networkStatus = NetworkStatus.fetchMore;
      if (combinedOptions.notifyOnNetworkStatusChange) {
        this.observe();
      }
      var updatedQuerySet = /* @__PURE__ */ new Set();
      var updateQuery = fetchMoreOptions === null || fetchMoreOptions === void 0 ? void 0 : fetchMoreOptions.updateQuery;
      var isCached = this.options.fetchPolicy !== "no-cache";
      if (!isCached) {
        invariant2(updateQuery, 22);
      }
      return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
        _this.queryManager.removeQuery(qid);
        if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
          queryInfo.networkStatus = originalNetworkStatus;
        }
        if (isCached) {
          _this.queryManager.cache.batch({
            update: function(cache2) {
              var updateQuery2 = fetchMoreOptions.updateQuery;
              if (updateQuery2) {
                cache2.updateQuery({
                  query: _this.query,
                  variables: _this.variables,
                  returnPartialData: true,
                  optimistic: false
                }, function(previous) {
                  return updateQuery2(previous, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables
                  });
                });
              } else {
                cache2.writeQuery({
                  query: combinedOptions.query,
                  variables: combinedOptions.variables,
                  data: fetchMoreResult.data
                });
              }
            },
            onWatchUpdated: function(watch) {
              updatedQuerySet.add(watch.query);
            }
          });
        } else {
          var lastResult = _this.getLast("result");
          var data = updateQuery(lastResult.data, {
            fetchMoreResult: fetchMoreResult.data,
            variables: combinedOptions.variables
          });
          _this.reportResult(__assign(__assign({}, lastResult), { data }), _this.variables);
        }
        return _this.maskResult(fetchMoreResult);
      }).finally(function() {
        if (isCached && !updatedQuerySet.has(_this.query)) {
          reobserveCacheFirst(_this);
        }
      });
    };
    ObservableQuery2.prototype.subscribeToMore = function(options) {
      var _this = this;
      var subscription = this.queryManager.startGraphQLSubscription({
        query: options.document,
        variables: options.variables,
        context: options.context
      }).subscribe({
        next: function(subscriptionData) {
          var updateQuery = options.updateQuery;
          if (updateQuery) {
            _this.updateQuery(function(previous, _a2) {
              var variables = _a2.variables;
              return updateQuery(previous, {
                subscriptionData,
                variables
              });
            });
          }
        },
        error: function(err) {
          if (options.onError) {
            options.onError(err);
            return;
          }
          globalThis.__DEV__ !== false && invariant2.error(23, err);
        }
      });
      this.subscriptions.add(subscription);
      return function() {
        if (_this.subscriptions.delete(subscription)) {
          subscription.unsubscribe();
        }
      };
    };
    ObservableQuery2.prototype.setOptions = function(newOptions) {
      return this.reobserve(newOptions);
    };
    ObservableQuery2.prototype.silentSetOptions = function(newOptions) {
      var mergedOptions = compact(this.options, newOptions || {});
      assign(this.options, mergedOptions);
    };
    ObservableQuery2.prototype.setVariables = function(variables) {
      if (equal(this.variables, variables)) {
        return this.observers.size ? this.result() : Promise.resolve();
      }
      this.options.variables = variables;
      if (!this.observers.size) {
        return Promise.resolve();
      }
      return this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables
      }, NetworkStatus.setVariables);
    };
    ObservableQuery2.prototype.updateQuery = function(mapFn) {
      var queryManager = this.queryManager;
      var result2 = queryManager.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: true,
        optimistic: false
      }).result;
      var newResult = mapFn(result2, {
        variables: this.variables
      });
      if (newResult) {
        queryManager.cache.writeQuery({
          query: this.options.query,
          data: newResult,
          variables: this.variables
        });
        queryManager.broadcastQueries();
      }
    };
    ObservableQuery2.prototype.startPolling = function(pollInterval) {
      this.options.pollInterval = pollInterval;
      this.updatePolling();
    };
    ObservableQuery2.prototype.stopPolling = function() {
      this.options.pollInterval = 0;
      this.updatePolling();
    };
    ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
      if (options.nextFetchPolicy) {
        var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
        if (fetchPolicy === "standby") {
        } else if (typeof options.nextFetchPolicy === "function") {
          options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
            reason,
            options,
            observable: this,
            initialFetchPolicy
          });
        } else if (reason === "variables-changed") {
          options.fetchPolicy = initialFetchPolicy;
        } else {
          options.fetchPolicy = options.nextFetchPolicy;
        }
      }
      return options.fetchPolicy;
    };
    ObservableQuery2.prototype.fetch = function(options, newNetworkStatus, query) {
      this.queryManager.setObservableQuery(this);
      return this.queryManager["fetchConcastWithInfo"](this.queryId, options, newNetworkStatus, query);
    };
    ObservableQuery2.prototype.updatePolling = function() {
      var _this = this;
      if (this.queryManager.ssrMode) {
        return;
      }
      var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
      if (!pollInterval || !this.hasObservers()) {
        if (pollingInfo) {
          clearTimeout(pollingInfo.timeout);
          delete this.pollingInfo;
        }
        return;
      }
      if (pollingInfo && pollingInfo.interval === pollInterval) {
        return;
      }
      invariant2(pollInterval, 24);
      var info = pollingInfo || (this.pollingInfo = {});
      info.interval = pollInterval;
      var maybeFetch = function() {
        var _a3, _b;
        if (_this.pollingInfo) {
          if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus) && !((_b = (_a3 = _this.options).skipPollAttempt) === null || _b === void 0 ? void 0 : _b.call(_a3))) {
            _this.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, NetworkStatus.poll).then(poll, poll);
          } else {
            poll();
          }
        }
      };
      var poll = function() {
        var info2 = _this.pollingInfo;
        if (info2) {
          clearTimeout(info2.timeout);
          info2.timeout = setTimeout(maybeFetch, info2.interval);
        }
      };
      poll();
    };
    ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
      if (variables === void 0) {
        variables = this.variables;
      }
      var error = this.getLastError();
      if (error && this.last && !equal(variables, this.last.variables)) {
        error = void 0;
      }
      return this.last = __assign({ result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables }, error ? { error } : null);
    };
    ObservableQuery2.prototype.reobserveAsConcast = function(newOptions, newNetworkStatus) {
      var _this = this;
      this.isTornDown = false;
      var useDisposableConcast = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        newNetworkStatus === NetworkStatus.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        newNetworkStatus === NetworkStatus.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        newNetworkStatus === NetworkStatus.poll
      );
      var oldVariables = this.options.variables;
      var oldFetchPolicy = this.options.fetchPolicy;
      var mergedOptions = compact(this.options, newOptions || {});
      var options = useDisposableConcast ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        mergedOptions
      ) : assign(this.options, mergedOptions);
      var query = this.transformDocument(options.query);
      this.lastQuery = query;
      if (!useDisposableConcast) {
        this.updatePolling();
        if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && // Don't mess with the fetchPolicy if it's currently "standby".
        options.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
        // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
        (options.fetchPolicy === oldFetchPolicy || // A `nextFetchPolicy` function has even higher priority, though,
        // so in that case `applyNextFetchPolicy` must be called.
        typeof options.nextFetchPolicy === "function")) {
          this.applyNextFetchPolicy("variables-changed", options);
          if (newNetworkStatus === void 0) {
            newNetworkStatus = NetworkStatus.setVariables;
          }
        }
      }
      this.waitForOwnResult && (this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy));
      var finishWaitingForOwnResult = function() {
        if (_this.concast === concast) {
          _this.waitForOwnResult = false;
        }
      };
      var variables = options.variables && __assign({}, options.variables);
      var _a2 = this.fetch(options, newNetworkStatus, query), concast = _a2.concast, fromLink = _a2.fromLink;
      var observer = {
        next: function(result2) {
          if (equal(_this.variables, variables)) {
            finishWaitingForOwnResult();
            _this.reportResult(result2, variables);
          }
        },
        error: function(error) {
          if (equal(_this.variables, variables)) {
            if (!isApolloError(error)) {
              error = new ApolloError({ networkError: error });
            }
            finishWaitingForOwnResult();
            _this.reportError(error, variables);
          }
        }
      };
      if (!useDisposableConcast && (fromLink || !this.concast)) {
        if (this.concast && this.observer) {
          this.concast.removeObserver(this.observer);
        }
        this.concast = concast;
        this.observer = observer;
      }
      concast.addObserver(observer);
      return concast;
    };
    ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
      return preventUnhandledRejection(this.reobserveAsConcast(newOptions, newNetworkStatus).promise.then(this.maskResult));
    };
    ObservableQuery2.prototype.resubscribeAfterError = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var last = this.last;
      this.resetLastResults();
      var subscription = this.subscribe.apply(this, args);
      this.last = last;
      return subscription;
    };
    ObservableQuery2.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(false),
        this.variables
      );
    };
    ObservableQuery2.prototype.reportResult = function(result2, variables) {
      var lastError = this.getLastError();
      var isDifferent = this.isDifferentFromLastResult(result2, variables);
      if (lastError || !result2.partial || this.options.returnPartialData) {
        this.updateLastResult(result2, variables);
      }
      if (lastError || isDifferent) {
        iterateObserversSafely(this.observers, "next", this.maskResult(result2));
      }
    };
    ObservableQuery2.prototype.reportError = function(error, variables) {
      var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
      this.updateLastResult(errorResult, variables);
      iterateObserversSafely(this.observers, "error", this.last.error = error);
    };
    ObservableQuery2.prototype.hasObservers = function() {
      return this.observers.size > 0;
    };
    ObservableQuery2.prototype.tearDownQuery = function() {
      if (this.isTornDown)
        return;
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
        delete this.concast;
        delete this.observer;
      }
      this.stopPolling();
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      this.subscriptions.clear();
      this.queryManager.stopQuery(this.queryId);
      this.observers.clear();
      this.isTornDown = true;
    };
    ObservableQuery2.prototype.transformDocument = function(document) {
      return this.queryManager.transform(document);
    };
    ObservableQuery2.prototype.maskResult = function(result2) {
      return result2 && "data" in result2 ? __assign(__assign({}, result2), { data: this.queryManager.maskOperation({
        document: this.query,
        data: result2.data,
        fetchPolicy: this.options.fetchPolicy,
        id: this.queryId
      }) }) : result2;
    };
    return ObservableQuery2;
  }(Observable)
);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a2 = obsQuery.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      // Use a temporary nextFetchPolicy function that replaces itself with the
      // previous nextFetchPolicy value and returns the original fetchPolicy.
      nextFetchPolicy: function(currentFetchPolicy, context) {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof this.nextFetchPolicy === "function") {
          return this.nextFetchPolicy(currentFetchPolicy, context);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
  globalThis.__DEV__ !== false && invariant2.error(25, error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (globalThis.__DEV__ !== false && missing) {
    globalThis.__DEV__ !== false && invariant2.debug(26, missing);
  }
}
function skipCacheDataFor(fetchPolicy) {
  return fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby";
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/QueryInfo.js
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache2, methodName) {
  var original = cache2[methodName];
  if (typeof original === "function") {
    cache2[methodName] = function() {
      destructiveMethodCounts.set(
        cache2,
        // The %1e15 allows the count to wrap around to 0 safely every
        // quadrillion evictions, so there's no risk of overflow. To be
        // clear, this is more of a pedantic principle than something
        // that matters in any conceivable practical scenario.
        (destructiveMethodCounts.get(cache2) + 1) % 1e15
      );
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = (
  /** @class */
  function() {
    function QueryInfo2(queryManager, queryId) {
      if (queryId === void 0) {
        queryId = queryManager.generateQueryId();
      }
      this.queryId = queryId;
      this.listeners = /* @__PURE__ */ new Set();
      this.document = null;
      this.lastRequestId = 1;
      this.stopped = false;
      this.dirty = false;
      this.observableQuery = null;
      var cache2 = this.cache = queryManager.cache;
      if (!destructiveMethodCounts.has(cache2)) {
        destructiveMethodCounts.set(cache2, 0);
        wrapDestructiveCacheMethod(cache2, "evict");
        wrapDestructiveCacheMethod(cache2, "modify");
        wrapDestructiveCacheMethod(cache2, "reset");
      }
    }
    QueryInfo2.prototype.init = function(query) {
      var networkStatus = query.networkStatus || NetworkStatus.loading;
      if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
        networkStatus = NetworkStatus.setVariables;
      }
      if (!equal(query.variables, this.variables)) {
        this.lastDiff = void 0;
      }
      Object.assign(this, {
        document: query.document,
        variables: query.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus
      });
      if (query.observableQuery) {
        this.setObservableQuery(query.observableQuery);
      }
      if (query.lastRequestId) {
        this.lastRequestId = query.lastRequestId;
      }
      return this;
    };
    QueryInfo2.prototype.reset = function() {
      cancelNotifyTimeout(this);
      this.dirty = false;
    };
    QueryInfo2.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    };
    QueryInfo2.prototype.getDiff = function() {
      var options = this.getDiffOptions();
      if (this.lastDiff && equal(options, this.lastDiff.options)) {
        return this.lastDiff.diff;
      }
      this.updateWatch(this.variables);
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return { complete: false };
      }
      var diff = this.cache.diff(options);
      this.updateLastDiff(diff, options);
      return diff;
    };
    QueryInfo2.prototype.updateLastDiff = function(diff, options) {
      this.lastDiff = diff ? {
        diff,
        options: options || this.getDiffOptions()
      } : void 0;
    };
    QueryInfo2.prototype.getDiffOptions = function(variables) {
      var _a2;
      if (variables === void 0) {
        variables = this.variables;
      }
      return {
        query: this.document,
        variables,
        returnPartialData: true,
        optimistic: true,
        canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
      };
    };
    QueryInfo2.prototype.setDiff = function(diff) {
      var _this = this;
      var _a2;
      var oldDiff = this.lastDiff && this.lastDiff.diff;
      if (diff && !diff.complete && ((_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.getLastError())) {
        return;
      }
      this.updateLastDiff(diff);
      if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
        this.dirty = true;
        if (!this.notifyTimeout) {
          this.notifyTimeout = setTimeout(function() {
            return _this.notify();
          }, 0);
        }
      }
    };
    QueryInfo2.prototype.setObservableQuery = function(oq) {
      var _this = this;
      if (oq === this.observableQuery)
        return;
      if (this.oqListener) {
        this.listeners.delete(this.oqListener);
      }
      this.observableQuery = oq;
      if (oq) {
        oq["queryInfo"] = this;
        this.listeners.add(this.oqListener = function() {
          var diff = _this.getDiff();
          if (diff.fromOptimisticTransaction) {
            oq["observe"]();
          } else {
            reobserveCacheFirst(oq);
          }
        });
      } else {
        delete this.oqListener;
      }
    };
    QueryInfo2.prototype.notify = function() {
      var _this = this;
      cancelNotifyTimeout(this);
      if (this.shouldNotify()) {
        this.listeners.forEach(function(listener) {
          return listener(_this);
        });
      }
      this.dirty = false;
    };
    QueryInfo2.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size) {
        return false;
      }
      if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
        var fetchPolicy = this.observableQuery.options.fetchPolicy;
        if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
          return false;
        }
      }
      return true;
    };
    QueryInfo2.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = true;
        this.reset();
        this.cancel();
        this.cancel = QueryInfo2.prototype.cancel;
        var oq = this.observableQuery;
        if (oq)
          oq.stopPolling();
      }
    };
    QueryInfo2.prototype.cancel = function() {
    };
    QueryInfo2.prototype.updateWatch = function(variables) {
      var _this = this;
      if (variables === void 0) {
        variables = this.variables;
      }
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return;
      }
      var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
        return _this.setDiff(diff);
      } });
      if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
        this.cancel();
        this.cancel = this.cache.watch(this.lastWatch = watchOptions);
      }
    };
    QueryInfo2.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    };
    QueryInfo2.prototype.shouldWrite = function(result2, variables) {
      var lastWrite = this.lastWrite;
      return !(lastWrite && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result2.data, lastWrite.result.data));
    };
    QueryInfo2.prototype.markResult = function(result2, document, options, cacheWriteBehavior) {
      var _this = this;
      var merger = new DeepMerger();
      var graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors.slice(0) : [];
      this.reset();
      if ("incremental" in result2 && isNonEmptyArray(result2.incremental)) {
        var mergedData = mergeIncrementalData(this.getDiff().result, result2);
        result2.data = mergedData;
      } else if ("hasNext" in result2 && result2.hasNext) {
        var diff = this.getDiff();
        result2.data = merger.merge(diff.result, result2.data);
      }
      this.graphQLErrors = graphQLErrors;
      if (options.fetchPolicy === "no-cache") {
        this.updateLastDiff({ result: result2.data, complete: true }, this.getDiffOptions(options.variables));
      } else if (cacheWriteBehavior !== 0) {
        if (shouldWriteResult(result2, options.errorPolicy)) {
          this.cache.performTransaction(function(cache2) {
            if (_this.shouldWrite(result2, options.variables)) {
              cache2.writeQuery({
                query: document,
                data: result2.data,
                variables: options.variables,
                overwrite: cacheWriteBehavior === 1
              });
              _this.lastWrite = {
                result: result2,
                variables: options.variables,
                dmCount: destructiveMethodCounts.get(_this.cache)
              };
            } else {
              if (_this.lastDiff && _this.lastDiff.diff.complete) {
                result2.data = _this.lastDiff.diff.result;
                return;
              }
            }
            var diffOptions = _this.getDiffOptions(options.variables);
            var diff2 = cache2.diff(diffOptions);
            if (!_this.stopped && equal(_this.variables, options.variables)) {
              _this.updateWatch(options.variables);
            }
            _this.updateLastDiff(diff2, diffOptions);
            if (diff2.complete) {
              result2.data = diff2.result;
            }
          });
        } else {
          this.lastWrite = void 0;
        }
      }
    };
    QueryInfo2.prototype.markReady = function() {
      this.networkError = null;
      return this.networkStatus = NetworkStatus.ready;
    };
    QueryInfo2.prototype.markError = function(error) {
      this.networkStatus = NetworkStatus.error;
      this.lastWrite = void 0;
      this.reset();
      if (error.graphQLErrors) {
        this.graphQLErrors = error.graphQLErrors;
      }
      if (error.networkError) {
        this.networkError = error.networkError;
      }
      return error;
    };
    return QueryInfo2;
  }()
);
function shouldWriteResult(result2, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result2);
  if (!writeWithErrors && ignoreErrors && result2.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/QueryManager.js
var hasOwnProperty7 = Object.prototype.hasOwnProperty;
var IGNORE = /* @__PURE__ */ Object.create(null);
var QueryManager = (
  /** @class */
  function() {
    function QueryManager2(options) {
      var _this = this;
      this.clientAwareness = {};
      this.queries = /* @__PURE__ */ new Map();
      this.fetchCancelFns = /* @__PURE__ */ new Map();
      this.transformCache = new AutoCleanedWeakCache(
        cacheSizes["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      );
      this.queryIdCounter = 1;
      this.requestIdCounter = 1;
      this.mutationIdCounter = 1;
      this.inFlightLinkObservables = new Trie(false);
      this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var defaultDocumentTransform = new DocumentTransform(
        function(document) {
          return _this.cache.transformDocument(document);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: false }
      );
      this.cache = options.cache;
      this.link = options.link;
      this.defaultOptions = options.defaultOptions;
      this.queryDeduplication = options.queryDeduplication;
      this.clientAwareness = options.clientAwareness;
      this.localState = options.localState;
      this.ssrMode = options.ssrMode;
      this.assumeImmutableResults = options.assumeImmutableResults;
      this.dataMasking = options.dataMasking;
      var documentTransform = options.documentTransform;
      this.documentTransform = documentTransform ? defaultDocumentTransform.concat(documentTransform).concat(defaultDocumentTransform) : defaultDocumentTransform;
      this.defaultContext = options.defaultContext || /* @__PURE__ */ Object.create(null);
      if (this.onBroadcast = options.onBroadcast) {
        this.mutationStore = /* @__PURE__ */ Object.create(null);
      }
    }
    QueryManager2.prototype.stop = function() {
      var _this = this;
      this.queries.forEach(function(_info, queryId) {
        _this.stopQueryNoBroadcast(queryId);
      });
      this.cancelPendingFetches(newInvariantError(27));
    };
    QueryManager2.prototype.cancelPendingFetches = function(error) {
      this.fetchCancelFns.forEach(function(cancel) {
        return cancel(error);
      });
      this.fetchCancelFns.clear();
    };
    QueryManager2.prototype.mutate = function(_a2) {
      return __awaiter(this, arguments, void 0, function(_b) {
        var mutationId, hasClientExports2, mutationStoreValue, isOptimistic, self2;
        var _c, _d;
        var mutation = _b.mutation, variables = _b.variables, optimisticResponse = _b.optimisticResponse, updateQueries = _b.updateQueries, _e = _b.refetchQueries, refetchQueries = _e === void 0 ? [] : _e, _f = _b.awaitRefetchQueries, awaitRefetchQueries = _f === void 0 ? false : _f, updateWithProxyFn = _b.update, onQueryUpdated = _b.onQueryUpdated, _g = _b.fetchPolicy, fetchPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.fetchPolicy) || "network-only" : _g, _h = _b.errorPolicy, errorPolicy = _h === void 0 ? ((_d = this.defaultOptions.mutate) === null || _d === void 0 ? void 0 : _d.errorPolicy) || "none" : _h, keepRootFields = _b.keepRootFields, context = _b.context;
        return __generator(this, function(_j) {
          switch (_j.label) {
            case 0:
              invariant2(mutation, 28);
              invariant2(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 29);
              mutationId = this.generateMutationId();
              mutation = this.cache.transformForLink(this.transform(mutation));
              hasClientExports2 = this.getDocumentInfo(mutation).hasClientExports;
              variables = this.getVariables(mutation, variables);
              if (!hasClientExports2)
                return [3, 2];
              return [4, this.localState.addExportedVariables(mutation, variables, context)];
            case 1:
              variables = _j.sent();
              _j.label = 2;
            case 2:
              mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                mutation,
                variables,
                loading: true,
                error: null
              });
              isOptimistic = optimisticResponse && this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
              this.broadcastQueries();
              self2 = this;
              return [2, new Promise(function(resolve, reject) {
                return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse: isOptimistic ? optimisticResponse : void 0 }), variables, {}, false), function(result2) {
                  if (graphQLResultHasError(result2) && errorPolicy === "none") {
                    throw new ApolloError({
                      graphQLErrors: getGraphQLErrorsFromResult(result2)
                    });
                  }
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = null;
                  }
                  var storeResult = __assign({}, result2);
                  if (typeof refetchQueries === "function") {
                    refetchQueries = refetchQueries(storeResult);
                  }
                  if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                    delete storeResult.errors;
                  }
                  return self2.markMutationResult({
                    mutationId,
                    result: storeResult,
                    document: mutation,
                    variables,
                    fetchPolicy,
                    errorPolicy,
                    context,
                    update: updateWithProxyFn,
                    updateQueries,
                    awaitRefetchQueries,
                    refetchQueries,
                    removeOptimistic: isOptimistic ? mutationId : void 0,
                    onQueryUpdated,
                    keepRootFields
                  });
                }).subscribe({
                  next: function(storeResult) {
                    self2.broadcastQueries();
                    if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                      resolve(__assign(__assign({}, storeResult), { data: self2.maskOperation({
                        document: mutation,
                        data: storeResult.data,
                        fetchPolicy,
                        id: mutationId
                      }) }));
                    }
                  },
                  error: function(err) {
                    if (mutationStoreValue) {
                      mutationStoreValue.loading = false;
                      mutationStoreValue.error = err;
                    }
                    if (isOptimistic) {
                      self2.cache.removeOptimistic(mutationId);
                    }
                    self2.broadcastQueries();
                    reject(err instanceof ApolloError ? err : new ApolloError({
                      networkError: err
                    }));
                  }
                });
              })];
          }
        });
      });
    };
    QueryManager2.prototype.markMutationResult = function(mutation, cache2) {
      var _this = this;
      if (cache2 === void 0) {
        cache2 = this.cache;
      }
      var result2 = mutation.result;
      var cacheWrites = [];
      var skipCache = mutation.fetchPolicy === "no-cache";
      if (!skipCache && shouldWriteResult(result2, mutation.errorPolicy)) {
        if (!isExecutionPatchIncrementalResult(result2)) {
          cacheWrites.push({
            result: result2.data,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
        }
        if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
          var diff = cache2.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(mutation.document).asQuery,
            variables: mutation.variables,
            optimistic: false,
            returnPartialData: true
          });
          var mergedData = void 0;
          if (diff.result) {
            mergedData = mergeIncrementalData(diff.result, result2);
          }
          if (typeof mergedData !== "undefined") {
            result2.data = mergedData;
            cacheWrites.push({
              result: mergedData,
              dataId: "ROOT_MUTATION",
              query: mutation.document,
              variables: mutation.variables
            });
          }
        }
        var updateQueries_1 = mutation.updateQueries;
        if (updateQueries_1) {
          this.queries.forEach(function(_a2, queryId) {
            var observableQuery = _a2.observableQuery;
            var queryName = observableQuery && observableQuery.queryName;
            if (!queryName || !hasOwnProperty7.call(updateQueries_1, queryName)) {
              return;
            }
            var updater = updateQueries_1[queryName];
            var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
            var _c = cache2.diff({
              query: document,
              variables,
              returnPartialData: true,
              optimistic: false
            }), currentQueryResult = _c.result, complete = _c.complete;
            if (complete && currentQueryResult) {
              var nextQueryResult = updater(currentQueryResult, {
                mutationResult: result2,
                queryName: document && getOperationName(document) || void 0,
                queryVariables: variables
              });
              if (nextQueryResult) {
                cacheWrites.push({
                  result: nextQueryResult,
                  dataId: "ROOT_QUERY",
                  query: document,
                  variables
                });
              }
            }
          });
        }
      }
      if (cacheWrites.length > 0 || (mutation.refetchQueries || "").length > 0 || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
        var results_1 = [];
        this.refetchQueries({
          updateCache: function(cache3) {
            if (!skipCache) {
              cacheWrites.forEach(function(write) {
                return cache3.write(write);
              });
            }
            var update = mutation.update;
            var isFinalResult = !isExecutionPatchResult(result2) || isExecutionPatchIncrementalResult(result2) && !result2.hasNext;
            if (update) {
              if (!skipCache) {
                var diff2 = cache3.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: _this.getDocumentInfo(mutation.document).asQuery,
                  variables: mutation.variables,
                  optimistic: false,
                  returnPartialData: true
                });
                if (diff2.complete) {
                  result2 = __assign(__assign({}, result2), { data: diff2.result });
                  if ("incremental" in result2) {
                    delete result2.incremental;
                  }
                  if ("hasNext" in result2) {
                    delete result2.hasNext;
                  }
                }
              }
              if (isFinalResult) {
                update(cache3, result2, {
                  context: mutation.context,
                  variables: mutation.variables
                });
              }
            }
            if (!skipCache && !mutation.keepRootFields && isFinalResult) {
              cache3.modify({
                id: "ROOT_MUTATION",
                fields: function(value, _a2) {
                  var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                  return fieldName === "__typename" ? value : DELETE2;
                }
              });
            }
          },
          include: mutation.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: false,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: mutation.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: mutation.onQueryUpdated || null
        }).forEach(function(result3) {
          return results_1.push(result3);
        });
        if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
          return Promise.all(results_1).then(function() {
            return result2;
          });
        }
      }
      return Promise.resolve(result2);
    };
    QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
      var _this = this;
      var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables, { IGNORE }) : optimisticResponse;
      if (data === IGNORE) {
        return false;
      }
      this.cache.recordOptimisticTransaction(function(cache2) {
        try {
          _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache2);
        } catch (error) {
          globalThis.__DEV__ !== false && invariant2.error(error);
        }
      }, mutation.mutationId);
      return true;
    };
    QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
      return this.fetchConcastWithInfo(queryId, options, networkStatus).concast.promise;
    };
    QueryManager2.prototype.getQueryStore = function() {
      var store = /* @__PURE__ */ Object.create(null);
      this.queries.forEach(function(info, queryId) {
        store[queryId] = {
          variables: info.variables,
          networkStatus: info.networkStatus,
          networkError: info.networkError,
          graphQLErrors: info.graphQLErrors
        };
      });
      return store;
    };
    QueryManager2.prototype.resetErrors = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo) {
        queryInfo.networkError = void 0;
        queryInfo.graphQLErrors = [];
      }
    };
    QueryManager2.prototype.transform = function(document) {
      return this.documentTransform.transformDocument(document);
    };
    QueryManager2.prototype.getDocumentInfo = function(document) {
      var transformCache = this.transformCache;
      if (!transformCache.has(document)) {
        var cacheEntry = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: hasClientExports(document),
          hasForcedResolvers: this.localState.shouldForceResolvers(document),
          hasNonreactiveDirective: hasDirectives(["nonreactive"], document),
          nonReactiveQuery: addNonReactiveToNamedFragments(document),
          clientQuery: this.localState.clientQuery(document),
          serverQuery: removeDirectivesFromDocument([
            { name: "client", remove: true },
            { name: "connection" },
            { name: "nonreactive" },
            { name: "unmask" }
          ], document),
          defaultVars: getDefaultValues(getOperationDefinition(document)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: __assign(__assign({}, document), { definitions: document.definitions.map(function(def) {
            if (def.kind === "OperationDefinition" && def.operation !== "query") {
              return __assign(__assign({}, def), { operation: "query" });
            }
            return def;
          }) })
        };
        transformCache.set(document, cacheEntry);
      }
      return transformCache.get(document);
    };
    QueryManager2.prototype.getVariables = function(document, variables) {
      return __assign(__assign({}, this.getDocumentInfo(document).defaultVars), variables);
    };
    QueryManager2.prototype.watchQuery = function(options) {
      var query = this.transform(options.query);
      options = __assign(__assign({}, options), { variables: this.getVariables(query, options.variables) });
      if (typeof options.notifyOnNetworkStatusChange === "undefined") {
        options.notifyOnNetworkStatusChange = false;
      }
      var queryInfo = new QueryInfo(this);
      var observable = new ObservableQuery({
        queryManager: this,
        queryInfo,
        options
      });
      observable["lastQuery"] = query;
      this.queries.set(observable.queryId, queryInfo);
      queryInfo.init({
        document: query,
        observableQuery: observable,
        variables: observable.variables
      });
      return observable;
    };
    QueryManager2.prototype.query = function(options, queryId) {
      var _this = this;
      if (queryId === void 0) {
        queryId = this.generateQueryId();
      }
      invariant2(options.query, 30);
      invariant2(options.query.kind === "Document", 31);
      invariant2(!options.returnPartialData, 32);
      invariant2(!options.pollInterval, 33);
      var query = this.transform(options.query);
      return this.fetchQuery(queryId, __assign(__assign({}, options), { query })).then(function(result2) {
        return result2 && __assign(__assign({}, result2), { data: _this.maskOperation({
          document: query,
          data: result2.data,
          fetchPolicy: options.fetchPolicy,
          id: queryId
        }) });
      }).finally(function() {
        return _this.stopQuery(queryId);
      });
    };
    QueryManager2.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    };
    QueryManager2.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    };
    QueryManager2.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    };
    QueryManager2.prototype.stopQueryInStore = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo)
        queryInfo.stop();
    };
    QueryManager2.prototype.clearStore = function(options) {
      if (options === void 0) {
        options = {
          discardWatches: true
        };
      }
      this.cancelPendingFetches(newInvariantError(34));
      this.queries.forEach(function(queryInfo) {
        if (queryInfo.observableQuery) {
          queryInfo.networkStatus = NetworkStatus.loading;
        } else {
          queryInfo.stop();
        }
      });
      if (this.mutationStore) {
        this.mutationStore = /* @__PURE__ */ Object.create(null);
      }
      return this.cache.reset(options);
    };
    QueryManager2.prototype.getObservableQueries = function(include) {
      var _this = this;
      if (include === void 0) {
        include = "active";
      }
      var queries = /* @__PURE__ */ new Map();
      var queryNamesAndDocs = /* @__PURE__ */ new Map();
      var legacyQueryOptions = /* @__PURE__ */ new Set();
      if (Array.isArray(include)) {
        include.forEach(function(desc) {
          if (typeof desc === "string") {
            queryNamesAndDocs.set(desc, false);
          } else if (isDocumentNode(desc)) {
            queryNamesAndDocs.set(_this.transform(desc), false);
          } else if (isNonNullObject(desc) && desc.query) {
            legacyQueryOptions.add(desc);
          }
        });
      }
      this.queries.forEach(function(_a2, queryId) {
        var oq = _a2.observableQuery, document = _a2.document;
        if (oq) {
          if (include === "all") {
            queries.set(queryId, oq);
            return;
          }
          var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
          if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
            return;
          }
          if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document && queryNamesAndDocs.has(document)) {
            queries.set(queryId, oq);
            if (queryName)
              queryNamesAndDocs.set(queryName, true);
            if (document)
              queryNamesAndDocs.set(document, true);
          }
        }
      });
      if (legacyQueryOptions.size) {
        legacyQueryOptions.forEach(function(options) {
          var queryId = makeUniqueId("legacyOneTimeQuery");
          var queryInfo = _this.getQuery(queryId).init({
            document: options.query,
            variables: options.variables
          });
          var oq = new ObservableQuery({
            queryManager: _this,
            queryInfo,
            options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
          });
          invariant2(oq.queryId === queryId);
          queryInfo.setObservableQuery(oq);
          queries.set(queryId, oq);
        });
      }
      if (globalThis.__DEV__ !== false && queryNamesAndDocs.size) {
        queryNamesAndDocs.forEach(function(included, nameOrDoc) {
          if (!included) {
            globalThis.__DEV__ !== false && invariant2.warn(typeof nameOrDoc === "string" ? 35 : 36, nameOrDoc);
          }
        });
      }
      return queries;
    };
    QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
      var _this = this;
      if (includeStandby === void 0) {
        includeStandby = false;
      }
      var observableQueryPromises = [];
      this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
        var fetchPolicy = observableQuery.options.fetchPolicy;
        observableQuery.resetLastResults();
        if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
          observableQueryPromises.push(observableQuery.refetch());
        }
        _this.getQuery(queryId).setDiff(null);
      });
      this.broadcastQueries();
      return Promise.all(observableQueryPromises);
    };
    QueryManager2.prototype.setObservableQuery = function(observableQuery) {
      this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager2.prototype.startGraphQLSubscription = function(options) {
      var _this = this;
      var query = options.query, variables = options.variables;
      var fetchPolicy = options.fetchPolicy, _a2 = options.errorPolicy, errorPolicy = _a2 === void 0 ? "none" : _a2, _b = options.context, context = _b === void 0 ? {} : _b, _c = options.extensions, extensions = _c === void 0 ? {} : _c;
      query = this.transform(query);
      variables = this.getVariables(query, variables);
      var makeObservable = function(variables2) {
        return _this.getObservableFromLink(query, context, variables2, extensions).map(function(result2) {
          if (fetchPolicy !== "no-cache") {
            if (shouldWriteResult(result2, errorPolicy)) {
              _this.cache.write({
                query,
                result: result2.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: variables2
              });
            }
            _this.broadcastQueries();
          }
          var hasErrors = graphQLResultHasError(result2);
          var hasProtocolErrors = graphQLResultHasProtocolErrors(result2);
          if (hasErrors || hasProtocolErrors) {
            var errors = {};
            if (hasErrors) {
              errors.graphQLErrors = result2.errors;
            }
            if (hasProtocolErrors) {
              errors.protocolErrors = result2.extensions[PROTOCOL_ERRORS_SYMBOL];
            }
            if (errorPolicy === "none" || hasProtocolErrors) {
              throw new ApolloError(errors);
            }
          }
          if (errorPolicy === "ignore") {
            delete result2.errors;
          }
          return result2;
        });
      };
      if (this.getDocumentInfo(query).hasClientExports) {
        var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
        return new Observable(function(observer) {
          var sub = null;
          observablePromise_1.then(function(observable) {
            return sub = observable.subscribe(observer);
          }, observer.error);
          return function() {
            return sub && sub.unsubscribe();
          };
        });
      }
      return makeObservable(variables);
    };
    QueryManager2.prototype.stopQuery = function(queryId) {
      this.stopQueryNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.removeQuery(queryId);
    };
    QueryManager2.prototype.removeQuery = function(queryId) {
      this.fetchCancelFns.delete(queryId);
      if (this.queries.has(queryId)) {
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
      }
    };
    QueryManager2.prototype.broadcastQueries = function() {
      if (this.onBroadcast)
        this.onBroadcast();
      this.queries.forEach(function(info) {
        return info.notify();
      });
    };
    QueryManager2.prototype.getLocalState = function() {
      return this.localState;
    };
    QueryManager2.prototype.getObservableFromLink = function(query, context, variables, extensions, deduplication) {
      var _this = this;
      var _a2;
      if (deduplication === void 0) {
        deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
      }
      var observable;
      var _b = this.getDocumentInfo(query), serverQuery = _b.serverQuery, clientQuery = _b.clientQuery;
      if (serverQuery) {
        var _c = this, inFlightLinkObservables_1 = _c.inFlightLinkObservables, link = _c.link;
        var operation = {
          query: serverQuery,
          variables,
          operationName: getOperationName(serverQuery) || void 0,
          context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication })),
          extensions
        };
        context = operation.context;
        if (deduplication) {
          var printedServerQuery_1 = print2(serverQuery);
          var varJson_1 = canonicalStringify(variables);
          var entry = inFlightLinkObservables_1.lookup(printedServerQuery_1, varJson_1);
          observable = entry.observable;
          if (!observable) {
            var concast = new Concast([
              execute(link, operation)
            ]);
            observable = entry.observable = concast;
            concast.beforeNext(function() {
              inFlightLinkObservables_1.remove(printedServerQuery_1, varJson_1);
            });
          }
        } else {
          observable = new Concast([
            execute(link, operation)
          ]);
        }
      } else {
        observable = new Concast([Observable.of({ data: {} })]);
        context = this.prepareContext(context);
      }
      if (clientQuery) {
        observable = asyncMap(observable, function(result2) {
          return _this.localState.runResolvers({
            document: clientQuery,
            remoteResult: result2,
            context,
            variables
          });
        });
      }
      return observable;
    };
    QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
      var requestId = queryInfo.lastRequestId = this.generateRequestId();
      var linkDocument = this.cache.transformForLink(options.query);
      return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result2) {
        var graphQLErrors = getGraphQLErrorsFromResult(result2);
        var hasErrors = graphQLErrors.length > 0;
        var errorPolicy = options.errorPolicy;
        if (requestId >= queryInfo.lastRequestId) {
          if (hasErrors && errorPolicy === "none") {
            throw queryInfo.markError(new ApolloError({
              graphQLErrors
            }));
          }
          queryInfo.markResult(result2, linkDocument, options, cacheWriteBehavior);
          queryInfo.markReady();
        }
        var aqr = {
          data: result2.data,
          loading: false,
          networkStatus: NetworkStatus.ready
        };
        if (hasErrors && errorPolicy === "none") {
          aqr.data = void 0;
        }
        if (hasErrors && errorPolicy !== "ignore") {
          aqr.errors = graphQLErrors;
          aqr.networkStatus = NetworkStatus.error;
        }
        return aqr;
      }, function(networkError) {
        var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
        if (requestId >= queryInfo.lastRequestId) {
          queryInfo.markError(error);
        }
        throw error;
      });
    };
    QueryManager2.prototype.fetchConcastWithInfo = function(queryId, options, networkStatus, query) {
      var _this = this;
      if (networkStatus === void 0) {
        networkStatus = NetworkStatus.loading;
      }
      if (query === void 0) {
        query = options.query;
      }
      var variables = this.getVariables(query, options.variables);
      var queryInfo = this.getQuery(queryId);
      var defaults = this.defaultOptions.watchQuery;
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
      var normalized = Object.assign({}, options, {
        query,
        variables,
        fetchPolicy,
        errorPolicy,
        returnPartialData,
        notifyOnNetworkStatusChange,
        context
      });
      var fromVariables = function(variables2) {
        normalized.variables = variables2;
        var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        if (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          normalized.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery
        ) {
          queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
        }
        return sourcesWithInfo2;
      };
      var cleanupCancelFn = function() {
        return _this.fetchCancelFns.delete(queryId);
      };
      this.fetchCancelFns.set(queryId, function(reason) {
        cleanupCancelFn();
        setTimeout(function() {
          return concast.cancel(reason);
        });
      });
      var concast, containsDataFromLink;
      if (this.getDocumentInfo(normalized.query).hasClientExports) {
        concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function(sourcesWithInfo2) {
          return sourcesWithInfo2.sources;
        }));
        containsDataFromLink = true;
      } else {
        var sourcesWithInfo = fromVariables(normalized.variables);
        containsDataFromLink = sourcesWithInfo.fromLink;
        concast = new Concast(sourcesWithInfo.sources);
      }
      concast.promise.then(cleanupCancelFn, cleanupCancelFn);
      return {
        concast,
        fromLink: containsDataFromLink
      };
    };
    QueryManager2.prototype.refetchQueries = function(_a2) {
      var _this = this;
      var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
      var includedQueriesById = /* @__PURE__ */ new Map();
      if (include) {
        this.getObservableQueries(include).forEach(function(oq, queryId) {
          includedQueriesById.set(queryId, {
            oq,
            lastDiff: _this.getQuery(queryId).getDiff()
          });
        });
      }
      var results = /* @__PURE__ */ new Map();
      if (updateCache) {
        this.cache.batch({
          update: updateCache,
          // Since you can perform any combination of cache reads and/or writes in
          // the cache.batch update function, its optimistic option can be either
          // a boolean or a string, representing three distinct modes of
          // operation:
          //
          // * false: read/write only the root layer
          // * true: read/write the topmost layer
          // * string: read/write a fresh optimistic layer with that ID string
          //
          // When typeof optimistic === "string", a new optimistic layer will be
          // temporarily created within cache.batch with that string as its ID. If
          // we then pass that same string as the removeOptimistic option, we can
          // make cache.batch immediately remove the optimistic layer after
          // running the updateCache function, triggering only one broadcast.
          //
          // However, the refetchQueries method accepts only true or false for its
          // optimistic option (not string). We interpret true to mean a temporary
          // optimistic layer should be created, to allow efficiently rolling back
          // the effect of the updateCache function, which involves passing a
          // string instead of true as the optimistic option to cache.batch, when
          // refetchQueries receives optimistic: true.
          //
          // In other words, we are deliberately not supporting the use case of
          // writing to an *existing* optimistic layer (using the refetchQueries
          // updateCache function), since that would potentially interfere with
          // other optimistic updates in progress. Instead, you can read/write
          // only the root layer by passing optimistic: false to refetchQueries,
          // or you can read/write a brand new optimistic layer that will be
          // automatically removed by passing optimistic: true.
          optimistic: optimistic && removeOptimistic || false,
          // The removeOptimistic option can also be provided by itself, even if
          // optimistic === false, to remove some previously-added optimistic
          // layer safely and efficiently, like we do in markMutationResult.
          //
          // If an explicit removeOptimistic string is provided with optimistic:
          // true, the removeOptimistic string will determine the ID of the
          // temporary optimistic layer, in case that ever matters.
          removeOptimistic,
          onWatchUpdated: function(watch, diff, lastDiff) {
            var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
            if (oq) {
              if (onQueryUpdated) {
                includedQueriesById.delete(oq.queryId);
                var result2 = onQueryUpdated(oq, diff, lastDiff);
                if (result2 === true) {
                  result2 = oq.refetch();
                }
                if (result2 !== false) {
                  results.set(oq, result2);
                }
                return result2;
              }
              if (onQueryUpdated !== null) {
                includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
              }
            }
          }
        });
      }
      if (includedQueriesById.size) {
        includedQueriesById.forEach(function(_a3, queryId) {
          var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
          var result2;
          if (onQueryUpdated) {
            if (!diff) {
              var info = oq["queryInfo"];
              info.reset();
              diff = info.getDiff();
            }
            result2 = onQueryUpdated(oq, diff, lastDiff);
          }
          if (!onQueryUpdated || result2 === true) {
            result2 = oq.refetch();
          }
          if (result2 !== false) {
            results.set(oq, result2);
          }
          if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
            _this.stopQueryNoBroadcast(queryId);
          }
        });
      }
      if (removeOptimistic) {
        this.cache.removeOptimistic(removeOptimistic);
      }
      return results;
    };
    QueryManager2.prototype.maskOperation = function(options) {
      var _a2, _b, _c;
      var document = options.document, data = options.data;
      if (globalThis.__DEV__ !== false) {
        var fetchPolicy = options.fetchPolicy, id = options.id;
        var operationType = (_a2 = getOperationDefinition(document)) === null || _a2 === void 0 ? void 0 : _a2.operation;
        var operationId = ((_b = operationType === null || operationType === void 0 ? void 0 : operationType[0]) !== null && _b !== void 0 ? _b : "o") + id;
        if (this.dataMasking && fetchPolicy === "no-cache" && !isFullyUnmaskedOperation(document) && !this.noCacheWarningsByQueryId.has(operationId)) {
          this.noCacheWarningsByQueryId.add(operationId);
          globalThis.__DEV__ !== false && invariant2.warn(
            37,
            (_c = getOperationName(document)) !== null && _c !== void 0 ? _c : "Unnamed ".concat(operationType !== null && operationType !== void 0 ? operationType : "operation")
          );
        }
      }
      return this.dataMasking ? maskOperation(data, document, this.cache) : data;
    };
    QueryManager2.prototype.maskFragment = function(options) {
      var data = options.data, fragment = options.fragment, fragmentName = options.fragmentName;
      return this.dataMasking ? maskFragment(data, fragment, this.cache, fragmentName) : data;
    };
    QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
      var _this = this;
      var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
      var oldNetworkStatus = queryInfo.networkStatus;
      queryInfo.init({
        document: query,
        variables,
        networkStatus
      });
      var readCache = function() {
        return queryInfo.getDiff();
      };
      var resultsFromCache = function(diff2, networkStatus2) {
        if (networkStatus2 === void 0) {
          networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
        }
        var data = diff2.result;
        if (globalThis.__DEV__ !== false && !returnPartialData && !equal(data, {})) {
          logMissingFieldErrors(diff2.missing);
        }
        var fromData = function(data2) {
          return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
        };
        if (data && _this.getDocumentInfo(query).hasForcedResolvers) {
          return _this.localState.runResolvers({
            document: query,
            remoteResult: { data },
            context,
            variables,
            onlyRunForcedResolvers: true
          }).then(function(resolved) {
            return fromData(resolved.data || void 0);
          });
        }
        if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
          return fromData(void 0);
        }
        return fromData(data);
      };
      var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
      var resultsFromLink = function() {
        return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
          query,
          variables,
          context,
          fetchPolicy,
          errorPolicy
        });
      };
      var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
      switch (fetchPolicy) {
        default:
        case "cache-first": {
          var diff = readCache();
          if (diff.complete) {
            return {
              fromLink: false,
              sources: [resultsFromCache(diff, queryInfo.markReady())]
            };
          }
          if (returnPartialData || shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(diff), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        }
        case "cache-and-network": {
          var diff = readCache();
          if (diff.complete || returnPartialData || shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(diff), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        }
        case "cache-only":
          return {
            fromLink: false,
            sources: [resultsFromCache(readCache(), queryInfo.markReady())]
          };
        case "network-only":
          if (shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(readCache()), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        case "no-cache":
          if (shouldNotify) {
            return {
              fromLink: true,
              // Note that queryInfo.getDiff() for no-cache queries does not call
              // cache.diff, but instead returns a { complete: false } stub result
              // when there is no queryInfo.diff already defined.
              sources: [resultsFromCache(queryInfo.getDiff()), resultsFromLink()]
            };
          }
          return { fromLink: true, sources: [resultsFromLink()] };
        case "standby":
          return { fromLink: false, sources: [] };
      }
    };
    QueryManager2.prototype.getQuery = function(queryId) {
      if (queryId && !this.queries.has(queryId)) {
        this.queries.set(queryId, new QueryInfo(this, queryId));
      }
      return this.queries.get(queryId);
    };
    QueryManager2.prototype.prepareContext = function(context) {
      if (context === void 0) {
        context = {};
      }
      var newContext = this.localState.prepareContext(context);
      return __assign(__assign(__assign({}, this.defaultContext), newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/LocalState.js
var LocalState = (
  /** @class */
  function() {
    function LocalState2(_a2) {
      var cache2 = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
      this.cache = cache2;
      if (client) {
        this.client = client;
      }
      if (resolvers) {
        this.addResolvers(resolvers);
      }
      if (fragmentMatcher) {
        this.setFragmentMatcher(fragmentMatcher);
      }
    }
    LocalState2.prototype.addResolvers = function(resolvers) {
      var _this = this;
      this.resolvers = this.resolvers || {};
      if (Array.isArray(resolvers)) {
        resolvers.forEach(function(resolverGroup) {
          _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
        });
      } else {
        this.resolvers = mergeDeep(this.resolvers, resolvers);
      }
    };
    LocalState2.prototype.setResolvers = function(resolvers) {
      this.resolvers = {};
      this.addResolvers(resolvers);
    };
    LocalState2.prototype.getResolvers = function() {
      return this.resolvers || {};
    };
    LocalState2.prototype.runResolvers = function(_a2) {
      return __awaiter(this, arguments, void 0, function(_b) {
        var document = _b.document, remoteResult = _b.remoteResult, context = _b.context, variables = _b.variables, _c = _b.onlyRunForcedResolvers, onlyRunForcedResolvers = _c === void 0 ? false : _c;
        return __generator(this, function(_d) {
          if (document) {
            return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
              return __assign(__assign({}, remoteResult), { data: localResult.result });
            })];
          }
          return [2, remoteResult];
        });
      });
    };
    LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
      this.fragmentMatcher = fragmentMatcher;
    };
    LocalState2.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    };
    LocalState2.prototype.clientQuery = function(document) {
      if (hasDirectives(["client"], document)) {
        if (this.resolvers) {
          return document;
        }
      }
      return null;
    };
    LocalState2.prototype.serverQuery = function(document) {
      return removeClientSetsFromDocument(document);
    };
    LocalState2.prototype.prepareContext = function(context) {
      var cache2 = this.cache;
      return __assign(__assign({}, context), {
        cache: cache2,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(obj) {
          return cache2.identify(obj);
        }
      });
    };
    LocalState2.prototype.addExportedVariables = function(document_1) {
      return __awaiter(this, arguments, void 0, function(document, variables, context) {
        if (variables === void 0) {
          variables = {};
        }
        if (context === void 0) {
          context = {};
        }
        return __generator(this, function(_a2) {
          if (document) {
            return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function(data) {
              return __assign(__assign({}, variables), data.exportedVariables);
            })];
          }
          return [2, __assign({}, variables)];
        });
      });
    };
    LocalState2.prototype.shouldForceResolvers = function(document) {
      var forceResolvers = false;
      visit(document, {
        Directive: {
          enter: function(node) {
            if (node.name.value === "client" && node.arguments) {
              forceResolvers = node.arguments.some(function(arg) {
                return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
              });
              if (forceResolvers) {
                return BREAK;
              }
            }
          }
        }
      });
      return forceResolvers;
    };
    LocalState2.prototype.buildRootValueFromCache = function(document, variables) {
      return this.cache.diff({
        query: buildQueryFromSelectionSet(document),
        variables,
        returnPartialData: true,
        optimistic: false
      }).result;
    };
    LocalState2.prototype.resolveDocument = function(document_1, rootValue_1) {
      return __awaiter(this, arguments, void 0, function(document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a2, cache2, client, execContext, isClientFieldDescendant;
        if (context === void 0) {
          context = {};
        }
        if (variables === void 0) {
          variables = {};
        }
        if (fragmentMatcher === void 0) {
          fragmentMatcher = function() {
            return true;
          };
        }
        if (onlyRunForcedResolvers === void 0) {
          onlyRunForcedResolvers = false;
        }
        return __generator(this, function(_b) {
          mainDefinition = getMainDefinition(document);
          fragments = getFragmentDefinitions(document);
          fragmentMap = createFragmentMap(fragments);
          selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
          definitionOperation = mainDefinition.operation;
          defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
          _a2 = this, cache2 = _a2.cache, client = _a2.client;
          execContext = {
            fragmentMap,
            context: __assign(__assign({}, context), { cache: cache2, client }),
            variables,
            fragmentMatcher,
            defaultOperationType,
            exportedVariables: {},
            selectionsToResolve,
            onlyRunForcedResolvers
          };
          isClientFieldDescendant = false;
          return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(result2) {
            return {
              result: result2,
              exportedVariables: execContext.exportedVariables
            };
          })];
        });
      });
    };
    LocalState2.prototype.resolveSelectionSet = function(selectionSet, isClientFieldDescendant, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var fragmentMap, context, variables, resultsToMerge, execute2;
        var _this = this;
        return __generator(this, function(_a2) {
          fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
          resultsToMerge = [rootValue];
          execute2 = function(selection) {
            return __awaiter(_this, void 0, void 0, function() {
              var fragment, typeCondition;
              return __generator(this, function(_a3) {
                if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                  return [
                    2
                    /*return*/
                  ];
                }
                if (!shouldInclude(selection, variables)) {
                  return [
                    2
                    /*return*/
                  ];
                }
                if (isField(selection)) {
                  return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function(fieldResult) {
                    var _a4;
                    if (typeof fieldResult !== "undefined") {
                      resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                    }
                  })];
                }
                if (isInlineFragment(selection)) {
                  fragment = selection;
                } else {
                  fragment = fragmentMap[selection.name.value];
                  invariant2(fragment, 19, selection.name.value);
                }
                if (fragment && fragment.typeCondition) {
                  typeCondition = fragment.typeCondition.name.value;
                  if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                    return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(fragmentResult) {
                      resultsToMerge.push(fragmentResult);
                    })];
                  }
                }
                return [
                  2
                  /*return*/
                ];
              });
            });
          };
          return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
            return mergeDeepArray(resultsToMerge);
          })];
        });
      });
    };
    LocalState2.prototype.resolveField = function(field, isClientFieldDescendant, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
        var _this = this;
        return __generator(this, function(_a2) {
          if (!rootValue) {
            return [2, null];
          }
          variables = execContext.variables;
          fieldName = field.name.value;
          aliasedFieldName = resultKeyNameFromField(field);
          aliasUsed = fieldName !== aliasedFieldName;
          defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
          resultPromise = Promise.resolve(defaultResult);
          if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
            resolverType = rootValue.__typename || execContext.defaultOperationType;
            resolverMap = this.resolvers && this.resolvers[resolverType];
            if (resolverMap) {
              resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
              if (resolve) {
                resultPromise = Promise.resolve(
                  // In case the resolve function accesses reactive variables,
                  // set cacheSlot to the current cache instance.
                  cacheSlot.withValue(this.cache, resolve, [
                    rootValue,
                    argumentsObjectFromField(field, variables),
                    execContext.context,
                    { field, fragmentMap: execContext.fragmentMap }
                  ])
                );
              }
            }
          }
          return [2, resultPromise.then(function(result2) {
            var _a3, _b;
            if (result2 === void 0) {
              result2 = defaultResult;
            }
            if (field.directives) {
              field.directives.forEach(function(directive) {
                if (directive.name.value === "export" && directive.arguments) {
                  directive.arguments.forEach(function(arg) {
                    if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                      execContext.exportedVariables[arg.value.value] = result2;
                    }
                  });
                }
              });
            }
            if (!field.selectionSet) {
              return result2;
            }
            if (result2 == null) {
              return result2;
            }
            var isClientField = (_b = (_a3 = field.directives) === null || _a3 === void 0 ? void 0 : _a3.some(function(d) {
              return d.name.value === "client";
            })) !== null && _b !== void 0 ? _b : false;
            if (Array.isArray(result2)) {
              return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result2, execContext);
            }
            if (field.selectionSet) {
              return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result2, execContext);
            }
          })];
        });
      });
    };
    LocalState2.prototype.resolveSubSelectedArray = function(field, isClientFieldDescendant, result2, execContext) {
      var _this = this;
      return Promise.all(result2.map(function(item) {
        if (item === null) {
          return null;
        }
        if (Array.isArray(item)) {
          return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
        }
        if (field.selectionSet) {
          return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
        }
      }));
    };
    LocalState2.prototype.collectSelectionsToResolve = function(mainDefinition, fragmentMap) {
      var isSingleASTNode = function(node) {
        return !Array.isArray(node);
      };
      var selectionsToResolveCache = this.selectionsToResolveCache;
      function collectByDefinition(definitionNode) {
        if (!selectionsToResolveCache.has(definitionNode)) {
          var matches_1 = /* @__PURE__ */ new Set();
          selectionsToResolveCache.set(definitionNode, matches_1);
          visit(definitionNode, {
            Directive: function(node, _, __, ___, ancestors) {
              if (node.name.value === "client") {
                ancestors.forEach(function(node2) {
                  if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                    matches_1.add(node2);
                  }
                });
              }
            },
            FragmentSpread: function(spread, _, __, ___, ancestors) {
              var fragment = fragmentMap[spread.name.value];
              invariant2(fragment, 20, spread.name.value);
              var fragmentSelections = collectByDefinition(fragment);
              if (fragmentSelections.size > 0) {
                ancestors.forEach(function(node) {
                  if (isSingleASTNode(node) && isSelectionNode(node)) {
                    matches_1.add(node);
                  }
                });
                matches_1.add(spread);
                fragmentSelections.forEach(function(selection) {
                  matches_1.add(selection);
                });
              }
            }
          });
        }
        return selectionsToResolveCache.get(definitionNode);
      }
      return collectByDefinition(mainDefinition);
    };
    return LocalState2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/ApolloClient.js
var hasSuggestedDevtools = false;
var ApolloClient = (
  /** @class */
  function() {
    function ApolloClient2(options) {
      var _this = this;
      var _a2;
      this.resetStoreCallbacks = [];
      this.clearStoreCallbacks = [];
      if (!options.cache) {
        throw newInvariantError(16);
      }
      var uri = options.uri, credentials = options.credentials, headers = options.headers, cache2 = options.cache, documentTransform = options.documentTransform, _b = options.ssrMode, ssrMode = _b === void 0 ? false : _b, _c = options.ssrForceFetchDelay, ssrForceFetchDelay = _c === void 0 ? 0 : _c, connectToDevTools = options.connectToDevTools, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, defaultContext = options.defaultContext, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? cache2.assumeImmutableResults : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version, devtools = options.devtools, dataMasking = options.dataMasking;
      var link = options.link;
      if (!link) {
        link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
      }
      this.link = link;
      this.cache = cache2;
      this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
      this.queryDeduplication = queryDeduplication;
      this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
      this.typeDefs = typeDefs;
      this.devtoolsConfig = __assign(__assign({}, devtools), { enabled: (_a2 = devtools === null || devtools === void 0 ? void 0 : devtools.enabled) !== null && _a2 !== void 0 ? _a2 : connectToDevTools });
      if (this.devtoolsConfig.enabled === void 0) {
        this.devtoolsConfig.enabled = globalThis.__DEV__ !== false;
      }
      if (ssrForceFetchDelay) {
        setTimeout(function() {
          return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
      }
      this.watchQuery = this.watchQuery.bind(this);
      this.query = this.query.bind(this);
      this.mutate = this.mutate.bind(this);
      this.watchFragment = this.watchFragment.bind(this);
      this.resetStore = this.resetStore.bind(this);
      this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
      this.version = version;
      this.localState = new LocalState({
        cache: cache2,
        client: this,
        resolvers,
        fragmentMatcher
      });
      this.queryManager = new QueryManager({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext,
        documentTransform,
        queryDeduplication,
        ssrMode,
        dataMasking: !!dataMasking,
        clientAwareness: {
          name: clientAwarenessName,
          version: clientAwarenessVersion
        },
        localState: this.localState,
        assumeImmutableResults,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          if (_this.devToolsHookCb) {
            _this.devToolsHookCb({
              action: {},
              state: {
                queries: _this.queryManager.getQueryStore(),
                mutations: _this.queryManager.mutationStore || {}
              },
              dataWithOptimisticResults: _this.cache.extract(true)
            });
          }
        } : void 0
      });
      if (this.devtoolsConfig.enabled)
        this.connectToDevTools();
    }
    ApolloClient2.prototype.connectToDevTools = function() {
      if (typeof window === "undefined") {
        return;
      }
      var windowWithDevTools = window;
      var devtoolsSymbol = Symbol.for("apollo.devtools");
      (windowWithDevTools[devtoolsSymbol] = windowWithDevTools[devtoolsSymbol] || []).push(this);
      windowWithDevTools.__APOLLO_CLIENT__ = this;
      if (!hasSuggestedDevtools && globalThis.__DEV__ !== false) {
        hasSuggestedDevtools = true;
        if (window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol)) {
          setTimeout(function() {
            if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
              var nav = window.navigator;
              var ua = nav && nav.userAgent;
              var url = void 0;
              if (typeof ua === "string") {
                if (ua.indexOf("Chrome/") > -1) {
                  url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                } else if (ua.indexOf("Firefox/") > -1) {
                  url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                }
              }
              if (url) {
                globalThis.__DEV__ !== false && invariant2.log("Download the Apollo DevTools for a better development experience: %s", url);
              }
            }
          }, 1e4);
        }
      }
    };
    Object.defineProperty(ApolloClient2.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: false,
      configurable: true
    });
    ApolloClient2.prototype.stop = function() {
      this.queryManager.stop();
    };
    ApolloClient2.prototype.watchQuery = function(options) {
      if (this.defaultOptions.watchQuery) {
        options = mergeOptions(this.defaultOptions.watchQuery, options);
      }
      if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
        options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
      }
      return this.queryManager.watchQuery(options);
    };
    ApolloClient2.prototype.query = function(options) {
      if (this.defaultOptions.query) {
        options = mergeOptions(this.defaultOptions.query, options);
      }
      invariant2(options.fetchPolicy !== "cache-and-network", 17);
      if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
        options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
      }
      return this.queryManager.query(options);
    };
    ApolloClient2.prototype.mutate = function(options) {
      if (this.defaultOptions.mutate) {
        options = mergeOptions(this.defaultOptions.mutate, options);
      }
      return this.queryManager.mutate(options);
    };
    ApolloClient2.prototype.subscribe = function(options) {
      var _this = this;
      var id = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(options).map(function(result2) {
        return __assign(__assign({}, result2), { data: _this.queryManager.maskOperation({
          document: options.query,
          data: result2.data,
          fetchPolicy: options.fetchPolicy,
          id
        }) });
      });
    };
    ApolloClient2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readQuery(options, optimistic);
    };
    ApolloClient2.prototype.watchFragment = function(options) {
      var _a2;
      return this.cache.watchFragment(__assign(__assign({}, options), (_a2 = {}, _a2[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, _a2)));
    };
    ApolloClient2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readFragment(options, optimistic);
    };
    ApolloClient2.prototype.writeQuery = function(options) {
      var ref = this.cache.writeQuery(options);
      if (options.broadcast !== false) {
        this.queryManager.broadcastQueries();
      }
      return ref;
    };
    ApolloClient2.prototype.writeFragment = function(options) {
      var ref = this.cache.writeFragment(options);
      if (options.broadcast !== false) {
        this.queryManager.broadcastQueries();
      }
      return ref;
    };
    ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
      this.devToolsHookCb = cb;
    };
    ApolloClient2.prototype.__requestRaw = function(payload) {
      return execute(this.link, payload);
    };
    ApolloClient2.prototype.resetStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: false
        });
      }).then(function() {
        return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
          return fn();
        }));
      }).then(function() {
        return _this.reFetchObservableQueries();
      });
    };
    ApolloClient2.prototype.clearStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: true
        });
      }).then(function() {
        return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
          return fn();
        }));
      });
    };
    ApolloClient2.prototype.onResetStore = function(cb) {
      var _this = this;
      this.resetStoreCallbacks.push(cb);
      return function() {
        _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.onClearStore = function(cb) {
      var _this = this;
      this.clearStoreCallbacks.push(cb);
      return function() {
        _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
      return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient2.prototype.refetchQueries = function(options) {
      var map = this.queryManager.refetchQueries(options);
      var queries = [];
      var results = [];
      map.forEach(function(result3, obsQuery) {
        queries.push(obsQuery);
        results.push(result3);
      });
      var result2 = Promise.all(results);
      result2.queries = queries;
      result2.results = results;
      result2.catch(function(error) {
        globalThis.__DEV__ !== false && invariant2.debug(18, error);
      });
      return result2;
    };
    ApolloClient2.prototype.getObservableQueries = function(include) {
      if (include === void 0) {
        include = "active";
      }
      return this.queryManager.getObservableQueries(include);
    };
    ApolloClient2.prototype.extract = function(optimistic) {
      return this.cache.extract(optimistic);
    };
    ApolloClient2.prototype.restore = function(serializedState) {
      return this.cache.restore(serializedState);
    };
    ApolloClient2.prototype.addResolvers = function(resolvers) {
      this.localState.addResolvers(resolvers);
    };
    ApolloClient2.prototype.setResolvers = function(resolvers) {
      this.localState.setResolvers(resolvers);
    };
    ApolloClient2.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    };
    ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
      this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient2.prototype.setLink = function(newLink) {
      this.link = this.queryManager.link = newLink;
    };
    Object.defineProperty(ApolloClient2.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: false,
      configurable: true
    });
    return ApolloClient2;
  }()
);
if (globalThis.__DEV__ !== false) {
  ApolloClient.prototype.getMemoryInternals = getApolloClientMemoryInternals;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/graphql-tag/lib/index.js
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize2(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize2(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize2(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result2 = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result2 += arg.loc.source.body;
    } else {
      result2 += arg;
    }
    result2 += literals[i + 1];
  });
  return parseDocument(result2);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/core/index.js
setVerbosity(globalThis.__DEV__ !== false ? "log" : "silent");

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/context/ApolloConsumer.js
var React2 = __toESM(require_rehackt(), 1);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/context/ApolloContext.js
var React = __toESM(require_rehackt(), 1);
var contextKey = canUseSymbol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function getApolloContext() {
  invariant2("createContext" in React, 54);
  var context = React.createContext[contextKey];
  if (!context) {
    Object.defineProperty(React.createContext, contextKey, {
      value: context = React.createContext({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = "ApolloContext";
  }
  return context;
}
var resetApolloContext = getApolloContext;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/context/ApolloConsumer.js
var ApolloConsumer = function(props) {
  var ApolloContext = getApolloContext();
  return React2.createElement(ApolloContext.Consumer, null, function(context) {
    invariant2(context && context.client, 53);
    return props.children(context.client);
  });
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/context/ApolloProvider.js
var React3 = __toESM(require_rehackt(), 1);
var ApolloProvider = function(_a2) {
  var client = _a2.client, children = _a2.children;
  var ApolloContext = getApolloContext();
  var parentContext = React3.useContext(ApolloContext);
  var context = React3.useMemo(function() {
    return __assign(__assign({}, parentContext), { client: client || parentContext.client });
  }, [parentContext, client]);
  invariant2(context.client, 55);
  return React3.createElement(ApolloContext.Provider, { value: context }, children);
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useApolloClient.js
var React4 = __toESM(require_rehackt(), 1);
function useApolloClient(override) {
  var context = React4.useContext(getApolloContext());
  var client = override || context.client;
  invariant2(!!client, 58);
  return client;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useLazyQuery.js
var React11 = __toESM(require_rehackt(), 1);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useQuery.js
var React10 = __toESM(require_rehackt(), 1);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var React5 = __toESM(require_rehackt(), 1);
var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React5[uSESKey];
var useSyncExternalStore = realHook || function(subscribe, getSnapshot, getServerSnapshot) {
  var value = getSnapshot();
  if (
    // DEVIATION: Using __DEV__
    globalThis.__DEV__ !== false && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    value !== getSnapshot()
  ) {
    didWarnUncachedGetSnapshot = true;
    globalThis.__DEV__ !== false && invariant2.error(68);
  }
  var _a2 = React5.useState({
    inst: { value, getSnapshot }
  }), inst = _a2[0].inst, forceUpdate = _a2[1];
  if (canUseLayoutEffect) {
    React5.useLayoutEffect(function() {
      Object.assign(inst, { value, getSnapshot });
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    }, [subscribe, value, getSnapshot]);
  } else {
    Object.assign(inst, { value, getSnapshot });
  }
  React5.useEffect(function() {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
    return subscribe(function handleStoreChange() {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    });
  }, [subscribe]);
  return value;
};
function checkIfSnapshotChanged(_a2) {
  var value = _a2.value, getSnapshot = _a2.getSnapshot;
  try {
    return value !== getSnapshot();
  } catch (_b) {
    return true;
  }
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/parser/index.js
var DocumentType;
(function(DocumentType2) {
  DocumentType2[DocumentType2["Query"] = 0] = "Query";
  DocumentType2[DocumentType2["Mutation"] = 1] = "Mutation";
  DocumentType2[DocumentType2["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache;
function operationName(type) {
  var name;
  switch (type) {
    case DocumentType.Query:
      name = "Query";
      break;
    case DocumentType.Mutation:
      name = "Mutation";
      break;
    case DocumentType.Subscription:
      name = "Subscription";
      break;
  }
  return name;
}
function parser(document) {
  if (!cache) {
    cache = new AutoCleanedWeakCache(
      cacheSizes.parser || 1e3
      /* defaultCacheSizes.parser */
    );
  }
  var cached = cache.get(document);
  if (cached)
    return cached;
  var variables, type, name;
  invariant2(!!document && !!document.kind, 70, document);
  var fragments = [];
  var queries = [];
  var mutations = [];
  var subscriptions = [];
  for (var _i = 0, _a2 = document.definitions; _i < _a2.length; _i++) {
    var x = _a2[_i];
    if (x.kind === "FragmentDefinition") {
      fragments.push(x);
      continue;
    }
    if (x.kind === "OperationDefinition") {
      switch (x.operation) {
        case "query":
          queries.push(x);
          break;
        case "mutation":
          mutations.push(x);
          break;
        case "subscription":
          subscriptions.push(x);
          break;
      }
    }
  }
  invariant2(!fragments.length || queries.length || mutations.length || subscriptions.length, 71);
  invariant2(
    queries.length + mutations.length + subscriptions.length <= 1,
    72,
    document,
    queries.length,
    subscriptions.length,
    mutations.length
  );
  type = queries.length ? DocumentType.Query : DocumentType.Mutation;
  if (!queries.length && !mutations.length)
    type = DocumentType.Subscription;
  var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
  invariant2(definitions.length === 1, 73, document, definitions.length);
  var definition = definitions[0];
  variables = definition.variableDefinitions || [];
  if (definition.name && definition.name.kind === "Name") {
    name = definition.name.value;
  } else {
    name = "data";
  }
  var payload = { name, type, variables };
  cache.set(document, payload);
  return payload;
}
parser.resetCache = function() {
  cache = void 0;
};
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("parser", function() {
    return cache ? cache.size : 0;
  });
}
function verifyDocumentType(document, type) {
  var operation = parser(document);
  var requiredOperationName = operationName(type);
  var usedOperationName = operationName(operation.type);
  invariant2(
    operation.type === type,
    74,
    requiredOperationName,
    requiredOperationName,
    usedOperationName
  );
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js
var React6 = __toESM(require_rehackt(), 1);
function useDeepMemo(memoFn, deps) {
  var ref = React6.useRef(void 0);
  if (!ref.current || !equal(ref.current.deps, deps)) {
    ref.current = { value: memoFn(), deps };
  }
  return ref.current.value;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var React7 = __toESM(require_rehackt(), 1);
var useIsomorphicLayoutEffect = canUseDOM ? React7.useLayoutEffect : React7.useEffect;

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js
var React8 = __toESM(require_rehackt(), 1);
var Ctx;
function noop2() {
}
function useRenderGuard() {
  if (!Ctx) {
    Ctx = React8.createContext(null);
  }
  return React8.useCallback(
    /**
     * @returns true if the hook was called during render
     */
    function() {
      var orig = console.error;
      try {
        console.error = noop2;
        React8["useContext"](Ctx);
        return true;
      } catch (e) {
        return false;
      } finally {
        console.error = orig;
      }
    },
    []
  );
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/internal/__use.js
var React9 = __toESM(require_rehackt(), 1);
var useKey = "use";
var realHook2 = React9[useKey];
var __use = realHook2 || function __use2(promise) {
  var statefulPromise = wrapPromiseWithState(promise);
  switch (statefulPromise.status) {
    case "pending":
      throw statefulPromise;
    case "rejected":
      throw statefulPromise.reason;
    case "fulfilled":
      return statefulPromise.value;
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var wrapperSymbol = Symbol.for("apollo.hook.wrappers");
function wrapHook(hookName, useHook, clientOrObsQuery) {
  var queryManager = clientOrObsQuery["queryManager"];
  var wrappers = queryManager && queryManager[wrapperSymbol];
  var wrapper = wrappers && wrappers[hookName];
  return wrapper ? wrapper(useHook) : useHook;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useQuery.js
var hasOwnProperty8 = Object.prototype.hasOwnProperty;
function noop3() {
}
var lastWatchOptions = Symbol();
function useQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useQuery", _useQuery, useApolloClient(options && options.client))(query, options);
}
function _useQuery(query, options) {
  var _a2 = useQueryInternals(query, options), result2 = _a2.result, obsQueryFields = _a2.obsQueryFields;
  return React10.useMemo(function() {
    return __assign(__assign({}, result2), obsQueryFields);
  }, [result2, obsQueryFields]);
}
function useInternalState(client, query, options, renderPromises, makeWatchQueryOptions) {
  function createInternalState(previous) {
    var _a3;
    verifyDocumentType(query, DocumentType.Query);
    var internalState2 = {
      client,
      query,
      observable: (
        // See if there is an existing observable that was used to fetch the same
        // data and if so, use it instead since it will contain the proper queryId
        // to fetch the result set. This is used during SSR.
        renderPromises && renderPromises.getSSRObservable(makeWatchQueryOptions()) || client.watchQuery(getObsQueryOptions(void 0, client, options, makeWatchQueryOptions()))
      ),
      resultData: {
        // Reuse previousData from previous InternalState (if any) to provide
        // continuity of previousData even if/when the query or client changes.
        previousData: (_a3 = previous === null || previous === void 0 ? void 0 : previous.resultData.current) === null || _a3 === void 0 ? void 0 : _a3.data
      }
    };
    return internalState2;
  }
  var _a2 = React10.useState(createInternalState), internalState = _a2[0], updateInternalState = _a2[1];
  function onQueryExecuted(watchQueryOptions) {
    var _a3;
    var _b;
    Object.assign(internalState.observable, (_a3 = {}, _a3[lastWatchOptions] = watchQueryOptions, _a3));
    var resultData = internalState.resultData;
    updateInternalState(__assign(__assign({}, internalState), {
      // might be a different query
      query: watchQueryOptions.query,
      resultData: Object.assign(resultData, {
        // We need to modify the previous `resultData` object as we rely on the
        // object reference in other places
        previousData: ((_b = resultData.current) === null || _b === void 0 ? void 0 : _b.data) || resultData.previousData,
        current: void 0
      })
    }));
  }
  if (client !== internalState.client || query !== internalState.query) {
    var newInternalState = createInternalState(internalState);
    updateInternalState(newInternalState);
    return [newInternalState, onQueryExecuted];
  }
  return [internalState, onQueryExecuted];
}
function useQueryInternals(query, options) {
  var client = useApolloClient(options.client);
  var renderPromises = React10.useContext(getApolloContext()).renderPromises;
  var isSyncSSR = !!renderPromises;
  var disableNetworkFetches = client.disableNetworkFetches;
  var ssrAllowed = options.ssr !== false && !options.skip;
  var partialRefetch = options.partialRefetch;
  var makeWatchQueryOptions = createMakeWatchQueryOptions(client, query, options, isSyncSSR);
  var _a2 = useInternalState(client, query, options, renderPromises, makeWatchQueryOptions), _b = _a2[0], observable = _b.observable, resultData = _b.resultData, onQueryExecuted = _a2[1];
  var watchQueryOptions = makeWatchQueryOptions(observable);
  useResubscribeIfNecessary(
    resultData,
    // might get mutated during render
    observable,
    // might get mutated during render
    client,
    options,
    watchQueryOptions
  );
  var obsQueryFields = React10.useMemo(function() {
    return bindObservableMethods(observable);
  }, [observable]);
  useRegisterSSRObservable(observable, renderPromises, ssrAllowed);
  var result2 = useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, {
    onCompleted: options.onCompleted || noop3,
    onError: options.onError || noop3
  });
  return {
    result: result2,
    obsQueryFields,
    observable,
    resultData,
    client,
    onQueryExecuted
  };
}
function useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, callbacks) {
  var callbackRef = React10.useRef(callbacks);
  React10.useEffect(function() {
    callbackRef.current = callbacks;
  });
  var resultOverride = (isSyncSSR || disableNetworkFetches) && options.ssr === false && !options.skip ? (
    // If SSR has been explicitly disabled, and this function has been called
    // on the server side, return the default loading state.
    ssrDisabledResult
  ) : options.skip || watchQueryOptions.fetchPolicy === "standby" ? (
    // When skipping a query (ie. we're not querying for data but still want to
    // render children), make sure the `data` is cleared out and `loading` is
    // set to `false` (since we aren't loading anything).
    //
    // NOTE: We no longer think this is the correct behavior. Skipping should
    // not automatically set `data` to `undefined`, but instead leave the
    // previous data in place. In other words, skipping should not mandate that
    // previously received data is all of a sudden removed. Unfortunately,
    // changing this is breaking, so we'll have to wait until Apollo Client 4.0
    // to address this.
    skipStandbyResult
  ) : void 0;
  var previousData = resultData.previousData;
  var currentResultOverride = React10.useMemo(function() {
    return resultOverride && toQueryResult(resultOverride, previousData, observable, client);
  }, [client, observable, resultOverride, previousData]);
  return useSyncExternalStore(React10.useCallback(function(handleStoreChange) {
    disableNetworkFetches;
    if (isSyncSSR) {
      return function() {
      };
    }
    var onNext = function() {
      var previousResult = resultData.current;
      var result2 = observable.getCurrentResult();
      if (previousResult && previousResult.loading === result2.loading && previousResult.networkStatus === result2.networkStatus && equal(previousResult.data, result2.data)) {
        return;
      }
      setResult(result2, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
    };
    var onError = function(error) {
      subscription.current.unsubscribe();
      subscription.current = observable.resubscribeAfterError(onNext, onError);
      if (!hasOwnProperty8.call(error, "graphQLErrors")) {
        throw error;
      }
      var previousResult = resultData.current;
      if (!previousResult || previousResult && previousResult.loading || !equal(error, previousResult.error)) {
        setResult({
          data: previousResult && previousResult.data,
          error,
          loading: false,
          networkStatus: NetworkStatus.error
        }, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
      }
    };
    var subscription = { current: observable.subscribe(onNext, onError) };
    return function() {
      setTimeout(function() {
        return subscription.current.unsubscribe();
      });
    };
  }, [
    disableNetworkFetches,
    isSyncSSR,
    observable,
    resultData,
    partialRefetch,
    client
  ]), function() {
    return currentResultOverride || getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
  }, function() {
    return currentResultOverride || getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
  });
}
function useRegisterSSRObservable(observable, renderPromises, ssrAllowed) {
  if (renderPromises && ssrAllowed) {
    renderPromises.registerSSRObservable(observable);
    if (observable.getCurrentResult().loading) {
      renderPromises.addObservableQueryPromise(observable);
    }
  }
}
function useResubscribeIfNecessary(resultData, observable, client, options, watchQueryOptions) {
  var _a2;
  if (observable[lastWatchOptions] && !equal(observable[lastWatchOptions], watchQueryOptions)) {
    observable.reobserve(getObsQueryOptions(observable, client, options, watchQueryOptions));
    resultData.previousData = ((_a2 = resultData.current) === null || _a2 === void 0 ? void 0 : _a2.data) || resultData.previousData;
    resultData.current = void 0;
  }
  observable[lastWatchOptions] = watchQueryOptions;
}
function createMakeWatchQueryOptions(client, query, _a2, isSyncSSR) {
  if (_a2 === void 0) {
    _a2 = {};
  }
  var skip = _a2.skip, ssr = _a2.ssr, onCompleted = _a2.onCompleted, onError = _a2.onError, defaultOptions2 = _a2.defaultOptions, otherOptions = __rest(_a2, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
  return function(observable) {
    var watchQueryOptions = Object.assign(otherOptions, { query });
    if (isSyncSSR && (watchQueryOptions.fetchPolicy === "network-only" || watchQueryOptions.fetchPolicy === "cache-and-network")) {
      watchQueryOptions.fetchPolicy = "cache-first";
    }
    if (!watchQueryOptions.variables) {
      watchQueryOptions.variables = {};
    }
    if (skip) {
      watchQueryOptions.initialFetchPolicy = watchQueryOptions.initialFetchPolicy || watchQueryOptions.fetchPolicy || getDefaultFetchPolicy(defaultOptions2, client.defaultOptions);
      watchQueryOptions.fetchPolicy = "standby";
    } else if (!watchQueryOptions.fetchPolicy) {
      watchQueryOptions.fetchPolicy = (observable === null || observable === void 0 ? void 0 : observable.options.initialFetchPolicy) || getDefaultFetchPolicy(defaultOptions2, client.defaultOptions);
    }
    return watchQueryOptions;
  };
}
function getObsQueryOptions(observable, client, queryHookOptions, watchQueryOptions) {
  var toMerge = [];
  var globalDefaults = client.defaultOptions.watchQuery;
  if (globalDefaults)
    toMerge.push(globalDefaults);
  if (queryHookOptions.defaultOptions) {
    toMerge.push(queryHookOptions.defaultOptions);
  }
  toMerge.push(compact(observable && observable.options, watchQueryOptions));
  return toMerge.reduce(mergeOptions);
}
function setResult(nextResult, resultData, observable, client, partialRefetch, forceUpdate, callbacks) {
  var previousResult = resultData.current;
  if (previousResult && previousResult.data) {
    resultData.previousData = previousResult.data;
  }
  if (!nextResult.error && isNonEmptyArray(nextResult.errors)) {
    nextResult.error = new ApolloError({ graphQLErrors: nextResult.errors });
  }
  resultData.current = toQueryResult(unsafeHandlePartialRefetch(nextResult, observable, partialRefetch), resultData.previousData, observable, client);
  forceUpdate();
  handleErrorOrCompleted(nextResult, previousResult === null || previousResult === void 0 ? void 0 : previousResult.networkStatus, callbacks);
}
function handleErrorOrCompleted(result2, previousNetworkStatus, callbacks) {
  if (!result2.loading) {
    var error_1 = toApolloError(result2);
    Promise.resolve().then(function() {
      if (error_1) {
        callbacks.onError(error_1);
      } else if (result2.data && previousNetworkStatus !== result2.networkStatus && result2.networkStatus === NetworkStatus.ready) {
        callbacks.onCompleted(result2.data);
      }
    }).catch(function(error) {
      globalThis.__DEV__ !== false && invariant2.warn(error);
    });
  }
}
function getCurrentResult(resultData, observable, callbacks, partialRefetch, client) {
  if (!resultData.current) {
    setResult(observable.getCurrentResult(), resultData, observable, client, partialRefetch, function() {
    }, callbacks);
  }
  return resultData.current;
}
function getDefaultFetchPolicy(queryHookDefaultOptions, clientDefaultOptions) {
  var _a2;
  return (queryHookDefaultOptions === null || queryHookDefaultOptions === void 0 ? void 0 : queryHookDefaultOptions.fetchPolicy) || ((_a2 = clientDefaultOptions === null || clientDefaultOptions === void 0 ? void 0 : clientDefaultOptions.watchQuery) === null || _a2 === void 0 ? void 0 : _a2.fetchPolicy) || "cache-first";
}
function toApolloError(result2) {
  return isNonEmptyArray(result2.errors) ? new ApolloError({ graphQLErrors: result2.errors }) : result2.error;
}
function toQueryResult(result2, previousData, observable, client) {
  var data = result2.data, partial = result2.partial, resultWithoutPartial = __rest(result2, ["data", "partial"]);
  var queryResult = __assign(__assign({ data }, resultWithoutPartial), { client, observable, variables: observable.variables, called: result2 !== ssrDisabledResult && result2 !== skipStandbyResult, previousData });
  return queryResult;
}
function unsafeHandlePartialRefetch(result2, observable, partialRefetch) {
  if (result2.partial && partialRefetch && !result2.loading && (!result2.data || Object.keys(result2.data).length === 0) && observable.options.fetchPolicy !== "cache-only") {
    observable.refetch();
    return __assign(__assign({}, result2), { loading: true, networkStatus: NetworkStatus.refetch });
  }
  return result2;
}
var ssrDisabledResult = maybeDeepFreeze({
  loading: true,
  data: void 0,
  error: void 0,
  networkStatus: NetworkStatus.loading
});
var skipStandbyResult = maybeDeepFreeze({
  loading: false,
  data: void 0,
  error: void 0,
  networkStatus: NetworkStatus.ready
});
function bindObservableMethods(observable) {
  return {
    refetch: observable.refetch.bind(observable),
    reobserve: observable.reobserve.bind(observable),
    fetchMore: observable.fetchMore.bind(observable),
    updateQuery: observable.updateQuery.bind(observable),
    startPolling: observable.startPolling.bind(observable),
    stopPolling: observable.stopPolling.bind(observable),
    subscribeToMore: observable.subscribeToMore.bind(observable)
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useLazyQuery.js
var EAGER_METHODS = [
  "refetch",
  "reobserve",
  "fetchMore",
  "updateQuery",
  "startPolling",
  "stopPolling",
  "subscribeToMore"
];
function useLazyQuery(query, options) {
  var _a2;
  var execOptionsRef = React11.useRef(void 0);
  var optionsRef = React11.useRef(void 0);
  var queryRef = React11.useRef(void 0);
  var merged = mergeOptions(options, execOptionsRef.current || {});
  var document = (_a2 = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a2 !== void 0 ? _a2 : query;
  optionsRef.current = options;
  queryRef.current = document;
  var queryHookOptions = __assign(__assign({}, merged), { skip: !execOptionsRef.current });
  var _b = useQueryInternals(document, queryHookOptions), obsQueryFields = _b.obsQueryFields, useQueryResult = _b.result, client = _b.client, resultData = _b.resultData, observable = _b.observable, onQueryExecuted = _b.onQueryExecuted;
  var initialFetchPolicy = observable.options.initialFetchPolicy || getDefaultFetchPolicy(queryHookOptions.defaultOptions, client.defaultOptions);
  var forceUpdateState = React11.useReducer(function(tick) {
    return tick + 1;
  }, 0)[1];
  var eagerMethods = React11.useMemo(function() {
    var eagerMethods2 = {};
    var _loop_1 = function(key2) {
      var method = obsQueryFields[key2];
      eagerMethods2[key2] = function() {
        if (!execOptionsRef.current) {
          execOptionsRef.current = /* @__PURE__ */ Object.create(null);
          forceUpdateState();
        }
        return method.apply(this, arguments);
      };
    };
    for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
      var key = EAGER_METHODS_1[_i];
      _loop_1(key);
    }
    return eagerMethods2;
  }, [forceUpdateState, obsQueryFields]);
  var called = !!execOptionsRef.current;
  var result2 = React11.useMemo(function() {
    return __assign(__assign(__assign({}, useQueryResult), eagerMethods), { called });
  }, [useQueryResult, eagerMethods, called]);
  var execute2 = React11.useCallback(function(executeOptions) {
    execOptionsRef.current = executeOptions ? __assign(__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
      fetchPolicy: initialFetchPolicy
    };
    var options2 = mergeOptions(optionsRef.current, __assign({ query: queryRef.current }, execOptionsRef.current));
    var promise = executeQuery(resultData, observable, client, document, __assign(__assign({}, options2), { skip: false }), onQueryExecuted).then(function(queryResult) {
      return Object.assign(queryResult, eagerMethods);
    });
    promise.catch(function() {
    });
    return promise;
  }, [
    client,
    document,
    eagerMethods,
    initialFetchPolicy,
    observable,
    resultData,
    onQueryExecuted
  ]);
  var executeRef = React11.useRef(execute2);
  useIsomorphicLayoutEffect(function() {
    executeRef.current = execute2;
  });
  var stableExecute = React11.useCallback(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return executeRef.current.apply(executeRef, args);
  }, []);
  return [stableExecute, result2];
}
function executeQuery(resultData, observable, client, currentQuery, options, onQueryExecuted) {
  var query = options.query || currentQuery;
  var watchQueryOptions = createMakeWatchQueryOptions(client, query, options, false)(observable);
  var concast = observable.reobserveAsConcast(getObsQueryOptions(observable, client, options, watchQueryOptions));
  onQueryExecuted(watchQueryOptions);
  return new Promise(function(resolve) {
    var result2;
    concast.subscribe({
      next: function(value) {
        result2 = value;
      },
      error: function() {
        resolve(toQueryResult(observable.getCurrentResult(), resultData.previousData, observable, client));
      },
      complete: function() {
        resolve(toQueryResult(observable["maskResult"](result2), resultData.previousData, observable, client));
      }
    });
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useMutation.js
var React12 = __toESM(require_rehackt(), 1);
function useMutation(mutation, options) {
  var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
  verifyDocumentType(mutation, DocumentType.Mutation);
  var _a2 = React12.useState({
    called: false,
    loading: false,
    client
  }), result2 = _a2[0], setResult2 = _a2[1];
  var ref = React12.useRef({
    result: result2,
    mutationId: 0,
    isMounted: true,
    client,
    mutation,
    options
  });
  useIsomorphicLayoutEffect(function() {
    Object.assign(ref.current, { client, options, mutation });
  });
  var execute2 = React12.useCallback(function(executeOptions) {
    if (executeOptions === void 0) {
      executeOptions = {};
    }
    var _a3 = ref.current, options2 = _a3.options, mutation2 = _a3.mutation;
    var baseOptions = __assign(__assign({}, options2), { mutation: mutation2 });
    var client2 = executeOptions.client || ref.current.client;
    if (!ref.current.result.loading && !baseOptions.ignoreResults && ref.current.isMounted) {
      setResult2(ref.current.result = {
        loading: true,
        error: void 0,
        data: void 0,
        called: true,
        client: client2
      });
    }
    var mutationId = ++ref.current.mutationId;
    var clientOptions = mergeOptions(baseOptions, executeOptions);
    return client2.mutate(clientOptions).then(function(response) {
      var _a4, _b;
      var data = response.data, errors = response.errors;
      var error = errors && errors.length > 0 ? new ApolloError({ graphQLErrors: errors }) : void 0;
      var onError = executeOptions.onError || ((_a4 = ref.current.options) === null || _a4 === void 0 ? void 0 : _a4.onError);
      if (error && onError) {
        onError(error, clientOptions);
      }
      if (mutationId === ref.current.mutationId && !clientOptions.ignoreResults) {
        var result_1 = {
          called: true,
          loading: false,
          data,
          error,
          client: client2
        };
        if (ref.current.isMounted && !equal(ref.current.result, result_1)) {
          setResult2(ref.current.result = result_1);
        }
      }
      var onCompleted = executeOptions.onCompleted || ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onCompleted);
      if (!error) {
        onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(response.data, clientOptions);
      }
      return response;
    }).catch(function(error) {
      var _a4;
      if (mutationId === ref.current.mutationId && ref.current.isMounted) {
        var result_2 = {
          loading: false,
          error,
          data: void 0,
          called: true,
          client: client2
        };
        if (!equal(ref.current.result, result_2)) {
          setResult2(ref.current.result = result_2);
        }
      }
      var onError = executeOptions.onError || ((_a4 = ref.current.options) === null || _a4 === void 0 ? void 0 : _a4.onError);
      if (onError) {
        onError(error, clientOptions);
        return { data: void 0, errors: error };
      }
      throw error;
    });
  }, []);
  var reset = React12.useCallback(function() {
    if (ref.current.isMounted) {
      var result_3 = {
        called: false,
        loading: false,
        client: ref.current.client
      };
      Object.assign(ref.current, { mutationId: 0, result: result_3 });
      setResult2(result_3);
    }
  }, []);
  React12.useEffect(function() {
    var current = ref.current;
    current.isMounted = true;
    return function() {
      current.isMounted = false;
    };
  }, []);
  return [execute2, __assign({ reset }, result2)];
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useSubscription.js
var React13 = __toESM(require_rehackt(), 1);
function useSubscription(subscription, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var hasIssuedDeprecationWarningRef = React13.useRef(false);
  var client = useApolloClient(options.client);
  verifyDocumentType(subscription, DocumentType.Subscription);
  if (!hasIssuedDeprecationWarningRef.current) {
    hasIssuedDeprecationWarningRef.current = true;
    if (options.onSubscriptionData) {
      globalThis.__DEV__ !== false && invariant2.warn(options.onData ? 61 : 62);
    }
    if (options.onSubscriptionComplete) {
      globalThis.__DEV__ !== false && invariant2.warn(options.onComplete ? 63 : 64);
    }
  }
  var skip = options.skip, fetchPolicy = options.fetchPolicy, errorPolicy = options.errorPolicy, shouldResubscribe = options.shouldResubscribe, context = options.context, extensions = options.extensions, ignoreResults = options.ignoreResults;
  var variables = useDeepMemo(function() {
    return options.variables;
  }, [options.variables]);
  var recreate = function() {
    return createSubscription(client, subscription, variables, fetchPolicy, errorPolicy, context, extensions);
  };
  var _a2 = React13.useState(options.skip ? null : recreate), observable = _a2[0], setObservable = _a2[1];
  var recreateRef = React13.useRef(recreate);
  useIsomorphicLayoutEffect(function() {
    recreateRef.current = recreate;
  });
  if (skip) {
    if (observable) {
      setObservable(observable = null);
    }
  } else if (!observable || (client !== observable.__.client || subscription !== observable.__.query || fetchPolicy !== observable.__.fetchPolicy || errorPolicy !== observable.__.errorPolicy || !equal(variables, observable.__.variables)) && (typeof shouldResubscribe === "function" ? !!shouldResubscribe(options) : shouldResubscribe) !== false) {
    setObservable(observable = recreate());
  }
  var optionsRef = React13.useRef(options);
  React13.useEffect(function() {
    optionsRef.current = options;
  });
  var fallbackLoading = !skip && !ignoreResults;
  var fallbackResult = React13.useMemo(function() {
    return {
      loading: fallbackLoading,
      error: void 0,
      data: void 0,
      variables
    };
  }, [fallbackLoading, variables]);
  var ignoreResultsRef = React13.useRef(ignoreResults);
  useIsomorphicLayoutEffect(function() {
    ignoreResultsRef.current = ignoreResults;
  });
  var ret = useSyncExternalStore(React13.useCallback(function(update) {
    if (!observable) {
      return function() {
      };
    }
    var subscriptionStopped = false;
    var variables2 = observable.__.variables;
    var client2 = observable.__.client;
    var subscription2 = observable.subscribe({
      next: function(fetchResult) {
        var _a3, _b;
        if (subscriptionStopped) {
          return;
        }
        var result2 = {
          loading: false,
          // TODO: fetchResult.data can be null but SubscriptionResult.data
          // expects TData | undefined only
          data: fetchResult.data,
          error: toApolloError(fetchResult),
          variables: variables2
        };
        observable.__.setResult(result2);
        if (!ignoreResultsRef.current)
          update();
        if (result2.error) {
          (_b = (_a3 = optionsRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a3, result2.error);
        } else if (optionsRef.current.onData) {
          optionsRef.current.onData({
            client: client2,
            data: result2
          });
        } else if (optionsRef.current.onSubscriptionData) {
          optionsRef.current.onSubscriptionData({
            client: client2,
            subscriptionData: result2
          });
        }
      },
      error: function(error) {
        var _a3, _b;
        error = error instanceof ApolloError ? error : new ApolloError({ protocolErrors: [error] });
        if (!subscriptionStopped) {
          observable.__.setResult({
            loading: false,
            data: void 0,
            error,
            variables: variables2
          });
          if (!ignoreResultsRef.current)
            update();
          (_b = (_a3 = optionsRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a3, error);
        }
      },
      complete: function() {
        if (!subscriptionStopped) {
          if (optionsRef.current.onComplete) {
            optionsRef.current.onComplete();
          } else if (optionsRef.current.onSubscriptionComplete) {
            optionsRef.current.onSubscriptionComplete();
          }
        }
      }
    });
    return function() {
      subscriptionStopped = true;
      setTimeout(function() {
        subscription2.unsubscribe();
      });
    };
  }, [observable]), function() {
    return observable && !skip && !ignoreResults ? observable.__.result : fallbackResult;
  }, function() {
    return fallbackResult;
  });
  var restart = React13.useCallback(function() {
    invariant2(!optionsRef.current.skip, 65);
    setObservable(recreateRef.current());
  }, [optionsRef, recreateRef]);
  return React13.useMemo(function() {
    return __assign(__assign({}, ret), { restart });
  }, [ret, restart]);
}
function createSubscription(client, query, variables, fetchPolicy, errorPolicy, context, extensions) {
  var options = {
    query,
    variables,
    fetchPolicy,
    errorPolicy,
    context,
    extensions
  };
  var __ = __assign(__assign({}, options), { client, result: {
    loading: true,
    data: void 0,
    error: void 0,
    variables
  }, setResult: function(result2) {
    __.result = result2;
  } });
  var observable = null;
  return Object.assign(new Observable(function(observer) {
    if (!observable) {
      observable = client.subscribe(options);
    }
    var sub = observable.subscribe(observer);
    return function() {
      return sub.unsubscribe();
    };
  }), {
    /**
     * A tracking object to store details about the observable and the latest result of the subscription.
     */
    __
  });
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useReactiveVar.js
var React14 = __toESM(require_rehackt(), 1);
function useReactiveVar(rv) {
  return useSyncExternalStore(React14.useCallback(function(update) {
    return rv.onNextChange(function onNext() {
      update();
      rv.onNextChange(onNext);
    });
  }, [rv]), rv, rv);
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useFragment.js
var React15 = __toESM(require_rehackt(), 1);
function useFragment(options) {
  return wrapHook("useFragment", _useFragment, useApolloClient(options.client))(options);
}
function _useFragment(options) {
  var client = useApolloClient(options.client);
  var cache2 = client.cache;
  var from2 = options.from, rest = __rest(options, ["from"]);
  var id = React15.useMemo(function() {
    return typeof from2 === "string" ? from2 : from2 === null ? null : cache2.identify(from2);
  }, [cache2, from2]);
  var stableOptions = useDeepMemo(function() {
    return __assign(__assign({}, rest), { from: id });
  }, [rest, id]);
  var diff = React15.useMemo(function() {
    var fragment = stableOptions.fragment, fragmentName = stableOptions.fragmentName, from3 = stableOptions.from, _a2 = stableOptions.optimistic, optimistic = _a2 === void 0 ? true : _a2;
    if (from3 === null) {
      return {
        result: diffToResult({
          result: {},
          complete: false
        })
      };
    }
    var cache3 = client.cache;
    var diff2 = cache3.diff(__assign(__assign({}, stableOptions), { returnPartialData: true, id: from3, query: cache3["getFragmentDoc"](fragment, fragmentName), optimistic }));
    return {
      result: diffToResult(__assign(__assign({}, diff2), { result: client["queryManager"].maskFragment({
        fragment,
        fragmentName,
        data: diff2.result
      }) }))
    };
  }, [client, stableOptions]);
  var getSnapshot = React15.useCallback(function() {
    return diff.result;
  }, [diff]);
  return useSyncExternalStore(React15.useCallback(function(forceUpdate) {
    var lastTimeout = 0;
    var subscription = stableOptions.from === null ? null : client.watchFragment(stableOptions).subscribe({
      next: function(result2) {
        if (lib_default(result2, diff.result))
          return;
        diff.result = result2;
        clearTimeout(lastTimeout);
        lastTimeout = setTimeout(forceUpdate);
      }
    });
    return function() {
      subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
      clearTimeout(lastTimeout);
    };
  }, [client, stableOptions, diff]), getSnapshot, getSnapshot);
}
function diffToResult(diff) {
  var result2 = {
    data: diff.result,
    complete: !!diff.complete
  };
  if (diff.missing) {
    result2.missing = mergeDeepArray(diff.missing.map(function(error) {
      return error.missing;
    }));
  }
  return result2;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useSuspenseQuery.js
var React16 = __toESM(require_rehackt(), 1);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/internal/cache/QueryReference.js
var QUERY_REFERENCE_SYMBOL = Symbol();
var PROMISE_SYMBOL = Symbol();
function wrapQueryRef(internalQueryRef) {
  var _a2;
  var ref = (_a2 = {
    toPromise: function() {
      return getWrappedPromise(ref).then(function() {
        return ref;
      });
    }
  }, _a2[QUERY_REFERENCE_SYMBOL] = internalQueryRef, _a2[PROMISE_SYMBOL] = internalQueryRef.promise, _a2);
  return ref;
}
function assertWrappedQueryRef(queryRef) {
  invariant2(!queryRef || QUERY_REFERENCE_SYMBOL in queryRef, 69);
}
function getWrappedPromise(queryRef) {
  var internalQueryRef = unwrapQueryRef(queryRef);
  return internalQueryRef.promise.status === "fulfilled" ? internalQueryRef.promise : queryRef[PROMISE_SYMBOL];
}
function unwrapQueryRef(queryRef) {
  return queryRef[QUERY_REFERENCE_SYMBOL];
}
function updateWrappedQueryRef(queryRef, promise) {
  queryRef[PROMISE_SYMBOL] = promise;
}
var OBSERVED_CHANGED_OPTIONS = [
  "canonizeResults",
  "context",
  "errorPolicy",
  "fetchPolicy",
  "refetchWritePolicy",
  "returnPartialData"
];
var InternalQueryReference = (
  /** @class */
  function() {
    function InternalQueryReference2(observable, options) {
      var _this = this;
      this.key = {};
      this.listeners = /* @__PURE__ */ new Set();
      this.references = 0;
      this.softReferences = 0;
      this.handleNext = this.handleNext.bind(this);
      this.handleError = this.handleError.bind(this);
      this.dispose = this.dispose.bind(this);
      this.observable = observable;
      if (options.onDispose) {
        this.onDispose = options.onDispose;
      }
      this.setResult();
      this.subscribeToQuery();
      var startDisposeTimer = function() {
        var _a2;
        if (!_this.references) {
          _this.autoDisposeTimeoutId = setTimeout(_this.dispose, (_a2 = options.autoDisposeTimeoutMs) !== null && _a2 !== void 0 ? _a2 : 3e4);
        }
      };
      this.promise.then(startDisposeTimer, startDisposeTimer);
    }
    Object.defineProperty(InternalQueryReference2.prototype, "disposed", {
      get: function() {
        return this.subscription.closed;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InternalQueryReference2.prototype, "watchQueryOptions", {
      get: function() {
        return this.observable.options;
      },
      enumerable: false,
      configurable: true
    });
    InternalQueryReference2.prototype.reinitialize = function() {
      var observable = this.observable;
      var originalFetchPolicy = this.watchQueryOptions.fetchPolicy;
      var avoidNetworkRequests = originalFetchPolicy === "no-cache" || originalFetchPolicy === "standby";
      try {
        if (avoidNetworkRequests) {
          observable.silentSetOptions({ fetchPolicy: "standby" });
        } else {
          observable.resetLastResults();
          observable.silentSetOptions({ fetchPolicy: "cache-first" });
        }
        this.subscribeToQuery();
        if (avoidNetworkRequests) {
          return;
        }
        observable.resetDiff();
        this.setResult();
      } finally {
        observable.silentSetOptions({ fetchPolicy: originalFetchPolicy });
      }
    };
    InternalQueryReference2.prototype.retain = function() {
      var _this = this;
      this.references++;
      clearTimeout(this.autoDisposeTimeoutId);
      var disposed = false;
      return function() {
        if (disposed) {
          return;
        }
        disposed = true;
        _this.references--;
        setTimeout(function() {
          if (!_this.references) {
            _this.dispose();
          }
        });
      };
    };
    InternalQueryReference2.prototype.softRetain = function() {
      var _this = this;
      this.softReferences++;
      var disposed = false;
      return function() {
        if (disposed) {
          return;
        }
        disposed = true;
        _this.softReferences--;
        setTimeout(function() {
          if (!_this.softReferences && !_this.references) {
            _this.dispose();
          }
        });
      };
    };
    InternalQueryReference2.prototype.didChangeOptions = function(watchQueryOptions) {
      var _this = this;
      return OBSERVED_CHANGED_OPTIONS.some(function(option) {
        return option in watchQueryOptions && !equal(_this.watchQueryOptions[option], watchQueryOptions[option]);
      });
    };
    InternalQueryReference2.prototype.applyOptions = function(watchQueryOptions) {
      var _a2 = this.watchQueryOptions, currentFetchPolicy = _a2.fetchPolicy, currentCanonizeResults = _a2.canonizeResults;
      if (currentFetchPolicy === "standby" && currentFetchPolicy !== watchQueryOptions.fetchPolicy) {
        this.initiateFetch(this.observable.reobserve(watchQueryOptions));
      } else {
        this.observable.silentSetOptions(watchQueryOptions);
        if (currentCanonizeResults !== watchQueryOptions.canonizeResults) {
          this.result = __assign(__assign({}, this.result), this.observable.getCurrentResult());
          this.promise = createFulfilledPromise(this.result);
        }
      }
      return this.promise;
    };
    InternalQueryReference2.prototype.listen = function(listener) {
      var _this = this;
      this.listeners.add(listener);
      return function() {
        _this.listeners.delete(listener);
      };
    };
    InternalQueryReference2.prototype.refetch = function(variables) {
      return this.initiateFetch(this.observable.refetch(variables));
    };
    InternalQueryReference2.prototype.fetchMore = function(options) {
      return this.initiateFetch(this.observable.fetchMore(options));
    };
    InternalQueryReference2.prototype.dispose = function() {
      this.subscription.unsubscribe();
      this.onDispose();
    };
    InternalQueryReference2.prototype.onDispose = function() {
    };
    InternalQueryReference2.prototype.handleNext = function(result2) {
      var _a2;
      switch (this.promise.status) {
        case "pending": {
          if (result2.data === void 0) {
            result2.data = this.result.data;
          }
          this.result = result2;
          (_a2 = this.resolve) === null || _a2 === void 0 ? void 0 : _a2.call(this, result2);
          break;
        }
        default: {
          if (result2.data === this.result.data && result2.networkStatus === this.result.networkStatus) {
            return;
          }
          if (result2.data === void 0) {
            result2.data = this.result.data;
          }
          this.result = result2;
          this.promise = createFulfilledPromise(result2);
          this.deliver(this.promise);
          break;
        }
      }
    };
    InternalQueryReference2.prototype.handleError = function(error) {
      var _a2;
      this.subscription.unsubscribe();
      this.subscription = this.observable.resubscribeAfterError(this.handleNext, this.handleError);
      switch (this.promise.status) {
        case "pending": {
          (_a2 = this.reject) === null || _a2 === void 0 ? void 0 : _a2.call(this, error);
          break;
        }
        default: {
          this.promise = createRejectedPromise(error);
          this.deliver(this.promise);
        }
      }
    };
    InternalQueryReference2.prototype.deliver = function(promise) {
      this.listeners.forEach(function(listener) {
        return listener(promise);
      });
    };
    InternalQueryReference2.prototype.initiateFetch = function(returnedPromise) {
      var _this = this;
      this.promise = this.createPendingPromise();
      this.promise.catch(function() {
      });
      returnedPromise.then(function() {
        setTimeout(function() {
          var _a2;
          if (_this.promise.status === "pending") {
            _this.result = _this.observable.getCurrentResult();
            (_a2 = _this.resolve) === null || _a2 === void 0 ? void 0 : _a2.call(_this, _this.result);
          }
        });
      }).catch(function(error) {
        var _a2;
        return (_a2 = _this.reject) === null || _a2 === void 0 ? void 0 : _a2.call(_this, error);
      });
      return returnedPromise;
    };
    InternalQueryReference2.prototype.subscribeToQuery = function() {
      var _this = this;
      this.subscription = this.observable.filter(function(result2) {
        return !equal(result2.data, {}) && !equal(result2, _this.result);
      }).subscribe(this.handleNext, this.handleError);
    };
    InternalQueryReference2.prototype.setResult = function() {
      var result2 = this.observable.getCurrentResult(false);
      if (equal(result2, this.result)) {
        return;
      }
      this.result = result2;
      this.promise = result2.data && (!result2.partial || this.watchQueryOptions.returnPartialData) ? createFulfilledPromise(result2) : this.createPendingPromise();
    };
    InternalQueryReference2.prototype.createPendingPromise = function() {
      var _this = this;
      return wrapPromiseWithState(new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      }));
    };
    return InternalQueryReference2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/internal/cache/SuspenseCache.js
var SuspenseCache = (
  /** @class */
  function() {
    function SuspenseCache2(options) {
      if (options === void 0) {
        options = /* @__PURE__ */ Object.create(null);
      }
      this.queryRefs = new Trie(canUseWeakMap);
      this.options = options;
    }
    SuspenseCache2.prototype.getQueryRef = function(cacheKey, createObservable) {
      var ref = this.queryRefs.lookupArray(cacheKey);
      if (!ref.current) {
        ref.current = new InternalQueryReference(createObservable(), {
          autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
          onDispose: function() {
            delete ref.current;
          }
        });
      }
      return ref.current;
    };
    SuspenseCache2.prototype.add = function(cacheKey, queryRef) {
      var ref = this.queryRefs.lookupArray(cacheKey);
      ref.current = queryRef;
    };
    return SuspenseCache2;
  }()
);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/internal/cache/getSuspenseCache.js
var suspenseCacheSymbol = Symbol.for("apollo.suspenseCache");
function getSuspenseCache(client) {
  var _a2;
  if (!client[suspenseCacheSymbol]) {
    client[suspenseCacheSymbol] = new SuspenseCache((_a2 = client.defaultOptions.react) === null || _a2 === void 0 ? void 0 : _a2.suspense);
  }
  return client[suspenseCacheSymbol];
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/constants.js
var skipToken = Symbol.for("apollo.skipToken");

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useSuspenseQuery.js
function useSuspenseQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useSuspenseQuery", _useSuspenseQuery, useApolloClient(typeof options === "object" ? options.client : void 0))(query, options);
}
function _useSuspenseQuery(query, options) {
  var client = useApolloClient(options.client);
  var suspenseCache = getSuspenseCache(client);
  var watchQueryOptions = useWatchQueryOptions({
    client,
    query,
    options
  });
  var fetchPolicy = watchQueryOptions.fetchPolicy, variables = watchQueryOptions.variables;
  var _a2 = options.queryKey, queryKey = _a2 === void 0 ? [] : _a2;
  var cacheKey = __spreadArray([
    query,
    canonicalStringify(variables)
  ], [].concat(queryKey), true);
  var queryRef = suspenseCache.getQueryRef(cacheKey, function() {
    return client.watchQuery(watchQueryOptions);
  });
  var _b = React16.useState([queryRef.key, queryRef.promise]), current = _b[0], setPromise = _b[1];
  if (current[0] !== queryRef.key) {
    current[0] = queryRef.key;
    current[1] = queryRef.promise;
  }
  var promise = current[1];
  if (queryRef.didChangeOptions(watchQueryOptions)) {
    current[1] = promise = queryRef.applyOptions(watchQueryOptions);
  }
  React16.useEffect(function() {
    var dispose = queryRef.retain();
    var removeListener = queryRef.listen(function(promise2) {
      setPromise([queryRef.key, promise2]);
    });
    return function() {
      removeListener();
      dispose();
    };
  }, [queryRef]);
  var skipResult = React16.useMemo(function() {
    var error = toApolloError2(queryRef.result);
    return {
      loading: false,
      data: queryRef.result.data,
      networkStatus: error ? NetworkStatus.error : NetworkStatus.ready,
      error
    };
  }, [queryRef.result]);
  var result2 = fetchPolicy === "standby" ? skipResult : __use(promise);
  var fetchMore = React16.useCallback(function(options2) {
    var promise2 = queryRef.fetchMore(options2);
    setPromise([queryRef.key, queryRef.promise]);
    return promise2;
  }, [queryRef]);
  var refetch = React16.useCallback(function(variables2) {
    var promise2 = queryRef.refetch(variables2);
    setPromise([queryRef.key, queryRef.promise]);
    return promise2;
  }, [queryRef]);
  var subscribeToMore = queryRef.observable.subscribeToMore;
  return React16.useMemo(function() {
    return {
      client,
      data: result2.data,
      error: toApolloError2(result2),
      networkStatus: result2.networkStatus,
      fetchMore,
      refetch,
      subscribeToMore
    };
  }, [client, fetchMore, refetch, result2, subscribeToMore]);
}
function validateOptions(options) {
  var query = options.query, fetchPolicy = options.fetchPolicy, returnPartialData = options.returnPartialData;
  verifyDocumentType(query, DocumentType.Query);
  validateFetchPolicy(fetchPolicy);
  validatePartialDataReturn(fetchPolicy, returnPartialData);
}
function validateFetchPolicy(fetchPolicy) {
  if (fetchPolicy === void 0) {
    fetchPolicy = "cache-first";
  }
  var supportedFetchPolicies = [
    "cache-first",
    "network-only",
    "no-cache",
    "cache-and-network"
  ];
  invariant2(supportedFetchPolicies.includes(fetchPolicy), 66, fetchPolicy);
}
function validatePartialDataReturn(fetchPolicy, returnPartialData) {
  if (fetchPolicy === "no-cache" && returnPartialData) {
    globalThis.__DEV__ !== false && invariant2.warn(67);
  }
}
function toApolloError2(result2) {
  return isNonEmptyArray(result2.errors) ? new ApolloError({ graphQLErrors: result2.errors }) : result2.error;
}
function useWatchQueryOptions(_a2) {
  var client = _a2.client, query = _a2.query, options = _a2.options;
  return useDeepMemo(function() {
    var _a3;
    if (options === skipToken) {
      return { query, fetchPolicy: "standby" };
    }
    var fetchPolicy = options.fetchPolicy || ((_a3 = client.defaultOptions.watchQuery) === null || _a3 === void 0 ? void 0 : _a3.fetchPolicy) || "cache-first";
    var watchQueryOptions = __assign(__assign({}, options), { fetchPolicy, query, notifyOnNetworkStatusChange: false, nextFetchPolicy: void 0 });
    if (globalThis.__DEV__ !== false) {
      validateOptions(watchQueryOptions);
    }
    if (options.skip) {
      watchQueryOptions.fetchPolicy = "standby";
    }
    return watchQueryOptions;
  }, [client, options, query]);
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useBackgroundQuery.js
var React17 = __toESM(require_rehackt(), 1);
function useBackgroundQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useBackgroundQuery", _useBackgroundQuery, useApolloClient(typeof options === "object" ? options.client : void 0))(query, options);
}
function _useBackgroundQuery(query, options) {
  var client = useApolloClient(options.client);
  var suspenseCache = getSuspenseCache(client);
  var watchQueryOptions = useWatchQueryOptions({ client, query, options });
  var fetchPolicy = watchQueryOptions.fetchPolicy, variables = watchQueryOptions.variables;
  var _a2 = options.queryKey, queryKey = _a2 === void 0 ? [] : _a2;
  var didFetchResult = React17.useRef(fetchPolicy !== "standby");
  didFetchResult.current || (didFetchResult.current = fetchPolicy !== "standby");
  var cacheKey = __spreadArray([
    query,
    canonicalStringify(variables)
  ], [].concat(queryKey), true);
  var queryRef = suspenseCache.getQueryRef(cacheKey, function() {
    return client.watchQuery(watchQueryOptions);
  });
  var _b = React17.useState(wrapQueryRef(queryRef)), wrappedQueryRef = _b[0], setWrappedQueryRef = _b[1];
  if (unwrapQueryRef(wrappedQueryRef) !== queryRef) {
    setWrappedQueryRef(wrapQueryRef(queryRef));
  }
  if (queryRef.didChangeOptions(watchQueryOptions)) {
    var promise = queryRef.applyOptions(watchQueryOptions);
    updateWrappedQueryRef(wrappedQueryRef, promise);
  }
  React17.useEffect(function() {
    var id = setTimeout(function() {
      if (queryRef.disposed) {
        suspenseCache.add(cacheKey, queryRef);
      }
    });
    return function() {
      return clearTimeout(id);
    };
  });
  var fetchMore = React17.useCallback(function(options2) {
    var promise2 = queryRef.fetchMore(options2);
    setWrappedQueryRef(wrapQueryRef(queryRef));
    return promise2;
  }, [queryRef]);
  var refetch = React17.useCallback(function(variables2) {
    var promise2 = queryRef.refetch(variables2);
    setWrappedQueryRef(wrapQueryRef(queryRef));
    return promise2;
  }, [queryRef]);
  React17.useEffect(function() {
    return queryRef.softRetain();
  }, [queryRef]);
  return [
    didFetchResult.current ? wrappedQueryRef : void 0,
    {
      fetchMore,
      refetch,
      subscribeToMore: queryRef.observable.subscribeToMore
    }
  ];
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useLoadableQuery.js
var React18 = __toESM(require_rehackt(), 1);
function useLoadableQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var client = useApolloClient(options.client);
  var suspenseCache = getSuspenseCache(client);
  var watchQueryOptions = useWatchQueryOptions({ client, query, options });
  var _a2 = options.queryKey, queryKey = _a2 === void 0 ? [] : _a2;
  var _b = React18.useState(null), queryRef = _b[0], setQueryRef = _b[1];
  assertWrappedQueryRef(queryRef);
  var internalQueryRef = queryRef && unwrapQueryRef(queryRef);
  if (queryRef && (internalQueryRef === null || internalQueryRef === void 0 ? void 0 : internalQueryRef.didChangeOptions(watchQueryOptions))) {
    var promise = internalQueryRef.applyOptions(watchQueryOptions);
    updateWrappedQueryRef(queryRef, promise);
  }
  var calledDuringRender = useRenderGuard();
  var fetchMore = React18.useCallback(function(options2) {
    if (!internalQueryRef) {
      throw new Error("The query has not been loaded. Please load the query.");
    }
    var promise2 = internalQueryRef.fetchMore(options2);
    setQueryRef(wrapQueryRef(internalQueryRef));
    return promise2;
  }, [internalQueryRef]);
  var refetch = React18.useCallback(function(options2) {
    if (!internalQueryRef) {
      throw new Error("The query has not been loaded. Please load the query.");
    }
    var promise2 = internalQueryRef.refetch(options2);
    setQueryRef(wrapQueryRef(internalQueryRef));
    return promise2;
  }, [internalQueryRef]);
  var loadQuery = React18.useCallback(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    invariant2(!calledDuringRender(), 59);
    var variables = args[0];
    var cacheKey = __spreadArray([
      query,
      canonicalStringify(variables)
    ], [].concat(queryKey), true);
    var queryRef2 = suspenseCache.getQueryRef(cacheKey, function() {
      return client.watchQuery(__assign(__assign({}, watchQueryOptions), { variables }));
    });
    setQueryRef(wrapQueryRef(queryRef2));
  }, [
    query,
    queryKey,
    suspenseCache,
    watchQueryOptions,
    calledDuringRender,
    client
  ]);
  var subscribeToMore = React18.useCallback(function(options2) {
    invariant2(internalQueryRef, 60);
    return internalQueryRef.observable.subscribeToMore(options2);
  }, [internalQueryRef]);
  var reset = React18.useCallback(function() {
    setQueryRef(null);
  }, []);
  return [loadQuery, queryRef, { fetchMore, refetch, reset, subscribeToMore }];
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useQueryRefHandlers.js
var React19 = __toESM(require_rehackt(), 1);
function useQueryRefHandlers(queryRef) {
  var unwrapped = unwrapQueryRef(queryRef);
  return wrapHook("useQueryRefHandlers", _useQueryRefHandlers, unwrapped ? unwrapped["observable"] : useApolloClient())(queryRef);
}
function _useQueryRefHandlers(queryRef) {
  assertWrappedQueryRef(queryRef);
  var _a2 = React19.useState(queryRef), previousQueryRef = _a2[0], setPreviousQueryRef = _a2[1];
  var _b = React19.useState(queryRef), wrappedQueryRef = _b[0], setWrappedQueryRef = _b[1];
  var internalQueryRef = unwrapQueryRef(queryRef);
  if (previousQueryRef !== queryRef) {
    setPreviousQueryRef(queryRef);
    setWrappedQueryRef(queryRef);
  } else {
    updateWrappedQueryRef(queryRef, getWrappedPromise(wrappedQueryRef));
  }
  var refetch = React19.useCallback(function(variables) {
    var promise = internalQueryRef.refetch(variables);
    setWrappedQueryRef(wrapQueryRef(internalQueryRef));
    return promise;
  }, [internalQueryRef]);
  var fetchMore = React19.useCallback(function(options) {
    var promise = internalQueryRef.fetchMore(options);
    setWrappedQueryRef(wrapQueryRef(internalQueryRef));
    return promise;
  }, [internalQueryRef]);
  return {
    refetch,
    fetchMore,
    subscribeToMore: internalQueryRef.observable.subscribeToMore
  };
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/hooks/useReadQuery.js
var React20 = __toESM(require_rehackt(), 1);
function useReadQuery(queryRef) {
  var unwrapped = unwrapQueryRef(queryRef);
  return wrapHook("useReadQuery", _useReadQuery, unwrapped ? unwrapped["observable"] : useApolloClient())(queryRef);
}
function _useReadQuery(queryRef) {
  assertWrappedQueryRef(queryRef);
  var internalQueryRef = React20.useMemo(function() {
    return unwrapQueryRef(queryRef);
  }, [queryRef]);
  var getPromise = React20.useCallback(function() {
    return getWrappedPromise(queryRef);
  }, [queryRef]);
  if (internalQueryRef.disposed) {
    internalQueryRef.reinitialize();
    updateWrappedQueryRef(queryRef, internalQueryRef.promise);
  }
  React20.useEffect(function() {
    return internalQueryRef.retain();
  }, [internalQueryRef]);
  var promise = useSyncExternalStore(React20.useCallback(function(forceUpdate) {
    return internalQueryRef.listen(function(promise2) {
      updateWrappedQueryRef(queryRef, promise2);
      forceUpdate();
    });
  }, [internalQueryRef, queryRef]), getPromise, getPromise);
  var result2 = __use(promise);
  return React20.useMemo(function() {
    return {
      data: result2.data,
      networkStatus: result2.networkStatus,
      error: toApolloError2(result2)
    };
  }, [result2]);
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@apollo/client/react/query-preloader/createQueryPreloader.js
function createQueryPreloader(client) {
  return wrapHook("createQueryPreloader", _createQueryPreloader, client)(client);
}
var _createQueryPreloader = function(client) {
  return function preloadQuery(query, options) {
    var _a2, _b;
    if (options === void 0) {
      options = /* @__PURE__ */ Object.create(null);
    }
    var queryRef = new InternalQueryReference(client.watchQuery(__assign(__assign({}, options), { query })), {
      autoDisposeTimeoutMs: (_b = (_a2 = client.defaultOptions.react) === null || _a2 === void 0 ? void 0 : _a2.suspense) === null || _b === void 0 ? void 0 : _b.autoDisposeTimeoutMs
    });
    return wrapQueryRef(queryRef);
  };
};
export {
  ApolloCache,
  ApolloClient,
  ApolloConsumer,
  ApolloError,
  ApolloLink,
  ApolloProvider,
  Cache,
  DocumentTransform,
  DocumentType,
  HttpLink,
  InMemoryCache,
  MissingFieldError,
  NetworkStatus,
  Observable,
  ObservableQuery,
  checkFetcher,
  concat,
  createHttpLink,
  createQueryPreloader,
  createSignalIfSupported,
  defaultDataIdFromObject,
  defaultPrinter,
  disableExperimentalFragmentVariables,
  disableFragmentWarnings,
  empty,
  enableExperimentalFragmentVariables,
  execute,
  fallbackHttpConfig,
  from,
  fromError,
  fromPromise,
  getApolloContext,
  gql,
  isApolloError,
  isNetworkRequestSettled,
  isReference,
  makeReference,
  makeVar,
  mergeOptions,
  operationName,
  parseAndCheckHttpResponse,
  parser,
  resetApolloContext,
  resetCaches,
  rewriteURIForGET,
  selectHttpOptionsAndBody,
  selectHttpOptionsAndBodyInternal,
  selectURI,
  serializeFetchParameter,
  setVerbosity as setLogVerbosity,
  skipToken,
  split,
  throwServerError,
  toPromise,
  useApolloClient,
  useBackgroundQuery,
  useFragment,
  useLazyQuery,
  useLoadableQuery,
  useMutation,
  useQuery,
  useQueryRefHandlers,
  useReactiveVar,
  useReadQuery,
  useSubscription,
  useSuspenseQuery
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@apollo_client.js.map
