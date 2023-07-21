# Typescript Best Practices

TypeScript; JavaScript’in tüm özelliklerini ve kütüphanelerini destekleyen, bunlarla birlikte statik tür sistemleri ve nesne tabanlı programlama özelliklerine de sahip olan bir programlama dilidir.
TypeScript ile en iyi uyguluma oluşturmak için izlenilmesi gereken bazı yollar vardır.

**1. Verileri Tiplerini Tanımlamak:**
Kodunuzdaki nesnelerin ve işlevlerin şeklini tanımlamak için TypeScript'i kullanabilirsiniz. Bu, hataları erkenden yakalamanıza ve kodunuzu daha sürdürülebilir hale getirmenize yardımcı olabilir.

```typeScript
interface User {
    name: string;
    age: number;
};
const userl: User = {
    name:"Hanefi",
    age: 27,
};
```

**2. Enum Kullanmak:**
Enum'lar bir dizi değeri temsil etmek için harika bir yoldur. Kodu daha okunabilir hale getirmemize ve hataları önlememize yardımcı olur.

```typeScript
enum Color {
    Red,
    Green,
    Blue
};
const myColor: Color = Color.Red;
```

**3. Interface Kullanmak:**
Arayüzler(interface), bir sınıf veya fonksiyonun uyması gereken contract tanımlamanın bir yoludur. Kodlar yeniden kullanılabilir ve anlaşılması daha kolay hale getirmemize yardımcı olur.

```typeScript
interface Calculator {
    (x: number, y: number): number;
}
const calculatorSumFunction: Calculator = (x, y) => {
    return x + y;
};
```

**4. Extend Interfaces(Arayüzleri Genişletme):**
Arayüzlere yeni özellikler veya yöntemler eklemek için arayüzleri genişletilebilir. Bu, farklı veri türlerini temsil eden bir arayüz hiyerarşisi oluşturmamıza yardımcı olur.

```typeScript
interface Animal {
    name: string;
    sound: string;
};

interface Dog extends Animal {
    breed: string;
};

const myDog: Dog = {
    name: "Scooby-Doo",
    sound: "Woof!",
    breed: "Great Dane"
};
```

**5. Boş Interface Tanımlamaktan Kaçınmak:**
Boş interface'ler kodunuza herhangi bir değer katmaz. Aslında kodunuzun anlaşılmasını daha da zorlaştırabilirler. Bu yüzden kodda herhangi işlevi olmayan interface'leri tutmaktan kaçınılmalıdır.

```typeScript
interface EmptyInterface {};
```

**6. Tür Ek Açıklamalarını Kullanmak:**
Tür ek açıklamaları, TypeScript'e bir değişkenin veya ifadenin türünün ne olduğunu söylemenin bir yoludur. Bu, TypeScript'in hataları erkenden yakalamasına yardımcı olabilir ve kodunuzu daha anlaşılır ve sürdürülebilir hale getirir.

```typeScript
const myNumber: number = 10 ;

const myString: string = "Hello world";

const myObject: { name: string; age: number } = { name: "Hanefi", age: 27 };
```

**7. Infer Anahtar Sözcüğünü Kullanmak:**
Infer anahtar sözcüğü, TypeScript'in bir türdeki değişkenin tür çıkarımına olanak tanıyan güçlü bir özelliğidir. Bu, daha özlü ve okunabilir kod yazmanıza yardımcı olabilir.

```typeScript
const myNumberInferred = 10;
```

**8. Any Anahtar Sözcüğünü Olabildiğince Az Kullanmak:**
Any anahtar sözcüğü, bir değişkenin herhangi bir türde olabileceği anlamına gelir. Bu bazı durumlarda yararlı olabilir, ancak hatalara da yol açabilir. Değişkenlerin tiplerini baştan tanımlamak kodun daha anlaşılır ve akıcı olmasını sağlar.

```typeScript
let myAnyVariable: any = "Hello world";

    myAnyVariable = 10;
```

**9. Type Assertions(Tür Onaylarını) Kullanmak:**
Type assertions, TypeScript'e bir değişkenin veya ifadenin belirli bir türde olduğunu söylemenin bir yoludur. Bu, tiplendirilmemiş kodlarla çalışmanız gerektiğinde yararlı olabilir.

```typeScript
const myNumberAsserted = 10 as number;
```

**10. Typescript Derleyicisini Kullanmak:**
TypeScript derleyicisi, kod hataları yakalamanıza yardımcı olur. Kodu dağıtmadan(run) önce her zaman derleyici çalıştırılmalıdır.

**11. Strick Modu Etkinleştirmek:**
TypeScript'in katı modu, geliştirme sürecinde potansiyel hataları erken yakalamaya yardımcı olan gelişmiş tür denetimi sağlar. tsconfig.json dosyanıza "strict": true ekleyerek katı modu etkinleştirin.

```javascript
{
    "compilerOptions": {
        "strict": true
    }
}
```

**12. Generic'leri Kullanmak:**
Generic'ler, farklı tiplerle çalışabilen yeniden kullanılabilir kod yazmamızı sağlar. Esnek ve tür güvenliği olan fonksiyonlar, sınıflar ve veri yapıları oluşturmamıza olanak tanır. Birden fazla tür üzerinde soyutlama yapmamız gerektiğinde generic'leri kullanmalıyız.

```typeScript
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numbers: number[] = [1, 2, 3, 4, 5];
const reversedNumbers: number [] = reverseArray (numbers) ;
```

**13. Birleşim ve Kesişim Türlerini Kullanmak:**
TypeScript, birleşim tipleri ('|') ve kesişim tipleri ('&') sunarak türleri birleştirip işleyebilmemizi sağlar. Bu güçlü tür operatörleri, türler arasındaki karmaşık ilişkileri ifade etmemize ve kodu daha ifade edici ve esnek hale getirmemize olanak tanır.

```typeScript
interface Summer {
    degree: number;
}

interface Winter {
    cloud: boolean;
}
type SummerOrWinter = Summer | Winter;

function processClimate (climate: SummerOrWinter) {
// ...
}

type ClimateInfo = Summer & Winter:

const climate: ClimateInfo = {
    degree: 32,
    cloud: false,
}:
```

**14. ESLint ve TSLint Kullanmak:**
ESLint ve TSLint, kodlama standartlarını uygulamaya, potansiyel hataları yakalamaya ve kod kalitesini iyileştirmeye yardımcı olan kod denetimi araçlarıdır.

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
```

**15. Callback Geri Dönüşlerinde Any Yerine Void Kullanmak:**
Dönen değerlerin tipinin kontrol edilmemiş bir şekilde kullanmanızı önler. Bunun için any yerine void kullanılması gerekir.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/8a1845f8-6e26-4472-81f6-8dc5866e6e6b">

[medium.com](https://medium.com/@hanefigulbahar/what-is-typescript-how-to-use-it-a8b9c894c673)\
[amazon.com](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/typescript-best-practices.html)\
[medium.com](https://itnext.io/mastering-typescript-21-best-practices-for-improved-code-quality-2f7615e1fdc3)\
[medium.com](https://medium.com/@warkiringoda/typescript-best-practices-2021-a58aee199661)\
[medium.com](https://blog.bitsrc.io/best-practices-for-writing-clean-and-maintainable-typescript-code-1cc6a7f029dc)\
[typescriptlang.org](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)\
[engineering.zalando.com](https://engineering.zalando.com/posts/2019/02/typescript-best-practices.html)
