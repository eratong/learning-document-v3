# Typescript

## 基础
开源的编程语言，是 JavaScript 的超集。它由微软开发，并在 2012 年首次发布。TypeScript 增强了 JavaScript 的功能，主要通过添加静态类型和其他特性来改善开发体验。

[官方文档地址戳这](https://www.tslang.cn/index.html)

### 变量

#### 接口
```js
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

```js
const currentKey = ref(route.meta.menu);

响应式变量

使用 ref 将 currentKey 变成响应式的，意味着当 route.meta.menu 发生变化时，currentKey.value 会自动更新，Vue 会跟踪这种变化并更新相关的视图或逻辑。
```

### 语句

### 方法