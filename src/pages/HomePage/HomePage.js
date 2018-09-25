// @flow

import React from "react";

import Page from "../../components/Page/Page";
import Container from "../../components/Container/Container";
import Btn from "../../components/Btn/Btn";

import Introduction from "./Introduction";

type Props = {
    routeName: string
};

type State = {
    bla: string
}

class HomePage extends React.Component<Props, State> {
    /**
     * It's now much easier to create events when the page did appear. 
     * Instead of running `uiGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`, just use
     * the following method:
     */
    componentDidRoute(): void {
        console.log("Routed to HomePage! This event was fired with componentDidRoute()");
    }

    render() {
        return (
            <Page {...this.props}>
                <Container>
                    <Introduction />

                    <a href="#/second">Second page!</a>

                    <p>
                        Just press <kbd>ctrl + ;</kbd>
                    </p>

                    <div style={{ marginBottom: "1rem" }}>
                        <input type="text" placeholder="And now type something" />
                        {" "}<Btn>And now click</Btn>
                    </div>
                </Container>
            </Page>
        );
    }
}

export default HomePage;