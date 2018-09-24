/**
 * This overrides/extends the config of react-scripts (Create React App).
 */

const reactAppRewirePostcss = require("react-app-rewire-postcss");
const postcssCustomProperties = require("postcss-custom-properties");

module.exports = config => reactAppRewirePostcss(config, {
    plugins: () => [
        postcssCustomProperties({
            importFrom: "src/components/Btn/Btn.css"
        })
    ]
});