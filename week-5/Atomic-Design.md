# Atomic Design

Atomik Design, bir araya getirildiğinde tutarlılığı, modülerliği ve ölçeklenebilirliği destekleyen beş temel yapı taşına sahip tasarım sistemlerinin oluşturulmasına yönelik bir metodolojidir

Atomik tasarımın beş farklı seviyesi - atoms > molecules > organisms > templates > pages -

React'in bileşen tabanlı mimarisiyle inanılmaz derecede iyi eşleşmesi sebebiyle yaygın kullanılır.

**Atoms:** Button, input veya form etiketi gibi HTML etiketlerinin temel yapı taşları. Kendi başlarına kullanışlı değildirler.

**Molecules:** Button, input ve form etiketleri gibi küçük parçaların birleştirilerek daha anlamlı bileşenler design system de omurga olarak hizmet eder.

**Organisms:** Bir arayüzün farklı bir bölümünü oluşturan organizmaları oluşturmak için molekülleri bir araya getirldiğinde oluşan yapı. Organizmalar, bir arayüzün nispeten karmaşık, farklı bir bölümünü oluşturmak üzere bir araya getirilmiş molekül gruplarıdır.(örn. navigation bar)

**Templates:** Templates çoğunlukla sayfaları oluşturmak üzere bir araya getirilmiş organizma gruplarından oluşur. Templates, bileşenleri bir düzene yerleştiren ve tasarımın altında yatan içerik yapısını ifade eden sayfa düzeyinde nesnelerdir.

**Pages:** Sayfalar, bir kullanıcı arayüzünün gerçek temsili içerikle nasıl göründüğünü gösteren belirli şablon örnekleridir. Farklı templates renderlarını görüntüleyen bir ekosistem. Tek bir ortamda (uygulama) birden fazla ekosistem oluşturabiliriz.

## Neden Atomic Desing

Bir React dosya yapısını düzenlerken atomik tasarım modelini takip etmenin temel amacı, her bir özellik bileşeninin ortamlarını izole etmektir. Yan etkiler izole edildiğinde, kod çok daha okunabilir ve modüler hale gelir. Bir özelliğin tek bir örneği, testleri daha kolay hale getirecek ve böylece uygulamanızın genel kalite güvencesini artıracaktır. Uygulamanızın karmaşıklığı ve durum yönetimi artmaya başladıkça, dosya yapınızı bu modele göre düzenlemek, durumu kolayca belirlemenize ve ele almanıza yardımcı olacaktır.
