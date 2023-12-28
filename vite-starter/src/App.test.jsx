import { render, screen } from '@testing-library/react';
import App from './App';

test('App contains correct heading', () => {
  // 시뮬레이션 된 DOM을 만듬 -> App 컴포넌트를 렌더링해라.
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});

/**
 * TDD
 * 코드 작성 전 테스트를 작성하고 통과하도록 코드를 작성하는것 RED-GREEN TEST (실패->성공)
 *
 *
 *
 */
