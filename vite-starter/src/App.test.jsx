import { logRoles } from '@testing-library/dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { kebabCaseToTitleCase } from './helpers';

/**
 *
 * https://github.com/testing-library/jest-dom
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
  expect(button).toHaveClass('medium-violet-red');
  expect(button).toHaveTextContent(/blue/i);
  // 버튼 클릭
  fireEvent.click(button);
  // 클릭 후 버튼 색상 및 텍스트 확인
  expect(button).toHaveClass('midnight-blue');
  // 아래와 같이 스타일을 직접 테스트 할 수 있지만, blue의 경우 rgb값을 작성해줘야하고, 여러가지 문제때문에 스타일을 직접 테스트 하는것보다 클래스를 통한 검증을 선호
  // expect(button).toHaveStyle({'background-color': 'blue'});
  expect(button).toHaveTextContent(/red/i);
});

test('체크박스에 대한 흐름', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  // 초기 상태 확인
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  // 체크박스 클릭
  fireEvent.click(checkbox);
  // 체크박스 클릭 후 상태
  expect(button).toBeDisabled();
  expect(button).toHaveClass('gray');

  // 체크박스 클릭
  fireEvent.click(checkbox);
  // 체크박스 클릭 후 상태
  expect(button).toBeEnabled();
  expect(button).toHaveClass('medium-violet-red');
});

test('버튼 클릭 후 체크박스에 대한 흐름', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(button);

  // 체크박스 클릭
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveClass('gray');

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveClass('midnight-blue');
});

// 테스트 그룹화
describe('kebabCaseToTileCase', () => {
  //
  test('하이픈이 없을 때 동작', () => {
    expect(kebabCaseToTitleCase('red')).toBe('Red');
  });
  test('하이픈이 1개일 때 동작', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  });
  test('하이픈이 여러개일 때 동작', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  });
});
