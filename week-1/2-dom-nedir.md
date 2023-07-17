# DOM Nedir?

`DOM (Document Object Model)`, bir web projesinin bileşenlerine programcıların kolayca erişebilmesini ve bu sayede içeriğin, özelliklerin ve stillerin ekleme, silme ve düzenleme işlemlerinin yapılabilmesini sağlamayı amaçlar. DOM, belgenin yapısını bir ağaç yapısı olarak temsil eder, her düğüm bağımsız ve seçilebilir bir nesne olarak düşünülür. Bu nedenle, DOM, JavaScript gibi betik dilleriyle temel web belgesi arasında platformdan ve dilden bağımsız bir bağlantı görevi görür. Bu yapıya, görüntülenen web projesinin bir sürümü olarak da DOM ağacı denir.

DOM, bir ağaç yapısı olarak düşünülebilir, HTML veya XML de bulunan her bir öğe ağaçta bir node (düğüm) olarak temsil edilir. Her bir node (düğüm), sayfadaki bir öğeyi (element), metni, yorumu veya diğer türde içeriği temsil eder. Bu düğümler, parent-child ilişkileri aracılığıyla birbiriyle ilişkilendirilir ve sayfadaki öğelerin hiyerarşik ilişkilerini yansıtır.

<img width="900" alt="Screenshot 2023-07-16 at 23 09 11" src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/676e6616-815b-4027-b417-6999373342f0">

## DOM Manipülasyonu
DOM manipülasyonu, web sayfalarında yapısal değişiklikler yapmayı, öğeleri eklemeyi, kaldırmayı, güncellemeyi veya tarayıcı etkileşimlerini yönetmeyi içeren işlemleri ifade eder. Bu işlemler, web geliştiricilerinin web sayfasının içeriğini ve görüntüsünü dinamik olarak değiştirmelerini sağlar.

- `Native DOM Manipulation (Doğal DOM Manipülasyonu)`: Bu yaklaşım, tarayıcının sunduğu doğal DOM API'larını kullanarak DOM manipülasyonu yapmayı içerir. Bu yaklaşım, tarayıcıların sunduğu fonksiyonları kullanarak DOM'a doğrudan erişim sağlar. Örneğin, document.getElementById() veya element.querySelector() gibi fonksiyonlarla DOM öğelerini seçebilir ve üzerinde değişiklikler yapabilirsiniz.
- `DOM Manipulation Libraries (DOM Manipülasyon Kütüphaneleri)`: Bu yaklaşım, DOM manipülasyonunu kolaylaştırmak için geliştirilmiş kütüphaneleri kullanmayı içerir. Örneğin, jQuery gibi popüler kütüphaneler, basit ve zincirleme yöntemlerle DOM manipülasyonu yapmayı sağlar. Bu tür kütüphaneler, kod tekrarını azaltabilir ve DOM manipülasyonunu daha hızlı ve kolay hale getirebilir.
- `Component-Based Approaches (Bileşen Odaklı Yaklaşımlar)`: Bu yaklaşım, bileşenlerin kullanıldığı bir yapıyı temsil eder. Bileşenler, kendi içindeki özelleştirilmiş DOM ağaçları (Shadow DOM) ile birlikte çalışır. Bileşenler, kendi içeriği, stilleri ve davranışı ile birlikte izole edilebilir ve tekrar kullanılabilir hale getirilebilir. Örneğin, React veya Vue.js gibi bileşen odaklı çerçeveler, bileşenlerin yönetimi ve etkileşimlerini kolaylaştırır.
- `Virtual DOM (Sanal DOM)`: Bu yaklaşım, web sayfasının gerçek DOM yapısının bir kopyasını oluşturarak, değişiklikleri izlemek ve daha verimli bir şekilde güncellemek için kullanılır. Değişiklikler sanal DOM üzerinde yapılır ve ardından gerçek DOM ile karşılaştırılır. Sadece değişen kısımlar güncellenir, bu da performansı artırır. Virtual DOM, React gibi kütüphaneler tarafından kullanılır.

## Kaynaklar
[ionos.com](https://www.ionos.com/digitalguide/websites/web-development/an-introduction-to-the-document-object-model-dom/)\
[dom.spec.whatwg.org](https://dom.spec.whatwg.org)