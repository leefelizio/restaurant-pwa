import { IsUppercasePipe } from './is-uppercase.pipe';

describe('IsUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new IsUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
