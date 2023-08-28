import * as React from 'react';
import IconStart from "@/public/images/start.svg";

export interface viewStartFnProps {
    props?: Array<{
      data: String
      }>
}

export default function viewStartFn (props: viewStartFnProps) {
  // console.log(props.data);
  const { data } = props;
  debugger
  return (
    <div>
      <img src='images/start.svg' alt='icon_star'/>
      <h1>{data}</h1>
    </div>
  );
}
