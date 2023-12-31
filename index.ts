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


// 以下の関数filterByRangeを実装してください。この関数は、与えられた数値の配列から、指定された範囲内の数値のみをフィルタリングして返します。

// 仕様:

// 関数名: filterByRange
// 入力: numbers: number[] (数値の配列), min: number (最小値), max: number (最大値)
// 出力: number[] (フィルタリングされた数値の配列)
// 数値配列numbers内の要素のうち、min以上max以下の範囲に該当する数値のみをフィルタリングします。
// フィルタリングされた数値の配列を返します。元の配列numbersは変更しません。

type FilterByRange = <T>(array:T[],min:T,max:T) => T[]; 

const filterByRange:FilterByRange = (array,min,max) => {
  return array.filter(val => (val >= min) && (val <= max))
}


const numbers6 = [1, 3, 5, 7, 9, 11];
const filteredNumbers = filterByRange(numbers6, 3, 9);
// console.log(filteredNumbers);
// 出力: [3, 5, 7, 9]

const moreNumbers = [10, 20, 30, 40, 50];
const filteredMoreNumbers = filterByRange(moreNumbers, 15, 45);
// console.log(filteredMoreNumbers);
// 出力: [20, 30, 40]


// 以下の条件を満たす関数 getUniqueValues を実装してください。

// 関数 getUniqueValues は、与えられた配列内の重複する値を取り除き、ユニークな値の配列を返します。
// ユニークな値の配列は元の配列の順序を保持します。
// 入力配列には、文字列や数値などのさまざまなデータ型の要素が含まれることがあります。

type GetUniqueValues = <T>(array:T[]) => T[] ;
const getUniqueValues:GetUniqueValues = (array) => {
  return Array.from(new Set(array))
}

const numbers7 = [1, 2, 3, 4, 3, 2, 1];
const uniqueNumbers = getUniqueValues(numbers);
// console.log(uniqueNumbers);
// 出力: [1, 2, 3, 4]

const fruits2 = ['apple', 'banana', 'orange', 'banana', 'apple'];
const uniqueFruits = getUniqueValues(fruits);
// console.log(uniqueFruits);
// 出力: ['apple', 'banana', 'orange']


// 次の要件を満たす関数 groupByProperty を実装してください。

// 要件
// 関数名: groupByProperty
// 入力: array (T[]型) - ジェネリックな配列
// 入力として与えられた配列 array を指定されたプロパティ property に基づいてグループ化します。
// グループ化された結果をオブジェクトとして返します。オブジェクトのキーは property の値となり、値は array 内のオブジェクトの配列となります。
// property の値は文字列として扱われます。
// 入力として与えられる配列 array および配列内のオブジェクトは、プロパティ property を持つものとします。


interface Person {
  name: string;
  age: number;
  city: string;
}

const people3: Person[] = [
  { name: 'Alice', age: 25, city: 'Tokyo' },
  { name: 'Bob', age: 30, city: 'Osaka' },
  { name: 'Charlie', age: 20, city: 'Tokyo' },
  { name: 'David', age: 35, city: 'Osaka' },
];


type GroupByProperty2<T,K extends keyof T> = (array:T[],property:K) => {[key:string]:T[]} ;
const groupByProperty2:GroupByProperty2<Person,keyof Person> = (array,property) => {
  return array.reduce((obj,arr) => {
    if(!obj[arr[property]]){
      obj[arr[property]] = [arr];

    }else {
      obj[arr[property]] = [...obj[arr[property]],arr]
    }

    return obj;
  },{})
}

const groupedByCity2 = groupByProperty2(people3, 'city');
// console.log(groupedByCity2);



// User とジェネリック関数 filterByProperty を使って、与えられた配列から指定されたプロパティの値が一致する要素をフィルタリングする関数 filterByProperty を実装してください。
// filterByProperty は、ジェネリック関数であり、T は要素の型を表します。
// K はプロパティのキーの型を表します。
// 関数は、与えられた配列 array を指定されたプロパティ property の値が value と一致する要素でフィルタリングします。
// フィルタリングされた要素の配列を返します。

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 20 },
  { id: 4, name: 'David', age: 35 },
];

type FilterByProperty2<T,K extends keyof T> = (array:T[],property:K,value:T[K]) => T[] ;

const filterByProperty2:FilterByProperty = (array,property,value) => {
  return array.filter(item => item[property] === value)
}

const filteredUsers = filterByProperty2(users, 'age', 30);
// console.log(filteredUsers);


// 与えられた配列の要素をランダムに並び替える関数 shuffleArray を実装してください。
// 要件:
// shuffleArray 関数は、配列を受け取り、要素をランダムに並び替えた新しい配列を返します。
// 元の配列は変更せず、新しい配列が返されることを確認してください。
// 配列の要素は、ランダムな順序で並び替えられる必要があります。


type ShuffleArray = <T>(array:T[]) => T[]; 

const shuffleArray:ShuffleArray = (array) => {
  let indexArray = [];
  let shuffledArray = array.slice();

  while(indexArray.length < shuffledArray.length){
    const random = Math.floor(Math.random()* shuffledArray.length);

    indexArray.push(random);
    indexArray = Array.from(new Set(indexArray));
  }

  return indexArray.reduce((a,b) => {
    a.push(shuffledArray[b])
    return a
  },[])
}

const numbers8 = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffleArray(numbers8);
// console.log(shuffledNumbers); // ランダムな順序で並び替えられた配列が表示される


const fruits3 = ['apple', 'banana', 'orange', 'kiwi'];
const shuffledFruits = shuffleArray(fruits3);
// console.log(shuffledFruits); // ランダムな順序で並び替えられた配列が表示される



// 数値の配列を受け取り、重複する数値を削除した新しい配列を返す関数 removeDuplicates を実装してください。
// 要件:
// 入力される配列は任意の数値の集合であり、数値の重複が存在する場合があります。
// 出力される配列は、重複する数値が削除されたものであり、元の配列と同じ順序を保持します。
// 追加のデータ構造の使用は許可されていません。配列のメソッドを使用して実装してください。

const removeDuplicates2 = (array:number[]):number[] => {
  return Array.from(new Set(array))
}

const numbers9 = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers2 = removeDuplicates2(numbers9);
// console.log(uniqueNumbers2);
// 出力: [1, 2, 3, 4, 5]

const otherNumbers = [10, 20, 30, 20, 40, 30, 50];
const uniqueOtherNumbers = removeDuplicates2(otherNumbers);
// console.log(uniqueOtherNumbers);
// 出力: [10, 20, 30, 40, 50]



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



// ユニオン型の要素を持つ配列が与えられたとき、各要素の型ごとにグループ化する groupByType という関数を実装してください。関数のシグネチャは以下の通りです。
// 配列 array の各要素は、ユニオン型 T | null | undefined の形式を持ちます。
// 関数は、配列 array の要素をそれぞれの型ごとにグループ化し、結果をオブジェクトとして返します。
// オブジェクトのキーは、各要素の型を表し、値はその型に対応する要素の配列です。
// null や undefined といった特殊な値は、それぞれ "null" や "undefined" というキーにグループ化されます。


type GroupByType = <T>(array:T[]) => {[key:string]:T[]}
const groupByType:GroupByType = (array) => {
  return array.reduce((obj,item) => {
    let type = typeof(item);
   if(type == 'object' && item == null)type = null

    if(!obj[type]){
      obj[type] = [item];

    }else {
      obj[type] = [...obj[type],item]
    }

    return obj;
  },{})
};

const array = [1, 'hello', null, undefined, 2, null, 'world'];
const result = groupByType(array);
// console.log(result);
// 出力: { number: [1, 2], string: ['hello', 'world'], null: [null, null], undefined: [undefined] }



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


type FilterByValue = <T>(array:T[],value:T) => T[];
const filterByValue:FilterByValue = (array,value) => {
  return array.filter(item => item === value)
}

const numbers13 = [1, 2, 3, 4, 5];
const filteredNumbers3 = filterByValue(numbers13, 3);
// console.log(filteredNumbers3);
// 出力: [3]

const fruits5 = ['apple', 'banana', 'orange', 'banana', 'apple'];
const filteredFruits = filterByValue(fruits5, 'banana');
// console.log(filteredFruits);
// 出力: ['banana', 'banana']



// 数値の配列と値を受け取り、与えられた値以上の数値をフィルタリングする filterGreaterThan という関数を実装してください。
// array パラメータは数値の配列です。
// value パラメータは数値です。
// 配列内の数値のうち、与えられた値以上の数値のみをフィルタリングします。
// フィルタリングされた結果の数値の配列を返します。


type FilterGreaterThan = <T>(array:T[],value:T) => T[];
const filterGreaterThan:FilterGreaterThan = (array,value) => {
  return array.filter(item => item > value);
}

const numbers14 = [1, 3, 5, 7, 9, 11];
const filteredNumbers4 = filterGreaterThan(numbers14, 5);
// console.log(filteredNumbers4);
// 出力: [7, 9, 11]

const moreNumbers2 = [10, 20, 30, 40, 50];
const filteredMoreNumbers2 = filterGreaterThan(moreNumbers2, 25);
// console.log(filteredMoreNumbers2);
// 出力: [30, 40, 50]


// filterByAge: Person 配列と最小年齢を受け取り、最小年齢以上の年齢を持つ人々の配列を返す関数を作成してください。
// groupByCity: Person 配列を受け取り、都市ごとに人々をグループ化したオブジェクトを返す関数を作成してください。返されるオブジェクトのプロパティは都市名であり、値はその都市に住む人々の配列です。


interface Person {
  name: string;
  age: number;
  city: string;
}

const people4: Person[] = [
  { name: 'Alice', age: 25, city: 'Tokyo' },
  { name: 'Bob', age: 30, city: 'Osaka' },
  { name: 'Charlie', age: 20, city: 'Tokyo' },
  { name: 'David', age: 35, city: 'Osaka' },
];

type FilterByAge = <T extends Person>(array:T[],minAge:number) => T[] 
const filterByAge:FilterByAge = (array,minAge) => {
  return array.filter(item => item.age >= minAge)
}

type GroupByCity = <T extends Person>(array:T[]) => {[key:string]:T[]};
const groupByCity:GroupByCity = (array) => {
  return array.reduce((obj,item) => {
    if(!obj[item.city]){
      obj[item.city] = [item];

    }else {
      obj[item.city].push(item)
    }
    return obj
  },{})
}

const filteredPeopl2 = filterByAge(people4, 30);
// console.log(filteredPeopl2);
// 出力: [{ name: 'Bob', age: 30, city: 'Osaka' }, { name: 'David', age: 35, city: 'Osaka' }]

const groupedPeople = groupByCity(people);
// console.log(groupedPeople);
// 出力: { Tokyo: [{ name: 'Alice', age: 25, city: 'Tokyo' }, { name: 'Charlie', age: 20, city: 'Tokyo' }],
//         Osaka: [{ name: 'Bob', age: 30, city: 'Osaka' }, { name: 'David', age: 35, city: 'Osaka' }] }



// 以下の要件を満たす sumArray というジェネリック関数を実装してください：

// sumArray 関数は、任意の型の配列を受け取り、その要素の総和を計算します。
// 配列の要素は数値である必要があります。他の型の要素が含まれている場合は、コンパイルエラーを発生させてください。
// 関数の型パラメータには適切な制約を設定してください。

type SumArray<T extends number> = (array:T[]) => T;
const sumArray:SumArray<number> = (array) => {
  return array.reduce((a,b) => a + b,0)
}

const numbers17 = [1, 2, 3, 4, 5];
const result1 = sumArray(numbers17);
console.log(result1); // 出力: 15

const numbers18 = [10, 20, 30, 40, 50];
const result2 = sumArray(numbers18);
console.log(result2); // 出力: 150

const strings2 = ['apple', 'banana', 'cherry'];
// const result3 = sumArray(strings2); // エラー: 文字列型の配列が渡されましたが、数値型の配列が必要です
// console.log(result3)


// 数値の配列を受け取り、配列内の数値の平均値を計算する関数 calculateAverage を作成してください。関数の型アノテーションを行い、適切な型制約を追加してください。

// 以下の条件を満たすようにしてください：

// 配列が空の場合は、null を返します。
// 平均値は小数点以下まで計算されるようにします。

type CalculateAverage2<T> = (array:T[]) => T | null;

const calculateAverage2:CalculateAverage2<number> = (array) => {
  const result = array.reduce((a,b) => {
    return a + b
  },0) / array.length;

  return array.length === 0 ? null : result
}

const numbers15 = [1, 2, 3, 4, 5];
const average2 = calculateAverage2(numbers15);
// console.log(average2); // 出力: 3

const emptyArray: number[] = [];
const average3 = calculateAverage2(emptyArray);
// console.log(average3); // 出力: null



// 以下の要件を満たす型エイリアス FilterArray を定義してください：

// FilterArray は、ジェネリックな型パラメータ T と、array パラメータを持ちます。
// array パラメータは T 型の要素を持つ配列とします。
// FilterArray は、array パラメータ内の要素をフィルタリングするための関数型です。
// FilterArray の関数型は、ジェネリックな型パラメータ T を引数に取り、T 型の要素を受け取って真偽値を返します。

type FilterArray2 = <T>(array:T[],func:(num:T) => boolean) => T[];
const filterArray2:FilterArray2 = (array,func) => {
  return array.filter(val => func(val))
}

const numbers16: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven2 = (num: number) => num % 2 === 0;
const isOdd = (num: number) => num % 2 !== 0;

// console.log(filterArray2(numbers16,isEven2))
// console.log(filterArray2(numbers16,isOdd))


// 「型エイリアス ShuffleArray を作成し、与えられた配列をランダムにシャッフルする関数を作成してください。シャッフルには Math.random() を使用してください。」

type ShuffleArray2 = <T>(array:T[]) => T[] ;
const shuffleArray2:ShuffleArray2 = (array) => {
  const result = array.slice();

  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));

    [array[i],array[j]] = [array[j],array[i]]
  }

  return result;
}

const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruitsArray: string[] = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];

// console.log(shuffleArray2(numbersArray))
// console.log(shuffleArray2(fruitsArray))



// Person というインターフェースを定義し、name（string型）、age（number型）、city（string型）という3つのプロパティを持つものとします。
// people という配列を作成し、複数の Person オブジェクトを含めて初期化します。
// GroupByProperty というジェネリック型を定義します。この型は、第1引数に T[]（T型の配列）、第2引数に K extends keyof T（T型のキー）を受け取り、オブジェクトを返します。
// groupByProperty という関数を作成し、GroupByProperty 型を利用して、people 配列を city プロパティでグループ化してください。
// グループ化された結果を console.log で出力してください。
// 以上の要件を満たす TypeScript コードを記述してください。

interface Person {
  name:string;
  age:number;
  city:string;
}

const people5: Person[] = [
  { name: 'Alice', age: 25, city: 'Tokyo' },
  { name: 'Bob', age: 30, city: 'Osaka' },
  { name: 'Charlie', age: 20, city: 'Tokyo' },
  { name: 'David', age: 35, city: 'Osaka' },
];

type GroupByProperty3 = <T extends Person>(array:T[]) => {[key:string]:T[]};
const groupByProperty3:GroupByProperty3 = (array) => {
  return array.reduce((obj,item) => {
    if(!obj[item.city]){
      obj[item.city] = [item];

    }else {
      obj[item.city].push(item);
    }

    return obj
  },{})
}

// console.log(groupByProperty3(people5));


// 以下の型エイリアス SumArray を完成させ、数値の配列を受け取り、配列内の数値の合計値を計算して返す関数 sumArray を作成してください。関数の型アノテーションを行い、適切な型制約を追加してください。

// SumArray 型エイリアスは、ジェネリック型パラメータ T を受け取ります。T は数値の配列の要素の型を表します。
// sumArray 関数は、T[] 型の引数 array を受け取り、数値の合計値を返します。
// 配列が空の場合は、null を返します。
// 合計値は小数点以下まで計算されるようにします。

type SumArray2<T extends number> = (array:T[]) => T | null;
const sumArray2:SumArray2<number> = (array) => {
  return array.length === 0 ? null : array.reduce((a,b) => a + b,0)
}

const numbersArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result3 = sumArray2(numbersArray2);
// console.log(result3); // 出力: 55

const emptyArray2: number[] = [];
const result4 = sumArray2(emptyArray2);
// console.log(result4); // 出力: null


// 以下の条件を満たす、reverseArray という関数を実装してください：

// reverseArray 関数は、ジェネリックな型パラメータ T を持ちます。
// 関数は、T[] 型の配列を受け取ります。
// 関数は、受け取った配列の要素を逆順に並び替えた新しい配列を返します。


type ReverseArray = <T>(array:T[]) => T[];
const reverseArray:ReverseArray = (array) => {
  return array.reverse();
}

const numbers19: number[] = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers19);
// console.log(reversedNumbers); // 出力: [5, 4, 3, 2, 1]

const fruits6: string[] = ['apple', 'banana', 'orange'];
const reversedFruits = reverseArray(fruits6);
// console.log(reversedFruits); // 出力: ['orange', 'banana', 'apple']


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
type Result2 = IsArray<[1,2,3,4]>

// T extends U ? X : Y という条件付き型を使用して、与えられた型がオブジェクトかどうかを判定する型を作成してください。
type IsObj<T> = T extends object ? T : never;
type Result3 = IsObj<{name:string}>;


// inferキーワードを使用して、与えられた配列型の要素の型を取得する型を作成してください。
type KeyofArray<T> = T extends Array<infer U> ? U : never;
type Result4 = KeyofArray<number[]>


// inferキーワードを使用して、与えられたタプル型の最後の要素の型を取得する型を作成してください。
const numbersTuple: [boolean, number, string] = [true, 2, '4'];

type NumbersTuple = typeof numbersTuple;
type IsLastTuple<T> = T extends [infer S,...infer U, infer K] ? S : never;
type Result5 = IsLastTuple<NumbersTuple>


// 以下の配列を受け取り、重複している要素を取り除いた新しい配列を返す関数 removeDuplicates を作成してください。ただし、元の配列の順序は保持してください。関数の型アノテーションも行ってください


type RemoveDuplicates3 = <T>(array:T[]) => T[];
const removeDuplicates3:RemoveDuplicates3 = (array) => {
  return Array.from(new Set(array))
}
const numbers20 = [1, 2, 2, 3, 4, 4, 5];
const result7 = removeDuplicates3(numbers20);
// console.log(result7); // 出力: [1, 2, 3, 4, 5]

const fruits8 = ['apple', 'banana', 'banana', 'orange', 'kiwi', 'kiwi'];
const result8 = removeDuplicates3(fruits8);
// console.log(result8); // 出力: ['apple', 'banana', 'orange', 'kiwi']



// 以下の配列を受け取り、偶数の要素だけを取り出した新しい配列を返す関数 filterEvenNumbers2 を作成してください。関数の型アノテーションも行ってください。

type FilterEvenNumbers = <T extends number>(array:T[]) => T[]; 
const filterEvenNumbers:FilterEvenNumbers = (array) => {
  return array.filter(val => val % 2 === 0)
}
const numbers21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result9 = filterEvenNumbers(numbers21);
// console.log(result9); // 出力: [2, 4, 6, 8, 10]

const numbers22 = [2, 4, 6, 8, 10];
const result10 = filterEvenNumbers(numbers22);
// console.log(result10); // 出力: [2, 4, 6, 8, 10]


// 以下の配列を受け取り、要素を文字列として連結した新しい文字列を返す関数 concatenateStrings を作成してください。関数の型アノテーションも行ってください。

type ConcatenateStrings<T> = (array:T[]) => T; 
const concatenateStrings:ConcatenateStrings<string> = (array) => {
  return array.join('');
}

const words = ['Hello', ' ', 'World', '!'];
const result11 = concatenateStrings(words);
// console.log(result11); // 出力: 'Hello World!'

// 以下のオブジェクトの配列を受け取り、各オブジェクト内の age プロパティの合計値を計算して返す関数 sumAges を作成してください。関数の型アノテーションも行ってください。

interface Person3 {
  name: string;
  age: number;
}

const people6: Person3[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 35 },
];

type KeyofPerson<T> = keyof T;
type SumAges<T> = (array:T[]) => number;

const sumAges:SumAges<Person3> = (array) => {
  return array.map(val => val.age).reduce((a,b) => a + b,0)
}

const totalAge = sumAges(people6);
// console.log(totalAge); // 出力: 110




import index2 from './index2';
index2();