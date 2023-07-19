# Typescript Best Practices

TypeScript; JavaScript’in tüm özelliklerini ve kütüphanelerini destekleyen, bunlarla birlikte statik tür sistemleri ve nesne tabanlı programlama özelliklerine de sahip olan bir programlama dilidir.
TypeScript ile en iyi uyguluma oluşturmak için izlenilmesi gereken bazı yollar vardır.

**1. Verileri Tiplerini Tanımlamak:**
Kodunuzdaki nesnelerin ve işlevlerin şeklini tanımlamak için TypeScript'i kullanabilirsiniz. Bu, hataları erkenden yakalamanıza ve kodunuzu daha sürdürülebilir hale getirmenize yardımcı olabilir.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/f68329cc-8b57-4d34-ae02-1b260cbc9564">

**2. Enum Kullanmak:**
Enum'lar bir dizi değeri temsil etmek için harika bir yoldur. Kodu daha okunabilir hale getirmemize ve hataları önlememize yardımcı olur.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/bf031ab6-16fd-4256-92d4-06f7e077ac74">

**3. Interface Kullanmak:**
Arayüzler(interface), bir sınıf veya fonksiyonun uyması gereken contract tanımlamanın bir yoludur. Kodlar yeniden kullanılabilir ve anlaşılması daha kolay hale getirmemize yardımcı olur.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/4e4af791-f4e6-4eec-bb6a-0f9198d97fdc">

**4. Extend Interfaces(Arayüzleri Genişletme):**
Arayüzlere yeni özellikler veya yöntemler eklemek için arayüzleri genişletilebilir. Bu, farklı veri türlerini temsil eden bir arayüz hiyerarşisi oluşturmamıza yardımcı olur.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/e90ce7cb-640b-4a24-850d-d1bd7bf77dd3">

**5. Boş Interface Tanımlamaktan Kaçınmak:**
Boş interface'ler kodunuza herhangi bir değer katmaz. Aslında kodunuzun anlaşılmasını daha da zorlaştırabilirler. Bu yüzden kodda herhangi işlevi olmayan interface'leri tutmaktan kaçınılmalıdır.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/d1992b94-682d-49e0-ac3b-a06e5199f9bb">

**6. Tür Ek Açıklamalarını Kullanmak:**
Tür ek açıklamaları, TypeScript'e bir değişkenin veya ifadenin türünün ne olduğunu söylemenin bir yoludur. Bu, TypeScript'in hataları erkenden yakalamasına yardımcı olabilir ve kodunuzu daha anlaşılır ve sürdürülebilir hale getirir.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/dcfde842-fe08-491b-a4ee-66e59d76de7e">

**7. Infer Anahtar Sözcüğünü Kullanmak:**
Infer anahtar sözcüğü, TypeScript'in bir türdeki değişkenin tür çıkarımına olanak tanıyan güçlü bir özelliğidir. Bu, daha özlü ve okunabilir kod yazmanıza yardımcı olabilir.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/6150ca95-3f42-43f3-a472-f79871190a3a">

**8. Any Anahtar Sözcüğünü Olabildiğince Az Kullanmak:**
Any anahtar sözcüğü, bir değişkenin herhangi bir türde olabileceği anlamına gelir. Bu bazı durumlarda yararlı olabilir, ancak hatalara da yol açabilir. Değişkenlerin tiplerini baştan tanımlamak kodun daha anlaşılır ve akıcı olmasını sağlar.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/89d0344c-54eb-4ce0-a153-ac02f68bb396">

**9. Type Assertions(Tür Onaylarını) Kullanmak:**
Type assertions, TypeScript'e bir değişkenin veya ifadenin belirli bir türde olduğunu söylemenin bir yoludur. Bu, tiplendirilmemiş kodlarla çalışmanız gerektiğinde yararlı olabilir.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/d6af4060-4acd-4490-9af9-6294d2880324">

**10. Typescript Derleyicisini Kullanmak:**
TypeScript derleyicisi, kod hataları yakalamanıza yardımcı olur. Kodu dağıtmadan(run) önce her zaman derleyici çalıştırılmalıdır.

**11. Strick Modu Etkinleştirmek:**
TypeScript'in katı modu, geliştirme sürecinde potansiyel hataları erken yakalamaya yardımcı olan gelişmiş tür denetimi sağlar. tsconfig.json dosyanıza "strict": true ekleyerek katı modu etkinleştirin.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/cbaa105f-6b30-41fe-8aa2-51592a7307d3">

**12. Generic'leri Kullanmak:**
Generic'ler, farklı tiplerle çalışabilen yeniden kullanılabilir kod yazmamızı sağlar. Esnek ve tür güvenliği olan fonksiyonlar, sınıflar ve veri yapıları oluşturmamıza olanak tanır. Birden fazla tür üzerinde soyutlama yapmamız gerektiğinde generic'leri kullanmalıyız.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/872da182-21d5-415f-9e0e-2ae0bce4f0fd">

**13. Birleşim ve Kesişim Türlerini Kullanmak:**
TypeScript, birleşim tipleri ('|') ve kesişim tipleri ('&') sunarak türleri birleştirip işleyebilmemizi sağlar. Bu güçlü tür operatörleri, türler arasındaki karmaşık ilişkileri ifade etmemize ve kodu daha ifade edici ve esnek hale getirmemize olanak tanır.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/6f217f17-bc1f-4e1c-bf3b-0e01b20e4264">

**14. ESLint ve TSLint Kullanmak:**
ESLint ve TSLint, kodlama standartlarını uygulamaya, potansiyel hataları yakalamaya ve kod kalitesini iyileştirmeye yardımcı olan kod denetimi araçlarıdır.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/cf901900-1aaf-4314-819d-7b0e0a80d45e">

**15. Callback Geri Dönüşlerinde Any Yerine Void Kullanmak:**
Dönen değerlerin tipinin kontrol edilmemiş bir şekilde kullanmanızı önler. Bunun için any yerine void kullanılması gerekir.

<img width=300 src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/8a1845f8-6e26-4472-81f6-8dc5866e6e6b">

[amazon.com](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/typescript-best-practices.html)\
[medium.com](https://itnext.io/mastering-typescript-21-best-practices-for-improved-code-quality-2f7615e1fdc3)\
[medium.com](https://medium.com/@warkiringoda/typescript-best-practices-2021-a58aee199661)\
[medium.com](https://blog.bitsrc.io/best-practices-for-writing-clean-and-maintainable-typescript-code-1cc6a7f029dc)\
[typescriptlang.org](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)\
[engineering.zalando.com](https://engineering.zalando.com/posts/2019/02/typescript-best-practices.html)
