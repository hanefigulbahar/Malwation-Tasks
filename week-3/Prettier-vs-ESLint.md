# Prettier ve ESLint


## ESLint Nedir?

ESLint JavaScript kodunu statik olarak analiz ederek problemlerin bulunmasını sağlayan bir araçtır.(Linter)
Temel çalışma mantığı; bir takım kurallar doğrultusunda kodu tarayıp bunun ile ilgili uyarıları vererek geliştiricileri uyarmaktır.

## Prettier Nedir?

Prettier bir kod düzenleyicidir. Prettier, kodu analiz eder ve maksimum satır uzunluğunu dikkate alarak kodu kendi kurallarıyla tutarlı bir biçimde yeniden yazarak kodun biçimini düzenler ve gerektiğinde kodu sarmalar. Geliştiricilerin herhangi bir biçimlendirme hata yapmasını önler.

1. `arrowParens`: "avoid" olarak ayarlandığında tek bir argümanı olan ok işlevlerinde parantez kullanımını önler (örn. `x => x`). "always" olarak ayarlandığında ise her zaman parantez kullanır (örn. `(x) => x`).

2. `printWidth`: Bir satırdaki en fazla karakter sayısı. Uzun satırlar, bu sınırı aşarsa otomatik olarak bölünecektir.

3. `tabWidth`: Bir sekme karakterinin kaç boşluk karakterine denk geldiğini belirler.

4. `useTabs`: Bu değer `true` olarak ayarlanırsa, boşluk karakterleri yerine sekme karakterleri kullanılır.

5. `semi`: Bu değer `false` olarak ayarlanırsa, noktalı virgül kullanımı devre dışı bırakılır.

6. `singleQuote`: Bu değer `true` olarak ayarlanırsa, tek tırnak işareti tercih edilir.

7. `trailingComma`: "es5" (örn. `{a: 1, b: 2,}`) veya "none" (örn. `{a: 1, b: 2}`) olarak ayarlanarak son elemanın virgülle ayrılıp ayrılmayacağını belirler.

8. `bracketSpacing`: Bu değer `true` olarak ayarlanırsa, nesnelerin ve dizilerin etrafında boşluk bırakılır (örn. `{ foo: bar }`).

9. `jsxSingleQuote`: JSX içinde tek tırnak kullanılıp kullanılmayacağını belirler.

10. `jsxBracketSameLine`: JSX açılış etiketini, sonraki satıra geçirmek yerine aynı satırda tutar.

11. `requirePragma`: Bu değer `true` olarak ayarlandığında, dosyanın biçimlendirilmesi için özel olarak oluşturulmuş bir açıklama (pragma) kullanılmasını gerektirir.

12. `insertPragma`: Bu değer `true` olarak ayarlandığında, biçimlendirilmiş dosyanın başına belirtilen açıklamayı (pragma) ekler.

13. `proseWrap`: "always" olarak ayarlandığında, metin paragraflarını otomatik olarak sarmalar. "preserve" olarak ayarlandığında, metin paragraflarını sarmaz.

14. `htmlWhitespaceSensitivity`: HTML dosyalarının boşluk hassasiyetini belirler. "css" olarak ayarlandığında, CSS dosyalarındaki gibi sarmalama davranışını takip eder.

15. `vueIndentScriptAndStyle`: Bu değer `true` olarak ayarlandığında, `<script>` ve `<style>` bloklarını mevcut ebeveyn içeriğiyle aynı düzeyde biçimlendirir.

16. `endOfLine`: Dosyanın son satırının düzenleneceği satır kesme işaretini ("lf", "crlf" veya "auto") belirler.

17. `embeddedLanguageFormatting`:Gömülü dil içeriği biçimlendirmesini etkinleştirmek veya devre dışı bırakmak için kullanılır. Örneğin, HTML içinde gömülü JavaScript veya CSS bulunabilir. Bu seçenek, gömülü dil içeriğini nasıl biçimlendireceğinizi belirlemenize olanak tanır.

18. `overrides`: Bu seçenek, belirli dosyalar veya dosya yolları için özel biçimlendirme ayarları belirlemenize olanak tanır. Bir nesne olarak tanımlanır ve belirli dosya veya dosya yollarına göre farklı seçenekler tanımlamanıza izin verir.

19. `withNodeModules`: Bu değer `true` olarak ayarlandığında, `node_modules` içindeki dosyaların da biçimlendirilmesini sağlar.

20. `plugins`: Bu seçenek, Prettier'ın varsayılan davranışını değiştiren veya genişleten eklentileri etkinleştirme veya yapılandırma olanağı sağlar.

21. `pluginSearchDirs`: Eklentileri aramak için belirli dizinleri belirtmenize olanak tanır.

22. `fileInfoOptions`: Bu seçenek, dosya biçimlendirmesi sırasında Prettier'ın dosya bilgilerini nasıl toplayacağını yapılandırmanıza olanak tanır.

23. `errorOnUnmatchedPattern`: Bu değer `true` olarak ayarlandığında, eşleşmeyen dosya yolları için hata oluşturur.

24. `logLevel`: Konsol çıktısı düzeyini belirler; `silent`, `error`, `warn`, `info`, `debug` veya `trace` değerlerini alabilir.
