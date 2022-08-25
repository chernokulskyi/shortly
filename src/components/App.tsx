import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Form } from './Form/Form';
import { Shortens } from './Shortens/Shortens';
import { Features } from './Features/Features';
import { BoostLinks } from './BoostLinks/BoostLinks';
import { Footer } from './Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Shortens />
      <Features />
      <BoostLinks />
      <Footer />
    </>
  );
};
