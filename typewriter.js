let sentence = "hello there from lighthouse labs";

sentence += "\n";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 100 + i * 100);
}
