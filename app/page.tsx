import { Group } from '@mantine/core';
import { ButtonProgress } from '../components/ButtonProgress/ButtonProgress';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterSocial } from '../components/FooterSocial/FooterSocial';
import { GridAsymmetrical } from '../components/GridAsymmetrical/GridAsymmetrical';
import { HeaderSimple } from '../components/HeaderSimple/HeaderSimple';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <ButtonProgress />
      <GridAsymmetrical />
      <FooterSocial />
    </>
  );
}
