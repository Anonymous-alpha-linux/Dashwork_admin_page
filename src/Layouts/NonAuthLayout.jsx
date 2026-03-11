import React, { useEffect } from "react";
import withRouter from "../Components/Common/withRouter";

const NonAuthLayout = ({ children, layoutModeType }) => {
  // const { layoutModeType } = useSelector((state) => ({
  //   layoutModeType: state.Layout.layoutModeType
  // }));

  useEffect(() => {
    if (layoutModeType === "dark") {
      document.body.setAttribute("data-bs-theme", "dark");
    } else {
      document.body.setAttribute("data-bs-theme", "light");
    }
    return () => {
      document.body.removeAttribute("data-bs-theme");
    };
  }, [layoutModeType]);
  return <div>{children}</div>;
};

export default withRouter(NonAuthLayout);
