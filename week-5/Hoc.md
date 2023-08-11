# HOC

Higher Order Component, bir componenti alıp yeni bir component döndüren bir işlevdir. Higher order component (HOC), bir component mantığını tekrar kullanmak için React.js'deki gelişmiş bir tekniktir. React'ın bileşimsel yapısından ortaya çıkan bir patterndir. Component özellikleri UI'ya dönüştürürken, higher order component bir componenti başka bir componente dönüştürür. HOC başka bir componenti sararak özelliklerini genişletmeyi amaçlar. Higher order component örnekleri arasında Redux'un connect işlevi bulunur.

## Higher-Order Components Yapısı

Bir HOC, üst düzey bir fonksiyon gibi yapılandırılmıştır:

- Bir componentdir.
- Başka bir componentı argüman olarak alır.
- Ardından yeni bir component döndürür.
- Döndürdüğü component, kendisine aktarılan orijinal componenti oluşturabilir.

## Higher-Order Components Faydaları

- **Yeniden Kullanılabilirlik:** HOC'lar, ortak işlevselliği kapsülleyerek kodun yeniden kullanılmasını teşvik eder. Bu sayede kod tekrarını azaltır ve paylaşılan mantığı ayrı bileşenlere çıkarmanıza olanak tanır.

- **Bileşiklik:** HOC'lar, birden çok davranışı tek bir bileşen içinde birleştirmenizi sağlar. Bu, bileşenlerinizin nasıl etkileşimde bulunduğu ve davrandığı konusunda ince ayar yapmanıza olanak tanır.

- **Sorumlulukların Ayrıştırılması:** HOC'lar, kimlik doğrulama, veri alma veya stil gibi çapraz kesen özellikleri, bileşenlerinizin temel iş mantığından izole ederek sorumlulukları ayrıştırmaya yardımcı olur.

[reactjs.org](https://legacy.reactjs.org/docs/higher-order-components.html)\
[patterns.dev](https://www.patterns.dev/posts/hoc-pattern)\
[blog.logrocket](https://blog.logrocket.com/understanding-react-higher-order-components/#:~:text=A%20higher%2Dorder%20component%20is,will%20be%20the%20enhanced%20component)\
[tutorialspoint](https://www.tutorialspoint.com/reactjs/reactjs_higher_order_components.htm#:~:text=Higher%20order%20components%20are%20JavaScript,run%20with%20different%20data%20input.)\
[smashingmagazine](https://www.smashingmagazine.com/2020/06/higher-order-components-react/)\
[flexiple](https://flexiple.com/react/introduction-to-higher-order-components-in-react-by-example/)\
[geeksforgeeks](https://www.geeksforgeeks.org/react-js-higher-order-components/)
