// @flow

import React from "react";

import Page from "../../components/Page/Page";
import Container from "../../components/Container/Container";

import Customizer from "../../Customizer/Customizer";

type Props = {
    routeName: string
};

class CustomizerPage extends React.Component<Props> {
    render() {
        return (
            <Page {...this.props}>
                <Container>
                    <h1 className="page-header">Customizer</h1>

                    <Customizer />
                </Container>
            </Page>
        );
    }
}

export default CustomizerPage;