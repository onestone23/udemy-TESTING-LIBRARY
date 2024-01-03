import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../summary/SummaryForm';
import userEvent from '@testing-library/user-event';

test('초기 세팅', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', /terms and coditins/i);
  const button = screen.getByRole('button', /confirm order/i);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('체크박스 클릭 시 버튼 활성화에 대한 흐름', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', /terms and coditins/i);
  const button = screen.getByRole('button', /confirm order/i);

  await user.click(checkbox);
  expect(button).toBeEnabled();

  await user.click(checkbox);
  expect(button).toBeDisabled();
});

// https://testing-library.com/docs/react-testing-library/cheatsheet
test('팝 오버 흐름', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // 쿼리 - 요소가 DOM 내에 있지 않을 것
  // get - 요소가 있을 것
  // find - 요소가 비동기적으로 나타날 때

  // 팝오버 숨김 확인
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  // 마우스 호버
  const termsAndConditions = screen.getByText(/terms and condition/i);
  await user.hover(termsAndConditions);
  const popover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // 마우스 호버 끝
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
