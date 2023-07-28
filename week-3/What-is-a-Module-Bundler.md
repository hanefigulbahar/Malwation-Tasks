## Module Bundler Nedir?

Module Bundler (Modül Paketleyici), web uygulamaları için büyük JavaScript kod tabanlarını düzenlemeye ve optimize etmeye yardımcı olan bir araçtır. Birden fazla JavaScript dosyasını ve bunların bağımlılıklarını alır ve bunları bir web sayfasına dahil edilebilecek tek bir dosya veya dosya kümesi halinde birleştirir.

# Module Bundlerlara Neden İhtiyacımız Var?

**1. Modular Code:**

Bir modül paketleyici, uygulamadaki diğer JavaScript dosyalarını (modüller) içe aktarmayı ve kullanmayı kolaylaştırarak kodun düzenli tutmanıza yardımcı olur. Hangi dosyaların birbirine bağlı olduğunu takip eder ve doğru sırada yüklenmelerini sağlar. Bu, kodumuzun daha modüler olmasına ve bakımının daha kolay yapılmasına yardımcı olur.

Bir modül paketleyici kullanılmadığında bağımlılıkların takip edilmesi gerekir. Bunun için, script etiketini kullanarak her modülü veya bağımlılığı HTML dosyasına doğru sırada manuel olarak eklememiz ve kendisine bağlı olan modülden önce yüklendiğinden emin olmamız gerekir. Kod ve bağımlılıklar büyüdükçe bu işlemler uygulamanın düzgün çalışmamasına ve hataların çözümünün zorlaşmasına sebep olur.

Bir modül paketleyicisi olmadan, birden fazla modül kullanırken ortaya çıkan farklı kapsam ve değişken adlandırma çakışmalarını kontrol etmemiz gerekir.

**2. Minification of Code:**

Minification, modül paketleyicileri tarafından koddaki boşluk ve yorumlar gibi gereksiz karakterleri kaldırmak için kullanılan bir işlemdir. Bu, paketin boyutunu azaltmaya yardımcı olur ve uygulama için daha hızlı bir sayfa yükleme süresi sağlar.

Minification ayrıca değişken ve fonksiyon adlarını daha küçük karakterlere kısaltabilir. Bu işlem, tarayıcıya aktarılması gereken kod miktarını azaltarak paket boyutunu büyük ölçüde azaltabilir. Boyuttaki bu azalma, son kullanıcı için daha hızlı bir indirme süresi ve daha hızlı bir sayfa yükleme süresi sağlar.

Yorumları ve boşlukları kaldırarak, küçültme kodun insanlar tarafından okunmasını zorlaştırır ve tersine mühendisliği zorlaştırır. Bu, bazı durumlarda bir güvenlik avantajı sağlar.

**3. Dead Code Elimination:**

Dead code elimination, modül paketleyicilerin programın çalışma zamanı sırasında yürütülmeyen kodu tanımlamak ve kaldırmak için kullanılan bir işlemdir. Bu işlem, paket boyutunu azaltır ve uygulamanın performansını arttırır.

Dead code elimination işleminde, kullanılmayan bağımlılıkları kaldırmak mümkündür ve bu da paket boyutunda bir azalmaya yol açar.

**4. Code Splitting:**

Code splitting, modül paketleyicileri tarafından uygulama kodunu talep üzerine yüklenebilecek daha küçük parçalara bölmek için kullanılan bir tekniktir. Bu, ilk yükleme süresini azaltarak bir uygulamanın performansını büyük ölçüde artırabilir.

**5. Transpiling:**

Transpiling, bir programlama dilinde yazılmış kodu başka bir programlama diline dönüştürme işlemidir. JavaScript'te transpiling, modern JavaScript kodunu çoğu tarayıcıyla uyumlu eski bir sürüme dönüştürür.

JavaScript geliştikçe yeni dil özellikleri ortaya çıkar; ancak tüm tarayıcılar JavaScript'in en son sürümlerini desteklemez. Transpiling, geliştiricilerin en son dil özelliklerini kullanmasına olanak tanırken eski tarayıcılar için geriye dönük uyumluluk sağlar.

Modern JavaScript kodunu çoğu tarayıcıyla uyumlu eski bir sürüme dönüştürmek için babel gibi transpilasyon araçlarıyla birlikte kullanılabilir.

**6. Development Optimization:**

Bir geliştirme sunucusu, manuel olarak bir web sunucusu kurmadan uygulamayı yerel olarak çalıştırmasına, test edilmesine ve hataların ayıklamasına olanak tanır. webpack gibi çoğu modül paketleyicisi, yerleşik bir geliştirme sunucusuyla birlikte gelir. Örneğin, webpack-dev-server uygulamayı sunabilir ve kod değiştirildiğinde tarayıcıyı otomatik olarak yeniden yükleyebilir. Bu, bir web sunucusunun manuel olarak kurulması ihtiyacını ortadan kaldırır. Koddun yazmasına ve hataların giderilmesine yardımcı olur.

Geliştirme sunucuları genellikle geliştirme sırasında çok yararlı olabilecek hot reloading ve source maps gibi özelliklerle birlikte gelir. Hot Reloading, tarayıcıyı manuel olarak yenilemeden kodda yapılan değişikliklerin görülmesini sağlar. Source Maps, transpile edilmiş veya paketlenmiş olsa bile hata ayıklama sırasında orijinal kodun görülmesini sağlar.

# Module Bundler Nasıl Çalışır?

Module Bundler'ın ilk yaptığı şey, tüm sunulan dosyaların ilişki haritasını oluşturmaktır. Bu işleme Dependency Resolution(Bağımlılık Çözümleme) denir. Bunun için bir başlangıç dosyasına ihtiyaç vardır ve tercihen ana dosya olmalıdır. Ardından, bu başlangıç dosyasını analiz ederek onun bağımlılıklarını anlamaya çalışır.

Bunu takiben, bağımlılıkları tarama işlemiyle, bu bağımlılıkların kendi bağımlılıklarını belirlemeye çalışır. Bu süreçte gördüğü her dosyaya unique ID atar. Son olarak, tüm bağımlılıkları çıkarır ve tüm dosyalar arasındaki ilişkiyi gösteren bir bağımlılık grafiği oluşturur.

Kısaca JavaScript projelerindeki modülleri ve bağımlılıkları tespit ederek ve bu bağımlılık ağacını takip ederek tüm kodu tek bir dosyada birleştirir.

# Başlıca kullanılan module bundlerlar:

- Vite: Yerel ES modülleri üzerinden dosya sunan bir geliştirme sunucusu ve kodu Rollup ile paketleyen bir derleme komutundan oluşur. Vite, mantıklı varsayılanlar ve minimum yapılandırma ile basit ve kullanımı kolay olacak şekilde tasarlanmıştır.

- Webpack: JavaScript kodlar ve resimler, CSS ve yazı tipleri gibi diğer varlıkları bir tarayıcıda yürütülebilecek bir biçimde paketlemek için kullanılan açık kaynaklı bir JavaScript modül paketleyicisi.

- Parcel: Sıfır yapılandırma yaklaşımıyla bilinen, geliştiriciden herhangi bir yapılandırma gerektirmeden tüm varlıkları ve bağımlılıkları otomatik olarak algılayıp paketleyebileceği anlamına gelir.

- Esbuild: Derleme işlemini optimize etmek için mevcut tüm CPU çekirdeklerini kullanarak yüksek oranda paralelleştirilecek şekilde tasarlanmıştır.

- SWC: Derleme, paketleme, küçültme, dönüştürme ve daha fazlası için kullanılabilir. Next.js, Parcel ve Deno gibi popüler çerçeveler ve araçlar tarafından kullanılır.

- Rollup: Rollup son derece yapılandırılabilir ve özelleştirilebilir olacak şekilde tasarlanmıştır, bu da onu JavaScript kodlarını paketlemek için esnek bir araca ihtiyaç duyan geliştiriciler arasında popüler bir seçim haline getirir.

# Webpack Çalışma Stili

- Entry: Webpack'in bağımlılık grafiğini nereden başlatması gerektiğini belirtir. Uygulamanın mimarisine bağlı olarak bir veya daha fazla giriş noktasına sahip olabilir. Webpack, webpack.config.js yapılandırma dosyasında listelenen modül(ler) aracılığıyla giriş noktasının doğrudan ve dolaylı bağımlılıklarını tanımlayarak yineler.

```javascript
module.exports = { entry: "./app/index.js" };
```

- Output: Webpack paketleme işlemini tamamladıktan sonra çıktı için istenen hedefi belirtir. Output özelliği iki alt değer içerir: dosya yolu, genellikle '/dist' klasörü ve istenen dosya adı.

```javascript
const path = require("path");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-app.bundle.js",
  },
};
```

- Loaders: Webpack'in JS olmayan dosyaları dönüştürmesine ve paketlemesine izin verir.

- Plugins: Webpack'in özel kaynak optimizasyonu ve yönetimi gibi daha gelişmiş eylemler gerçekleştirmesine olanak tanır.

- Mode: Webpack'in işlemlerini dinamik olarak production veya development modlarına göre yapılandırmasına olanak tanır.

- Browser Compatibility: Webpack'in promises ve polyfills gibi özelliklerle modern ve eski tarayıcıları destekleyen paketler oluşturmasına olanak tanır.

**Olumlu Yönleri:**

1. Multi-resource support: JS dosyaları için kullanıma hazır destek sağlamasının dışında, CSS ve Image gibi diğer dosyaları paketlemek için dayandığı zengin eklentilere sahiptir.

2. Asset optimization: Tarayıcıyı tamamen yeniden yüklemeden modüllerin yönetilmesine yardımcı olan Hot module replacement (Hot modül değiştirme) özelliği vardır. Geliştiriciler dosyalarını önceden işlemek için Loaders(yükleyicileri) kullanabilir ve bu da daha hızlı bir uygulama çalışma zamanı sağlar.

**Olumsuz Yönleri:**

1. Karmaşık: Karmaşık ve öğrenmesi zor olan bir yapıya sahiptir.

2. Hatalı ve Yavaş: Webpack'in tüm özellikleri içeren yaklaşımı, bazen projelerin gereğinden fazla karmaşık hale gelmesine neden olabilir. Basit işlevleri gerçekleştirmek için eklentilere aşırı derecede güvenmek, paketleyiciyi yavaşlatarak teknik hatalara yol açabilir ve iyi optimize edilmesi için teknik hata ayıklama gerektirebilir.

# Vite Çalışma Stili

Vite.js'nin benzersiz özelliklerinden biri, bir dev sunucusu ve bir bundling build komutu ile birlikte gelmesidir. Dev sunucusu uygulama modüllerinizi ayrıştırır ve onları iki gruba ayırır: Çoğunlukla sık güncellenmeyen bağımlılıklar, Webpack, Rollup ve Parcel'den çok daha hızlı bir JavaScript paketleyicisi olan esbuild kullanılarak önceden paketlenir. Uygulama kaynak kodunun diğer grubu sık güncelleme gerektirir ve tarayıcının güçlü ESM modülü özelliğinden yararlanılarak tarayıcıya paketlenmeden isteğe bağlı olarak sunulur.

Öte yandan, build komutu kodu Rollup'ı kullanarak paketler. Vite.js, üretime hazır statik varlıklara dönüştürmek için kod tabanında gezinirken bir giriş noktasından başlar.

```javascript
// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "nested/index.html"),
      },
    },
  },
});
```

Vite.js birden fazla giriş noktasını destekler.

**Olumlu Yönleri:**

1. Yalın ve Hızlı: Vite.js, Doğal ES6 modül sisteminin gücünü kullanarak tarayıcı isteklerinin sayısını azaltarak uygulama kodunu daha hızlı bir şekilde sunabilir. Hızlı Modül Değiştirme (HMR) özelliğiyle de gelir, bu da düzenlemeyi daha hızlı, neredeyse anlık bir süreç haline getirir.

2. Çoklu Framework Desteği
   Vite.js, React.js, Vue.js, Typescript ve Preact gibi popüler JavaScript çerçeveleriyle uyumlu çalışabilen, çerçeveden bağımsız bir yapıya sahiptir. Son güncellemelerle CSS modülleri, ön işleyiciler ve diğer statik varlıklar için de destek sunmaktadır.

Ayrıca, diğer paketleyiciler olan esbuild ve Rollup eklenti ekosistemlerinden yararlanan zengin bir eklenti sistemi vardır, bu da geliştiricilere geniş bir seçenek yelpazesi sunar.

**Olumsuz Yönler:**

1. ESM Modüllerine Bağımlılık: Vite.js, inanılmaz hızını elde etmek için tarayıcının doğal ESM (ECMAScript Modülleri) sistemine yoğun bir şekilde bağımlıdır. Bu, geliştiricilerin, bu güncellemeleri desteklemeyen eski tarayıcılarla uğraşırken sorunlarla karşılaşabileceği anlamına gelir.

# Rollup Çalışma Stili

Rollup, genellikle rollup.config.js olarak adlandırılan ana yapılandırma dosyasını kullanarak paketleme özelliklerini tanımlar. Sonra, giriş nokta dosyasını analiz eder ve bağımlılıkları sıralayarak bir bağımlılık düzeni oluşturur. Bu ayrıştırma süreci sırasında, ağaç sallama (tree shaking) özelliği de uygulanır. Son olarak, belirtilen modüllerde karşılaşılan tüm bildirilen işlevler, potansiyel isim çakışmalarına dikkat edilerek tek bir genel kapsama derlenir.

```javascript
export default {
  input: "src/app.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
};
```

Rollup birden fazla giriş noktasını destekler.

**Olumlu Yönleri:**

1. Varlık optimizasyonu: Rollup, kodu daha hızlı tarayıcı yüklemeleri için kodu bölmenizi sağlayan zengin varlık yönetimi özellikleri sunar. Ayrıca, gereksiz değişkenleri veya işlevleri ortadan kaldırmaya yardımcı olan ağaç sallama (tree-shaking) özelliği bulunmaktadır.

2. Doğal ES6 desteği: Daha iyi tarayıcı uyumluluğu için JavaScript'in ES6 sürümü yayınlandı. Rollup, mevcut import ve export işlevlerini korurken, bunları CommonJS ve AMD gibi diğer modül formatlarına dönüştürmenizi sağlayarak bu yeni ES6 modül sistemini destekler.

**Olumsuz Yönler:**

1. Gelişmekte olan eklenti ekosistemi: Yeni bir geliştirme aracının yaşadığı büyüme zorluklarından biri tamamen olgun bir ekosistemin oluşturulmasıdır. Rollup hızlı görevler için ideal olsa da, büyük ve karmaşık uygulamalar oluştururken gerekli işlevler için yeterli eklenti olmaması geliştirmeyi olumsuz yönde etkileyebilir.

[byby.dev](https://byby.dev/web-bundlers)\
[webpack.js.org](https://webpack.js.org/)\
[vite.dev](https://vitejs.dev/)\
[rollupjs.org](https://rollupjs.org/)\
[medium](https://betterprogramming.pub/javascript-module-bundlers-2a1e9307d057)\
[nextjs.org](https://nextjs.org/learn/foundations/how-nextjs-works/bundling)\
[freecodecamp.org](https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/)
