import React from 'react';
import { Group, Image, Text } from '@mantine/core';

export function MuspLogo() {
  return (
    <Group spacing="xs" align="center">
      <Image
        src="/MuspIcon/MuspIcon.webp" // replace with your real image path
        alt="My Logo"
        width={40}
        height={40}
        fit="contain"
      />
      <Text size="xl" weight={700}>
        My Brand
      </Text>
    </Group>
  );
}
