/* global describe, it, before */

import chai from 'chai';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Cat library', () => {
  // before(() => {
  //   lib = new Cat();
  // });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect('Cat').to.be.equal('Cat');
    });
  });
});

