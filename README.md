# hyper-dark-scrollbar
Dark scrollbar for [Hyper](https://github.com/zeit/hyper) - a plugin that stylizes the chunky Windows-ish scrollbar into a more sleek scrollbar.

The scrollbar is originally designed for [hyperterm-atom-dark](https://github.com/mdo/hyperterm-atom-dark), however, it also looks great on the standard theme, and should look fine on dark themes, as it utilises the theme background color. You're ~welcome~ encouraged to fork this project and modify it if you need to tinker with the colors to fit your theme better, or create a PR if I missed something that needs fixing.

![screenshot](https://dev.moso.io/hyper/hyper-dark-scrollbar/screenshot.png)

### Changelog
**1.2.4**
- Added hover-effect on the scrollbar

**1.2.3**
- Fixed scrollbar always visible ([4922649](https://github.com/moso/hyper-dark-scrollbar/commit/4922649b3505980524d1d856651f330a98ac02ac)) - thanks [@krve](https://github.com/krve)!

**1.2.2**
- Added attention note about the order of plugins for this plugin to work correctly
- Removed docs about `hpm`

**1.2.1**
- Removed support for Hyper v1.4.8

**1.2.0**
- Fixed lacking support for xterm api in Hyper v2.x
- Upgraded dependencies

**1.1.0**
- [henrikdahl](https://github.com/henrikdahl) magic - see [e6124e7](https://github.com/moso/hyper-dark-scrollbar/commit/e6124e7640291940acf46883d4022bef900ada60) for changes.

**1.0.0**
- Initial release.

### Install

**Hyper store**:
```
hyper i hyper-dark-scrollbar
```

**Manually**:

1. Open Hyper's preferences with `Ctrl+,` (or manually at `~/.hyper.js`) with your editor.
2. Update your list of plugins to include hyper-dark-scrollbar, like so:

        plugins: [
            'hyper-dark-scrollbar'
        ],

3. Reload (`Ctrl+Shift+R`) or restart Hyper and voila!

### Attention

If you have added a theme to Hyper, you will need to make sure `hyper-dark-scrollbar` is loaded **_after_** the theme; preferably last. Otherwise the utilisation of the `color`-package won't work, and you'll end up with whatever colors are defined in your `~/.hyper.js`.

Check your `~/.hyper.js` and make sure it look like this:

```javascript
module.exports = {
    config: {

        // ...

        plugins: [
            'theme',
            // other plugins
            'hyper-dark-scrollbar'
        ],

        // ...
    }
}
```

### Related

- [hyper-snazzy-scrollbar](https://github.com/Stanzilla/hyper-dark-scrollbar) - a fork for the [hyper-snazzy](https://github.com/sindresorhus/hyper-snazzy) theme
- [hyper-arc-dark-controls](https://github.com/moso/hyper-arc-dark-controls)
- [hyper-pocillo-controls](https://github.com/moso/hyper-pocillo-controls)

### License

MIT
