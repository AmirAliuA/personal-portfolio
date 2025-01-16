import * as amplitude from '@amplitude/analytics-browser';

export const initializeAmplitude = () => {
  if (typeof window !== 'undefined') {
    amplitude.init('cc865640559bf94b76313510bcd1352f', { autocapture: true });
  }
};