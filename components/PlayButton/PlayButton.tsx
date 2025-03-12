import { useState } from 'react';
import { IconPlayerPlay } from '@tabler/icons-react';
import { Button } from '@mantine/core';

export function PlayButton() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Button
      variant="white"
      color="dark"
      opacity={0.75}
      radius="50%"
      size="lg"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) ${isPressed ? 'translateY(3px)' : ''}`,
        transition: 'transform 0.1s ease-in-out',
        zIndex: 2,
        width: 50,
        height: 50,
        minWidth: 0,
        padding: 0,
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)} // ホバー外れた時に元に戻す
    >
      <IconPlayerPlay size={24} />
    </Button>
  );
}
