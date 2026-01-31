export const STORAGE_KEYS = {
  THEME: 'theme',
  CONSENT: 'hoxmot-consent',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

type ConsentCategory = 'necessary' | 'functional';

const KEY_CATEGORY_MAP: Record<StorageKey, ConsentCategory> = {
  [STORAGE_KEYS.CONSENT]: 'necessary',
  [STORAGE_KEYS.THEME]: 'functional',
};

export const CONSENT_VERSION = 1;

export type ConsentData = {
  version: number;
  categories: {
    necessary: boolean;
    functional: boolean;
  };
  timestamp: number;
};

/**
 * Reads the current consent state from localStorage.
 */
export const getConsent = (): ConsentData | null => {
  if (typeof localStorage === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CONSENT);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
};

/**
 * Saves consent and performs immediate cleanup of keys for denied categories.
 */
export const saveConsent = (categories: { functional: boolean }) => {
  if (typeof localStorage === 'undefined') return;

  const data: ConsentData = {
    version: CONSENT_VERSION,
    categories: {
      necessary: true,
      ...categories,
    },
    timestamp: Date.now(),
  };

  localStorage.setItem(STORAGE_KEYS.CONSENT, JSON.stringify(data));

  // Iterate over all managed keys to enforce cleanup
  // This automatically handles new keys added to KEY_CATEGORY_MAP
  (Object.keys(KEY_CATEGORY_MAP) as StorageKey[]).forEach((key) => {
    const category = KEY_CATEGORY_MAP[key];
    // If the category for this key is not enabled in the new consent, remove it.
    if (!data.categories[category]) {
      localStorage.removeItem(key);
    }
  });
};

/**
 * Safely sets a local storage item based on consent.
 * If consent is not granted for the key's category, the write is skipped (and the key is removed).
 */
export const setLocalStorage = (key: StorageKey, value: string) => {
  if (typeof localStorage === 'undefined') return;

  const category = KEY_CATEGORY_MAP[key];

  // Always allow necessary keys
  if (category === 'necessary') {
    localStorage.setItem(key, value);
    return;
  }

  // Check consent for other keys
  const consent = getConsent();
  if (consent?.categories[category]) {
    localStorage.setItem(key, value);
  } else {
    // Ensure it's not stored if consent is missing/denied
    localStorage.removeItem(key);
  }
};

/**
 * Reads a local storage item.
 */
export const getLocalStorage = (key: StorageKey): string | null => {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(key);
};
