import ISignal from './ISignal';

export type Status =
  | 'waiting'
  | 'canceled'
  | 'expired'
  | 'in_progress'
  | 'win'
  | 'loss';

export default interface ISignalWithStatus extends ISignal {
  status: Status;
  info?: string;
  result?: {
    martingales: number;
    profit: number;
  };
}
