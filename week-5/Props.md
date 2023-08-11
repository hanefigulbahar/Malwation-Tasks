# Props

Props "Özellikler" anlamına gelir. Salt okunur bileşenlerdir. Bir etiketin niteliklerinin değerini saklayan ve HTML niteliklerine benzer şekilde çalışan bir nesnedir. Nesneler, diziler ve fonksiyonlar dahil olmak üzere herhangi bir JavaScript değerini bunlar aracılığıyla iletilebilir. Bir bileşenden diğer bileşenlere veri aktarmak için bir yol sağlar. Fonksiyon argümanlarına benzer. Prop'lar, bir fonksiyona geçirilen argümanlarla aynı şekilde bileşene geçirilir.

Prop'lar değişmezdir, bu nedenle prop'ları bileşenin içinden değiştiremeyiz. Bileşenlerin içine props adı verilen nitelikler ekleyebiliriz. Bu nitelikler render yöntemimizde dinamik verileri işlemek için kullanılabilir.

**1. Regular Props (Functional Components):** Regular props, bir bileşene öznitelikler olarak iletilir ve bileşen içinde props nesnesi kullanılarak erişilir.

**2. Destructuring Props (Functional Components):** Kodun daha temiz ve okunabilir olması için, props nesnesini doğrudan fonksiyon parametresinde yapılandırabilirsiniz. Bu, bileşen içinde props nesnesini kullanmadan doğrudan prop'lara erişmenizi sağlar.

## Props İletim Yöntemleri

- **Direct Prop Passing:** Bir alt bileşene props geçmenin en açık yöntemi, üst bileşen tarafından render edildiğinde alt bileşende props'u doğrudan tanımlamaktır

- **Spread Operator:** Spread operatörü (...) kullanılarak, prop'ları içeren bir nesneyi alt bileşene yayarak bunu başarabilirsiniz. Bu özellikle birçok prop'u iletmek veya üst bileşenin prop'ları başka bir kaynaktan alması gerektiğinde kullanışlı olabilir.

Statik veriler için prop'ları kullanın: Üst bileşenlerden alt bileşenlere veri aktarmak için prop'ları kullanın. Props, bileşenin yaşam döngüsü boyunca değişmeyen veriler için kullanılmalıdır.

Dinamik veriler için state kullanın: Bileşenin yaşam döngüsü sırasında değişen verileri yönetmek için state kullanın. Bu, kullanıcı etkileşimlerinden oluşturulan veya bir API'den alınan verileri içerebilir.
