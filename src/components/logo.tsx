const Logo = ({ className = "", ...props }) => (
  // <svg
  //   width="32"
  //   height="32"
  //   viewBox="0 0 32 32"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   className={className}
  //   {...props}
  // >
  //   <rect width="100%" height="100%" rx="16" fill="white" />
  //   <path
  //     fillRule="evenodd"
  //     clipRule="evenodd"
  //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  //     fill="black"
  //   />
  // </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
    // xml:space="preserve"
    width="130"
    height="32"
    viewBox="0 0 406 100"
  >
    <path d="M92.62 78.86V23.47h10.39V46.1h26.13V23.47h10.33v55.39h-10.33V54.97h-26.13v23.89H92.62Zm68.6.98q-5.2 0-9.35-2.54-4.15-2.54-4.15-9.4 0-8.2 6.98-11.49 6.92-3.28 19.67-3.28v-3.58q0-3.06-1.55-4.79-1.56-1.67-5.71-1.67-4.27 0-6.06 1.38-1.8 1.39-1.8 3.4v1.1h-9.34q-.05-.46-.05-1.79 0-5.48 4.73-8.6 4.67-3.17 12.52-3.17 8.48 0 12.75 3.47 4.2 3.46 4.2 9.92v20.3q0 1.45.81 2.14.81.7 2.02.7h2.6v6.63q-2.6 1.21-6.06 1.21-3.17 0-5.25-1.56-2.07-1.56-2.82-4.2h-.58q-4.73 5.82-13.56 5.82Zm2.89-7.73q4.78 0 7.55-2.77 2.71-2.77 2.71-7.44V60q-7.84 0-12.28 1.5-4.45 1.43-4.45 5.41 0 5.2 6.47 5.2Zm31.67 6.75V20.47h9.7v58.39h-9.7Zm22.15 0V44.3h-6.17v-7.9h6.17V30.9q0-4.78 2.48-7.96 2.43-3.11 8.2-3.11 1.67 0 3.57.34 1.9.35 3.12.87v6.7h-4.04q-3.64 0-3.64 3.63v5.02h7.68v7.9h-7.68v34.56h-9.69Zm24.23 0V23.47h9.87l24.06 33q.98 1.5 1.67 2.71.75 1.27 1.04 1.73l.4-.11-.11-4.39V23.47H289v55.39h-9.7L255.1 45.5q-.93-1.21-1.73-2.71-.81-1.5-1.04-1.79l-.4.23q0 .4.1 1.62.07 1.2.07 2.82v33.18h-9.93Zm58.21-49.1v-9.29h9.7v9.3h-9.7Zm0 49.1V36.4h9.7v42.46h-9.7Zm20.95 0V36.4h7.96l.8 5.65h.58q2.37-3.17 5.77-4.9 3.46-1.74 7.9-1.74 6.47 0 10.1 3.52 3.64 3.52 3.64 11.25v28.68h-9.7V51.9q0-4.38-1.96-6.23-2.02-1.84-5.88-1.84-4.04 0-6.8 2.88-2.72 2.89-2.72 7.44v24.7h-9.7Zm65.48.98q-10.33 0-15.35-5.43-5.02-5.42-5.02-16.78 0-11.37 5.08-16.8 5.02-5.42 15.29-5.42 9.4 0 14.02 5.25 4.67 5.25 4.67 16.39v2.94h-29.2q.24 6.29 2.72 9.23 2.48 2.94 7.9 2.94 4.04 0 6.52-2.07 2.48-2.02 2.48-6.06h9.58q0 7.79-5.2 11.83-5.18 3.98-13.5 3.98Zm-10.33-26.71h18.92q0-10.04-8.6-10.04-4.84 0-7.26 2.48-2.48 2.42-3.06 7.56Z" />
    <linearGradient
      id="a"
      x1="0%"
      x2="100%"
      y1="0%"
      y2="0%"
      gradientTransform="rotate(25)"
    >
      <stop offset="0%" stop-color="#0d7ce9" />
      <stop offset="100%" stop-color="#15cff1" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M25.44 70.42A41 41 0 0 1 83.28 12.6zm49.12-40.84A41 41 0 0 1 16.72 87.4z"
      transform="translate(-16.12 -1.98)"
    />
  </svg>
);

export default Logo;
