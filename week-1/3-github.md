# Git ve Github Kullanımı
`Git` bir versiyon kontrol sistemidir. Projenin her zaman son haline ulaşmamızı ve güncel tutmamızı sağlayan bir araçtır. `Github` ise projelerimizin saklandığı (depolandığı) uzak sunucudur. Bu sunucu üzerinden projeleri inceleyebilir, bilgisayarımıza indirebilir ve projeler üzerinde değişiklikler yapabiliriz.

Bir ekip ile GitHub üzerinde proje geliştirirken, GitHub'ın bize sağladığı birçok özellik vardır. Aşağıda bu yapıların açıklamalarını bulabilirsiniz.

## Issues (Görev Yönetimi)
Issue Github’da projedeki hataları, bugları, yapılacak geliştirmeleri içeren bir yapıdır. Aynı zamanda eğer projeniz bir open source proje ise diğer insanların sizden istekte bulunduğu veya hataları, bugları belirttiği bir yerdir.

## Pull Request
Pull Request, bir projenin kaynak kod deposunda (repository) yapılan değişiklikleri değerlendirmek ve birleştirmek için diğer geliştiricilere sunulan bir talebi ifade eder.

Bir geliştirici, bir proje üzerinde çalışırken, kaynak kod deposunda yapılacak değişiklikleri kendi dalında (branch) gerçekleştirir. Ardından, bu değişiklikleri projenin ana dalına (master veya main branch) entegre etmek için bir Pull Request oluşturur. Pull Request, projenin sahipleri veya yetkilileri tarafından gözden geçirilir ve değerlendirilir.

Pull Request oluşturulduktan sonra, diğer geliştiriciler veya proje sahipleri, değişiklikleri inceleyebilir, tartışabilir ve geribildirimde bulunabilir. Bu süreçte, yorumlar, sorular veya düzenlemeler yapılabilir. Ayrıca, proje sahipleri, çakışmaları (conflicts) çözmek veya kodun uyumlu olmasını sağlamak için geliştiriciden bazı düzeltmeler yapmasını isteyebilir.

Pull Request süreci tamamlandığında ve değişiklikler kabul edildiğinde, projenin ana dalına (master veya main branch) birleştirme (merge) işlemi gerçekleştirilir. Bu şekilde, yapılan değişiklikler projeye dahil edilir ve proje güncellenmiş bir hal alır.

GitHub Pull Request mekanizması, projelerin daha kolay işbirliği yapmasını, kod incelemelerini kolaylaştırmasını ve değişikliklerin güvenli bir şekilde yönetilmesini sağlar. Proje sahipleri, değişikliklerin önceden incelenmesi ve test edilmesi için bir süzgeç görevi gören Pull Request mekanizması sayesinde daha güvenilir bir kod tabanı elde edebilirler. Ayrıca, takım çalışması, geribildirim alma ve kalite kontrol süreçlerini iyileştirmek için de önemli bir araçtır.

Pull Request'ler de tıpkı issue gibi `milestone`, `assignee`, `label` gibi bilgileri içeriri.

## Issue ve PR özellikleri

- Bir başlık ve açıklama içerir.
- Sınıflandırmak ve filtrelemek için renk kodlu etiketler (label) kullanılabilir. ( gmail’deki etiket mantığı gibi). 
- Belirli özellikleri ya da proje fazlarını ilişkilendirmek için milestone kullanılabilir. Örneğin; projenin versiyo 1.0'ı için şu işler yapılacak, versiyon 2.0 için ise başka işler gibi.
- İş ile ilgilen kişiye ise assignee(devrelan) diyebiliriz. Ve bu işi yapan kişi, oluşturulan Issue veya PR üzerinde kendisini assignee olarak belirtebilir. Bir organizasyon içinde hangi görevi kimin yapacağını assign (atama) ederek belirtiriz.

**Aşağıda sınıflandırma için kullanılabilinecek bazı etiklet bilgilerine ulaşabilirsiniz.**

--bug : kırmızı renkte ve issue’nin hata ile ilgili olduğunu gösterir.\
--duplicate : çiftleme ile ilgili görev, gri renktedir.\
--enhancement : mavi renktedir ve geliştirme içeren görevlere verilen etikettir.\
--help wanted : yeşil renk olup , yardım isteme ile ilgili görevlerdir.\
--invalid : açık gri renktedir ve geçersiz görevler için kullanılmaktadır.\
--question : pembe renkte olup soru ile ilgili görevler için kullanılır.\
--wontfix : tahmin edilemeyen bir görev için kullanılır ve beyaz renktedir.

<img width="300" alt="Screenshot 2023-07-17 at 10 16 36" src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/152390fc-6e22-4953-84a0-9b5cef9ce1e2">

## Merge
GitHub'da `merge` farklı daldaki (branch) değişiklikleri ana dala (master veya main branch) entegre etmek anlamına gelir. Birleştirme işlemi, bir Pull Request'in (PR) onaylanması veya doğrudan dalın ana dala birleştirilmesi yoluyla gerçekleştirilebilir.  

Eğer birleştirme işlemi sırasında, değiştirilen alanlarda çakışmalar (conflicts) varsa, bu çakışmaların çözülmesi gerekebilir. Çakışmalar, farklı daldaki değişikliklerin aynı satırlarda yapıldığı durumları ifade eder. Bu durumda, çakışmalar çözülmeli ve birleştirme işlemi tamamlanmalıdır.

## Conflicts
Conflicts, birleştirme işlemi sırasında farklı daldaki değişikliklerin aynı dosyanın aynı satırlarında yapıldığı durumları ifade eder. Bu durumda, birleştirme işlemi otomatik olarak gerçekleştirilemez ve çakışmaların manuel olarak çözülmesi gerekmektedir. Conflicts çözümü, farklı değişiklikleri bir araya getirerek çakışmaları gidermeyi amaçlar.

Birleştirme işlemi sırasında, GitHub veya Git gibi versiyon kontrol sistemleri çakışmaları tespit eder ve hangi dosyalarda çakışma olduğunu bildirir. Çakışmalar genellikle "<<< HEAD", "===" ve ">>>" işaretleriyle belirtilir. Bu işaretler, ana dalın değişikliklerini, çakışan değişiklikleri ve diğer dalın değişikliklerini ayırmak için kullanılır.

Conflicts çözümü, birleştirme işlemi sırasında farklı değişiklikleri bir araya getirmek için önemli bir adımdır. Doğru bir şekilde çözümlenmediğinde, kodun doğru çalışmasını engelleyebilir veya istenmeyen sonuçlara neden olabilir. Bu nedenle, conflicts çözümü sırasında dikkatli olunmalı ve çakışan değişiklikleri uygun bir şekilde birleştirmek için doğru kararlar alınmalıdır.

## Kaynaklar
[docs.github.com](https://docs.github.com)\
[medium.com](https://medium.com/devopsturkiye/github-issues-projects-28c2e1e42151#:~:text=Issues%20Nedir%3F,hataları%2C%20bugları%20belirttiği%20bir%20yerdir.)