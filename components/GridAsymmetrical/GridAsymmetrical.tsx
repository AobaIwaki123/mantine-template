'use client';

import { Container, Grid, Skeleton } from '@mantine/core';
import type { GetInfoResponseType } from '../../client/client';
import { FeaturesCard, FeaturesCard2 } from '../FeaturesCard/FeaturesCard';


const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridAsymmetrical() {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard2 />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard2 />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard2 />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard2 />
        </Grid.Col>
        <Grid.Col span={{ base: 6, xs: 4 }}>
          <FeaturesCard2 />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
