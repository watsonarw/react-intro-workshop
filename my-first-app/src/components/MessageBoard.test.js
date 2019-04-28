import React from 'react'
import { render } from 'react-testing-library';

import MessageBoard from './MessageBoard';

describe('<MessageBoard />', () => {

  it('renders the title message board', () => {
    const messageBoard = render(<MessageBoard />);

    const title = messageBoard.getByText("Andrew's Message Board");
    expect(title.textContent).toEqual("Andrew's Message Board");
  });
});
