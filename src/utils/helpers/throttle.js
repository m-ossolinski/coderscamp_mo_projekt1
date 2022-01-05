export function throttle(callback, delay = 1000) {
  if(typeof callback !== 'function') throw new Error(
    'An error occurred while invoke function throttle: argument fn have to be a function'
  )
  if(typeof delay !== 'number') throw new Error(
    'An error occurred while invoke function throttle: argument delay have to be a number'
  );
  let lastClickTime = 0;
  return (...args) => {
    const currentClickTime = new Date().getTime();

    if(currentClickTime - lastClickTime < delay) {
      return;
    }

    lastClickTime = currentClickTime;
    return callback(...args);
  }
}