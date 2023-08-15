export default function index2(){
  
  // 以下のような型を持つ関数 groupByCity を定義してください：
  
  // groupByCity は Person の配列を受け取り、各都市ごとに人々をグループ化したオブジェクトを返します。
  // 戻り値のオブジェクトのキーは都市の名前であり、値は該当する都市に住む Person の配列です。
  
  interface Person4 {
    name: string;
    age: number;
    city: string;
  }
  
  const people7: Person4[] = [
    { name: 'Alice', age: 25, city: 'Tokyo' },
    { name: 'Bob', age: 30, city: 'Osaka' },
    { name: 'Charlie', age: 20, city: 'Tokyo' },
    { name: 'David', age: 35, city: 'Osaka' },
  ];
  
  type GroupByCity2<T> = (array:T[]) => {[key:string]:T[]} 
  const groupByCity2:GroupByCity2<Person4> = (array) => {
    return array.reduce((obj,array) => {
      if(!obj[array.city]){
        obj[array.city] = [array];
  
      }else {
        obj[array.city].push(array);
      }
  
      return obj;
    },{})
  }
  
  // console.log(groupByCity2(people7))
  
  
  // 以下の条件を満たすような、Filter という条件型を実装してください。
  
  // Filter 型は、2つのジェネリック型パラメータ T と U を受け取ります。
  // T 型は配列であり、U 型は配列 T の要素のいずれかの型です。
  // Filter 型は、T 型の配列から U 型に一致する要素だけを取り出して、新しい配列を返します。
  
  type Filter<T,U> = (array:T[],key:U) => T[];
  
  type Numbers2 = [1, 2, 3, 4, 5];
  type FilteredNumbers = Filter<Numbers2, number>; // FilteredNumbers の型は [1, 2, 3, 4, 5]
  
  type Names = ['Alice', 'Bob', 'Charlie'];
  type FilteredNames = Filter<Names, string>; // FilteredNames の型は ['Alice', 'Bob', 'Charlie']
  
  type Mixed = [1, 'hello', true, 'world', false];
  type FilteredStrings = Filter<Mixed, string>; // FilteredStrings の型は ['hello', 'world']
  
  
  // 以下の条件を満たす、ジェネリクス関数 flattenArray を定義してください。
  
  // flattenArray 関数は、ジェネリクス型パラメータ T を持ちます。
  // T 型は配列と仮定します。
  // flattenArray 関数は、入れ子になった T 型の配列をフラット化し、1次元の配列に変換します。
  // 例えば、flattenArray([[1, 2], [3, 4], [5, 6]]) の結果は [1, 2, 3, 4, 5, 6] となります。
  
  type FlattenArray = <T>(array:any[]) => T[];
  const flattenArray:FlattenArray = (array) => {
    return array.flat();
  };
  
  const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
  const flattenedNumbers = flattenArray(nestedNumbers);
  // console.log(flattenedNumbers)
  
  
  
  
  // 以下の条件を満たすような、IsUnion という条件型を実装してください。
  
  // IsUnion 型は、1つのジェネリック型パラメータ T を受け取ります。
  // T 型がユニオン型（|）の場合、true を返し、ユニオン型でない場合は false を返します。
  
  // 例えば、T 型が number | string の場合、IsUnion<T> の型は true となります。
  // 一方、T 型が number の場合、IsUnion<T> の型は false となります。
  
  type IsUnion<T> = T extends any ? (T extends T ? false : true) : never;
  
  type Result1 = IsUnion<number>; // false
  type Result2 = IsUnion<number | string>; // true


    // 以下の条件を満たす filterByValue という名前の関数を実装してください。

  // filterByValue 関数は、2つのジェネリック型パラメータ T と U を受け取ります。
  // T 型は配列であり、U 型は配列 T の要素のいずれかの型です。
  // filterByValue 関数は、配列 T から指定した値 value に一致する要素だけを取り出して、新しい配列を返します。

  type FilterByValue  = <T>(array:T[],elem:T) => T[];
  const filterByValue:FilterByValue = (array,elem) => {
    return array.filter(val => val === elem);
  }

  const numbers: number[] = [1, 2, 3, 4, 5];
  const filteredNumbers = filterByValue(numbers, 3);
  // console.log(filteredNumbers); // 出力: [3]

  const fruits: string[] = ['apple', 'banana', 'orange', 'banana', 'apple'];
  const filteredFruits = filterByValue(fruits, 'banana');
  // console.log(filteredFruits); // 出力: ['banana', 'banana']



  // 以下の条件を満たすような、Reverse という条件型を実装してください。

  // Reverse 型は、1つのジェネリック型パラメータ T を受け取ります。
  // T 型は、配列の可能性があります。
  // Reverse 型は、T 型が配列の場合はその要素の順序を逆にし、配列でない場合はそのまま返します。

  type Reverse<T> = T extends Array<infer U> ? T[] : T;

  type NumbersArray = [1, 2, 3, 4, 5];
  type ReversedNumbers = Reverse<NumbersArray>; // ReversedNumbers の型は [5, 4, 3, 2, 1]

  type SingleNumber = 10;
  type ReversedSingleNumber = Reverse<SingleNumber>; // ReversedSingleNumber の型は 10



  // PickPartial 型は、2つのジェネリック型パラメータ T と K を受け取ります。
  // T 型はオブジェクト型であり、K 型は T 型のプロパティ名のいずれかの型として定義されているものです。
  // PickPartial 型は、T 型から K 型に一致するプロパティだけを取り出し、新しいオブジェクト型を返しますが、そのプロパティはすべてオプショナルとして扱われます。

  type Person = {
    name: string;
    age: number;
    city: string;
  };

  type PickPartial<T,K extends keyof T> = Partial<Pick<T,K>>;
  
  type NameAndAge = PickPartial<Person, 'name' | 'age'>;
  /*
  NameAndAge の型は以下のようになります：
  {
    name?: string;
    age?: number;
  }
  */
  
  type City = PickPartial<Person, 'city'>;
  /*
  City の型は以下のようになります：
  {
    city?: string;
  }
  */


    // 以下の条件を満たすような、OmitProperty という条件型を実装してください。
  // OmitProperty 型は、2つのジェネリック型パラメータ T と K を受け取ります。
  // T 型はオブジェクト型であり、K 型は T 型のプロパティ名のいずれかの型として定義されているものです。
  // OmitProperty 型は、T 型から K 型に一致するプロパティを除外した新しいオブジェクト型を返します。
  // Omit という組み込み型を使用せずに、OmitProperty 型を実装してください。

  type Person2 = {
    name: string;
    age: number;
    city: string;
  };
  
  type OmitProperty<T, K extends keyof T> = {
    [U in keyof T as U extends K ? never : U]: T[U];
  };
  type Omitted = OmitProperty<Person2, 'age'>;
  /*
  Omitted の型は以下のようになります：
  {
    name: string;
    city: string;
  }
  */
  


  // 以下の要件に従って、TypeScriptの型定義を行ってください。

  // "Person"という名前の型を作成します。
  // Person型は、以下のプロパティを持ちます。
  // "name": 文字列型
  // "age": 数値型
  // "email": 文字列型またはundefined（オプショナル）
  // "isAdmin": 真偽値型
  // "Book"という名前の型を作成します。
  // Book型は、以下のプロパティを持ちます。
  // "title": 文字列型
  // "author": Person型（上記で作成した型）
  // "publishedYear": 数値型
  // "ISBN": 文字列型またはnull（オプショナル）

  type Person3 = {
    name:string;
    age:number;
    email:string|undefined;
    isAdmin:boolean;
  }

  type Book = {
    title:string;
    author:Person3;
    publichedYear:number;
    ISBN:string|null
  }


  // バブルソートは、隣接する要素の比較と交換を繰り返し、数列を昇順または降順にソートするシンプルなアルゴリズムです。以下のJavaScriptのコードをTypeScriptに変換してください。

  function bubbleSort(arr:number[]):number[] {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  
  

  // 以下の要件に従って、TypeScriptのクラスと継承を使用して、動物（Animal）と鳥（Bird）の階層を表現してください。

  // 基底クラスとしてAnimalクラスを作成します。
  // Animalクラスは、次のプロパティとメソッドを持ちます。
  // プロパティ: name（文字列型）、age（数値型）、isMammal（真偽値型）
  // メソッド: makeSound() - 文字列を返す抽象メソッド
  // BirdクラスをAnimalクラスを継承して作成します。
  // Birdクラスは、Animalクラスのプロパティとメソッドに加えて、次のプロパティを持ちます。
  // プロパティ: canFly（真偽値型）
  // メソッド: makeSound() - "チュンチュン"という文字列を返す実装済みメソッド

  class Animal {
    public name:string;
    public age:number;
    public isMammal:boolean;

    constructor(){
      this.name = 'doc';
      this.age = 22;
      this.isMammal = false;
    }

    makeSound(str:string):string{
      return str
    }
  }

  class Bird extends Animal {
    public canFly:boolean;

    constructor(){
      super();
      this.canFly = true;
    }

    makeSound():string{
      return 'チュンチュン';
    }

  } 

  const bird = new Bird();
  // console.log(bird.makeSound())



  // LinkedListクラスに以下の機能を追加してください：

  // printList: 連結リストの要素を順番にコンソールに表示するメソッドを追加してください。
  // getLength: 連結リストの要素の数を返すメソッドを追加してください。
  // deleteWithValue: 渡された値と一致する最初のノードを連結リストから削除するメソッドを追加してください。該当するノードがない場合は何もしなくて良いです。

  // class Node {
  //   public value: number;
  //   public next: Node | null;
  
  //   constructor(value: number) {
  //     this.value = value;
  //     this.next = null;
  //   }
  // }
  
  // class LinkedList {
  //   public head: Node | null;
  
  //   constructor() {
  //     this.head = null;
  //   }
  
  //   append(value: number) {
  //     const newNode = new Node(value);
  //     if (!this.head) {
  //       this.head = newNode;
  //       return;
  //     }
  //     let current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }
  //     current.next = newNode;
  //   }

  //   printList():void{
  //     // console.log(this.head.value)
  //     // console.log(this.head.next.value)
  //     // console.log(this.head.next.next.value)
  //   }

  //   deleteWithValue(num:number){
  //     if(this.head.value === num){
  //       delete this.head.value
  //     }else {
  //       if(this.head.next.value === num){
  //         delete this.head.next.value

  //       }else {
  //         if(this.head.next.next.value === num){
  //           delete this.head.next.next.value;
  //         }else {

  //         }
  //       }
  //     }

  //     console.log(this.head)
  //   }

    
  // }

  
  // const linkedList = new LinkedList();
  // linkedList.append(10);
  // linkedList.append(20);
  // linkedList.append(30);

  // linkedList.printList(); // 10, 20, 30
  // // console.log(linkedList.getLength()); // 3

  // console.log(linkedList.deleteWithValue(20));
  // linkedList.printList(); // 10, 30
  // // console.log(linkedList.getLength()); // 2

  


  // スタックは、データを一時的に保存するためのデータ構造で、後入れ先出し（LIFO: Last-In, First-Out）の特性を持ちます。整数値を格納するスタックを TypeScript で実装してください。

  // 以下の機能を持つ Stack クラスを作成してください：

  // push: スタックに整数値を追加します。
  // pop: スタックから整数値を取り出し、その値を返します。スタックが空の場合は null を返します。
  // peek: スタックの一番上にある整数値を取得しますが、スタックから削除はしません。スタックが空の場合は null を返します。
  // isEmpty: スタックが空かどうかを真偽値で返します。
  // printStack: スタックの内容を上から順にコンソールに表示します。


  class Stack {
    private stack: number[];
  
    constructor() {
      this.stack = [];
    }
  
    push(num:number){
      this.stack.push(num);
    }
    pop(): number | null{
      return this.stack.pop() || null;
    }
    peek():number|null{
      return this.stack[0];
    }
    isEmpty(){
      return this.stack.length === 0;
    }
    printStack(){
      console.log(this.stack.join(','))
    }
  }
  
  // テスト
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  // stack.printStack(); // 出力結果: 30, 20, 10
  
  console.log(stack.pop()); // 出力結果: 30
  
  console.log(stack.peek()); // 出力結果: 20
  
  console.log(stack.isEmpty()); // 出力結果: false
  
  stack.printStack(); // 出力結果: 20, 10


  
   // 以下の機能を持つ Queue クラスを作成してください：

  // enqueue: キューに整数値を追加します。
  // dequeue: キューから先頭の整数値を取り出し、その値を返します。キューが空の場合は null を返します。
  // peek: キューの先頭にある整数値を取得しますが、キューから削除はしません。キューが空の場合は null を返します。
  // isEmpty: キューが空かどうかを真偽値で返します。
  // printQueue: キューの内容を先頭から順にコンソールに表示します。

  class Queue {
    private queue: number[];
  
    constructor() {
      this.queue = [];
    }

    enqueue(num:number):void{
      this.queue.push(num)
    }

    printQueue():void{
      console.log(this.queue.join(','));
    }

    dequeue():number|null{
      return this.queue.length > 0 ? this.queue[0] : null
    }

    peek():number|null{
      return this.queue.length > 0 ? this.queue[0] : null
    }

    isEmpty():boolean{
      return this.queue.length === 0
    }

  
  }
  
  // テスト
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  // queue.printQueue(); // 出力結果: 10, 20, 30
  
  // console.log(queue.dequeue()); // 出力結果: 10
  
  // console.log(queue.peek()); // 出力結果: 20
  
  // console.log(queue.isEmpty()); // 出力結果: false
  
  // queue.printQueue(); // 出力結果: 20, 30



  // 以下の要件を満たす関数 binarySearch を作成してください：
  // 関数シグネチャ：function binarySearch(arr: number[], target: number): number
  // 引数：
  // arr: ソート済みの数値の配列（昇順または降順）。
  // target: 検索対象の数値。
  // 戻り値：
  // targetが配列内に存在する場合、そのインデックスを返します（0以上の整数）。
  // targetが配列内に存在しない場合、-1を返します。
  
  type BinarySerach<T> = (arr:T[],target:T) => T; 
  const binarySearch:BinarySerach<number> = (arr, target) => {
    return arr.findIndex(val => val === target);
  }
  
  const arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
  // console.log(binarySearch(arr, 23)); // 出力結果: 5
  // console.log(binarySearch(arr, 38)); // 出力結果: 6
  // console.log(binarySearch(arr, 72)); // 出力結果: 9
  // console.log(binarySearch(arr, 100)); // 出力結果: -1




  // 下の要件を満たす、TODOリストを TypeScript で実装してください。

  // 要件:
  
  // Task クラスを作成し、タスクの内容を表現します。Task クラスは以下のプロパティを持ちます。
  
  // id: タスクの一意の識別子として、数値で表現します。
  // content: タスクの内容を文字列で表現します。
  // completed: タスクが完了したかどうかを真偽値で表現します。
  // TodoList クラスを作成し、タスクの追加、削除、完了状態の変更などの操作を行います。TodoList クラスは以下のメソッドを持ちます。
  
  // addTask(content: string): void: 新しいタスクをリストに追加します。
  // deleteTask(id: number): void: 指定されたIDのタスクをリストから削除します。
  // completeTask(id: number): void: 指定されたIDのタスクを完了状態に変更します。
  // showTasks(): void: 現在のタスクリストをコンソールに表示します。表示形式は自由ですが、タスクのID、内容、完了状態を分かりやすく表示してください。

  interface Task {
    id:number;
    content:string;
    completed:boolean
  }

  class Task implements Task {
    public id:number;
    public content:string;
    public completed:boolean;

  }

  class TodoList extends Task {
    public TaskList:Task[] = [];

    constructor(){
      super();
    }

    addTask(content:string):void{
        const currentId = this.TaskList.length;

        this.TaskList.push({id:currentId + 1,content:content,completed:false})
    }

    deleteTask(id:number):void{ 
      const index = this.TaskList.findIndex(val => val.id == id);
      this.TaskList = this.TaskList.filter((val,itemIndex) => itemIndex !== index)

    }

    completeTask(id:number):void{
      this.TaskList.forEach(val => {
        if(val.id == id){
          val.completed = true;
        }
      })
    }

    showTasks():void{
      for(let i of this.TaskList){
        console.log(i.content,i.completed)
      }
    }

  }


  const todoList = new TodoList();

  todoList.addTask("Buy groceries");
  todoList.addTask("Clean the house");
  todoList.addTask("Do laundry");

  todoList.deleteTask(1);

  todoList.completeTask(2)

  // todoList.showTasks();
  // 出力結果:
  // [1] Buy groceries (未完了)
  // [2] Clean the house (未完了)
  // [3] Do laundry (未完了)


  // todoList.showTasks();
  // 出力結果:
  // [1] Buy groceries (未完了)
  // [2] Clean the house (完了)
  // [3] Do laundry (未完了)

  todoList.deleteTask(1);

  // todoList.showTasks();
  // 出力結果:
  // [2] Clean the house (完了)
  // [3] Do laundry (未完了)


    // 与えられた配列から重複している要素を削除する関数 removeDuplicates を TypeScript で実装してください。
  // 関数シグネチャ：function removeDuplicates(arr: any[]): any[]
  // 引数：
  // arr: 重複要素を含む任意の型の配列。
  // 戻り値：
  // 重複要素が削除された配列を返します。元の配列の順序を保持して新しい配列を作成してください。

  type RemoveDuplicates = <T>(arr:T[]) => T[]; 
  const removeDuplicates:RemoveDuplicates = (arr) => {
    return Array.from(new Set(arr))
  }

  const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);
  // console.log(arrWithoutDuplicates); // 出力結果: [1, 2, 3, 4, 5]

  const strArrWithDuplicates = ["apple", "orange", "orange", "banana", "apple"];
  const strArrWithoutDuplicates = removeDuplicates(strArrWithDuplicates);
  // console.log(strArrWithoutDuplicates); // 出力結果: ["apple", "orange", "banana"]



  // 与えられたオブジェクトから指定されたキーのみを抽出する関数 pick を TypeScript で実装してください。  
  // 引数：
  // obj: オブジェクト型 T。
  // keys: obj から抽出したいキー名の配列 (K 型)。
  // 戻り値：
  // オブジェクト obj から指定されたキーのみを持つ新しいオブジェクトを返します。戻り値の型は Pick<T, K> となります。


  // const obj = { name: "Alice", age: 30, email: "alice@example.com" };
  // type Obj = {
  //   name :string;
  //   age  : number;
  //   email : string;
  // }

  // type Picks<T, K extends string> = (obj: T, keys: K[]) => Pick<T, K>;

  // const pick: Picks<Obj, string> = (obj, keys) => {
  //   return keys.reduce((newObj, item) => {
  //     if (obj[item]) {
  //       newObj[item] = obj[item];
  //     }
  //     return newObj;
  //   }, {});
  // }
  
  // const pickedObj = pick(obj, ["name", "email"]);
  // console.log(pickedObj); // 出力結果: { name: "Alice", email: "alice@example.com" }



  // 以下の要件を満たすクラスを作成してください。

  // クラス名は Rectangle とします。
  // コンストラクタは2つの引数を受け取ります。
  // 引数1: width（長方形の幅を表す数値）
  // 引数2: height（長方形の高さを表す数値）
  // クラスには以下の2つのメソッドを追加してください。
  // getArea(): 長方形の面積を計算して返します。
  // getPerimeter(): 長方形の周囲の長さを計算して返します。

  class Rectangle {
    public width:number;
    public height:number;

    constructor(width,height){
      this.width = width;
      this.height = height;
    }

    getArea():number{
      return this.width * this.height;
    }
    getPerimeter():number{
      return ((this.width * 2) + (this.height * 2) )
    }
  }

  const rectangle = new Rectangle(5, 10);
  // console.log(rectangle.getArea()); // 出力結果: 50
  // console.log(rectangle.getPerimeter()); // 出力結果: 30


  // ジェネリック型を使用して、配列の各要素に対して与えられた変換関数を適用するマップ関数 mapArray を実装してください。以下の要件を満たすように関数を作成してください。

// mapArray 関数は、array 引数と transform 引数を受け取ります。
// array は任意の型 T の配列です。
// transform は T 型の要素を引数に受け取り、任意の型 U の値を返す変換関数です。
// mapArray 関数は、array の各要素に対して transform を適用し、変換後の値からなる新しい配列を返します。


const numbers10 = [1, 2, 3, 4, 5];

type MapArray = <T extends string | number>(array:T[],transform:(item:T) => number) => number[];

const mapArray:MapArray = (array,transform) => {
  return array.map(val => transform(val))
}

const doubledNumbers = mapArray(numbers10, (num) => num * 2);
// console.log(doubledNumbers);
// 出力: [2, 4, 6, 8, 10]

const names = ['Alice', 'Bob', 'Charlie'];

const nameLengths = mapArray(names, (name) => name.length);
// console.log(nameLengths);
// 出力: [5, 3, 7]


// filterArray を実装してください。以下の仕様を満たすようにしてください。
// 仕様:
// filterArray は、与えられた配列 array の要素をフィルタリングして新しい配列を返します。
// フィルタリングは、与えられた predicate 関数によって行われます。
// predicate 関数は、要素を受け取り、真偽値を返す関数です。
// predicate 関数が真を返す要素のみがフィルタリングされた配列に含まれます。

// filter メソッドや他の組み込み関数を使用せずに、自身でフィルタリングのロジックを実装してください。

type FilterArray = <T>(array:T[],func:(prop:T) => boolean) => T[];

const filterArray:FilterArray = (array,func) => {
  let result = [];

  for(let i of array){
    if(func(i))result.push(i)
  }

  return result;
}


const numbers11 = [1, 2, 3, 4, 5];
const isEven = (num: number) => num % 2 === 0;

const filteredNumbers2 = filterArray(numbers11, isEven);
// console.log(filteredNumbers2);
// 出力: [2, 4]

const fruits4 = ['apple', 'banana', 'orange'];
const isLong = (fruit: string) => fruit.length > 5;

const filteredFruits2 = filterArray(fruits, isLong);
// console.log(filteredFruits2);
// 出力: ['banana', 'orange']



// 文字列の配列を受け取り、各文字列の先頭を大文字に変換した新しい配列を返す関数 capitalizeFirstLetter を実装してください。
// 要件:
// capitalizeFirstLetter はジェネリクス関数として実装してください。
// 大文字変換は英語のみを対象とし、非英語文字には影響を与えません。
// 元の配列は変更されず、新しい配列を返すようにしてください。

type CapitalizeFirstLetter<T> = (array: T[]) => T[];

const capitalizeFirstLetter: CapitalizeFirstLetter<string> = (array) => {
  return array.map(val => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  })
}


const strings = ['apple', 'banana', 'cherry'];
const capitalizedStrings = capitalizeFirstLetter(strings);
// console.log(capitalizedStrings);
// 出力: ['Apple', 'Banana', 'Cherry']

const numbers12 = ['one', 'two', 'three'];
const capitalizedNumbers = capitalizeFirstLetter(numbers12);
// console.log(capitalizedNumbers);
// 出力: ['One', 'Two', 'Three']



// ジェネリック型と条件付き型を使用して、与えられた配列から特定の要素を抽出する関数 filterByValue を実装してください。
// 要件:
// filterByValue 関数は、ジェネリック型 T を受け取ります。
// filterByValue 関数は、2つの引数を取ります: array (T[]型) と value (T型)。
// array は対象の配列であり、value は抽出したい要素の値です。
// filterByValue 関数は、array 内の要素の中から value と等しい要素だけを抽出し、新しい配列として返します。
// 返される配列の要素の型は、元の配列と同じ型となります。
// array 内に value と等しい要素が存在しない場合、空の配列を返します。


type FilterByValue2 = <T>(array:T[],value:T) => T[];
const filterByValue2:FilterByValue = (array,value) => {
  return array.filter(item => item === value)
}

const numbers13 = [1, 2, 3, 4, 5];
const filteredNumbers3 = filterByValue(numbers13, 3);
// console.log(filteredNumbers3);
// 出力: [3]

const fruits5 = ['apple', 'banana', 'orange', 'banana', 'apple'];
const filteredFruits3 = filterByValue(fruits5, 'banana');
// console.log(filteredFruits);
// 出力: ['banana', 'banana']

  // 以下の条件を満たすような、OmitProperty という条件型を実装してください。
  // OmitProperty 型は、2つのジェネリック型パラメータ T と K を受け取ります。
  // T 型はオブジェクト型であり、K 型は T 型のプロパティ名のいずれかの型として定義されているものです。
  // OmitProperty 型は、T 型から K 型に一致するプロパティを除外した新しいオブジェクト型を返します。
  // Omit という組み込み型を使用せずに、OmitProperty 型を実装してください。

  type Person6 = {
    name: string;
    age: number;
    city: string;
  };
  
  type OmitProperty2<T, K extends keyof T> = {
    [U in keyof T as U extends K ? never : U]: T[U];
  };
  type Omitted2 = OmitProperty2<Person6, 'age'>;
  /*
  Omitted の型は以下のようになります：
  {
    name: string;
    city: string;
  }
  */
  


  // 以下の要件に従って、TypeScriptの型定義を行ってください。

  // "Person"という名前の型を作成します。
  // Person型は、以下のプロパティを持ちます。
  // "name": 文字列型
  // "age": 数値型
  // "email": 文字列型またはundefined（オプショナル）
  // "isAdmin": 真偽値型
  // "Book"という名前の型を作成します。
  // Book型は、以下のプロパティを持ちます。
  // "title": 文字列型
  // "author": Person型（上記で作成した型）
  // "publishedYear": 数値型
  // "ISBN": 文字列型またはnull（オプショナル）

  type Person5 = {
    name:string;
    age:number;
    email:string|undefined;
    isAdmin:boolean;
  }

  type Book2 = {
    title:string;
    author:Person5;
    publichedYear:number;
    ISBN:string|null
  }


// 与えられた文字列の配列から、指定された文字列の長さと一致する文字列のみを抽出する関数 filterByLength を実装してください。関数の型アノテーションを行い、適切な型制約を追加してください。

// 配列が空の場合は、空の配列を返します。
// 指定された文字列の長さと一致する文字列がない場合は、空の配列を返します。
// 関数の引数として指定する文字列の長さは、非負の整数とします。

type FilterByLength = <T extends string>(array:T[],length:number) => T[];
const filterByLength:FilterByLength = (array,length) => {
  return array.filter(item => item.length === length)
}

const fruits7: string[] = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const result5 = filterByLength(fruits7, 5);
// console.log(result5); // 出力: ['apple', 'grape']

const colors: string[] = ['red', 'blue', 'green', 'yellow'];
const result6 = filterByLength(colors, 3);
// console.log(result6); // 出力: ['red']



// 以下の要件を満たす TypeScript のジェネリック型 GetLength を定義してください。

// GetLength は、ジェネリック型 T を引数に取ります。
// GetLength は、T 型が配列の場合は配列の要素数を、文字列の場合は文字列の長さを、それ以外の場合は never 型を返します。


type ArrayType = number[];
type StringType = string;
type ObjectType = { name: string; age: number };

type GetLength<T> = T extends Array<infer U> ? U : never;

type Length1 = GetLength<ArrayType>; // Length1 の型は number (配列の要素数)
type Length2 = GetLength<StringType>; // Length2 の型は number (文字列の長さ)
type Length3 = GetLength<ObjectType>; // Length3 の型は never (オブジェクトは対象外)


// FilterOut という条件型を定義してください。この条件型は、ジェネリック型 T の配列 array と、型 U を受け取り、array から U 型と一致する要素を取り除いた配列を返すものとします。ただし、T には配列以外の型も指定できるものとします。

type FilterOut<T,U> = Exclude<T,U>[];

// 使用例
type Numbers = FilterOut<number | string, string>; // type Numbers = number[]
type Strings = FilterOut<number | string, number>; // type Strings = string[]


// T extends U ? X : Y という条件付き型を使用して、与えられた型がnumberかどうかを判定する型を作成してください。

type IsNumber<T> = T extends number ? number : never;
type Result = IsNumber<4>


// T extends U ? X : Y という条件付き型を使用して、与えられた型が配列かどうかを判定する型を作成してください。
type IsArray<T> = T extends Array<infer U> ? T : never;
type Result6 = IsArray<[1,2,3,4]>

// T extends U ? X : Y という条件付き型を使用して、与えられた型がオブジェクトかどうかを判定する型を作成してください。
type IsObj<T> = T extends object ? T : never;
type Result7 = IsObj<{name:string}>;


// inferキーワードを使用して、与えられた配列型の要素の型を取得する型を作成してください。
type KeyofArray<T> = T extends Array<infer U> ? U : never;
type Result4 = KeyofArray<number[]>


// inferキーワードを使用して、与えられたタプル型の最後の要素の型を取得する型を作成してください。
const numbersTuple: [boolean, number, string] = [true, 2, '4'];

type NumbersTuple = typeof numbersTuple;
type IsLastTuple<T> = T extends [infer S,...infer U, infer K] ? S : never;
type Result5 = IsLastTuple<NumbersTuple>

}