import { ITelegram } from './telegram';

export {};

declare global {
  interface Window {
    Telegram: ITelegram;
  }
}
