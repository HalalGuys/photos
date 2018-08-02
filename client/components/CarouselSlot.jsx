import styled from 'styled-components';

const CarouselSlot = styled.div`
  flex: 1 0 auto;
  margin-right: 20px;
  order: ${props => props.order};
`;
export default CarouselSlot;
