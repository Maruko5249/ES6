/**
 * 传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。
 */
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);

/**
 * 上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。
 */
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

/**
 * 模板字符串是增强版的字符串，用反引号(`)标识。
 * 它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
 * 模板字符串都是用反引号表示
 * 在模板字符串中需要使用反引号，则前面要用反斜杠转义
 */

/**
 * 普通字符串
 */
`In JavaScript '\n' is a line-feed.`
  // "In JavaScript ' 
  //' is a line-feed."

  /**
   * 多行字符串
   */
  `In JavaScript this is
     not legal.`
// "In JavaScript this is
// not legal."

console.log(`string text line 1 string text line 2`); // string text line 1 string text line 2

/**
 * 字符串中嵌入变量
 */
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

/**
 * 在模板字符串中需要使用反引号，则前面要用反斜杠转义
 */
let greeting = `\`Yo\`World!`;
greeting // "`Yo`World!"

/**
 * 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
 */
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

/**
 * 所有模板字符串的空格和换行，都是被保留的。
 * 比如<ul>标签前面会有一个换行。
 * 如果不要换行，使用trim方法消除。
 */
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());

/**
 * 模板字符串中嵌入变量，需要将变量名写在${}之中
 */
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      `User ${user.name} is not authorized to do ${action}.`
    );
  }
}

/**
 * 大括号内可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。
 */
let x = 1;
let y = 2;
`${x} + ${y} = ${x + y}` // "1 + 2 = 3"
  `${x} + ${y * 2}=${x + y * 2}` // "1 + 4 = 5"

let obj = { x: 1, y: 2 };
`${obj.x + obj.y}` // "3"

/**
 * 模板字符串之中还能调用函数
 * 如果大括号中的值不是字符串，将按照一般的规则转为字符串。
 * 大括号中是一个对象，将默认调用对象的toString方法
 */
function fn() {
  return "Hello World";
}
`foo ${fn()} bar` // "foo Hello World bar"

/**
 * 如果模板字符串中的变量没有声明，将报错。
 */
// 变量place没有声明
let msg = `Hello, ${place}`; // 报错 Uncaught ReferenceError: place is not defined

// 由于模板字符串的大括号内部，就是执行JavaScript代码，因此如果大括号内部是一个字符串，将会原样输出。
`Hello ${'World'}` // "Hello World"

const tmpl = addrs => `
<table>
${addrs.map(addr => `
<tr><td>${addr.first}</td></tr>
<tr><td>${addr.last}</td></tr>`).join('')}
</table>
`;

const data = [
  { first: '<Jane>', last: 'Bond' },
  { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data));
{/* <table>

  <tr><td><Jane></td></tr>
  <tr><td>Bond</td></tr>

  <tr><td>Lars</td></tr>
  <tr><td><Croft></td></tr>

</table> */}

/**
 * 如果需要引用模板字符串本身，在需要时执行，可以写成函数。
 */
let func = (name) => `Hello ${name}!`;
func('Jack'); // "Hello Jack!"