function ProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    const totalGenerated = evenCount + oddCount;
    const evenPercentage = (evenCount / totalGenerated) * 100;
    const oddPercentage = (oddCount / totalGenerated) * 100;
  
    console.log(`Кількість згенерованих чисел: ${totalGenerated}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage.toFixed(2)}%`);
  }
  
ProbabilityTheory(1000);
  