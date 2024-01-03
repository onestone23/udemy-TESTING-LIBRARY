import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('서버가 반환한 아이스크림 종류별로 표기', () => {
  render(<Options optionType={'scoops'} />);
});
