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
  



  
}