# Design System Nedir?

Ürünün veya markanın görsel ve kullanıcı deneyimini tanımlayan kurallar ve yönergeler kümesidir. Tutarlı bir kullanıcı deneyimi oluşturmak için kullandığı ve üzerine inşa ettiği yeniden kullanılabilir kullanıcı arayüzü öğelerinden oluşan bir koleksiyondur.

Developerlar için design system, tekrar kullanılabilir component'ların bir koleksiyonudur. Geliştiricilerin bir ürünü daha hızlı bir şekilde oluşturabilmesi için tasarlanır. Design System, geliştiricilerin ürünleri ortak tasarlamasına ve geliştirmesine olanak sağlayan bir kaynak görevi görür.

### Components Ve Patterns

Component'lar, tasarımın işlevsel öğeleridir. Tasarım sisteminizin yapı taşıdır. Component'lar bir araya geldiğinde, tasarımcıların ürün oluştururken başvurduğu ve kullandığı kütüphaneleri oluştururlar.

Patterns, tasarımcıların bileşenleri kullanırken başvurdukları bir tür yapı kılavuzudur.

### Style guides

Style guides, grafik tarzlarına (renkler, fontlar, illüstrasyonlar) ve bunların kullanımına odaklanan bir dizi standartlardır. Stil guides, marka değerleri göz önünde bulundurularak oluşturulmalıdır (örneğin, öğeler için marka renklerinin kullanımı).

### Design principles

Design principles, ekiplere anlamlı tasarım kararları vermelerine yardımcı olan yönlendirici kurallardır. Tasarım principles, tasarımcıların takdirine göre uyguladığı yönergeler, önyargılar ve tasarım düşünceleridir. Davranış bilimi, sosyoloji, fizik ve ergonomi gibi birçok konuyu göz önünde bulundurarak tasarım prensiplerinin temelini oluşturulmuştur.

## Design Systems Steps

### 1. Prensiples(Prensip)

- Tüm platformlar için geçerli olmalı
- Her dilden insan kullanılabilmeli
- Geliştirilebilir olmalı, Bunun yöntemleri açık olmalı
- Topluluk tarafından geliştirilmeli

### 2. Foundations (Temel Yapıtaşlar)

- Design Tokens
- Display Scale
- Color, Theming
- Typography
- Object Styles
- Motion
- States
- Iconography
- Illustration
- Layout


#### Design Tokens (Tasarım Belirteçleri, Değişkenleri)

Tasarım belirteçleri, bir tasarım sistemi oluşturmak ve sürdürmek için gereken tüm değerleri barındırır. Aralık, renk, tipografi, nesne stilleri, animasyon vb.

Buradaki amaç oluşturmak ve sürdürmek istenilen değerlerin geliştiriciler tarafından ortak kullanılması estetik, geliştirmenin kolaylığı hatta uygulamanın mimarisel kontrolü açısından önemlidir.

*- Global Tokens*, tasarım dilimizde bağlamdan bağımsız(context-agnostic) isimlerle temsil edilen ilkel değerlerdir. Renk paleti, animasyon, tipografi ve boyut değerlerimizin tümü global belirteçler olarak kaydedilir. Bunlar doğrudan kullanılabilir ve diğer tüm token türleri tarafından miras alınır. (Size Tokens — size16, Color Tokens …blue400 )

*- Alias Tokens*, belirli bir bağlam veya soyutlama ile ilgilidir. Takma adlar, bir belirtecin amaçlanan amacını iletmeye yardımcı olur ve tek bir amacı olan bir değerin birden fazla yerde görüneceği durumlarda etkilidir. (primary-background-color)

*- Component tokens*, bir bileşenle ilişkili her değerin kapsamlı bir temsilidir. Genellikle takma ad belirteçlerinden miras alırlar, ancak mühendislik ekiplerinin bileşen geliştirmede belirteçleri uygularken mümkün olduğunca spesifik olmalarını sağlayacak şekilde adlandırılırlar. (button-primary-background-color)

#### Display Scale (UI üzerinde Çalışan Ekran Boyutuna Uygun Ölçeklenmesi)

Boyutlandırma kullanılan ekran boyutuna uygun ölçeklendirilmelidir. Örneğin web sayfasında responsive ölçeklendirmede bileşenin normal boyutundan daha küçük ölçeklendirilmesi önemlidir.

#### Theming

Renkler, yazı tipleri, görsel öğeler ve düzen gibi unsurların belirli bir tarz veya kavram etrafında birleştirildiği bir kavramdır. Temalar, uygulamanın veya web sitesinin genel hissini ve görünümünü belirlemeye yardımcı olur. 

#### Color

Kullanıcıya duygusal bir bağ kurma, dikkat çekme, bilgiyi iletmek veya hiyerarşi oluşturmak gibi amaçlar için kullanılır. Renkler, farklı elementler arasında ayrım yapmak, vurgular oluşturmak ve genel tasarımın estetiğini belirlemek için kullanılır.

1. **Marka Uyumu ve Temaları:** Renk seçimi, genellikle markanın kimliği ve temasıyla uyumlu olmalıdır. Markanızın renk paleti veya logosu, tasarımınızın temel renklerini belirleyebilir. Ayrıca, belirli bir tema veya atmosfer oluşturmak için renk temalarını kullanılabilir.

2. **Kontrast ve Okunabilirlik:** Metin ve arka plan renkleri arasındaki yeterli kontrast, metinlerin kolayca okunabilir olmasını sağlar. Özellikle düşük ışık koşullarında veya görme engelli kullanıcılar için kontrastlı renkler önemlidir. Web Erişilebilirliği Yönergeleri (WCAG), minimum kontrast gereksinimlerini belirtir.

3. **Renk Hijyeni ve Sadelik:** Fazla renk kullanımı karmaşıklığa neden olabilir ve kullanıcıları rahatsız edebilir. Birkaç ana rengi belirlenmeli ve bu renkleri kullanmaya özen gösterilmelidir.

4. **Renk Psikolojisi:** Renklerin duygusal tepkileri etkilediği bilinir. Örneğin, mavi dinginlik ve güveni çağrıştırırken, kırmızı enerji ve dikkati artırabilir. Kullanıcıların neler hissedeceğini ve hangi tepkiyi verebileceğini düşünerek renkler seçilmelidir.

5. **Renk Hiyerarşisi:** Renk, içerikler arasında hiyerarşi oluşturmak için kullanılmalıdır. Önemli bilgileri vurgulamak veya farklı öğeler arasında ayrım yapmak için renkleri kullanılabilir.

6. **Hata Durumları ve Durum Bildirimleri:** Renkleri, hata durumları veya kullanıcının alması gereken önemli eylemler hakkında bilgi vermek için kullanılmalıdır. Kullanıcıya dikkat çekmek veya belirli bir durum hakkında bilgilendirmek için renkleri vurgulamak gerekir.

7. **Renk Deneyleri:** Farklı renk kombinasyonları ve paletleri denemek, kullanıcıların gözlerine hoş gelen ve etkili bir şekilde çalışan renklerin bulunmasına yardımcı olabilir. A/B testleri veya kullanıcı testleri ile farklı renk seçeneklerinin performansını değerlendirilebilir.

#### Typography

Tipografi uygulamanızda bulunan bütün metinleri, bileşenler üzerindeki metinlerin stillerini, ağırlıklarını ve türlerini içerir.
Tipografi, yazı dilini okunaklı, okunabilir ve görüntülendiğinde çekici kılmak için yazı düzenleme sanatı ve tekniğidir. Yazı düzeni, yazı tiplerini, nokta boyutlarını(point sizes), çizgi uzunluklarını(line lengths), satır aralığını (letter spacing) ve harf aralığını (izleme) seçmeyi ve harf çiftleri arasındaki boşluğu ayarlamayı (karakter aralığı kerning) içerir.

1. **Typography components (Headings, Body, Detail)**

2. **Font Size**

3. **Text Formating (Bold, Italic, Underline, Strong, Emphasis)**

4. **Line Height (Heading Details, Body Code, Component)**

#### Object Styles

Farklı nesne türleri için genel biçimlendirmeleri içerir. Rounding, Border Witdh ve Shadow gibi özelliklerin özelleştirilmesi

#### Motion

Deneyime anlam ve duygusu katar. Amaca yönelik, sezgisel ve sorunsuz olmalıdır. Kullanıcıların daha üretken olmalarına yardımcı olmalı ve onları asla yavaşlatmamalıdır.

Kullanıcıların UI etkileşimleri sırasında veya UI Elemanlarının haretetleri, şekilde değişikliklerinin doğal olmasını (gerçek hayattaki ne benzer) şekilde olmasını sağlayan Animasyon davranışlarıdır.

#### States

States(Durumlar), bir bileşenin veya etkileşimli bir öğenin durumunu veya potansiyelini kullanıcıya iletir.
Kullanıcı etkileşimde bileşenlerin tüm bu durumlarını düşünmek gerekir.

- Default Mode
- Hover Mode
- Down Mode (Üzerine Basıldığı An)
- Keyboard Focus
- Disabled
- Selected
- Dragged
- Error

#### Iconography

Sembol, işaret veya sembollerin kullanımı ve anlamınıdır. 

- Basitlik: İkonlar, bir bakışta anlaşılabilir ve basit olmalıdır.

- Netlik: İkonlar, net şekiller ve evrensel olarak tanınan anlamlara sahip olmalıdır.

- Tutarlılık: Bir setteki ikonlar tutarlı bir tasarım stiline ve boyuta uymalıdır.

- Farklılık: Her ikon farklı olmalı ve diğerlerinden kolayca ayırt edilebilir olmalıdır.

- Anlam: İkonlar, niyet edilen anlamı açık ve belirsizlik olmadan iletmelidir.

- Ölçeklenebilirlik: İkonlar farklı boyutlarda net ve tanınabilir şekilde kalmalıdır.

- Kültürel Tarafsızlık: İkonlar kültürel önyargılardan kaçınmalı ve farklı kültürler arasında anlaşılabilir olmalıdır.

1. Workflow and UI Icons : Süreçleri veya adımları göstermek için kullanılan görsel temsillerdir

- Navigasyon: İkonlar genellikle gezinme menülerinde farklı bölümleri veya sayfaları temsil etmek için kullanılır.

- Eylemler: İkonlar kullanıcıların yapabileceği eylemleri temsil eder, örneğin kaydetme, yazdırma, silme vb.-

- İşlevsellik: İkonlar kullanıcıların hızla düğme ve kontrollerin amacını tanımasına yardımcı olur.

- Görsel Hiyerarşi: İkonlar tasarımın görsel hiyerarşisine katkıda bulunarak kullanıcıların dikkatini yönlendirir.

- Tutarlılık: İkonlar tasarım dilinde tutarlılığı sürdürür ve kullanıcı tanıma yeteneğini artırır.


#### Illustration

Yazılı içeriği artıran veya tamamlayan görsel temsiller veya çizimler oluşturmanın sanatını ifade eder. Illustrasyonlar, genellikle fikirleri, kavramları veya hikayeleri görsel yollarla iletmek için kullanılır. 


#### Layout

Spacing(Aralık değerleri), bileşenler arasındaki ilişkileri açıkça tanımlayarak tutarlı arayüzler oluşturmaya yardımcı olur.

Responsive grid ekranın boyutuna bağlı olarak bir düzenin dinamik olarak değişmesini sağlar. Bu aynı zamanda tutarlı düzenleri garanti eder

Application frame uygulamalar aynı temel yapıyı paylaşmalıdır. Bu, ürünler ve platformlar arasında tutarlı ve tanıdık deneyimleri ve daha kısa bir öğrenme eğrisini garanti eder.

### 3. Components & Patterns

Components: Components, UI (Kullanıcı Arayüzü) tasarımında kullanılan temel öğelerdir. Components, düğmeler, metin alanları, kartlar, navigasyon menüleri gibi farklı işlevlere sahip öğeleri içerir. Tasarım sistemi içerisinde Components, tutarlılık sağlamak, yeniden kullanabilirliği artırmak ve tasarım sürecini hızlandırmak amacıyla tanımlanır. Tasarım Componentsi genellikle tasarım araçlarından (örneğin, Sketch) tasarımcılar tarafından oluşturulurken, geliştiriciler de bu Componentsi kodda kullanabilir.

Patterns: Patterns, Componentsin nasıl bir araya getirilip kullanılacağını belirleyen rehberlik kurallarıdır. Patterns, Componentsi mantıklı ve tutarlı bir şekilde bir araya getirerek daha büyük yapılar oluşturmanın yolunu gösterir. Örneğin, bir kart bileşenini başlık, metin ve buton Componentları ile  birleştirerek bir ürün kartı oluşturmak bir patterndir. Patterns, farklı sayfalarda veya ürünlerde Componentin nasıl düzenleneceği, sıralanacağı ve etkileşim kuracağı konusunda yönergeler sağlar.


### Best Practice

1. **Araştırma ve Analiz:** İlk adım, hedef kitlesini, marka değerlerini ve projenizin amaçlarını anlamak için detaylı bir araştırma yapmaktır. Diğer benzer tasarımları incelenmesi ve hangi bileşenlere ve stil öğelerine ihtiyacınız olduğunun belirlenmesine yardımcı olur.

2. **Bileşenlerin Belirlenmesi:** Temel bileşenleri belirlenmesi. Bu bileşenler, butonlar, tipografi, renk paleti, form alanları, ikonlar gibi genel ve sıkça kullanılan tasarım öğelerini içerir.

3. **Stil ve Tema Oluşturma:** Tasarımın genel stilinin ve temasının belirlenmesi. Renkler, yazı tipleri, arka planlar ve diğer görsel öğeleri bu aşamada tanımlanmalı.

4. **Bileşenlerin Tasarımı:** Her bileşenin tasarımı oluşturulmalı ve belirli bir kurallar kümesine uyulmalı. Bu, tasarımın tutarlı ve estetik olarak uyumlu olmasını sağlar.

5. **Dökümantasyon:** Her bileşen ve stil öğesi için detaylı bir dökümantasyon oluşturulmalıdır. Bu dökümantasyon, tasarım ve geliştirme ekibinin nasıl kullanılacağını ve özelleştirileceğini anlamalarını sağlar.

6. **Prototipler ve Testler:** Oluşturulan bileşenleri ve stil öğelerini prototiplerde test edilmelidir. Kullanıcı geri bildirimini alarak tasarım iyileştirilmelidir.



[invisionapp](https://www.invisionapp.com/inside-design/guide-to-design-systems/)\
[elementor](https://elementor.com/blog/design-system/)\
[uxdesign](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969)\
[teknasyon](https://engineering.teknasyon.com/design-system-nedir-nas%C4%B1l-olu%C5%9Fturulur-55ff1e0566d3)\
[designerup](https://designerup.co/blog/10-best-design-systems-and-how-to-learn-and-steal-from-them/)\
[interaction-design](https://www.interaction-design.org/literature/topics/design-systems)

