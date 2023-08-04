# React Events ve Örnekleri

React olaylar (events), bir kullanıcının etkileşimi veya tarayıcıyla ilgili eylemlerdir ve bu olaylar, React uygulamasında belirli davranışları tetikler. Bu olaylar, bir öğeye tıklama, bir giriş alanında yazma, bir öğenin üzerine gelme, bir formu gönderme gibi çeşitli eylemleri içerebilir. React, bu olayları ele almak ve onlara tepki vermek için olay işleyicileri kullanma imkanı sağlar.

React olayları, standart DOM olaylarına benzer şekilde çalışır, ancak bazı farklılıklar vardır. 

**Event Handling:** React'te event handling, belirli bir olay gerçekleştiğinde çalıştırılan fonksiyonlar olarak yazılır. Event handling genellikle JSX (JavaScript XML) içinde tanımlanır ve React öğelerine prop olarak geçirilir.

**Event Naming:** React, olay adları için standart DOM olaylarındaki küçük harf yerine camelCase adlandırma kuralını takip eder. Örneğin, onclick yerine onClick, onchange yerine onChange gibi.

**Synthetic Events:** React, tarayıcının doğal olaylarını soyutlar ve kendi "Synthetic Events" adını verdiği bir tarayıcılar arası olay sistemi sağlar. Bu, React'in farklı tarayıcılarda olay işlemeyi normalize etmesi ve tutarlı bir davranış sağlaması anlamına gelir.

**Event Parameters:** React'te event handling tanımlarken, bir parametre aracılığıyla olay nesnesine erişebilir. Bu, olay hakkında bilgiye erişimi sağlar; örneğin, hedef element veya basılan button gibi bilgiler.

### 1. onClick
Öğe (element) tıklanıldığında tetiklenir.

```jsx
import React from 'react';

const ClickExample = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return <button onClick={handleClick}>Tıkla</button>;
};
```

### 2. onChange
Input veya select box gibi bir öğenin değeri değiştiğinde tetiklenir.

```jsx
import React, { useState } from 'react';

const InputExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};
```

### 3. onSubmit
Bir form gönderildiğinde tetiklenir.

```jsx
import React, { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Gönder</button>
    </form>
  );
};
```

### 4. onMouseOver ve onMouseOut
`onMouseOver`, bir öğenin üzerine gelindiğinde tetiklenirken, `onMouseOut`, fare imleci öğenin üzerinden çıktığında tetiklenir.

```jsx
import React from 'react';

const MouseOverExample = () => {
  const handleMouseOver = () => {
    console.log('On the element!');
  };

  const handleMouseOut = () => {
    console.log('Out the element !');
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Element
    </div>
  );
};
```

### 5. onFocus ve onBlur
`onFocus`, bir öğe odaklandığında tetiklenirken, `onBlur` bir öğenin odak dışı bırakıldığında tetiklenir.

```jsx
import React from 'react';

const FocusExample = () => {
  const handleFocus = () => {
    console.log('Element focus!');
  };

  const handleBlur = () => {
    console.log('Element blur!');
  };

  return (
    <input
      type="text"
      placeholder="Focused Element"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};
```

### 6. onKeyDown, onKeyUp ve onKeyPress
Bu olaylar, bir klavye tuşuna basıldığında tetiklenir. `onKeyDown`, tuşa basıldığında, `onKeyUp` tuşa basıldıktan sonra ve `onKeyPress` karakter girildiğinde tetiklenir.

```jsx
import React from 'react';

const KeyEventsExample = () => {
  const handleKeyDown = (event) => {
    console.log('Key pressed :', event.key);
  };

  const handleKeyUp = (event) => {
    console.log('Key pressed and released:', event.key);
  };

  const handleKeyPress = (event) => {
    console.log('Character entered:', event.key);
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
```

### 7. onScroll
Bir öğenin içeriği kaydırıldığında(scroll) tetiklenir.

```jsx
import React from 'react';

const ScrollExample = () => {
  const handleScroll = (event) => {
    console.log('Scrolled:', event.target.scrollTop);
  };

  return (
    <div style={{ height: '200px', overflow: 'auto' }} onScroll={handleScroll}>
    </div>
  );
};
```

### 8. onTouchStart, onTouchMove, onTouchEnd
Dokunmatik cihazlarda dokunma eylemleriyle ilgili tetiklenir. `onTouchStart`, dokunma işlemi başladığında, `onTouchMove` dokunma sırasında hareket edildiğinde, `onTouchEnd` ise dokunma işlemi sona erdiğinde tetiklenir.

```jsx
import React from 'react';

const TouchEventsExample = () => {
  const handleTouchStart = () => {
    console.log('The touch has started!');
  };

  const handleTouchMove = () => {
    console.log('Movement during touch!');
  };

  const handleTouchEnd = () => {
    console.log('Touch is over!');
  };

  return (
    <div
      style={{ height: '100px', width: '100px', background: 'lightblue' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
     Element
    </div>
  );
};
```

### 9. onContextMenu
Bir öğeye sağ tıklandığında veya sağ tık menüsü açıldığında tetiklenir.

```jsx
import React from 'react';

const ContextMenuExample = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
    console.log('Right clicked!');
  };

  return (
    <div onContextMenu={handleContextMenu}>
        Right click to open the menu.
    </div>
  );
};
```

### 10. onDragStart, onDrag, onDragEnd
`onDragStart` sürükleme işleminin başladığında, `onDrag` sürüklendiği sırada ve `onDragEnd` sürükleme işleminin sona erdiği durumlarda tetiklenir.

```jsx
import React from 'react';

const DragEventsExample = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log('Drag start:', event.target.id);
  };

  const handleDrag = () => {
    console.log('Draged!');
  };

  const handleDragEnd = () => {
    console.log('Drag end!');
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      Sürüklemek için bu alanı kullanın.
    </div>
  );
};

```

### 11. onDrop
Bir öğenin sürüklenip bırakıldığı hedef öğede tetiklenir. Sürükle ve bırak (drag-and-drop) işlemleri için kullanılır.

```jsx
import React from 'react';

const DropExample = () => {
  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    console.log('Droped:', data);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ height: '100px', width: '100px', border: '1px solid black' }}
    >
        The dragged item can be dropped here.
    </div>
  );
};
```

### 12. onInput
Bir öğenin içeriği değiştiğinde tetiklenir. `onInput` olayı, `onChange` olayından farklıdır, çünkü her karakter değişikliğinde tetiklenirken, `onChange` yalnızca öğenin değeri değiştiğinde tetiklenir.

```jsx
import React, { useState } from 'react';

const InputExample = () => {
  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onInput={handleInput} />
  );
};
```

### 13. onAnimationStart, onAnimationEnd, onAnimationIteration
`onAnimationStart` CSS animasyonlarının başladığında, `onAnimationEnd` sona erdiğinde ve `onAnimationIteration` tekrarlandığında tetiklenir. CSS ile animasyonlar kullanırken bu olayları yakalayabilirsiniz.

```jsx
import React from 'react';

const AnimationExample = () => {
  const handleAnimationStart = () => {
    console.log('Animation start!');
  };

  const handleAnimationEnd = () => {
    console.log('Animation End!');
  };

  const handleAnimationIteration = () => {
    console.log('Animation Itertaion!');
  };

  return (
    <div
      className="animated-box"
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      onAnimationIteration={handleAnimationIteration}
    >
      Animation
    </div>
  );
};
```

### 14. onTransitionEnd
Bu olay, CSS geçişlerinin (transitions) tamamlandığında tetiklenir. CSS geçişleri tamamlandığında ekstra işlemler yapmak için kullanılabilir.

```jsx
import React from 'react';

const TransitionExample = () => {
  const handleTransitionEnd = () => {
    console.log('Transition End!');
  };

  return (
    <div
      className="transition-box"
      onTransitionEnd={handleTransitionEnd}
    >
      Transition
    </div>
  );
};
```