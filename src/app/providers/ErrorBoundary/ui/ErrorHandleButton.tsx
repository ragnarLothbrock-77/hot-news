import { useState, useEffect } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const ErrorHandleButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const handleError = () => { setError(true) };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error])

  return (
    <Button variant={ButtonVariant.REGULLAR} isRegullarActive onClick={handleError}>
      {t('Throw synthetic error')}
    </Button>
  );
}
