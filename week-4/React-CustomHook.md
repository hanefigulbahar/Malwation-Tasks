# React Custom Hook?

React custom hooklar, React uygulamalarında tekrar kullanılabilir fonksiyonlardır. Custom hooklar, işlevselliği birden çok bileşende paylaşmak ve kodun tekrarını önlemek için kullanılır.

Custom hooklar, `stateful` (durumlu) veya `stateless` (durumsuz) olarak ikiye ayrılır.

**Stateful Hook:**
- Stateful Hook, React bileşenlerinde durum yönetimini sağlar. Yani, state (durum) takip eder ve günceller.
- useState, useReducer gibi durum kancalarını kullanarak, bileşenin durumunu güncellemek için kullanılır.
- Genellikle duruma bağlı olarak bileşenin yeniden render edilmesini tetikleyen olayları dinler.
- Durumu güncelleyerek, bileşenin durumu değiştiğinde yeniden render edilmesini sağlar ve bu sayede kullanıcı arayüzünde güncellemeler gösterilir.

**Stateless Hook:**
- React bileşenlerinde durum yönetimi sağlamaz. Yani, durumu takip etmez ve güncellemez.
- State olmadığından sadece işlevselliği sağlar, veri saklamaz.
- Genellikle işlevleri, veri işlemesi veya dış kaynaklarla (API çağrıları gibi) etkileşime geçme gibi işlemleri gerçekleştirmek için kullanılır.
- useState veya useReducer gibi durum kancalarını içermez.
- Durumları veya bağımlılıkları olmadan yeniden kullanılabilir ve kompozisyon için daha uygundur.

## Neden React Custom Hook Kullanmalıyız?

1. **Re-usability (Tekrar Kullanılabilirlik)**: Bir işlevselliği birden çok bileşende kullanılması gerektiğinde, custom hooklar tekrar kullanılabilirliği sağlar. Aynı mantığı veya işlevi her bileşende yeniden yazmak yerine, bu işlevselliği bir custom hook olarak ayırılabilir ve istenilen her bileşende kullanılabilir.

2. **Centralizing Logic (Mantığın Merkezileştirilmesi)**: Custom hooklar, belirli bir işlevselliği tek bir yerde merkezileştirerek kodun daha düzenli olmasını sağlar. Bu sayede, kodunuz daha az karmaşık ve daha kolay bakım yapılabilir hale gelir.

3. **Understandable Code (Anlaşılır Kod)**: Custom hooklar, bileşenlerinizin daha temiz ve anlaşılır olmasını sağlar. Bileşeninizin işlevselliği dışında, diğer detaylarla uğraşmak zorunda kalmadan custom hookları kullanabilir ve kodunuzu daha modüler hale getirebilirsiniz.

4. **Testability (Test Edilebilirlik)**: Custom hooklar, React bileşenlerinden bağımsız olarak test edilebilirler. Bu, işlevselliğinizi daha kolay bir şekilde test etmenizi sağlar.

5. **Modularity (Modülerlik):** Mantığı custom hook'lara soyutlayarak bileşenler daha basit hale gelir ve bakımı daha kolay olur, bu da daha modüler bir kod tabanına yol açar.

## React Custom Hook Nasıl Oluşturulur?

1. **Fonksiyon Oluşturma**: Bir custom hook, bir JavaScript fonksiyonudur. Fonksiyonun adı genellikle "use" ile başlar, bu sayede React tarafından özel bir davranış sergilediği anlaşılır (örn. `useCustomHookName`).

2. **React Hooks Kullanımı**: Custom hookunuzda React hooks kullanabilirsiniz. Örneğin, `useState`, `useEffect`, `useContext`, `useReducer` gibi mevcut React hooklarını kullanabilirsiniz. Ayrıca, başka custom hookları da kullanabilirsiniz fakat tavsiye edilmez.

3. **Mantık ve Durum**: Custom hooklar, genellikle belirli bir işlevselliği veya durumu içerirler. Örneğin, API çağrıları yapmak, form yönetimi, tema değiştirme gibi işlevselliği içerebilirler.

4. **Dönüş Değeri**: Custom hook, sonuç olarak bir değer döndürmelidir. Bu değer, genellikle bir dizi veya nesne olabilir ve bileşenlerde kullanılacak olan durumu ve işlevleri içerir.


### Stateful Hook (Durumlu Hook) Örneği: `useMousePosition`

```jsx
import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};
```
```jsx
const MousePositionComponent = () => {

  const position = useMousePosition();

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
};

export default MousePositionComponent;
```

### Stateless Hook (Durumsuz Hook) Örneği: `useFetchData`

```jsx
const useUppercase = () => {
  const uppercaseText = (text) => {
    return text.toUpperCase();
  };

  return uppercaseText;
};
```

```jsx
import React, { useState } from 'react';

const UppercaseConverter = () => {
  const makeUppercase = useUppercase();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h1>Uppercase Converter</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>Converted Text: {makeUppercase(inputText)}</p>
    </div>
  );
};

export default UppercaseConverter;

```

### React Custom Hooks Best Practices

1. **Naming Convention (İsimlendirme Kuralı)**: Custom hook başına "use" eklemek, React.js tarafından belirlenen isimlendirme kuralına uymak ve işlevin bir hook olduğunu diğer geliştiricilere açıkça belirtmek için iyi bir uygulamadır.

2. **Single Responsibility Principle (Tek Sorumluluk Prensibi)**: Custom hook'ları tek bir sorumluluk vermek, okunabilirliği, yeniden kullanılabilirliği ve bakımı kolaylaştırır.

3. **Dependency Injection (Bağımlılık Enjeksiyonu)**: Custom hook'ların esnek olmasını sağlamak için gerekli bağımlılıkları argüman olarak verilmelidir.

4. **Documentation and Examples (Belgeleme ve Örnekler)**: Custom hook'lar için açık ve kapsamlı documantation hazırlanmalıdır. Amaçlarını, gerekli girdilerini, dönüş değerlerini ve kullanım örnekleri açıklanmalıdır. Diğer geliştiriciler için hook'un bir yol haritası oluşturulmalıdır.

5. **Avoid Prop Drilling (Prop Drilling'den Kaçınma)**: State management kullanarak, propsları custom hook'lara dahil ederek prop drilling'den kaçınılmalıdır.

6. **Testability (Test Edilebilirlik)**: Custom hook'lar kolayca test edilebilir olmalıdır. Jest ve React Testing Library gibi test çerçeveleri kullanarak farklı kullanım durumları için unit test yazılmalıdır.

7. **Consistent Abstractions (Tutarlı Soyutlamalar)**: Yazılım tasarımında bir ilke olarak, bir yazılım sistemindeki bileşenlerin veya modüllerin benzer davranış sergilemesini ifade eder. Custom hook'larda kullanılan soyutlamalara, desenlere ve isimlendirme kurallarına tutarlılık sağlamak, kodun okunabilirliğini ve geliştiricilerin hookları kullanma anlayışını artırır.


```jsx
import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
```

```jsx
import React from 'react';
import useFetchData from './useFetchData';

const DataComponent = () => {
  const { data, isLoading, error } = useFetchData('https://api.example.com/data');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default DataComponent;
```

[locofy.ai](https://www.locofy.ai/blog/custom-hooks-in-react)\
[blog.bitsrc.io](https://blog.bitsrc.io/custom-react-hooks-a-secret-weapon-for-efficient-cleaner-and-reusable-code-b432cc21e650#:~:text=This%20powerful%20tool%2C%20known%20as,and%20reuse%20of%20our%20code.)\
[tio.ist](https://tio.ist/tr/frontend-gelistirme/custom-hooks-nedir-nasil-olusturulur/)\
[reactjs.org](https://legacy.reactjs.org/docs/hooks-custom.html)\
[reactjs.dev](https://react.dev/learn/reusing-logic-with-custom-hooks)\
[freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-react-hooks/)







