import { cn } from './classNames';

describe('classNames', () => {
  test('with only string class', () => {
    expect(cn('someClass')).toBe('someClass');
  })

  test('with additional classes from array', () => {
    const expected = 'someClass class1 class2';
    expect(cn('someClass', {}, ['class1', 'class2'])).toBe(expected);
  })

  test('with mods classes', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(cn(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2']))
      .toBe(expected);
  })

  test('with mods false classes', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(cn(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2']))
      .toBe(expected);
  })

  test('with mods undefined classes', () => {
    const expected = 'someClass class1 class2';
    expect(cn(
      'someClass',
      { hovered: undefined, scrollable: false },
      ['class1', 'class2']))
      .toBe(expected);
  })
});
