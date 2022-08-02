export class StorageService {
  set (key: string, value: unknown) {
    if (typeof window !== 'undefined') {
      window?.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get (key: string) {
    if (typeof window !== 'undefined') {
      return JSON.parse(window?.localStorage.getItem(key)
      );
    }
  }

  remove (key: string) {
    if (typeof window !== 'undefined') {
      window?.localStorage.removeItem(key);
    }
  }
}
