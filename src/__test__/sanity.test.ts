import { describe, it, expect } from 'vitest';

describe('System Sanity Check', () => {
    it('should be able to run tests', () => {
        const sum = 2 + 2;
        expect(sum).toBe(4);
    });

    it('should have the correct project name context', () => {
        const projectName = "hoxmot-blog";
        expect(projectName).toContain("hoxmot");
    });
});
