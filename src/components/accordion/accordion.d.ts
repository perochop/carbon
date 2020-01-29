import * as React from 'react';

import { AlignBinaryType, ThemesBinary } from '../../utils/helpers/options-helper/options-helper';

export interface AccordionProps {
  children?: React.ReactNode;
  id?: string;
  /** Sets the accordion content padding - multiplies provided number by 8 */
  contentPadding?: number;
  /** Sets the accordion content padding-top - multiplies provided number by 8 */
  contentPaddingTop?: number;
  /** Sets the accordion content padding-bottom - multiplies provided number by 8 */
  contentPaddingBottom?: number;
  /** Sets the accordion content padding-left - multiplies provided number by 8 */
  contentPaddingLeft?: number;
  /** Sets the accordion content padding-right - multiplies provided number by 8 */
  contentPaddingRight?: number;
  /** Sets the whole accordion container padding - multiplies provided number by 8 */
  accordionPadding?: number;
  /** Sets the accordion header container padding - multiplies provided number by 8 */
  headerPadding?: number;
  /** Sets the accordion header left margin in % - helps with aligning header with inlined TextBox inputs */
  headerMarginLeft?: number;
  /** Sets the accordion header bottom margin -  multiplies provided number by 8 */
  headerBottomMargin?: number;
  /** Set the default state of expansion of the Accordion if component is meant to be used as uncontrolled */
  defaultExpanded?: boolean;
  /** Sets the expansion state of the Accordion if component is meant to be used as controlled */
  expanded?: boolean
  /** Sets icon type - accepted values: 'chevron_down' (default), 'dropdown' */
  iconType?: 'chevron_down' | 'dropdown';
  /** Sets icon alignment - accepted values: 'left', 'right' (default) */
  iconAlign?: AlignBinaryType
  /** Sets icon right margin - provided number will be multiplied by 8 */
  iconRightMargin?: number
  /** Sets heading's font-size - accepted values: 32, 24, 20 (default), 14 */
  headingSize?: 32 | 24 | 20 | 14;
  /** Callback fired when expansion state changes, onChange(event: object, isExpanded: boolean) */
  onChange?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, isExpanded: boolean) => void;
  /** Sets accordion type to either primary (default), or secondary */
  type?: ThemesBinary;
  /** Sets accordion title */
  title: string;
}

declare const Accordion: React.FunctionComponent<AccordionProps>;
export default Accordion;
