export default function Icons() {
  return (
    <div className="flex flex-col  items-center py-10 overflow-x-auto">
      <div className="flex gap-8 items-center w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 pl-20">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-[#34D399]">
            <TextIcon className="h-10 w-10 text-white" />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            Say "Hi" to WhatsApp Bot
            <br />
            or tap "Order on WhatsApp Button"{"\n                  "}
          </p>
        </div>
        <div className="flex items-center">
          <ArrowRightIcon className="h-6 w-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-[#34D399]">
            <ServerIcon className="h-10 w-10 text-white" />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            Select the Service you need
          </p>
        </div>
        <div className="flex items-center">
          <ArrowRightIcon className="h-6 w-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-[#34D399]">
            <CheckIcon className="h-10 w-10 text-white" />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            Confirm your Order
          </p>
        </div>
        <div className="flex items-center">
          <ArrowRightIcon className="h-6 w-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-[#34D399]">
            <SendIcon className="h-10 w-10 text-white" />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            Enjoy instant service delivery
          </p>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

// import React from 'react';

// export function TextIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 6.1H3" />
//       <path d="M21 12.1H3" />
//       <path d="M15.1 18H3" />
//     </svg>
//   );
// }

// export function ArrowRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   );
// }

// export function CheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="20 6 9 17 4 12" />
//     </svg>
//   );
// }

// export function SendIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m22 2-7 20-4-9-9-4Z" />
//       <path d="M22 2 11 13" />
//     </svg>
//   );
// }

// export function ServerIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
//       <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
//       <line x1="6" x2="6.01" y1="6" y2="6" />
//       <line x1="6" x2="6.01" y1="18" y2="18" />
//     </svg>
//   );
// }
