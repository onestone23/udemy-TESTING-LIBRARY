import { logRoles } from '@testing-library/dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/**
 * 역할(role)에 대한 링크
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role
 */
test('버튼 클릭 흐름', () => {
  /**
    아래 구문을 통해 컴포넌트를 가져올 수 있다? 더 찾아봐야할듯
    const { container } = render(<App />);
    logRoles(container);

    버튼 텍스트에 대해 아래와 같이 사용도 가능
    const button = screen.getByRole('button', { name: /blue/i });
   */
  // 앱 렌더
  render(<App />);
  // 버튼 찾기
  const button = screen.getByRole('button');
  // 클릭 전 컬러, 텍스트 확인
  expect(button).toHaveClass('red');
  expect(button).toHaveTextContent(/blue/i);
  // 버튼 클릭
  fireEvent.click(button);
  // 클릭 후 버튼 색상 및 텍스트 확인
  expect(button).toHaveClass('blue');
  expect(button).toHaveTextContent(/red/i);
});
