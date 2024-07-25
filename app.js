// Berilgan objectdagi barcha string qiymatlarni toping va birlashtiring.
function concatStrings(obj) {
  let result = "";
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result += obj[key];
    } else if (typeof obj[key] === "object") {
      result += concatStrings(obj[key]);
    }
  }
  return result;
}

// Test case
const obj = {
  a: "Hello",
  b: {
    c: " ",
    d: {
      e: "World",
      f: {
        g: "!",
      },
    },
  },
};
console.log(concatStrings(obj)); // Output: "Hello World!"

// Berilgan stringdagi so'zlarni ularning uzunligi bo'yicha tartiblang.

function sortByLength(s = []) {
  return s
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
}

// Test case
console.log(sortByLength("short longest medium")); // Output: "short medium longest"
console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"

// Berilgan objectdagi barcha raqamli qiymatlarni toping va ro'yxat (array) sifatida qaytaring.
function findNumbers(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      result = result.concat(findNumbers(obj[key]));
    }
  }
  return result;
}

// Test case
const objs = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
console.log(findNumbers(objs)); // Output: [1, 2, 3, 4]

// Berilgan stringdagi eng uzun so'zni toping.
function longestWord(s) {
  let words = s.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Test case
console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"

// Berilgan stringdagi barcha kichik harflarni katta harflarga aylantiring va teskari tartibda qaytaring.
function reverseUpperCase(s) {
  return s.toUpperCase().split("").reverse().join("");
}

// Test case
console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"

// Berilgan stringdagi barcha raqamlarni toping va alohida arrayda qaytaring.
function extractNumbers(s) {
  s = s.replace(/\D/g, " ");
  return s.split(" ").map(Number).filter(Number);
}

// Test case
console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
console.log(extractNumbers("123 Main St.")); // Output: [123]

// Berilgan objectdagi barcha qiymatlarning turlarini toping va ro'yxat (array) sifatida qaytaring.
function valueTypes(obj) {
  let result = [];
  for (let key in obj) {
    result.push(typeof obj[key]);
    if (typeof obj[key] === "object") {
      result = result.concat(valueTypes(obj[key]));
    }
  }
  return result;
}

// Test case
const obj2 = {
  a: 1,
  b: "string",
  c: true,
  d: {
    e: 3.14,
    f: null,
    g: {
      h: undefined,
      i: [1, 2, 3],
    },
  },
};
console.log(valueTypes(obj2));
// Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]

// Berilgan objectdagi barcha kalitlarni ularning qiymatlari bilan almashtiring. Agar qiymatlari takrorlansa, oxirgi qiymatni qabul qiling.
function invertObject(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result = Object.assign(result, invertObject(obj[key]));
    } else {
      result[obj[key]] = key;
    }
  }
  return result;
}

// Test case
const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
console.log(invertObject(obj3)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }

// Berilgan string palindrom ekanligini tekshiring. (Palindrom - o'qilganda orqa tomondan ham bir xil bo'lgan so'z yoki ibora).
function isPalindrome(s = "") {
  let newArr = s
    .toLowerCase()
    .replaceAll(",", "")
    .split(" ")
    .join(" ")
    .split(" ");
  for (let i = 0; i < newArr.length; i++) {
    let reverseWord = newArr[i].split("").reverse().join("");
    if (newArr[i] === reverseWord) {
      return true;
    } else {
      return false;
    }
  }
}

// Test case
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false

// Berilgan objectdagi barcha raqamli qiymatlarning yig'indisini hisoblang.
function sumNumbers(obj) {
  let result = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result += obj[key];
    } else if (typeof obj[key] === "object") {
      result += sumNumbers(obj[key]);
    }
  }
  return result;
}

// Test case
const obj5 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
console.log(sumNumbers(obj5)); // Output: 10

// Berilgan stringni so'zlarga ajratib, har bir so'zning bosh harfini katta qiling va qayta birlashtiring.
function capitalizeWords(s = "") {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toLocaleUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

// Test case
console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"
