class PresentationStore {
  private listeners = {};

  public getApplauseCount(id: string): number {
    return +(localStorage.getItem(this.key(id)) || 0);
  }

  public incrementApplauseCount(id: string) {
    const updatedCount = +this.getApplauseCount(id) + 1;
    localStorage.setItem(this.key(id), `${updatedCount}`);
    this.listeners[id].forEach((listener) => listener(updatedCount));
  }

  public subscribe(id: string, callback: Function): Function {
    this.listeners[id] = this.listeners[id] || [];
    this.listeners[id].push(callback);
    const listenerId = this.listeners[id].length - 1;
    return () => {
      this.listeners[id].splice(listenerId, 1);
    };
  }

  private key(id: string): string {
    return `slide-applause-${id}`;
  }
}

const instance = new PresentationStore();

export default instance;
