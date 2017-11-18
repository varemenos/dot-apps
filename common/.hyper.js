module.exports = {
    config: {
        // 	The default size in pixels for the terminal
        fontSize: 12,

        // The font family to use with optional fallbacks
        fontFamily: 'Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

        // The color of the caret in the terminal
        // cursorColor: "#F81CE5,

        // The shape of the caret in the terminal. Available options are: 'BEAM', 'UNDERLINE', 'BLOCK'
        // cursorShape: "BLOCK",

        // The color of the main text of the terminal
        // foregroundColor: "#fff",

        // The color and opacity of the window and main terminal background
        // backgroundColor: "#000",

        // The color of the main window border and tab bar
        // borderColor: "#333",

        // Custom CSS to include in the main window
        // css: "",

        // Custom CSS to include in the terminal window
        // termCSS: "",

        // CSS padding values for the space around each term
        // padding: "12px 14px",

        // A list of overrides for the color palette. The names of the keys represent the "ANSI 16", which can all be seen in the default config.
        // colors: { black: "#000000", red: "#ff0000", ... },

        // A path to a custom shell to run when Hyper starts a new session
        // shell: "",

        // Override the npm registry URL to use when installing plugins
        // npmRegistry: npm get registry,

        // The default width/height in pixels of a new window e.g. [540, 380]
        // windowSize: null,

        // If true, selected text will automatically be copied to the clipboard
        // copyOnSelect: false,

        // System bell configuration. Available options are: "SOUND", false
        // bell: "SOUND",

        // The URL of the bell sound to use, used only if "bell" is set to "SOUND"
        // bellSoundURL: "lib-resource:hterm/audio/bell",

        // Change the behaviour of modifier keys to act as meta key
        // modifierKeys: { cmdIsMeta: false, altIsMeta: true },

        showWindowControls: false,

        showHamburgerMenu: true,

        // URL to custom bell
        // bellSoundURL: 'http://example.com/bell.mp3',

        // for advanced config flags please refer to https://hyper.is/#cfg
        overlay: {
            alwaysOnTop: true,
            animate: false,
            hasShadow: false,
            hideDock: false,
            hideOnBlur: false,
            hotkeys: ['F12'],
            position: 'top',
            primaryDisplay: false,
            resizable: true,
            startAlone: true,
            startup: true,
            size: 0.4,
            tray: false,
            unique: true
        }
    },

    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    plugins: [
        "hyperterm-overlay",
        // "hypercwd",
        "hyperlinks",
        "hyper-monokai-cobalt2",
        "hyper-font-smoothing"
    ],

    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: []
};