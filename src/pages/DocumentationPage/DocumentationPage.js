// @flow

import React from "react";

import Page from "../../components/Page/Page";
import Container from "../../components/Container/Container";

import Documentation from "../../Documentation/Documentation";

type Props = {
    routeName: string
};

class DocumentationPage extends React.Component<Props> {
    render() {
        return (
            <Page {...this.props}>
                <Container>
                    <h1 className="page-header">Documentation</h1>

                    <Documentation />
                </Container>
            </Page>
        );
    }
}

export default DocumentationPage;