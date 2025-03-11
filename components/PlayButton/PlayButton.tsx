import { IconPlayerPlay } from '@tabler/icons-react';
import { Badge, Button, Card, Group, Image, Overlay, Text } from '@mantine/core';


export function PlayButton() {
  return (
    <Button
      variant="white"
      color="dark"
      radius="50%"
      size="lg"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        width: 50, // サイズ調整
        height: 50, // 幅と高さを同じにすることで円形になる
        minWidth: 0, // Mantine のデフォルトの最小幅を無効化
        padding: 0, // 余白を削減
      }}
    >
      <IconPlayerPlay size={24} />
    </Button>
  );}
