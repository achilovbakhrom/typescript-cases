type MyResponse<T> =
  | {
      isLoading: false;
      error: null;
      data: T;
    }
  | {
      isLoading: false;
      error: "";
      data: T;
    }
  | {
      isLoading: false;
      error: undefined;
      data: T;
    }
  | {
      isLoading: true;
      error?: string;
      data?: T;
    };

type Student = {
  firstName: string;
  lastName: string;
  age: number;
};

type UnboxResponse<T extends MyResponse<any>> = T extends {
  isLoading: false;
  error: null;
  data: any;
}
  ? Required<T>
  : T;

type RequiredStudent = Required<MyResponse<any>>;

function handleResponse(response: MyResponse<Student>) {
  if (!response.isLoading && response.error == null) {
    const r = response.data.age;
  }
}
