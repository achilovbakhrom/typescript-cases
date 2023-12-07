type Partial2<T> = {
  [Key in keyof T]?: T[Key];
};

// type State = { x: number; y: number };

// const parital: Partial2<State> = { x: 0 };

export class State<T> {
  constructor(public current: T) {}
  update(next: Partial2<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });

state.update({ y: 120 }); // now state has y = 120
