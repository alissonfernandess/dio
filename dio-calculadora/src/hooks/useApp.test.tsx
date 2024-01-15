

import { renderHook } from "@testing-library/react";
import { useApp } from "./useApp";

describe('useApp', () => {
    it('should returns default values', () => {
        const {result} = renderHook(useApp);

        expect(result.current.currentNumber).toBe('0')
        
    });
})