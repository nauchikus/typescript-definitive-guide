import * as React from "react";
import { Component, ErrorInfo } from "react";

export interface ErrorBoundaryDefaultProps {

}

export interface ErrorBoundaryProps extends ErrorBoundaryDefaultProps {

}

interface ErrorBoundaryState {

}

interface ErrorBoundarySnapShot {

}

type DefaultProps = ErrorBoundaryDefaultProps;
type Props = ErrorBoundaryProps;
type State = ErrorBoundaryState;
type SnapShot = ErrorBoundarySnapShot;


export default class ErrorBoundary extends Component<Props, State, SnapShot> {
  static getDerivedStateFromError(){
    return { hasError: false }
  }
  constructor(props: Props) {
    super(props);
  }


  public componentDidCatch ? ( error: Error, errorInfo: ErrorInfo ): void {
    console.log(error, errorInfo);
  }

  render(){
    return this.props.children;
  }
};
