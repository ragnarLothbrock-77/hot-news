import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Button text test', async () => {
    render(<Button>Test</Button>);
    expect(await screen.findByText('Test')).toBeInTheDocument();
  })

  test('Button themeexist test', async () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button variant={ButtonVariant.PRIMARY}>Test</Button>);
    expect(await screen.findByText('Test')).toHaveClass('primary');
    screen.debug();
  })
});
