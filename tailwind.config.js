// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//     //   keyframes: {
//     //     blob: {
//     //       '0%': { transform: 'scale(1)' },
//     //       '33%': { transform: 'scale(1.2)' },
//     //       '66%': { transform: 'scale(0.8)' },
//     //       '100%': { transform: 'scale(1)' },
//     //     },
//     //   },

//       animation: {
//         blob: "blob 7s infinite",
//       },
//     keyframes: {
//   blob: {
//     '0%': {
//       transform: 'translate(0px, 0px) scale(1)',
//     },
//     '33%': {
//       transform: 'translate(30px, -50px) scale(1.1)',
//     },
//     '66%': {
//       transform: 'translate(-20px, 20px) scale(0.9)',
//     },
//     '100%': {
//       transform: 'translate(0px, 0px) scale(1)',
//     },
//   },
// },

//       animation: {
//         blob: 'blob 10s infinite',
//       },
//      backgroundImage: {
//         'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backgroundImage: {
        'skills-gradient':
          'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};

