import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
  transition: ${(props) => { return props.sliding ? 'none' : 'transform 1s ease'; }};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(0%))';
    if (props.direction === 'prev') return 'translateX(calc(2 * (0% )))';
    return 'translateX(0%)';
  }};
`;
export default CarouselContainer;
