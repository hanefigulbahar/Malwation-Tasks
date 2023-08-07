## Svg Kullanım Yöntemleri ve Best Practices

SVG, Scalable Vector Graphic kısaltmasıdır ve internet üzerinde iki boyutlu (2D) grafikleri çizmek için kullanılan bir görüntü formatıdır.

1. **SVG Kullanımı**: Simgeler için PNG veya JPEG yerine SVG (Scalable Vector Graphics) formatını tercih edin. SVG'ler, kalite kaybetmeden boyutlandırılabilir ve yüksek çözünürlüklü ekranlarda bile keskin görüntü sağlar.

2. **Optimization**: SVG dosyalarının  boyutlarının azaltılmalı ve yükleme sürelerini iyileştirilmelidir. Bu işlem için [SVGO](https://github.com/svg/svgo) gibi araçlar kullanılabilir. Daha küçük SVG dosyaları, uygulamanın daha hızlı yüklenmesini sağlar.

3. **Import SVG as a Component**: SVG dosyalarını `@svgr/webpack` yükleyicisi tarafından sağlanan `ReactComponent` içe aktarma yöntemiyle doğrudan bir bileşen olarak içe aktarabilirsiniz. Bu, SVG'leri bileşen olarak kullanmanıza ve onlara özellikler uygulamanıza olanak tanır. Veya [svgr](https://react-svgr.com/) paketini kullanılabilir.

4. **viewBox Özniteliğini Belirtme**: SVG simgelerinizi oluştururken `viewBox` özniteliğini belirtin. `viewBox`, SVG'nin görünür alanını tanımlar ve simgenizin doğru bir şekilde çizilmesini sağlar.


5. **aria-hidden Özniteliği**: Simgelerinizin görsel tasarımı ve ekran okuyucular tarafından sunulan içeriği ayrı tutmak için `aria-hidden` özniteliğini kullanın.


6. **Alternatif Metin Eklemek**: Ekran okuyucular için simgelerinizin anlamını açıklayacak alternatif metin ekleyin. Bu, `aria-label` veya `<title>` öğesi kullanılarak yapılabilir.

7. **CSS Kullanımını En Aza İndirme**: Simgeleri stilize etmek için CSS kullanmak mümkün olsa da, performansı artırmak için CSS kullanımını en aza indirin. CSS yerine direkt olarak SVG içeriğine stiller eklemek, dosya boyutunu azaltabilir ve performansı iyileştirebilir.


## Image Kullanım Yöntemleri ve Best Practices

1. **Resim Formatı Seçimi**: Resim içeriğine göre uygun resim formatını seçin. Ortak formatlar arasında fotoğraflar için JPEG ve şeffaflık içeren grafikler için PNG bulunur. Basit grafikler ve ikonlar için SVG formatını kullanmayı düşünebilirsiniz.

2. **Sıkıştırma**: Resim sıkıştırma tekniklerini kullanarak dosya boyutunu kaliteyi bozmadan azaltın. Çevrim içi araçlar ve yazılımlar, resimleri etkili bir şekilde sıkıştırmanıza yardımcı olabilir.

3. **Resim Boyutları**: Resimleri web sayfasında görüntü boyutlarına göre yeniden boyutlandırın. Büyük resimleri kullanmayın ve ardından CSS ile boyutlarını küçültmekten kaçının, çünkü sayfa yükleme süresini artırır.

4. **Lazy Loading**: Web sayfanızda birden çok resim varsa, özellikle tembel yükleme yöntemini uygulayın. Bu sayede resimler, kullanıcı tarafından görüntü alanına gelindiğinde yüklenir ve başlangıçta sayfa yükleme süresi azalır.

5. **CDN (İçerik Dağıtım Ağı)**: Resimleri kullanıcılara, onlara daha yakın olan bir sunucudan teslim etmek için CDN kullanmayı düşünün. Bu, resimlerin yüklenme süresini azaltır.

6. **Image Sprite**: Birden çok küçük ikon veya resme sahip web siteleri için, resimleri birleştirerek tek bir büyük resim (sprite) oluşturmayı düşünebilirsiniz. Bu, HTTP isteklerini azaltır.

7. **Önbellek Kontrolü**: Tarayıcıların resimleri önbelleğe almasını sağlamak için uygun önbellek kontrolü başlıklarını ayarlayın ve böylece sonraki sayfa yüklemelerini iyileştirin.


### SVG Performansı:

1. **Boyutlandırma**: SVG'ler vektörel grafiklerdir, bu nedenle boyutları değiştirildiğinde piksel tabanlı grafiklerin aksine kalite kaybı yaşanmaz. Her boyutta net ve keskin görünebilirler.

2. **Dosya Boyutu**: SVG dosyaları genellikle daha küçüktür, çünkü metin tabanlıdır ve matematiksel eğrilerle tanımlanır. Bu, daha hızlı yükleme sürelerine ve daha az bant genişliği kullanımına yol açar.

3. **İşlenme Süresi**: Tarayıcılar SVG'leri daha hızlı işleyebilir, çünkü vektörel grafikler metin tabanlıdır ve daha az işlem gücü gerektirir.

4. **Stilizasyon**: CSS kullanarak SVG'leri stilize etmek kolaydır ve renk, dolum, vuruş gibi özellikleri kolayca değiştirebilirsiniz.

5. **Animasyon**: CSS veya JavaScript ile SVG'ler üzerinde animasyon eklemek kolaydır ve performansı genellikle daha iyidir.

### Img Performansı:

1. **Boyutlandırma**: IMG formatları (PNG, JPEG, GIF vb.), piksel tabanlı grafiklerdir ve boyutları değiştirildiğinde kalite kaybı yaşanabilir. Özellikle büyükten küçüğe boyutlandırmada bulanıklık görünebilir.

2. **Dosya Boyutu**: Piksel tabanlı grafiklerin dosya boyutu genellikle daha büyüktür, özellikle yüksek çözünürlüklü resimlerde. Bu, daha uzun yükleme sürelerine ve daha fazla bant genişliği kullanımına neden olabilir.

3. **İşlenme Süresi**: Tarayıcılar piksel tabanlı grafikleri işlemek için daha fazla işlem gücü gerektirebilir.

4. **Stilizasyon**: IMG formatları CSS ile stilize edilmeye uygun değildir. Yeni stiller eklemek için genellikle yeni bir resim oluşturmak gerekebilir.

5. **Animasyon**: IMG formatları doğrudan animasyonlar için kullanılamaz, ancak GIF formatı bazı sınırlı animasyonlar için destek sağlar. Bu tür animasyonlar genellikle yüksek dosya boyutlarına sahip olabilir.
