# Javascrip new Map Ve new Set Nedir? Doğru Kullanımları Nasıldır?

JavaScript'teki new Map() ve new Set(), sırasıyla Map ve Set türlerinde yeni nesneler oluşturur.

**1. Map:**

Map, anahtar-değer çiftlerini depolamak için kullanılır. Her anahtar yalnızca bir kez olabilir ve bu nedenle anahtarlar benzersiz olmalıdır.

Hem anahtar hem de değerler, herhangi bir JavaScript veri türü olabilir. Yani, hem basit veri tipleri (örn. sayılar, dizgiler, semboller) hem de nesneler (örn. nesne, dizi, fonksiyon) kullanılabilir.

Sıralı bir yapıya sahiptir, yani öğelerin eklenme sırası korunur.
Map, anahtarlarına göre hızlı arama yapmak için optimize edilmiştir.

- Yeni bir Map oluşturma:

```javascript
const map = new Map();
```

- Map'e öğe ekleme:

```javascript
map.set(key, value);
```

- Bir anahtara karşılık gelen değeri alma:

```javascript
const value = map.get(key);
```

- Bir anahtarın Map içinde olup olmadığını kontrol etme:

```javascript
const hasKey = map.has(key);
```

- Map'ten bir girişi silme:

```javascript
map.delete(key);
```

- Map'in içindeki öğelerin sayısını alma:

```javascript
const size = map.size;
```

- Map üzerinde döngü kurma:

```javascript
map.forEach((value, key) => {
  // Use key and value
});
```

- Map'in içindeki tüm öğeleri temizleme:

```javascript
map.clear();
```

**2. Set:**

Set, benzersiz değerleri depolamak için kullanılır. Bu nedenle, her değer yalnızca bir kez eklenir ve tekrar eden değerler izin verilmez.

Sadece tek bir değer türünü depolayabilir, yani yalnızca basit veri tiplerini veya yalnızca nesneleri saklayabilirsiniz, ancak karmaşık bir veri yapısı içindeki nesnelerin benzersizliği, referanslarına göre değil, içeriklerine göre değerlendirilir.

Sıralı bir yapıya sahip değildir ve öğelerin eklenme sırası korunmaz.
Set, belirli bir değerin koleksiyonda bulunup bulunmadığını hızlı bir şekilde kontrol etmek için optimize edilmiştir.

- Yeni bir Set oluşturma:

```javascript
const set = new Set();
```

- Set'e öğe ekleme:

```javascript
set.add(value);
```

- Bir değerin Set içinde olup olmadığını kontrol etme:

```javascript
const hasValue = set.has(value);
```

- Set'ten bir değeri silme:

```javascript
set.delete(value);
```

- Set'in içindeki öğelerin sayısını alma:

```javascript
const size = set.size;
```

- Set üzerinde döngü kurma:

```javascript
set.forEach((value) => {
  // Use value
});
```

- Set'in içindeki tüm değerleri temizleme:

```javascript
set.clear();
```

Map ve Set, benzersiz girişleri olan verilerin koleksiyonlarını depolamak için kullanışlıdır. Temel fark, Map'in anahtar-değer çiftlerini depolaması, Set'in ise sadece değerleri saklamasıdır.

Eğer anahtar-değer çiftleri tutmak ve anahtarlarla hızlı arama yapmak isteniyorsa new Map kullanılabilir. Ancak, sadece benzersiz değerleri depolamak ve hızlı bir şekilde tekrar eden değerleri engellemek isteniyorsa new Set daha uygun bir seçenek olacaktır.
