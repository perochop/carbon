import React from 'react';
import { StoryHeader, StoryCode } from '../../../../.storybook/style/storybook-info.styles';

const Info = (
  <div>
    <StoryHeader>How to use an Accordion in component:</StoryHeader>

    <p>Import the component</p>

    <StoryCode padded>
      {'import Accordion from "carbon-react/lib/components/accordion";'}
    </StoryCode>

    <p>To use as uncontrolled - expansion state is handled internally:</p>

    <StoryCode padded>
      {'<Accordion defaultExpanded={false}>Accordion Content</Link>'}
    </StoryCode>

    <p>To use as controlled - expansion state is handled externally:</p>

    <StoryCode padded>
      {'<Accordion expanded={expanded} onChange={onChange}>Accordion Content</Link>'}
    </StoryCode>

    <p>For additional properties specific to this component, see propTypes.</p>
  </div>
);

export default Info;
