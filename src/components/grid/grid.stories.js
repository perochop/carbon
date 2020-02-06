/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';
import Pod from '../pod';
import { GridContainer, GridItem } from '.';

function makeStory(name, themeSelector) {
  const component = () => {
    const group = 'GridItem';
    const viewportSettings = 'viewport settings';
    const groupID1 = `${group} 1`;
    const groupID2 = `${group} 2`;
    const groupID3 = `${group} 3`;

    const item1900 = object(`${viewportSettings} (i)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 9,
      justifySelf: 'stretch',
      maxWidth: 900,
      maxWidthUnits: 'px',
      rowStart: 2,
      rowEnd: 2
    }, groupID1);

    const item11300 = object(`${viewportSettings} (ii)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 13,
      justifySelf: 'stretch',
      maxWidth: 1300,
      maxWidthUnits: 'px',
      rowStart: 1,
      rowEnd: 1
    }, groupID1);

    const item11500 = object(`${viewportSettings} (iii)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 7,
      justifySelf: 'stretch',
      maxWidth: 1500,
      maxWidthUnits: 'px',
      rowStart: 1,
      rowEnd: 1
    }, groupID1);

    const item2900 = object(`${viewportSettings} (i)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 9,
      justifySelf: 'stretch',
      maxWidth: 900,
      maxWidthUnits: 'px',
      rowStart: 3,
      rowEnd: 3
    }, groupID2);

    const item21300 = object(`${viewportSettings} (ii)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 13,
      justifySelf: 'stretch',
      maxWidth: 1300,
      maxWidthUnits: 'px',
      rowStart: 2,
      rowEnd: 2
    }, groupID2);

    const item21500 = object(`${viewportSettings} (iii)`, {
      alignSelf: 'stretch',
      colStart: 7,
      colEnd: 13,
      justifySelf: 'stretch',
      maxWidth: 1500,
      maxWidthUnits: 'px',
      rowStart: 1,
      rowEnd: 1
    }, groupID2);

    const item3900 = object(`${viewportSettings} (i)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 9,
      justifySelf: 'stretch',
      maxWidth: 900,
      maxWidthUnits: 'px',
      rowStart: 1,
      rowEnd: 1
    }, groupID3);

    const item31300 = object(`${viewportSettings} (ii)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 13,
      justifySelf: 'stretch',
      maxWidth: 1300,
      maxWidthUnits: 'px',
      rowStart: 3,
      rowEnd: 3
    }, groupID3);

    const item31500 = object(`${viewportSettings} (iii)`, {
      alignSelf: 'stretch',
      colStart: 1,
      colEnd: 13,
      justifySelf: 'stretch',
      maxWidth: 1500,
      maxWidthUnits: 'px',
      rowStart: 2,
      rowEnd: 2
    }, groupID3);

    const item1Child = (
      <Pod
        alignTitle='left'
        as='primary'
        border
        padding='medium'
        podType='primary'
      >
    GridItem 1.
      </Pod>
    );

    const item2Child = (
      <Pod
        alignTitle='left'
        as='primary'
        border
        padding='medium'
        podType='primary'
      >
    GridItem 2.
      </Pod>
    );

    const item3Child = (
      <Pod
        alignTitle='left'
        as='primary'
        border
        padding='medium'
        podType='primary'
      >
    GridItem 3.
      </Pod>
    );

    const gridItems = [
      <GridItem responsiveSettings={ [item1900, item11300, item11500] }>{ item1Child }</GridItem>,
      <GridItem responsiveSettings={ [item2900, item21300, item21500] }>{ item2Child }</GridItem>,
      <GridItem responsiveSettings={ [item3900, item31300, item31500] }>{ item3Child }</GridItem>
    ];

    return (
      <GridContainer>{gridItems}</GridContainer>
    );
  };

  const metadata = {
    themeSelector
    // notes: { markdown: notes },
    // info: { text: info }
  };

  return [name, component, metadata];
}

storiesOf('Grid', module)
  .add(...makeStory('default', dlsThemeSelector));
