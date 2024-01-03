import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm } from '../summary/SummaryForm';

test('초기 세팅', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', /terms and coditins/i);
  const button = screen.getByRole('button', /confirm order/i);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('체크박스 클릭 시 버튼 활성화에 대한 흐름', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', /terms and coditins/i);
  const button = screen.getByRole('button', /confirm order/i);

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
