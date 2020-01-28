import React, {
  useState, useRef, useEffect, useCallback
} from 'react';
import PropTypes from 'prop-types';

import createGuid from '../../utils/helpers/guid';
import Events from '../../utils/helpers/events';
import {
  StyledAccordionContainer,
  StyledAccordionTitleContainer,
  StyledAccordionTitle,
  StyledAccordionIcon,
  StyledAccordionContentContainer,
  StyledAccordionContent
} from './accordion.style';

const Accordion = ({
  defaultExpanded,
  accordionPadding,
  contentPadding,
  contentPaddingTop,
  contentPaddingBottom,
  contentPaddingLeft,
  contentPaddingRight,
  headerPadding,
  headerMarginLeft,
  headerBottomMargin,
  expanded,
  onChange,
  children,
  id,
  iconType,
  iconAlign,
  iconRightMargin,
  headingSize,
  type,
  title
}) => {
  const isControlled = expanded !== undefined;

  const [isExpandedInternal, setIsExpandedInternal] = useState(defaultExpanded || false);

  const [contentHeight, setContentHeight] = useState(0);

  const accordionContent = useRef(null);

  useEffect(() => {
    setContentHeight(!expanded ? 0 : accordionContent.current.scrollHeight);
  }, [expanded]);

  const isExpanded = isControlled ? expanded : isExpandedInternal;

  const toggleAccordion = useCallback(() => {
    if (isControlled) {
      onChange(!isExpanded);
    } else {
      setIsExpandedInternal(!isExpanded);
    }
    setContentHeight(isExpanded ? 0 : accordionContent.current.scrollHeight);
  }, [isControlled, isExpanded, onChange]);

  const handleKeyDown = useCallback((e) => {
    if (Events.isEnterKey(e)) {
      toggleAccordion();
    }
  }, [toggleAccordion]);

  const guid = useRef(createGuid());
  const accordionId = id || `Accordion_${guid.current}`;
  const headerId = `AccordionHeader_${guid.current}`;
  const contentId = `AccordionContent_${guid.current}`;

  return (
    <StyledAccordionContainer
      id={ accordionId }
      data-component='accordion'
      accordionPadding={ accordionPadding }
      type={ type }
    >
      <StyledAccordionTitleContainer
        data-element='accordion-title-container'
        id={ headerId }
        aria-expanded={ isExpanded }
        aria-controls={ contentId }
        headerPadding={ headerPadding }
        headerMarginLeft={ headerMarginLeft }
        headerBottomMargin={ headerBottomMargin }
        onClick={ toggleAccordion }
        onKeyDown={ handleKeyDown }
        iconAlign={ iconAlign }
        tabIndex='0'
      >
        {iconAlign === 'left' && (
          <StyledAccordionIcon
            data-element='accordion-icon'
            iconRightMargin={ iconRightMargin }
            type={ iconType }
            isExpanded={ isExpanded }
          />
        )}

        <StyledAccordionTitle
          data-element='accordion-title'
          headingSize={ headingSize }
        >
          { title }
        </StyledAccordionTitle>

        {iconAlign === 'right' && (
          <StyledAccordionIcon
            data-element='accordion-icon'
            type={ iconType }
            isExpanded={ isExpanded }
          />
        )}
      </StyledAccordionTitleContainer>
      <StyledAccordionContentContainer
        isExpanded={ isExpanded }
        style={ { maxHeight: contentHeight } }
      >
        <StyledAccordionContent
          data-element='accordion-content'
          id={ contentId }
          aria-labelledby={ headerId }
          contentPadding={ contentPadding }
          contentPaddingTop={ contentPaddingTop }
          contentPaddingBottom={ contentPaddingBottom }
          contentPaddingLeft={ contentPaddingLeft }
          contentPaddingRight={ contentPaddingRight }
          ref={ accordionContent }
        >
          { children }
        </StyledAccordionContent>
      </StyledAccordionContentContainer>
    </StyledAccordionContainer>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  /** Sets the accordion content padding - multiplies provided number by 8 */
  contentPadding: PropTypes.number,
  /** Sets the accordion content padding-top - multiplies provided number by 8 */
  contentPaddingTop: PropTypes.number,
  /** Sets the accordion content padding-bottom - multiplies provided number by 8 */
  contentPaddingBottom: PropTypes.number,
  /** Sets the accordion content padding-left - multiplies provided number by 8 */
  contentPaddingLeft: PropTypes.number,
  /** Sets the accordion content padding-right - multiplies provided number by 8 */
  contentPaddingRight: PropTypes.number,
  /** Sets the whole accordion container padding - multiplies provided number by 8 */
  accordionPadding: PropTypes.number,
  /** Sets the accordion header container padding - multiplies provided number by 8 */
  headerPadding: PropTypes.number,
  /** Sets the accordion header left margin in % - helps with aligning header with inlined TextBox inputs */
  headerMarginLeft: PropTypes.number,
  /** Sets the accordion header bottom margin -  multiplies provided number by 8 */
  headerBottomMargin: PropTypes.number,
  /** Set the default state of expansion of the Accordion if component is meant to be used as uncontrolled */
  defaultExpanded: PropTypes.bool,
  /** Sets the expansion state of the Accordion if component is meant to be used as controlled */
  expanded: PropTypes.bool,
  /** Sets icon type - accepted values: 'chevron_down' (default), 'dropdown' */
  iconType: PropTypes.oneOf(['chevron_down', 'dropdown']),
  /** Sets icon alignment - accepted values: 'left', 'right' (default) */
  iconAlign: PropTypes.oneOf(['left', 'right']),
  /** Sets icon right margin - provided number will be multiplied by 8 */
  iconRightMargin: PropTypes.number,
  /** Sets heading's font-size - accepted values: 32, 24, 20 (default), 14 */
  headingSize: PropTypes.oneOf([32, 24, 20, 14]),
  /** Accepts a callback function which can be used to update parent state on expansion state change */
  onChange: PropTypes.func,
  /** Sets accordion type to either primary (default), or secondary */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /** Sets accordion title */
  title: PropTypes.string.isRequired
};

Accordion.defaultProps = {
  accordionPadding: 5,
  contentPadding: 2,
  headerPadding: 2,
  headerBottomMargin: 3,
  iconType: 'chevron_down',
  iconAlign: 'right',
  iconRightMargin: 2,
  headingSize: 20,
  type: 'primary'
};

export default Accordion;
