"use client";

import React from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { Button } from '@mantine/core';

export const ReloadButton = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Button
      variant="filled"
      color="blue"
      p="xs"
      radius="xl"
      onClick={handleReload}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000, // 他の要素より前面に表示
      }}
    >
      <IconRefresh size={24} stroke={1.5} />
    </Button>
  );
};
