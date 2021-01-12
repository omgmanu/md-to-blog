## Changelog {#changelog}

### React {#react}

- Warn when a string ref is used in a manner that's not amenable to a future codemod ([@lunaruan](https://github.com/lunaruan) in [#17864](https://github.com/facebook/react/pull/17864))
- Deprecate `React.createFactory()` ([@trueadm](https://github.com/trueadm) in [#17878](https://github.com/facebook/react/pull/17878))


### Concurrent Mode (Experimental) {#concurrent-mode-experimental}

- Warn for problematic usages of `ReactDOM.createRoot()` ([@trueadm](https://github.com/trueadm) in [#17937](https://github.com/facebook/react/pull/17937))
- Remove `ReactDOM.createRoot()` callback params and added warnings on usage ([@bvaughn](https://github.com/bvaughn) in [#17916](https://github.com/facebook/react/pull/17916))
- Don't group Idle/Offscreen work with other work ([@sebmarkbage](https://github.com/sebmarkbage) in [#17456](https://github.com/facebook/react/pull/17456))
- Adjust `SuspenseList` CPU bound heuristic ([@sebmarkbage](https://github.com/sebmarkbage) in [#17455](https://github.com/facebook/react/pull/17455))
- Add missing event plugin priorities ([@trueadm](https://github.com/trueadm) in [#17914](https://github.com/facebook/react/pull/17914))
- Fix `isPending` only being true when transitioning from inside an input event ([@acdlite](https://github.com/acdlite) in [#17382](https://github.com/facebook/react/pull/17382))
- Fix `React.memo` components dropping updates when interrupted by a higher priority update ([@acdlite](https://github.com/acdlite) in [#18091](https://github.com/facebook/react/pull/18091))
- Don't warn when suspending at the wrong priority ([@gaearon](https://github.com/gaearon) in [#17971](https://github.com/facebook/react/pull/17971))
- Fix a bug with rebasing updates ([@acdlite](https://github.com/acdlite) and [@sebmarkbage](https://github.com/sebmarkbage) in [#17560](https://github.com/facebook/react/pull/17560), [#17510](https://github.com/facebook/react/pull/17510), [#17483](https://github.com/facebook/react/pull/17483), [#17480](https://github.com/facebook/react/pull/17480))
