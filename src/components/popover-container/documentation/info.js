import React from 'react';
import { StoryHeader, StoryCode } from '../../../../.storybook/style/storybook-info.styles';

const Info = (
  <div>
    <StoryHeader>Popover Container component</StoryHeader>
    <p>Import the component</p>
    <StoryCode padded>
      {'import PopoverContainer from "carbon-react/lib/components/popover-container"'}
    </StoryCode>

    <p>How to use component</p>

    <StoryCode padded>
      {'<PopoverContainer title="" iconType=""> {children} </PopoverContainer>'}
    </StoryCode>

    <p>For additional properties specific to this component, see propTypes.</p>
  </div>
);

export default Info;
