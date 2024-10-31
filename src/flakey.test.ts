import { describe, it, expect } from "vitest";
import { faker } from '@faker-js/faker';

describe('Flaky tests to test things in LT DORA', () => {
    it('should maybe be true if ', () => { 
        const binbin = faker.number.binary({min: 0, max: 1})
        expect(parseInt(binbin)).toBeTruthy();
    })
})