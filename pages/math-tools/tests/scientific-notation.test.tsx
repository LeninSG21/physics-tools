import { render } from '@testing-library/react';

import ScientificNotation from '../scientific-notation';

describe('<ScientificNotation tests>', () => {
  it.skip('should match snapshot', () => {
    // arrange
    const { container } = render(<ScientificNotation />);

    // assert
    expect(container).toMatchSnapshot();
  });
});
