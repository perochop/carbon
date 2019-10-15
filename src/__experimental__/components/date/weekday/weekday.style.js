import styled from 'styled-components';
import classicTheme from '../../../../style/themes/classic';
import weekdayClassicStyle from './weekday-classic.style';

const StyledWeekday = styled.div`
&, &.DayPicker-Weekday {
  border: none;
  min-width: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.border};
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  padding: 20px 0 5px;

  ${weekdayClassicStyle}
}`;

StyledWeekday.defaultProps = {
  theme: classicTheme
};

export default StyledWeekday;
