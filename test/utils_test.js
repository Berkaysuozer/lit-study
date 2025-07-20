import { expect } from '@open-wc/testing';
import { formatDate, formatPhone, formatDateForInput } from '../src/utils/formatters.js';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2023-01-15');
      const formatted = formatDate(date);
      expect(formatted).to.equal('15/01/2023');
    });
  });

  describe('formatPhone', () => {
    it('should format phone number correctly', () => {
      const phone = '+905451111111';
      const formatted = formatPhone(phone);
      expect(formatted).to.equal('+90 545 111 1111');
    });
  });

  describe('formatDateForInput', () => {
    it('should format date for input field', () => {
      const date = new Date('2023-01-15');
      const formatted = formatDateForInput(date);
      expect(formatted).to.equal('2023-01-15');
    });
  });
}); 