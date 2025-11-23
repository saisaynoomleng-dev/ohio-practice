import localFont from 'next/font/local';

export const Inter = localFont({
  src: [
    {
      path: '../app/fonts/Inter_18pt-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/fonts/Inter_18pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/Inter_18pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/Inter_18pt-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/Inter_18pt-Black.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});
