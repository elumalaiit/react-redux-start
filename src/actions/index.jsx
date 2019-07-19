export function displayHello(data) {
console.log('reached');
  return { type: 'HELLO_TITLE', payload: data };
}