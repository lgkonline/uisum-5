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

                    <article>
                        <h2>Latest thoughts</h2>

                        <ul>
                            <li>
                                I've created <code>SidebarController</code>, which controls <code>in</code> state&nbsp;
                                from the <code>Sidebar</code>. <code>SidebarController</code> is wrapped around <code>Router</code>.&nbsp;
                                <code>SidebarController</code> changes the CSS variable <code>--Sidebar-width</code>, which is used by&nbsp;
                                <code>Router</code> for <code>padding-left</code> and by <code>Sidebar</code> for <code>width</code>.&nbsp;
                            </li>
                            <li>
                                For the next step I should also create something like a controller for media query which can e.g.&nbsp;
                                used by <code>ActionMenu</code>.
                            </li>
                        </ul>
                    </article>

                    <p>
                        Just press <kbd>ctrl + ;</kbd>
                    </p>

                    <div style={{ marginBottom: "1rem" }}>
                        <input type="text" placeholder="And now type something" />
                        {" "}
                        <Btn primary>And now click</Btn>
                    </div>
                </Container>
            </Page>
        );
    }
}

export default HomePage;