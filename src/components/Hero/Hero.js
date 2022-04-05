import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Steven
          <br />
          Web Developer
        </SectionTitle>
        <SectionText>
          I'm 24 Years old, I have started my career as a Web Developer since
          2019.
        </SectionText>
        <Button>
          <a
            href="/images/cv.pdf"
            target="_blank"
            download
            style={{ color: '#fff' }}
          >
            Get Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
