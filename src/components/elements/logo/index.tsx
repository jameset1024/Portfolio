import React from "react";

type LogoType = {
  width: number,
  height: number | string
}
export function Logo ({width, height}: LogoType) {
  return (
    <svg data-testid="ejt-logo" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 488 76">
      <path className="cls-1" d="m4,11.47h21.35v4.62H9.21v17.54h14.09v4.62h-14.09v17.9h16.14v4.62H4V11.47Z"/>
      <path className="cls-1" d="m45.6,40.96h-7.26v19.81h-5.21V11.47h11.96c3.91,0,6.87.99,8.88,2.97,2,1.98,3.01,4.68,3.01,8.11v7.26c0,5.28-2.1,8.71-6.31,10.27l7.85,20.69h-5.72l-7.19-19.81Zm-7.26-4.55h6.53c4.6,0,6.9-2.23,6.9-6.68v-6.97c0-4.45-2.3-6.68-6.9-6.68h-6.53v20.32Z"/>
      <path className="cls-1" d="m66.66,11.47h5.21v49.3h-5.21V11.47Z"/>
      <path className="cls-1" d="m81.99,11.47h5.21v49.3h-5.21V11.47Zm19.22,0h5.65l-10.34,24.58,10.93,24.73h-5.8l-10.71-24.58,10.27-24.73Z"/>
      <path className="cls-1" d="m127.7,11.47h5.21v34.78c0,6.26-.81,12.18-2.42,17.75l-2.27,7.7h-5.36l2.2-7.7c1.76-6.26,2.64-12.15,2.64-17.68V11.47Z"/>
      <path className="cls-1" d="m163.65,60.77l-3.01-13.79h-13.21l-3.01,13.79h-5.21l11.15-49.3h7.34l11.15,49.3h-5.21Zm-15.26-18.34h11.22l-5.65-25.9-5.58,25.9Z"/>
      <path className="cls-1" d="m209.87,11.47v49.3h-4.99v-25.97c0-5.04.15-9.9.44-14.6l-10.05,27.44h-5.5l-10.2-27.44c.34,4.55.51,9.39.51,14.53v26.05h-4.92V11.47h6.16l11.15,30.89,11.15-30.89h6.24Z"/>
      <path className="cls-1" d="m219.99,11.47h21.35v4.62h-16.14v17.54h14.09v4.62h-14.09v17.9h16.14v4.62h-21.35V11.47Z"/>
      <path className="cls-1" d="m246.11,21.45c0-3.23,1.07-5.76,3.23-7.59,2.15-1.83,5.17-2.75,9.06-2.75s7.18.42,9.87,1.25v4.99c-2.54-.93-5.65-1.39-9.32-1.39-5.04,0-7.56,1.91-7.56,5.72v3.52c0,1.71.33,3.06.99,4.03.66.98,1.77,1.91,3.34,2.79l8.51,4.77c3.96,2.15,5.94,5.41,5.94,9.76v3.96c0,3.38-1.15,5.99-3.45,7.85-2.3,1.86-5.61,2.79-9.94,2.79s-7.77-.49-10.31-1.47v-4.99c2.89,1.08,6.16,1.61,9.83,1.61,5.77,0,8.66-2.03,8.66-6.09v-3.08c0-1.61-.29-2.89-.88-3.82-.59-.93-1.64-1.81-3.15-2.64l-8.44-4.62c-4.26-2.3-6.38-5.72-6.38-10.27v-4.33Z"/>
      <path className="cls-1" d="m311.41,11.47v4.62h-9.54v44.68h-5.28V16.09h-9.54v-4.62h24.36Z"/>
      <path className="cls-1" d="m338.04,11.47h5.28v49.3h-5.28v-21.86h-15.7v21.86h-5.21V11.47h5.21v22.82h15.7V11.47Z"/>
      <path className="cls-1" d="m352.72,22.4c0-3.47,1.05-6.28,3.16-8.44,2.1-2.15,5.2-3.23,9.28-3.23s7.18,1.08,9.28,3.23c2.1,2.15,3.15,4.97,3.15,8.44v27.51c0,3.47-1.05,6.27-3.15,8.4-2.1,2.13-5.21,3.19-9.32,3.19s-7.2-1.06-9.28-3.19c-2.08-2.13-3.12-4.93-3.12-8.4v-27.51Zm19.66.07c0-4.65-2.41-6.97-7.23-6.97s-7.23,2.32-7.23,6.97v27.29c0,4.7,2.41,7.04,7.23,7.04s7.23-2.35,7.23-7.04v-27.29Z"/>
      <path className="cls-1" d="m421.68,11.47v49.3h-4.99v-25.97c0-5.04.15-9.9.44-14.6l-10.05,27.44h-5.5l-10.2-27.44c.34,4.55.51,9.39.51,14.53v26.05h-4.92V11.47h6.16l11.15,30.89,11.15-30.89h6.24Z"/>
      <path className="cls-1" d="m452.42,60.77l-3.01-13.79h-13.21l-3.01,13.79h-5.21l11.15-49.3h7.34l11.15,49.3h-5.21Zm-15.26-18.34h11.23l-5.65-25.9-5.58,25.9Z"/>
      <path className="cls-1" d="m460.93,21.45c0-3.23,1.07-5.76,3.23-7.59,2.15-1.83,5.17-2.75,9.06-2.75s7.18.42,9.87,1.25v4.99c-2.54-.93-5.65-1.39-9.32-1.39-5.04,0-7.56,1.91-7.56,5.72v3.52c0,1.71.33,3.06.99,4.03.66.98,1.77,1.91,3.34,2.79l8.51,4.77c3.96,2.15,5.94,5.41,5.94,9.76v3.96c0,3.38-1.15,5.99-3.45,7.85-2.3,1.86-5.61,2.79-9.94,2.79s-7.77-.49-10.31-1.47v-4.99c2.89,1.08,6.16,1.61,9.83,1.61,5.77,0,8.66-2.03,8.66-6.09v-3.08c0-1.61-.29-2.89-.88-3.82-.59-.93-1.64-1.81-3.15-2.64l-8.44-4.62c-4.25-2.3-6.38-5.72-6.38-10.27v-4.33Z"/>
      <rect className="cls-1 rec-1" x="4" y="3" width="104.55" height="3.67"/>
      <rect className="cls-1 rec-2" x="288.31" y="65.03" width="196.69" height="3.67"/>
    </svg>
  );
}
