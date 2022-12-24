import { ref } from "vue";

const lock = ref();

export default (fn: any, wait = 200) => {
  clearTimeout(lock.value);
  lock.value = setTimeout(() => {
    fn();
  }, wait);
};
