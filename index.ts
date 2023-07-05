// 与えられた文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定する関数 isPalindrome を実装してください。関数は次の要件を満たす必要があります。

// 関数名は isPalindrome とします。
// 入力として文字列を受け取ります。
// 文字列が回文であれば true を、回文でなければ false を返します。
// 文字列の判定は、大文字と小文字を区別せずに行います。つまり、大文字と小文字は同一視します。
// 文字列には空白や句読点などの特殊文字が含まれる場合でも正しく判定できるようにしてください。

type IsPalindmore = (string:string) => boolean;

const isPalindrome:IsPalindmore = (string) => {
  const reverse:string = string.toLocaleLowerCase().split('').reverse().join('');

  return string === reverse ? true : false;
}

// console.log(isPalindrome("racecar")); // 出力: true
// console.log(isPalindrome("level")); // 出力: true
// console.log(isPalindrome("Hello")); // 出力: false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // 出力: true
// console.log(isPalindrome("12321")); // 出力: true



// 数字の配列が与えられた場合、配列内の数値を降順でソートし、ソートされた配列を返す関数 sortDescending を実装してください。

// 以下の条件を満たすように関数を実装してください:

// 入力として与えられる配列は整数のみを含みます。
// ソートされた配列は降順である必要があります。
// ソートされた配列は元の配列を変更せず、新しい配列として返す必要があります。

type SortDecending = (array:number[]) => number[];

const sortDescending:SortDecending = (array) => {
  return array.sort((a,b) => b - a)
}

const unsortedNumbers = [3, 1, 5, 2, 4];
const sortedNumbers = sortDescending(unsortedNumbers);
// console.log(sortedNumbers);
// 出力: [5, 4, 3, 2, 1]



// filterByProperty というジェネリック関数を実装してください。この関数は、与えられたオブジェクトの配列から指定されたプロパティと値のペアに一致するオブジェクトをフィルタリングします。

interface Person {
  name: string;
  age: number;
  city: string;
}

const people: Person[] = [
  { name: 'Alice', age: 25, city: 'Tokyo' },
  { name: 'Bob', age: 30, city: 'Osaka' },
  { name: 'Charlie', age: 20, city: 'Tokyo' },
  { name: 'David', age: 35, city: 'Osaka' },
];

type FilterByProperty = <T,K extends keyof T>(array:T[],property:K,city:T[K]) => T[];

const filterByProperty:FilterByProperty = (array,property,city) => {
  return array.filter(val => val[property] === city)
}

const filteredPeople = filterByProperty(people, 'city', 'Tokyo');
// console.log(filteredPeople);
// 出力: [{ name: 'Alice', age: 25, city: 'Tokyo' }, { name: 'Charlie', age: 20, city: 'Tokyo' }]



// 関数 groupByProperty を実装してください。この関数は、与えられたオブジェクトの配列を指定されたプロパティに基づいてグループ化し、結果をオブジェクトとして返します。
// 要件:
// array パラメータはオブジェクトの配列です。
// property パラメータはグループ化するためのプロパティの名前です。
// 関数は、指定されたプロパティの値を基準にオブジェクトをグループ化し、結果をオブジェクトとして返します。各グループはプロパティの値をキーとし、対応するオブジェクトの配列を値として持ちます。


const people2:Person2[] = [
  { name: 'Alice', age: 25, city: 'Tokyo' },
  { name: 'Bob', age: 30, city: 'Osaka' },
  { name: 'Charlie', age: 20, city: 'Tokyo' },
  { name: 'David', age: 35, city: 'Osaka' },
];

type Person2 = {
  name:string;
  age:number;
  city:string
}

type GroupByProperty = <T, K extends keyof T>(array: T[], property: K) => {[key:string]:T[]}


