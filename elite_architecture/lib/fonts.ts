import localFont from 'next/font/local';

export const helvetica = localFont({
  src: [
    {
      path: '../app/fonts/helvetica-bold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/helvetica.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});
