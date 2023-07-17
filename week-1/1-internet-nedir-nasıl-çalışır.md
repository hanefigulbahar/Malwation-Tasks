# İnternet Nedir?

İnternet, ağlar ve cihazlar arasında iletişim kurmak için internet protokol paketini kullanan, birbirine bağlı bilgisayar ağlarından oluşan küresel bir sistemdir. Bu bilgisayarlar arasındaki bağlantılar, eski moda bakır kabloların, fiber optik kabloların, kablosuz radyo bağlantılarının ve uydu bağlantılarının bir karışımıdır.

World Wide Web'in birbirine bağlı hiper metin belgeleri ve uygulamaları, elektronik posta, telefon ve dosya paylaşımı gibi çeşitli bilgi kaynakları ve hizmetleri taşır.

<img width="900" alt="Screenshot 2023-07-16 at 22 36 26" src="https://github.com/hanefigulbahar/Malwation-Tasks/assets/90277530/2b845be9-6300-4e50-8b47-d35a4a0d7d09">

# İnternet Nasıl Çalışır?

Bütün ağ şebekeleri, fiziksel altyapılar ve yönlendirici adı verilen router’lar birbirleriyle bağlantı içerisindedir.Bu süreçte bir bilgisayardan gönderilen bir mesaj, dünya çapında yayılmış olan bu ağlardan geçerek, mesajın gönderildiği bilgisayara bir saniyeden daha kısa bir zaman içinde ulaşır. Bir bilgisayardan diğerine aktarılacak verinin hangi yoldan hedefe ulaştırılacağını yönlendiriciler (Router) belirler.

Routerlar hedefe ulaşmak isteyen mesajınızı diğer internet kullanıcısına ulaştırmak için tasarlanmış özel işlemler yapabilen bilgisayarlardır. Roter’ların iki önemli görevi vardır.
- Bir bilginin gitmemese gereken yere gitmemesini garanti etmek 
- Mesajın istenen istikamette gittiğinden emin olmak.

İnternet üzerindeki her bir makine, IP(Internet Protocol) adresi adında özel numaralara sahiptir. Biz internet üzerinde iletişimi bu numaralar sayesinde sağlayabiliriz. Ancak şu an web sayfalarına giderken numara değil de `www.google.com` gibi adresler gördüğümüzü söyleyebilirsiniz. Bu isimlendirmeleri de DNS sayesinde yapıyoruz. DNS (Domain Name System) IP adresleri akılda kalıcı olmadığından, IP adreslerini belirli isimlerle değiştirmemizi sağlar.

### Internet Protokol Suite (IP Suite):
Protokoller, bilgisayarların birbirleriyle bir ağ üzerinden nasıl iletişim kuracaklarını belirleyen bir dizi kural sistemidir. IP Suite ise internet üzerindeki iletişim ve veri aktarımını sağlayan bir dizi protokolden oluşan bir ağ iletişim modelidir. Bu suite, farklı katmanlarda çalışan protokollerden oluşur ve veri paketlerinin yönlendirilmesi, iletişim kurulması ve veri iletimi gibi işlemleri gerçekleştirir. 

IP Suite, TCP/IP protokol ailesi olarak da bilinir çünkü en yaygın olarak kullanılan protokoller olan Internet Protokolü (IP) ve Transmission Control Protocol (TCP) bu suite içinde yer alır. IP Suite, ağ katmanı (network layer), ulaştırma katmanı (transport layer), uygulama katmanı (application layer) ve diğer bazı katmanları içerir.

- `Ağ katmanı(network layer)`, veri paketlerinin yönlendirilmesini ve adresleme işlemlerini gerçekleştirir. IP protokolü bu katmanda kullanılır ve veri paketlerine kaynak ve hedef adresleri ekler. Bu şekilde veri paketleri doğru hedefe ulaşır.

- `Ulaştırma katmanı(transport layer)`, veri iletimini sağlar. Transmission Control Protocol(TCP)ve User Datagram Protocol (UDP) gibi protokoller bu katmanda çalışır. TCP, güvenilir ve sıralı veri iletimini sağlar, UDP ise hızlı ve güvenilir olmayan iletişim için kullanılır.

### TCP (Transmission Control Protocol):
- Web tarayıcısı üzerinden bir web sitesine HTTP üzerinden bağlanırken TCP kullanılır. İstekler ve yanıtlar güvenilir ve sıralı bir şekilde iletilir.
- E-posta gönderme işlemi için SMTP (Simple Mail Transfer Protocol) protokolü kullanılır ve bu protokol TCP'ye dayanır. TCP, e-posta sunucusuyla güvenilir bir iletişim sağlar ve verilerin hedefe eksiksiz bir şekilde ulaşmasını sağlar.

### UDP (User Datagram Protocol):
- DNS (Domain Name System) sorguları UDP kullanarak gerçekleştirilir. Bilgisayarınız bir alan adının IP adresini öğrenmek için DNS sunucusuna sorgu gönderir ve bu sorgu UDP paketleriyle taşınır. UDP, hızlı ve güvenilir olmayan bir iletişim sağlar, bu yüzden DNS sorgularında tercih edilir.
- Ses ve video akışı gibi gerçek zamanlı iletişimlerde UDP kullanılır. Örneğin, bir kullanıcı Skype veya Zoom gibi bir video konferans uygulaması üzerinden iletişim kurarken, ses ve video verileri UDP protokolüyle gönderilir. Bu durumda, gecikme süresinin düşük olması ve hızlı veri iletimi önemlidir, bu nedenle UDP tercih edilir.

**Aşağıda kullanılan bazı ağ protokollerinin açıklamaları mevcuttur;**

Bu bağlantı noktaları, farklı ağ protokollerine hizmet vermek için kullanılan standart numaralardır. İşlevleri aşağıda açıklanmıştır:

1. `HTTP (Hypertext Transfer Protocol)`: 80 numaralı bağlantı noktasını kullanır. Web tarayıcıları ve web sunucuları arasındaki iletişimi sağlar. HTTP, web sayfalarının iletimini ve istemciden sunucuya veri gönderme işlemlerini yönetir.

2. `HTTPS (Hypertext Transfer Protocol Secure)`: 443 numaralı bağlantı noktasını kullanır. Güvenli HTTP iletişimini sağlar. HTTPS, HTTP'nin güvenli bir versiyonudur ve verilerin şifrelenerek iletilmesini sağlar. Bu sayede, kullanıcıların verilerinin güvenli bir şekilde iletilmesi ve korunması sağlanır.

3. `FTP (File Transfer Protocol)`: 21 numaralı bağlantı noktasını kullanır. Dosya transferini sağlayan bir protokoldür. FTP, bir sunucu ve bir istemci arasında dosya aktarımı yapmak için kullanılır. Bir kullanıcı, sunucuya bağlanarak dosya indirebilir veya sunucuya dosya yükleyebilir.

4. `SSH (Secure Shell)`: 22 numaralı bağlantı noktasını kullanır. Güvenli kabuk erişimini sağlar. SSH, uzaktan erişim için kullanılan bir protokoldür. Sunucuya güvenli bir şekilde bağlanmayı, verileri şifrelemeyi ve güvenli bir şekilde komutlar göndermeyi sağlar.

5. `SMTP (Simple Mail Transfer Protocol)`: 25 numaralı bağlantı noktasını kullanır. E-posta gönderimi için kullanılan bir protokoldür. SMTP, e-posta sunucuları arasında e-postaların iletimini sağlar. Bir e-posta istemcisi, SMTP protokolünü kullanarak e-posta sunucusuna e-posta gönderebilir.

6. `POP3 (Post Office Protocol version 3)`: 110 numaralı bağlantı noktasını kullanır. E-posta alımı için kullanılan bir protokoldür. POP3, bir e-posta sunucusundaki e-postaları almak için kullanılır. Bir e-posta istemcisi, POP3 protokolünü kullanarak e-posta sunucusundan e-postalarını indirebilir.

7. `IMAP (Internet Message Access Protocol)`: 143 numaralı bağlantı noktasını kullanır. E-posta erişimi için kullanılan bir protokoldür. IMAP, e-posta sunucusundaki e-postalara erişmek ve yönetmek için kullanılır. Bir e-posta istemcisi, IMAP protokolünü kullanarak e-posta sunucusunda bulunan e-postaları okuyabilir, klasörlere taşıyabilir ve yönetebilir.


**Aynı zamanda internetin nasıl çalıştığını anlamak için bazı temel kavramlara değinmek isterim;**

`Uygulama katmanı`: Farklı uygulamalar arasında veri alışverişini sağlar. Bu katmanda HTTP, FTP (File Transfer Protocol), DNS (Domain Name System) gibi protokoller bulunur. Bu protokoller, örneğin web tarayıcıları, e-posta istemcileri ve dosya paylaşımı gibi farklı uygulamalar arasındaki iletişimi sağlar.

`Paket`: İnternet üzerinden iletilen küçük bir veri birimidir.

`SSL/TLS`: Güvenli Yuva Katmanı ve Aktarım Katmanı Güvenliği protokolleri internet üzerinden güvenli iletişim sağlamak için kullanılır.


## Kaynaklar

[techtarget.com](https://www.techtarget.com)\
[britannica.com](https://www.britannica.com/technology)\
[datatracker.ietf.org/1](https://datatracker.ietf.org/doc/html/rfc1122)\
[datatracker.ietf.org/2](https://datatracker.ietf.org/doc/html/rfc1123)\
[cs.fyi/guide](https://cs.fyi/guide/how-does-internet-work)\
[medium.com](https://medium.com/bilişim-hareketi/i̇nternet-nasıl-çalışır-96f9d52d7724)