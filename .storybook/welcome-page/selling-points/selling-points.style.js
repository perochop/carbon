import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 25px 4%;
  width: 92%;
  align-items: top;
  display: flex;
  justify-content: space-between;
`;

export const SellingPoint = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SellingPointItem = styled.li`
  margin-bottom: 10px;
  width: 100%;
  @media (min-width: 300px) {
    width: 49%;
    margin-right: 2%;
  }
  &:nth-of-type(2n) {
    @media (min-width: $300px) and (max-width: 800px) {
      margin-right: 0;
    }
  }

  @media (min-width: 800px) {
    margin-right: 1.5%;
    width: 32.33333%;
  }
  &:nth-of-type(3n) {
    @media (min-width: 800px) {
      margin-right: 0;
    }
  }
`;

export const Panel = styled.div`
  padding: 2%;
  text-align: center;
`;

export const Image = styled.img`
  margin: auto;
  max-width: 120px;
`;

export const Heading = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22em;
  margin-bottom: 0.5em;
`;

export const Text = styled.span`
  font-size: 14px;
  line-height: 1.22em;
`;

//   &__item {
//     margin-bottom: 10px;
//     width: 100%;

//     @media (min-width: $300px) {
//       width: 49%;
//       margin-right: 2%;
//     }
//     &:nth-of-type(2n) {
//       @media (min-width: $300px) and (max-width: $response-point-medium) {
//         margin-right: 0;
//       }
//     }

//     @media (min-width: $response-point-medium) {
//       margin-right: 1.5%;
//       width: 32.33333%;
//     }
//     &:nth-of-type(3n) {
//       @media (min-width: $response-point-medium) {
//         margin-right: 0;
//       }
//     }
//   }
// }

// .demo-content-grid--5-columns {
//   .demo-content-grid__item {
//     width: 49%;
//     margin-right: 2%;

//     &:nth-of-type(2n) {
//       @media (max-width: $300px) {
//         margin-right: 0;
//       }
//     }

//     @media (min-width: $300px) and (max-width: $response-point-small) {
//       margin-right: 1.5%;
//       width: 32.33333%;
//     }
//     &:nth-of-type(3n) {
//       @media (min-width: $300px) and (max-width: $response-point-small) {
//         margin-right: 0;
//       }
//     }

//     @media (min-width: $response-point-small) {
//       margin-right: 1.25%;
//       width: 19%;
//     }
//     &:nth-of-type(5n) {
//       @media (min-width: $response-point-small) {
//         margin-right: 0;
//       }
//     }
//   }
// }
