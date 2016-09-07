// @flow
/* eslint-disable import/prefer-default-export, import/no-extraneous-dependencies */
import React from 'react';
import chai from 'chai';
import testUtils from 'react-addons-test-utils';

/**
 * Test files should import the test dependencies provided by these exports. This is for
 * convenience. It allows us to avoid manually ignoring eslint `import/no-extraneous-dependencies`
 * in each test file.
 */
export const { assert } = chai;
export const { createRenderer } = testUtils;

/**
 * Simply test that a React component doesn't 'blow up' with the given props.
 */
export function componentSmokeCheck(componentName: string, Component: ReactClass<{}>, props: ?{}) {
  describe(`<${componentName}>`, () => {
    it('works', () => {
      const renderer = createRenderer();
      renderer.render(<Component {...props} />);

      const actual = renderer.getRenderOutput();

      const failureMsg = `${componentName} failed to render as a valid React element`;
      assert.isTrue(React.isValidElement(actual), failureMsg);
    });
  });
}
