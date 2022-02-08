console.log("Connected");
// start with strings, numbers and booleans
    let marks = 100;
    let marks1 = marks;
    console.log(marks, marks1);
    marks = 80;
    console.log(marks, marks1);

    let name = 'messi';
    let name2 = name;
    console.log(name, name2);
    name = 'ronaldo';
    console.log(name, name2);

    // Let's say we have an array
    const players = ['messi', 'suarez', 'iniesta', 'puyol'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team);
    // You might think we can just do something like this:
    team[3] = 'xavi';
    console.log(players, team);
    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    console.log(players, team2)

    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    console.log(players, team3)
    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'neymar';
    console.log(team4);

    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Rishav',
      age: 20
    };

    // and think we make a copy:
    // const captain = person;
    // captain.number = 99;

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 18 });
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const details = {
      name: 'Rishav',
      age: 20,
      social: {
        twitter: '@solanki_rishav21',
        facebook: 'rishav.developer'
      }
    };

    
    console.log(details);

    const dev = Object.assign({}, details);

    const dev2 = JSON.parse(JSON.stringify(details));
