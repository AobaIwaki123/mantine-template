import { ButtonProgress } from '../components/ButtonProgress/ButtonProgress';
import { FooterSocial } from '../components/FooterSocial/FooterSocial';
import { GridAsymmetrical } from '../components/GridAsymmetrical/GridAsymmetrical';
import { HeaderSimple } from '../components/HeaderSimple/HeaderSimple';
import { ReloadButton } from '../components/ReloadButton/ReloadButton';
import { Welcome } from '../components/Welcome/Welcome';
import { InputURL } from '../components/InputURL/InputURL';

export default function HomePage() {
  return (
    <>
      <ReloadButton />
      <HeaderSimple />
      <Welcome />
      <InputURL />
      <ButtonProgress />
      <GridAsymmetrical />
      <FooterSocial />
    </>
  );
}
