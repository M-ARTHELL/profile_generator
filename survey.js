const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Thanks ${name}`);

  rl.question('Hobbies? ', (hobby) => {
    console.log(`Your name is ${name} and you do ${hobby}?`);
  
    rl.question('Music taste? ', (music) => {
      console.log(`${music}, huh?`);
    
      rl.question('How about meal time? Breakfast? Or are you a dinner kind of guy? ', (mealtime) => {
        console.log(`${mealtime}, ${mealtime}, I see!`);
      
        rl.question(`And what do you eat during ${mealtime}? `, (food) => {
          console.log(`${food}!`);
        
          rl.question('Into sports? If you had to pick just one, what would it be? ', (sports) => {
            console.log(`${sports}? Good to know. >:)`);
          
            rl.question('And your superpower? What are you good at? ', (superpower) => {
              console.log(`${superpower}! That's good.`);

              console.log(`So let me get this straight.
Your name is ${name}, you do ${hobby}, and maybe listen to some ${music} while you're at it. Best case scenario, you get ${food} at ${mealtime}. Sports wise, you'd pick ${sports}, and you're the best at ${superpower}. That's pretty fair, I'd say!`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});