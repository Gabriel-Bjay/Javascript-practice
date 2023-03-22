const num = [0, 1];
for(const i = 2; i <= 200; i++) {
  num[i] = num[i-1] + num[i-2];
  if (num[i] > 200) {
    break;
  }
}
console.log(num);
