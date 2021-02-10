import React, { useContext, useMemo } from 'react';

import { format, parseISO } from 'date-fns';
import { ThemeContext } from 'styled-components';

import galeImg from '@/assets/gale.png';
import { useSignals } from '@/context/signals';
import ISignalWithStatus from '@/interfaces/signal/ISignalWithStatus';

import { Container, Label, GaleImage } from './styles';

interface ISignalProps {
  data: ISignalWithStatus;
  onCancel(): void;
  onResume(): void;
}

const Signal: React.FC<ISignalProps> = ({ data, onCancel, onResume }) => {
  const theme = useContext(ThemeContext);

  const { isSignalAvailable, hasSignalResult } = useSignals();

  const formattedData = useMemo(() => {
    return {
      date: format(parseISO(data.date), 'HH:mm'),
      currency: data.currency.toUpperCase(),
      expiration: data.expiration.toUpperCase(),
      operation: data.operation.toUpperCase(),
    };
  }, [data]);

  const isAvailable = useMemo(
    () => isSignalAvailable(data) && !hasSignalResult(data),
    [isSignalAvailable, data, hasSignalResult],
  );

  const activeLabelWidth = useMemo(
    () => (data.currency.includes('OTC') ? theme.sizes[32] : theme.sizes[20]),
    [data.currency, theme.sizes],
  );

  const shouldShowMartingales = useMemo(
    () => data.status === 'win' && data.result?.martingales > 0,
    [data.result?.martingales, data.status],
  );

  return (
    <Container status={data.status}>
      <div>
        <Label width={theme.sizes[14]}>{formattedData.date}</Label>
        <Label width={activeLabelWidth}>{formattedData.currency}</Label>
        <Label width={theme.sizes[10]}>{formattedData.expiration}</Label>
        <Label width={theme.sizes[10]}>{formattedData.operation}</Label>

        {shouldShowMartingales &&
          [...Array(data.result?.martingales)].map((item, index) => (
            <GaleImage
              key={item}
              id="gale"
              src={galeImg}
              alt={`Gale ${index + 1}`}
            />
          ))}
      </div>

      {isAvailable && (
        <>
          {data.status === 'canceled' ? (
            <span
              id="action"
              role="button"
              tabIndex={0}
              onKeyPress={onResume}
              onClick={onResume}
            >
              Retomar
            </span>
          ) : (
            <span
              id="action"
              role="button"
              tabIndex={0}
              onKeyPress={onCancel}
              onClick={onCancel}
            >
              Cancelar
            </span>
          )}
        </>
      )}
    </Container>
  );
};

export default Signal;
