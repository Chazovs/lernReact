import React from 'react';
import PropTypes from 'prop-types';
import Content from './../components/Main/Content'
import Navbar from "../components/Main/Navbar";
import SidebarLeft from "../components/Main/SidebarLeft";


class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const {children} = this.props;

        return (
            <>
                <Navbar />
                <div className="container-fluid">
                <div className = "row">
                    <SidebarLeft />
                    <Content>
                        {children}
                    </Content>
                </div>
                </div>
            </>
    );
    }
    }

    export default AppLayout;
