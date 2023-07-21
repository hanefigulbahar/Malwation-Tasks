# Javascript Performansın Önemi

JavaScript'in performansı, web uygulamaları ve web sitelerinin kullanıcı deneyimini doğrudan etkileyen önemli bir faktördür. Performansın iyileştirilmesi, kullanıcıların daha hızlı, daha verimli ve daha akıcı bir şekilde etkileşimde bulunmalarına yardımcı olur. İşte JavaScript performansının önemini açıklayan bazı nedenler:

**- Kullanıcı Deneyimi:** Hızlı ve düzgün çalışan web siteleri, kullanıcıların sayfalar arasında hızlıca gezinmelerine ve içerikle daha hızlı etkileşim kurmalarına olanak tanır. Kullanıcılar, yavaş yanıt veren veya takılan web sitelerinden genellikle hoşlanmazlar ve bu nedenle böyle bir deneyim, kullanıcıların siteden çıkmasına ve rekabetçi sitelere yönelmelerine neden olabilir.

**- Arama Motoru Optimizasyonu (SEO):** Arama motorları, web sitelerinin hızını dikkate alarak sıralama yaparlar. Hızlı yüklenen web siteleri, arama sonuçlarında daha yüksek bir sıralama elde etme eğilimindedir. Dolayısıyla, performansı iyi olan bir web sitesi, SEO stratejilerinin bir parçası olarak daha görünür olabilir.

**- Dönüşüm Oranları:** Performansı yavaş olan bir web sitesi, kullanıcıların satın alma işlemlerini tamamlamalarını veya belirli eylemleri gerçekleştirmelerini engelleyebilir. Dönüşüm oranları, bir web sitesinin başarısını belirleyen önemli metriklerden biridir ve daha iyi performans, daha yüksek dönüşüm olasılığını artırabilir.

**- Mobil Uyumluluk:** Mobil cihazlar üzerinden web sitelerine erişim yaygınlaştıkça, mobil cihazlarda düzgün çalışan ve hızlı yüklenen web siteleri giderek daha önemli hale gelmektedir. JavaScript performansının iyileştirilmesi, mobil kullanıcıların deneyimini artırabilir ve mobil cihazlarda daha iyi uyumluluk sağlayabilir.

**- Enerji Verimliliği:** Taşınabilir cihazlarda, özellikle dizüstü bilgisayarlar ve akıllı telefonlarda, web sayfalarının enerji tüketimi önemlidir. Performansı yüksek ve optimize edilmemiş JavaScript kodu, cihazın bataryasını daha hızlı bir şekilde tüketebilir. Bu nedenle, enerji verimli kod yazmak, kullanıcıların cihazlarını daha uzun süre kullanabilmelerine yardımcı olabilir.

**- Veri Trafik Yönetimi:** İnternet bağlantı hızları, coğrafi bölgelere ve cihazlara göre değişir. Performansı optimize edilmemiş JavaScript kodu, daha fazla veri trafiği yaratarak kullanıcıların daha fazla veri indirmesine neden olabilir. Bunu önlemek, düşük hızlı bağlantıları olan kullanıcılar için önemlidir.

# JavaScript optimizasyonu ve performansı

JavaScript performansını iyileştirmek için işte bazı ipuçları

**1. Küçültme ve Paketleme (Minify ve Bundle):**
JavaScript kodunu küçültmek, gereksiz karakterleri (boşluklar, yorumlar vb.) kaldırmayı, değişken ve fonksiyon isimlerini kısaltmayı içerir. Paketleme, birden fazla JavaScript dosyasını tek bir dosyada birleştirerek HTTP isteklerinin sayısını azaltmayı amaçlar. Kodunuzu küçültme ve paketleme, yükleme sürelerini önemli ölçüde iyileştirir. Popüler minifiye ediciler arasında Google Closure Compiler, YUI Compressor ve UglifyJS bulunur.

```javascript
// Minified version
function addNumbers(a, b) {
  return a + b;
}

// Instead of having multiple separate files like this

// Filel-js
function function1() {
  /*...*/
}

// File2-js
function function2() {
  /*...*/
}
// We can bundle them into a single file like this

// Bundle-js
function function1() {
  /*...*/
}
function function2() {
  /*==.*/
}
```

**2. İçerik Dağıtım Ağı (Content Delivery Network - CDN) Kullanımı:**
JavaScript kütüphanelerini ve çatıları barındırmak için bir CDN kullanmak, içeriği kullanıcının konumuna daha yakın bir sunucudan teslim ederek gecikmeyi azaltır ve indirme hızlarını artırır.

```javascript
//CDN example
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

**3. Döngüleri Optimize Etme:**
Döngüler içinde gereksiz hesaplamalardan kaçınılmalı ve mümkün olduğunca döngü sayısını azaltmaya çalışılmalıdır. Gerektiğinde döngüleri açma (loop unrolling) veya döngüleri fonksiyonel programlama yapılarına dönüştürme gibi teknikleri kullanılmalıdır (`map` veya `reduce` gibi).

```javascript
//Optimize Loops:

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // Output: 15

//Optimization for performance use reducer
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum); // Output: 15
```

**4. Global Değişkenlerden Kaçınma:**
Fazla miktarda global değişken kullanımı, performans sorunlarına ve potansiyel isim çakışmalarına yol açabilir. Bunun yerine, kodun işlevlere veya modüllere dahil ederek değişkenlerin kapsamını sınırlayarak performans artırabilir.

```javascript
//Avoid Global Variables:

//Bad
let count = 0;
function increment() {
    count++;
}

function decrement() {
    count--;
}

//Good
function createCounter(){
    let count = 0;
    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    return {increment, decrement};
}

const counter = createCounter():
    counter.increment():
    counter.decrement () ;
```

**5. Olay Yönlendirmesi (Event Delegation) Kullanımı:**
Özellikle büyük miktarda elemanla çalışırken olay işleyicileriyle çalışırken olay yönlendirmeyi düşünün. Her bir elemana ayrı bir olay işleyici atamak yerine, tek bir olay işleyiciyi bir üst elemana atayabilir ve olayların çocukları üzerinde işlem yapmak için olay yayılımını kullanabilirsiniz. Bu yaklaşım, bellek tüketimini azaltır ve performansı artırır.

```javascript
//Use Event Delegation:

//Example, assigning an event to each list element individually:

const items = document.querySelectorAll("#myList li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Clicked on:", item.textContent);
  });
});

//Use Event Declarations
const list = document.getElementById("myList");

list.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LI") {
    console.log("Clicked on:", target.textContent);
  }
});
```

**6. DOM Manipülasyonunu Sınırlama:**
Belge Nesne Modeli'nin (Document Object Model - DOM) sık ve gereksiz manipülasyonları, performans açısından maliyetli olabilir. Doğrudan DOM manipülasyonunu en aza indirgeyerek değişiklikleri hafızada yapılmalı ve ardından tümü aynı anda DOM'a uygulanmalıdır.

```javascript
//Limit DOM Manipulation:

// Frequent DOM manipulation (inefficient)
const element = document.getElementById("myElement");

element.style.color = "red";
element.style.fontSize = "16px";
element.style.fontweight = "bold";

// Combined DOM manipulation (efficient)
const element = document.getElementById("myElement");

element.style.cssText = "color: red; font-size: 16px; font-weight: bold;";
```

**7. DOM Sorgularını Önbelleğe Alma:**
Aynı elemanları tekrar tekrar sorgulamak verimsiz olabilir. Sık erişilen elemanların referansları değişkenlerde saklanılarak tekrarlayan DOM sorgulardan kaçınılmalıdır.

```javascript
// Cache DOM Queries:

// Without caching (repeated DOM query)
function updateElement() {
  const element = document.getElementById("myElement");
  element.style.color = "blue";
  // Do more operations with 'element'
}

// With caching (DOM query cached in a variable)
const element = document.getElementById("myElement");

function updateElement() {
  element.style.color = "blue";
  // Do more operations with 'element'
}
```

**8. Asenkron İşlemleri Kullanma:**
JavaScript, callbacks, Promises ve async/await gibi mekanizmalar aracılığıyla asenkron yetenekler sağlar. Asenkron işlemleri kullanarak ana iş parçacığını bloke etmeyi önleyebilir ve özellikle ağ istekleri veya yoğun hesaplamalar gibi zaman alıcı görevlerle çalışırken yanıt verme süresini iyileştirir.

```javascript
//Use Asynchronous Operations:

// Without async/await (blocking main thread)
function fetchData() {
  const data = fetch("https://api.example.com/data");
  // Do something with the fetched data
}
// With async/await (non-blocking, improved responsiveness)
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  // Do something with the fetched data
}
```

**9. CSS Seçicileri Optimizasyonu:**
JavaScript ile DOM elemanları seçerken, etkili sorgulama yapmak için CSS seçicileri optimize edilmelidir. Tarayıcının gereksiz yere tüm DOM'u gezmesine yol açabilecek aşırı karmaşık seçicilerden kaçınılmalıdır.

```javascript
//Optimize CSS Selectors:

// Inefficient selector (traverses entire DOM)
const elements = document.querySelectorAll("div span");

// Efficient selector (selects specific elements directly)
const elements = document.querySelectorAll(". my-container span");
```

**10. Benchmark:**
Performans sekmesi gibi tarayıcı geliştirici araçlarını kullanarak performans darboğazları belirlenmelidir. En çok kaynak tüketen alanları belirlenmeli ve buna göre optimize edilmelidir.

```javascript
// Benchmark:

// Example of benchmarking JavaScript code
console.time("MyCodeBenchmark");

// Your code here..

console.timeEnd("MyCodeBenchmark");
```

**11. Switch Statements Yerine Object Literals Kullanma:**
Nesne değişmezlerini kullanmak, özellikle çok sayıda durumla uğraşırken bazen switch deyimlerinden daha iyi performans sunabilir.

```javascript
// Switch statement:

function getColor(name) {
  switch (name) {
    case "red":
      return "#FF0000";
    case "green":
      return "#00FF00";
    case "blue":
      return "#0000FF";
    default:
      return;
      "unknown";
  }
}
// Object literal:

function getColor(name) {
  const colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  return colors[name] || "unknown";
}
```

**12. Kodu Test Etme:**
JavaScript kodunu test etmek, beklendiği gibi çalışıp çalışmadığını doğrulamak için önemlidir. Kodu test etmek için çeşitli araçlar kullanabilir, örneğin birim test çerçeveleri ve entegrasyon test çerçeveleri.

**13. Öğelerin Yüklenme Sırası:**
İlk olarak, ziyaretçi tarayıcıda herhangi bir şey görmeden önce <head> bölümündeki tüm öğelerin önceden yüklenmesi, ardından sonraki tüm öğelerin mantıklı bir şekilde yüklenmesi için sıralanması önemlidir. Optimize edilmemiş bir sayfa yüklenirken, kullanıcının sayfanın tamamı yüklenmeden önce bir "beyaz ekran" görme ihtimali vardır. Optimize edilmiş bir sayfa yüklemesi (aslında render) daha adım adım gerçekleşir ve sayfa tamamen yüklenene kadar kullanıcının bazı içerikleri kademeli olarak görmesini sağlar.

**14. HTTP/2 Protokolünü Kullanılması:**
HTTP/2, HTTP protokolünün en son sürümüdür ve yalnızca JavaScript performansınızı artırmaya yardımcı olmakla kalmayıp genel olarak sitenizi hızlandırmaya da yardımcı olacak bazı harika geliştirmeler sağlar. HTTP/2 çoklama kullanır, bu nedenle aynı anda birden fazla istek ve yanıt gönderilmesine izin verir.

[upwork.com](https://www.upwork.com/resources/javascript-optimization-tips)\
[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Performance/JavaScript)\
[keycdn.com](https://www.keycdn.com/blog/javascript-performance)\
[stackify.com](https://stackify.com/how-to-optimize-js-performance/)\
[medium.com](https://medium.com/sessionstack-blog/how-javascript-works-high-performing-code-8-optimization-tips-cec4aab07e64)\
