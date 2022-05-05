export class Session {
  set(witchName: string): void {
    localStorage.setItem('witchName', witchName);
  }

  get(): string | null {
    return localStorage.getItem('witchName');
  }

  getAuthenticatedState(): boolean {
    return !!this.get();
  }

  clear(): void {
    this.set("");
  }
}