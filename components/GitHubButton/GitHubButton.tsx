import { IconBrandGithub } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSocial.module.css';


export function GitHubButton() {
  return (
    <a href="https://github.com/AobaIwaki123/musp">
      <ActionIcon size="lg" color="gray" variant="subtle">
        <IconBrandGithub size={30} stroke={1.5} />
      </ActionIcon>
    </a>
  );
}
