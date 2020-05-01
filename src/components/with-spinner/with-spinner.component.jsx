import React from "react";
import { SpinnerContainer } from "./with-spinner.styles";
import { SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent />
  );

export default WithSpinner;
