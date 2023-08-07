# React Hook Nedir?

React Hook'lar, React'teki işlevsel bileşenlere (functional components) durum ve yan etkiler eklemeyi sağlayan özel fonksiyonlardır. React 16.8'de tanıtılan Hooks, functional component'lerin durum ve yan etkilerini yönetmeyi, daha işlevsel ve modüler bir şekilde oluşturmayı kolaylaştırır.

## Built-in Hooks (Yerleşik Hook'lar)

### useContext

`useContext`, Bir component içindeki durumu başka bir component ile paylaşmak için kullanılır. Bu, veri akışını prop drilling (veri taşıma) adı verilen süreçle uğraşmadan daha kolay ve düzenli hale getirir.

```jsx
import React, { useContext, createContext } from 'react';
import UserContext from './UserContext';

const userData = {
  username: 'hanefi',
  email: "hanefigulbahar@gmail.com"
};

const UserContext = createContext();

const App = () => {
  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
};

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>User Name: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

```

### useState

`useState`, functional components durum değişkenlerini tanımlamak ve kullanmak için kullanılır. `useState` ile, bir değişken ve onu güncellemek için bir işlev alınır. React, bu değişkenin değerini saklar ve bileşen her render edildiğinde bu değeri döndürür. Aynı zamanda, sağlanan işlevi kullanarak bu değişkenin değerini güncellenmesine izin verir. Bu güncelleme işlemi, bileşenin yeniden render edilmesine neden olur ve kullanıcı arayüzünde değişiklikler yansır.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Artır</button>
    </div>
  );
}
```

### useEffect

`useEffect`, functional components yan etkileri yönetmek için kullanılır. Yan etkiler, veri alışverişi, DOM güncellemeleri, aboneliklerin açılması ve kapatılması gibi işlemleri içerebilir.

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));

      return () => {
        setData(null)
      }
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

### useReducer

`useReducer`, durumu yönetmek için kullanılan bir alternatif kancadır. `useState` gibi, `useReducer` da durum yönetimini sağlar, ancak durumun karmaşık olduğu veya çok sayıda durum değişikliği olduğu durumlarda daha uygun olabilir.

`useReducer`, Redux'taki gibi işlevselliği taklit eder. Bir durum (state) ve bu durumu güncellemek için bir işlev (reducer) alır. İşlev, geçerli durum ve bir eylem (action) nesnesini kullanarak yeni bir durum döndürmelidir. Eylem, durumu değiştiren ve genellikle bir type alanına sahip olan bir nesnedir. Durumu güncellemek için bu eylemi kullanırsınız.


```jsx

import React, { useReducer } from 'react';

// Reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // With useReducer get the "count" state and the "dispatch" function
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Artır</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Azalt</button>
    </div>
  );
};
```

### useRef

`useRef`, DOM treede nodelar ile etkileşim kurmak için kullanılır. `useRef`, React'in bir bileşeni yeniden render ettiğinde, bağlı olduğu değerin değişmesine neden olmaz ve bu nedenle bir bileşenin yeniden render edilmesine yol açmaz.

`useRef` bir nesne döner ve bu nesnenin `current` özelliği, referansı saklamak veya erişmek istediğiniz değeri içerir.

```jsx
import React, { useRef } from 'react';

const TextInput = () => {
  // Create a reference called inputRef with useRef
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Use useRef to focus the input
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Odakla</button>
    </div>
  );
};

```

### useId

`useId`, eşsiz kimlikleri oluşturmak için kullanılır. Bu eşsiz kimlikler, erişilebilirlik (accessibility) özelliklerine aktarılabilir. 

Erişilebilirlik, kullanıcıların web sitelerini veya uygulamaları daha iyi deneyimleyebilmeleri için herkes için kolayca erişilebilir olmasını sağlama konseptidir. Bu nedenle, ekran okuyucular ve diğer yardımcı teknolojiler tarafından kullanılabilen, benzersiz ve anlamlı kimliklere sahip olmak önemlidir.

```jsx
import { useId } from 'react';

const PasswordField = () => {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

const App = () => {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}
```


### useDeferredValue

`useDeferredValue` asenkron işlemlerde ve optimize edilmiş kullanıcı arayüzleri oluşturmada yardımcı olur.
Bir değerin ertelenmiş bir sürümünü almak için kullanılır. Bu, özellikle kullanıcı girişi gibi hızlı değişen değerlerin grafiklerde veya görsel arayüzlerde gecikmeli olarak kullanılması gerektiği durumlarda faydalıdır.

- İlk render sırasında döndürülen ertelenmiş değer, sağladığınız değerle aynı olacaktır. Ancak güncellemeler sırasında React, eski değeri kullanarak tekrar render yapar ve ardından yeni değeri almak için arka planda başka bir render işlemi planlar.

```jsx
import { useState, useDeferredValue } from "react";

function SearchResults({ query }:any) {
  // Simulate API call and results
  const results = [];

  for (let index = 0; index < 30000; index++) {
    results.push(`Results: ${index}`);
  }

  const filteredResults = results.filter((result) => result.includes(query));

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <ul>
        {filteredResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredQuery = useDeferredValue(searchQuery);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      {searchQuery && <SearchResults query={deferredQuery} />}
    </div>
  );
}

```

### useImperativeHandle

`useImperativeHandle`, parent bileşenin child bileşenin refine özelleştirilmiş bir tutamaç sağlamasına izin verir. Bu, child bileşendeki belirli yöntemleri veya işlevleri açığa çıkarmanın bir yoludur ve parent bileşen, ref aracılığıyla bu özel yöntemlere veya işlevlere erişebilir.

Örneğin, parent bileşen çocuk bileşendeki belirli bir öğeye odaklanmak veya öğenin içeriğini kaydırmak istiyorsa, `useImperativeHandle` kullanarak bu özelliklere erişebilir.

```jsx
import { forwardRef, useRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef(function ChildComponent(props, ref) {
  const elementRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      elementRef.current.focus();
    },
    scrollIntoView() {
      elementRef.current.scrollIntoView();
    },
  }));

  return <input {...props} ref={elementRef} />;
});
```
```jsx
function ParentComponent() {
  const childRef = useRef(null);

  const handleButtonClick = () => {
    childRef.current.focusInput();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
```

### useLayoutEffect Hook

`useLayoutEffect`, `useEffect`'e benzer ancak farkı, işlemlerin tarayıcıya görsel değişiklikleri uygulamadan hemen önce yapılmasıdır. Ui güncellemelerinin ekrana yansıtılmadan önce bazı hesaplamalar yapmak istenildiği durumlarda kullanışlıdır.

```jsx
import React, { useState, useLayoutEffect } from 'react';

function ExampleComponent() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // bileşen mount edildiğinde  genişliği güncellemek için

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window Width: {width}</p>
    </div>
  );
}

export default ExampleComponent;

```

### useDebugValue

`useDebugValue`, custom hooklar hakkında ek bilgi sağlamak için kullanılır. Özellikle, custom hookun React Developer Tools tarafından nasıl etiketleneceğini belirtmek için kullanılır.

### useSyncExternalStore

Harici storeları kullanmak için kullanılır. Redux'taki useSelector hookuna benzer. React mümkün olduğunca, `useState` ve `useReducer` kullanılmasını öneririr. 

### `useTransition`` ??