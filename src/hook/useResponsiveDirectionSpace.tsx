import { SpaceProps } from 'antd';
import { useEffect, useState } from 'react';

const useResponsiveDirectionSpace = () => {
  const [directionSpace, setDirectionSpace] =
    useState<SpaceProps['direction']>('horizontal');

  useEffect(() => {
    if (window.innerWidth <= 768) {
      return setDirectionSpace('vertical');
    }

    setDirectionSpace('horizontal');

    window.addEventListener('resize', (e: Event) => {
      const target = e.target as Window;

      if (target.innerWidth <= 768) {
        return setDirectionSpace('vertical');
      }

      setDirectionSpace('horizontal');
    });
  }, [directionSpace]);

  return [directionSpace];
};

export default useResponsiveDirectionSpace;
