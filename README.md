# React Utils

A collection of React hooks to simplify your applications.

## Installation

```bash
npm install @sharpio/react-utils
```


## Hooks

## useDebounce

**Description**: The `useDebounce` hook delays updating the value until after a specified delay period has passed since the last value change. This is useful for limiting the rate of updates to expensive computations or API calls.

### Usage Example:

```typescript
import React, { useState } from 'react';
import { useDebounce } from '@sharpio/react-utils';

const DebounceExample: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};
```


## useLocalStorage

**Description**: The `useLocalStorage` hook synchronizes a state variable with `localStorage`. It allows you to easily persist state between page refreshes.

### Usage Example:

```typescript
import React from 'react';
import { useLocalStorage } from '@sharpio/react-utils';

const LocalStorageExample: React.FC = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
      />
      <p>Your name is: {name}</p>
    </div>
  );
};
```


# sharpio-react-utils
