import React from "react";
import PropTypes from "prop-types";
import withRouter from "../Components/Common/withRouter";

//redux

const Layout = (props) => {
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <div className="main-content">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object
};

export default withRouter(Layout);
