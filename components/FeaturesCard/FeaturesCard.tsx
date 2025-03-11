import { IconPlayerPlay } from '@tabler/icons-react';
import { Badge, Button, Card, Group, Image, Overlay, Text } from '@mantine/core';
import { PlayButton } from '../PlayButton/PlayButton';

export function FeaturesCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" style={{ position: 'relative' }}>
        <Image
          src="https://img.youtube.com/vi/9_OEe_QXdbw/hqdefault.jpg"
          alt="Thumbnail"
        />
        {/* オーバーレイ */}
        <Overlay
          opacity={0.3}
          color="black"
          zIndex={1}
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* 円形の再生ボタン */}
        <PlayButton />
      </Card.Section>
    </Card>
  );
}
