import { Sorter } from './Sorter'
import  { NumbersCollection } from './NumbersCollection'
import  { CharacterCollections } from './CharacterCollections'
import  { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([2,4,3]);
const characterCollection = new CharacterCollections("cba");
const linkedListCollection = new LinkedList();

numbersCollection.sort();
characterCollection.sort();
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(characterCollection);
// const sorter3 = new Sorter(linkedListCollection);
// sorter.sort();
// sorter2.sort();
console.log(numbersCollection.data);
console.log(characterCollection.data);

linkedListCollection.add(100);
linkedListCollection.add(300);
linkedListCollection.add(200);
linkedListCollection.sort();
linkedListCollection.print();
