import React from "react";
import PropTypes from "prop-types";

class Content extends React.Component{

static propTypes = {
    children: PropTypes.node.isRequired
}

render() {
    const { children } = this.props;
    return(
        <main id="main" className="col-md-9 ml-sm-auto col-lg-10 pt-5 px-4">{ children }</main>
    );
}
}

export default Content;
