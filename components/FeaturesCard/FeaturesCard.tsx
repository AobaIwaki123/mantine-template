import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import type { GetInfoResponseType } from '../../client/client';


export function FeaturesCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://img.youtube.com/vi/9_OEe_QXdbw/hqdefault.jpg"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
          NUC # 330 - "Generation Team Challenge: Cooking Queen Battle ③" 2021/10/10 NUC # 330 - "Generation Team Challenge: Cooking Queen Battle ③" 2021/10/10 NUC # 330 - "Generation Team Challenge: Cooking Queen Battle ③" 2021/10/10
        </Text>
        <Badge color="green">Available</Badge>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Play!
      </Button>
    </Card>
  );
}

export function FeaturesCard2() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://img.youtube.com/vi/Oyvg3E2RNXY/hqdefault.jpg"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text
          fw={500}
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3,
          }}
        >
          NUC # 330 - "Generation Team Challenge: Cooking Queen Battle ③" 2021/10/10
        </Text>
        <Badge color="yellow">Proccesing</Badge>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Play!
      </Button>
    </Card>
  );
}
