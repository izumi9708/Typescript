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


const groupByProperty:GroupByProperty = <T,K extends keyof T>(array:T[],property:K) => {
  // let obj:{[key:string]:T[]} = {};
  // let obj:{[key:string]:T[]} = {};

  // for(let i of array){
  //   const key = i[property] as string;

  //   if(!obj[key]){
  //     obj[key] = [i];

  //   }else {
  //     obj[key] = [...obj[key],i]
  //   }
  // }

  // return obj;

  return array.reduce((result,obj) => {
    const key = obj[property].toString();

    if(typeof key === 'string'){
      if(!result[key]){
        result[key] = [obj];
      }else {
        result[key] = [...result[key],obj]
      }
      
    }

    return result;
  },{})
}

const groupedByCity = groupByProperty<Person2,keyof Person2>(people2, 'city');
console.log(groupedByCity);
// 出力: { Tokyo: [{ name: 'Alice', age: 25, city: 'Tokyo' }, { name: 'Charlie', age: 20, city: 'Tokyo' }],Osaka: [{ name: 'Bob', age: 30, city: 'Osaka' }, { name: 'David', age: 35, city: 'Osaka' }] }




// map」と「reduce」を使用して、与えられた数値配列の要素の平均値を計算する関数「calculateAverage」を実装してください。
// 要件:
// 「calculateAverage」は、数値の配列を受け取り、その要素の平均値を返す関数です。
// 平均値は小数点以下2桁までの数値として計算します。
// 数値配列が空の場合は、0を返します。

type CalculaateAverage = (array:number[]) => number; 
const calculateAverage:CalculaateAverage = (array) => {
  return array.reduce((a,b) => a + b)/array.length;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
// console.log(average)



// 以下の関数findMaxを実装してください。この関数は、与えられた数値配列から最大値を見つけて返します。
// 制約:
// 入力配列は少なくとも1つの要素を持つことが保証されています。

// この問題では組み込み関数Math.maxは使用しないでください。
// 配列の要素には数値のみが含まれることが前提となります。

type FindMax = (array:number[]) => number; 
const findMax:FindMax = (array) => {
  return array.reduce((a,b) => {
    return a > b ? a : b ;
  },0)
}

const numbers2 = [1, 5, 3, 2, 4];
// console.log(findMax(numbers2)); // 出力: 5

const numbers3 = [10, 8, 6, 4, 2];
// console.log(findMax(numbers3)); // 出力: 10

// 以下の要件を満たす関数を実装してください。
// 関数名: removeFalsyValues
// 入力: any[]
// 出力: any[]
// 要件:
// 入力として与えられた配列から、Falsy (偽と評価される) の値を除外した配列を作成して返します。
// Falsyとは、以下の値を指します: false, 0, '', null, undefined, NaN
// 入力配列の要素の順序は維持される必要があります。

type paramType = string | number | boolean | null | undefined;
type RemoveFalsyValues = <T>(array:T[]) => T[]; 

const removeFalsyValues:RemoveFalsyValues = (array) => {
  return array.filter(val => val)
}


const input = [1, 0, false, '', null, undefined, NaN, 'hello'];
const output = removeFalsyValues(input);
// console.log(output);
// 出力: [1, 'hello']



// 配列の要素を指定した数値で乗算する関数multiplyArrayを実装してください。以下の要件を満たすように実装してください。
// 関数名: multiplyArray
// 入力: 数値の配列 array、乗算する数値 multiplier
// 出力: 乗算された結果の数値配列
// 要件:
// 配列の各要素に対して指定された数値で乗算を行い、結果の数値配列を返します。
// 入力配列の要素の順序は維持されます。
// 入力配列や乗算する数値は任意の数値であり、配列の要素数や数値の範囲に制限はありません。

const multiplier = (array:number[],multiple:number):number[] => {
  return array.map(val => val * multiple);
}

const numbers4 = [2, 4, 6, 8, 10];
const multiple = 3;
// console.log(multiplier(numbers4,multiple))


// 以下の関数removeDuplicatesを実装してください。この関数は、与えられた配列から重複した要素を取り除いた新しい配列を返します。重複している要素は最初に現れたものを残し、後続の同じ要素は取り除かれます。
// 入力配列の要素は任意の型Tとします。
// 入力配列の要素の順序は維持される必要があります。

type RemoveDuplicates = <T>(array:T[]) => T[];
const removeDuplicates:RemoveDuplicates = (array) => {
  return Array.from(new Set(array))
}

const numbers5 = [1, 2, 3, 2, 4, 1, 5];
const fruits = ['apple', 'banana', 'orange', 'banana', 'apple'];
// console.log(removeDuplicates(numbers5));
// console.log(removeDuplicates(fruits));


// mergeObjectsというジェネリックな関数を実装してください。この関数は、与えられたオブジェクトの配列をマージし、1つのオブジェクトに結合して返します。
// 入力としてオブジェクトの配列が与えられます。
// 各オブジェクトは同じ型を持つものとします。
// オブジェクトのプロパティは、文字列型のキーを持ち、そのキーに対応する値は任意の型とします。
// mergeObjects関数は、与えられたオブジェクトの配列をマージし、1つのオブジェクトに結合します。
// マージの際、同じキーを持つプロパティの値は配列として結合されます。
// マージ結果のオブジェクトを返します。

type MergeObjects = <T extends {[key:string]:number|string|string[]}>(objects:T[]) => {[key:string]:string[]|number[]};

const mergeObjects:MergeObjects = (objects) => {
  return objects.reduce((a,b) => {
    Object.keys(b).forEach(val => {
      if(!a[val]) {
        a[val] = [b[val]];

        }else {
          a[val] = [...a[val],b[val]]
      }
    })

    return a;
  },{});
};

const object1 = { id: 1, name: 'Alice', age: 25 };
const object2 = { id: 2, name: 'Bob', hobbies: ['reading', 'cooking'] };
const object3 = { id: 3, name: 'Charlie', age: 30 };

const mergedObject = mergeObjects([object1, object2, object3]);
// console.log(mergedObject);
// 出力: { id: [1, 2, 3], name: ['Alice', 'Bob', 'Charlie'], age: [25, 30], hobbies: ['reading', 'cooking'] }