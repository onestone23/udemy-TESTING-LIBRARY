import { logRoles } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * 역할(role)에 대한 링크
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role
 */
test('초기 버튼 색깔이 빨간색인지', () => {
  const { container } = render(<App />);
  // 아래 구문을 통해 컴포넌트를 가져올 수 있다? 더 찾아봐야할듯
  logRoles(container);
  // 버튼 텍스트에 대해 아래와 같이 사용도 가능
  const button = screen.getByRole('button', { name: /blue/i });
  // const button = screen.getByRole('button');
  expect(button).toHaveClass('red');
});
test('초기 버튼 텍스트', () => {});
test('클릭 후 버튼 색깔', () => {});
test('클룩 후 버튼 텍스트', () => {});
