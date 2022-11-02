export interface ITelegram {
  // Not finished, but good enough
  __WidgetUuid: number;
  __WidgetLastId: number;
  __WidgetCallbacks: {};
  auth: () => void;
  Login: {
    widgetsOrigin: string;
    auth: (options: {}, callback) => void;
    init: (options: {}, auth_callback: () => void) => void;
    open: (callback) => void;
  };
}
