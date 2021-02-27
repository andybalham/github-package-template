import { expect } from 'chai';
import { MyClass, Operation } from '../src';

it('tests something', async () => {
  const myClass = new MyClass(616);
  const result = myClass.perform(Operation.Add, 50);
  expect(result).to.equal(666);
  expect(result).to.equal(0);
});
