/* Асинхронний код - код, що виконується паралельно, а не послідовно.
Варіанти організації асинхронного коду:
- Callback (функція зворотного виклику)
- Promise
- Шаблон Observer


function callback(result) {
  ...
}

download(callback);


let promise = download();
promise.then(callback);


let observable = download();
observable.subscribe(callback);

*/
