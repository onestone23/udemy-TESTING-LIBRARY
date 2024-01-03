import '@testing-library/jest-dom';
import { server } from './mocks/server';

// 모든 테스트 전에 API 모의를 설정
beforeAll(() => server.listen());
// 테스트 중에 추가할 수 있는 요청 핸들러를 재설정
// 다른 테스트에는 영향을 주지 않음
afterEach(() => server.resetHandlers());

// 테스트가 끝난 후 정리
afterAll(() => server.close());
