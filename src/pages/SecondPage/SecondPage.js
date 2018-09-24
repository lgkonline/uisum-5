// @flow

import React from "react";

import Page from "../../components/Page/Page";
import Container from "../../components/Container/Container";

import Documentation from "../../Documentation/Documentation";

type Props = {
    routeName: string
};

class SecondPage extends React.Component<Props> {
    render() {
        return (
            <Page {...this.props}>
                <Container>
                    <h1 className="page-header">Second page! <a href="#/home">Back</a></h1>

                    <Documentation />
                </Container>
            </Page>
        );
    }
}

export default SecondPage;