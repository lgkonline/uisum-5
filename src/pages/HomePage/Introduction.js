// @flow

import React from "react";

type Props = {};

class Introduction extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1 className="page-header">About Uisum 5</h1>

                <p>
                    Uisum 5 will be built from ground up. Instead of using Bootstrap I will create my own CSS framework, that mainly uses
                    CSS Custom Properties (a.k.a. "CSS Variables") instead of Sass Variables. Why? CSS Custom Properties are now supported by
                    all current browser versions (except for Internet Explorer).
                </p>
                <p>
                    If you also want to support browsers, that don't support CSS Custom Properties, you can use
                    the <a href="https://github.com/postcss/postcss-custom-properties" rel="noopener noreferrer" target="_blank">PostCSS Custom Properties</a>, as I also
                    do for development.
                </p>
            </div>
        );
    }
}

export default Introduction;