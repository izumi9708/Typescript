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


  



  
}