import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.6s;
    backface-visibility: hidden;
  }
  /* Initial State of the entered Dot */
  .count-enter {
    transform: scale(2) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotate(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotate(0);
  }
  .count-exit-active {
    transform: scale(2) rotateX(0.5turn);
  }
`;

const Dot = styled.div`
  background: ${props => props.theme.red};
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  min-width: 3rem;
  margin-left: 1rem;
  font-weight: 300;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const CartCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 600, exit: 600 }}
      >
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

export default CartCount;
