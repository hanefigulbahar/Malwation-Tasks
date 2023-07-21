# Javascript Array Ve Object Fonksiyonlarının Best Practices Ve Aralarındaki Performans Değerlendirmeleri

JavaScript'te diziler ve nesnelerle çalışırken, işlevleri verimli bir şekilde kullanma konusunda en iyi uygulamaları anlamak önemlidir.

## Dizi İşlevleri İçin En İyi Uygulamalar:

**1. İterasyon İçin `forEach()` Kullanma:**
Dizi üzerinde döngü yapma ve her öğe üzerinde bir işlem gerçekleştirilmesi gerektiğinde kullanılabilir. Kısa ve anlaşılır bir yapıya sahiptir.

```typescript
const numbers = [1, 2, 3, 4, 5]:
// Good practice: forEach() for iteration
    numbers.forEach((num) => {
    console.log(num) ;
}):
```

**2. Dönüştürme İçin `map()` Kullanma:**
Bir dizinin öğelerini dönüştürmek ve dönüştürülmüş değerlerle yeni bir dizi oluşturmak isteniyorsa kullanılabilir. Belirtilen işlevi her öğeye uygular ve dönüştürülmüş değerlerle yeni bir dizi döndürür.

```typescript
const numbers = [1, 2, 3, 4, 5];
// Good practice: map() for transforming arrays
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

**3. Filtreleme İçin `filter()` Kullanma:**
Belirli bir koşulu sağlayan öğelerin bulunduğu yeni bir dizi oluşturmak istenildiğinde kullanılır. Her öğeye bir koşul uygular ve koşulu sağlayan öğelerden oluşan yeni bir dizi döndürür.

```typescript
const numbers = [1, 2, 3, 4, 5];
// Good practice: filter() for filtering arrays
const evenNumbers = numbers.filter((num) => num % 2 === 0):
console.log (evenNumbers) ; // Output: [2, 4]
```

**4. Değerleri Birleştirmek İçin `reduce()` Kullanma:**
Bir dizinin öğelerine dayalı olarak tek bir değer hesaplamak gerektiğinde, örneğin toplamı veya maksimum değeri bulmak için kullanılabilir. Her öğeye bir işlev uygular ve sonucu biriktirir.

```typescript
const numbers = [1, 2, 3, 4, 5];
// Good practice: reduce() for aggregating values
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
```

**5. `splice()` ve `slice()` Kullanma:**
splice() ve slice() dizinin belli bölümlerini değiştirmek veya almak için kullanılır, diğer işlemlere göre az performanslı olabilirler. Performans açısından kritik senaryolarda bu fonksiyonları gereksiz yere kullanmaktan kaçınılmalıdır. splice yöntemi, değiştirmek istediğiniz dizinin orijinal halini değiştirir ve çıkardığı elemanları yeni bir dizi olarak döndürür. slice yöntemi, orijinal diziyi değiştirmez ve belirtilen indeksler arasındaki elemanları yeni bir dizi olarak döndürür.

## Nesne İşlevleri İçin En İyi Uygulamalar:

**1. Doğrudan Özellik Erişimi İçin Nokta Notasyonunu Kullanma:**
Özellik adını önceden bildiğiniz durumlarda, özelliklere köşeli parantez notasyonu `object['property']` yerine nokta notasyonuyla `object.property` erişilebilir. Nokta notasyonu daha hızlı ve daha okunabilir özellik sağlar.

```typescript
const person = {
  name: "Hanefi",
  age: 27,
};

// Good practice: Dot notation for property access
console.log(person.name); // Output: Hanefi
```

**2. Nesne özellikleri üzerinde döngü için Object.keys() Kullanma:**
Nesnenin kendi sayılabilir özellikleri üzerinde döngü yapılması gerektiğinde, Object.keys() kullanarak özellik adlarının bir dizisini alır. Ardından bu dizi üzerinden döngü yaparak ilgili özellik değerlerine erişilebilir.

```typescript
const person = {
  name: "Hanefi",
  age: 27,
  occupation: "Engineer",
};

// Good practice: Object.keys () for iterating over object properties
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Output:
// name: Hanefi
// age: 27
// occupation: Engineer
```

**3. Nesneleri birleştirmek için Object.assign() Kullanma:**
Birden çok nesneyi birleştirmeniz gerekiyorsa kullanılır. Bu işlev, bir veya daha fazla kaynak nesnedeki özellikleri hedef bir nesneye kopyalar ve sonuç olarak oluşan nesneyi döndürür.

```typescript
const person = {
  name: "Hanefi",
  age: 27,
};

const additionalInfo = {
  occupation: "Engineer",
  hobbies: ["reading", "coding"],
};

// Good practice: Object.assign() for merging objects
const mergedPerson = Object.assign({}, person, additionalInfo);
console.log(mergedPerson);
// Output:
//name:'Hanefi'
//age: 27,
//occupation:'Engineer'
//hobbies: ["reading',"coding']
```

**4. Object Destructuring:**
Bir nesneden belirli özellikleri çıkarmak ve bunları ayrı değişkenlere atamak gerektiğinde, nesne yıkımı kısa ve okunabilir bir sözdizimi sağlar. Kodun okunabilirliğini ve bakımını iyileştirebilir.

```typescript
const person = {
    name: "Hanefi",
    age: 27,
    occupation: "Engineer",
}:

// Good practice: Object destructuring for extracting properties
const { name, age } = person;
console. log (name); // Output: Hanefi
console. log (age); // Output: 27
```

## Performans Değerlendirmeleri:

Dizi ve nesne işlevlerinin performansı, özel kullanım durumuna ve veri boyutuna bağlı olarak değişebilir. Genel olarak, dizi işlevleri, JavaScript motorlarının kullandığı temel veri yapıları ve optimizasyon teknikleri nedeniyle nesne işlevlerine göre daha performanslı olma eğilimindedir.

Ancak, modern JavaScript motorları son derece optimize edilmiştir ve farklı dizi ve nesne işlevleri arasındaki performans farkları, eski sürümlere kıyasla önemli ölçüde azalmıştır.

Belirli kullanım durumunuzdaki dizi ve nesne işlevlerinin performansını değerlendirmek için şu faktörleri göz önünde bulundurabilirsiniz:

**1. Girdi Veri Boyutu:**
İşlevleri çeşitli girdi veri boyutlarıyla test ederek nasıl ölçeklendiklerini görebilirsiniz. Bazı işlevler, küçük diziler veya nesnelerle iyi performans gösterebilir, ancak büyük veri setlerinde performansı düşürebilir.

**2. Görev Karmaşıklığı:**
Her işlevin belirli bir görev için çalışma süresi ölçülmesi gerekir. Filtreleme veya dönüştürme gibi bazı işlemler, işlevin karmaşıklığına bağlı olarak farklı performans değerlerine sahip olabilirler.

**3. Tarayıcı / JavaScript Motoru:**
Farklı tarayıcılar ve JavaScript motorları, performans optimizasyonlarında farklılıklar gösterebilir. Sonuçların tutarlı olması için kodunuzu birden fazla platformda test etmeniz gerekir.

[ogrocket.com](https://blog.logrocket.com/javascript-array-methods/)\
[sonarsource.com](https://www.sonarsource.com/blog/es2023-new-array-copying-methods-javascript/)\
[medium.com](https://towardsdatascience.com/practical-javascript-arrays-vs-objects-3c1f895907bd)\
[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\
