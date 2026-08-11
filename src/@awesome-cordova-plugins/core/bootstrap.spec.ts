import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { checkReady } from './bootstrap';

const win: any = window;

/** Runs checkReady with `process` removed, so the guarded body actually executes. */
function checkReadyWithoutProcess() {
  vi.stubGlobal('process', undefined);
  try {
    checkReady();
  } finally {
    vi.unstubAllGlobals();
  }
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  delete win.cordova;
});

describe('checkReady', () => {
  it('does nothing when process is defined', () => {
    const addEventListener = vi.spyOn(win.document, 'addEventListener');
    const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout');

    checkReady();

    expect(addEventListener).not.toHaveBeenCalled();
    expect(setTimeoutSpy).not.toHaveBeenCalled();
  });

  it('logs when the deviceready event fires', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    win.cordova = {};

    checkReadyWithoutProcess();
    win.document.dispatchEvent(new Event('deviceready'));
    vi.advanceTimersByTime(5000);

    expect(log).toHaveBeenCalledWith(expect.stringContaining('deviceready event fired after'));
    expect(warn).not.toHaveBeenCalled();
  });

  it('warns when deviceready never fires and cordova is present', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    win.cordova = {};

    checkReadyWithoutProcess();
    vi.advanceTimersByTime(5000);

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('deviceready did not fire within 5000ms'));
  });

  it('stays quiet when deviceready never fires and cordova is absent', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    checkReadyWithoutProcess();
    vi.advanceTimersByTime(5000);

    expect(warn).not.toHaveBeenCalled();
  });

  it('falls back to an empty object when window is undefined', () => {
    vi.stubGlobal('process', undefined);
    vi.stubGlobal('window', undefined);
    // The fallback `{}` has no document, so the listener registration throws — which is
    // exactly how we know the fallback arm was taken.
    expect(() => checkReady()).toThrow(TypeError);
    vi.unstubAllGlobals();
  });
});
