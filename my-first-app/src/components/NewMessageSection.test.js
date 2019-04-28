import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import * as messageService from '../services/messageService';
import NewMessageSection from './NewMessageSection';

jest.mock('../services/messageService');


describe('<NewMessageSection />', () => {
  const title = 'A title for my new message';
  const contents = 'The actual message';

  let component;

  beforeEach(() => {
    component = render(<NewMessageSection />);
    const titleField = component.getByTestId('titleInput');
    fireEvent.change(titleField, { target: { value: title } });

    const contentsField = component.getByTestId('contentsInput');
    fireEvent.change(contentsField, { target: { value: contents } });
  });

  afterEach(cleanup);

  it('should show a preview of the message', () => {
    const messagePreview = component.getByTestId('preview');
    expect(messagePreview.textContents).toContain(title);
    expect(messagePreview.textContents).toContain(contents);
  });

  it('save the message when clicking save', () => {
    const createMessageMock = jest.spyOn(messageService, 'createMessage');
    const saveButton = component.getByTestId('saveButton');

    fireEvent.click(saveButton);

    expect(createMessageMock).toHaveBeenCalledTimes(1);
    expect(createMessageMock).toHaveBeenCalledWith({ title, contents });
  });
});
