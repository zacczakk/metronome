import { describe, expect, test } from 'bun:test';
import { mapTargets, validatePullSource, validateTargets } from '../cli-helpers';

describe('OpenCode target selection', () => {
  test('accepts only the stable OpenCode target', () => {
    expect(() => validateTargets(['opencode'])).not.toThrow();
    expect(mapTargets(['opencode'])).toEqual(['opencode']);
    expect(() => validateTargets(['opencode2'])).toThrow();
    expect(() => validatePullSource('opencode2')).toThrow();
  });
});
