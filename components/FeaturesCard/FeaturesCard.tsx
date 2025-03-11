import { IconPlayerPlay } from '@tabler/icons-react';
import { Badge, Button, Card, Group, Image, Overlay, Text } from '@mantine/core';

export function FeaturesCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
        <Image
          src="https://img.youtube.com/vi/9_OEe_QXdbw/hqdefault.jpg"
          alt="Thumbnail"
          style={{
            width: '100%', // Card の幅にフィット
            height: '100%', // Card の高さにフィット
            objectFit: 'cover', // はみ出した部分を切る
          }}
        />
        {/* オーバーレイ */}
        <Overlay
          opacity={0.6}
          color="black"
          zIndex={1}
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* 円形の再生ボタン */}
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
            width: 50,
            height: 50,
            minWidth: 0,
            padding: 0,
          }}
        >
          <IconPlayerPlay size={24} />
        </Button>
      </Card.Section>
    </Card>
  );
}
export function FeaturesCard2() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
        <Image
          src="https://img.youtube.com/vi/9_OEe_QXdbw/hqdefault.jpg"
          alt="Thumbnail"
          style={{
            width: '100%', // Card の幅にフィット
            height: '100%', // Card の高さにフィット
            objectFit: 'cover', // はみ出した部分を切る
          }}
        />
        {/* オーバーレイ */}
        <Overlay
          opacity={0.6}
          color="black"
          zIndex={1}
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* 円形の再生ボタン */}
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
            width: 50,
            height: 50,
            minWidth: 0,
            padding: 0,
          }}
        >
          <IconPlayerPlay size={24} />
        </Button>
      </Card.Section>
    </Card>
  );
}
