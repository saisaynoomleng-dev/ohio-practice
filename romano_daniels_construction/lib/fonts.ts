import localFont from 'next/font/local';

export const helvetica = localFont({
  src: [
    {
      path: '../app/fonts/helvetica/helvetica-bold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/helvetica/helvetica.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

export const azeret_mono = localFont({
  src: [
    {
      path: '../app/fonts/azeret-mono/AzeretMono-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/fonts/azeret-mono/AzeretMono-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-azeret-mono',
});
