import React from 'react';
import { mount } from 'enzyme';
import NoteArea from './notearea';
import NoteDisplay from './notedisplay';
import NoteEdit from './noteedit';
import componentWithMockStore from '../testhelper';

jest.mock('./noteedit');
// jest.mock('./notedisplay');

const testNotes = [
  {
    id: 'abc',
    title: 'note1',
    contents: 'con1',
    created: 'Feb10',
    edit: true,
  },
  {
    id: 'xyz',
    title: 'note2',
    contents: 'con2',
    created: 'Feb14',
    lastEdit: 'Jan29',
    edit: false,
  },
];

describe('NoteArea', () => {
  let wrapper;
  const saveNote = jest.fn()
  const editNote = jest.fn()
  const deleteNote = jest.fn()
  const addNote = jest.fn()
  beforeEach(() => {

    // console.log(c);
    wrapper = mount(componentWithMockStore(NoteArea, testNotes));
  });
  describe('passes NoteEdit the', () => {
    it('note', () => {
       console.log(wrapper.children());
    });
  });
});
