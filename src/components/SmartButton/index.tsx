import React from 'react';

import ChromeIcon from '../../components/icons/chrome';
import FireFoxIcon from '../../components/icons/firefox';

type Prop = {
  userAgent?: string;
};

const iconSize = 50;
export const SmartButton: React.FC<Prop> = ({ userAgent }) => {
  const isFirefox = React.useMemo(() => Boolean(String(userAgent).match(
    /Firefox/i
  )), [userAgent]);
  const isChrome = React.useMemo(() => Boolean(String(userAgent).match(
    /Chrome/i
  )), [userAgent]);

  if (isChrome) {
    return (
      <a
        href="https://chromewebstore.google.com/detail/bearby/papngmkmknnmfhabbckobgfpihpdgplk"
        target="_blank"
        rel="noreferrer"
      >
        <ChromeIcon
          height={iconSize}
          width={iconSize}
          color="var(--primary-color)"
        />
        <b>
          Chrome
        </b>
      </a>
    );
  }

  if (isFirefox) {
    return (
      <a
        href="https://addons.mozilla.org/en-GB/firefox/addon/bearby/"
        target="_blank"
        rel="noreferrer"
      >
        <FireFoxIcon
          height={iconSize}
          width={iconSize}
          color="var(--primary-color)"
        />
        <b>
          FireFox
        </b>
      </a>
    );
  }

  return (
    <div>
      <FireFoxIcon
        height={iconSize}
        width={iconSize}
        color="var(--primary-color)"
      />
      <ChromeIcon
        height={iconSize}
        width={iconSize}
        color="var(--primary-color)"
      />
    </div>
  );
};
