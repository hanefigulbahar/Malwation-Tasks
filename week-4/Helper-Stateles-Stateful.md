## Helper Function

Helper fonksiyon, belirli bir görevi veya işlemi gerçekleştiren, tekrar kullanılabilir bir kod parçacığıdır. Helper fonksiyonlar, ortak işlevselliği kapsayarak kodu daha düzenli ve bakımı daha kolay hale getirmek için tasarlanmıştır. Helper fonksiyonlar bağımsızdır ve kendi durumları veya verileri yoktur. Giriş parametrelerini alırlar, bunları işlerler ve uygulamanın durumunu etkilemeden bir sonuç döndürürler. Helper fonksiyonlar genellikle karmaşık görevleri daha küçük ve daha yönetilebilir parçalara bölmek için kullanılır.

```javascript
function calculateSum(a, b) {
  return a + b;
}
```

## Stateless Hook Function

Stateless hook fonksiyonu, React hook'larını kullanan ancak kendi durumunu saklamayan bir functional componenti ifade eder. Bunun yerine, parent component veya uygulamanın küresel durum yönetimi (örn. Redux gibi) tarafından sağlanan durum ve props üzerine çalışırlar. Durumsuz hook fonksiyonları aynı zamanda "functional components" olarak da bilinir.

```jsx
import React from 'react';

const StatelessComponent = () => {
  const name = 'John Doe';
  return <div>Hello, {name}!</div>;
};
```

## Stateful Hook Function

React hook'larını kullanarak kendi durumunu yöneten işlevsel bir componentdir. `useState`, `useReducer` veya diğer hook'ları kullanarak component içindeki yerel durumu tutabilir ve güncelleyebilirler. Stateful hook fonksiyonları, componentlerin diğer componentlerden bağımsız olarak kendi verilerini tutmasına ve değiştirmesine olanak tanır.

```jsx
import React, { useState } from 'react';

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## Helper Fonksiyon, Stateless Hook Fonksiyon ve  Stateful Hook Fonksiyon Arasındaki Farklar

1. **Purpose (Amaç):**
   - Helper: Belirli görevleri yerine getirmeye yardımcı olur ve state yönetmez.
   - Stateless Hook: Props gelen verilere dayalı olarak arayüzü oluşturur, yerel state yönetmez.
   - Stateful Hook:  React hook'larını kullanarak yerel state yönetir ve arayüzü oluşturur.

2. **Usage:**
   - Helper : Ortak görevleri modülerize etmek ve tekrar kullanım sağlamak için kullanılır.
   - Stateless Hook : State yönetmeyen basit arayüz componentleri için kullanılır.
   - Stateful Hook : Yerel state yönetimi gerektiren karmaşık arayüz componentleri için kullanılır.

3. **State Management:**
   - Helper : State yönetmez, sadece giriş parametrelerine bağlı olarak çalışır.
   - Stateless Hook : State yönetmez, yalnızca parent componentlerden gelen propsları kullanır.
   - Stateful Hook : React hook'larını kullanarak kendi state'tini yönetir.

4. **Dependencies:**
   - Helper : Genellikle harici state veya kütüphanelere bağımlılık göstermez.
   - Stateless Hook : Parent componentlerden gelen props ve contexte bağımlı olabilir.
   - Stateful Hook : React hook'larını ve diğer harici state yönetimi kütüphanelerini kullanabilir.

5. **Reactivity:** 
Reactivity kullanıcı etkileşimlerine anında tepki verme yeteneğini.
   - Helper : Reaktif değil. Output sadece input'a bağlıdır.
   - Stateless Hook : Props ve context değişikliklerine reaktif olabilir ancak kendi state değişikliklerine reaktif değildir.
   - Stateful Hook : Props, context ve kendi state değişikliklerine reaktif olabilir.