import React from 'react';
import NoteDisplay from './notedisplay';
import NoteEdit from './noteedit';
import {connect} from 'react-redux';
import {saveNote,editNote,deleteNote,addNote} from '../Helpers/actions'
import uuid from 'uuid';
const mapDispatchToNoteEditProps = (dispatch) => (
  {
    onSaveClick: (id, title, contents) => (dispatch(saveNote(id, title, contents))),
    onEditClick: (id) => (dispatch(editNote(id))),
    onDeleteClick: (id) => (dispatch(deleteNote(id))),
    onAddClick: (id, title, contents) => (dispatch(addNote(id, title, contents))),
  }
);

const mapStateToNoteListProps = (state) => {
  const notes = state;
  console.log(notes);
  return {notes};
};

const NoteArea = (props) => (
  <div className="ui vertical stripe container" id='noteArea'>
    <div className="ui two column stackable grid">
      <NoteEdit
        note={{id:uuid.v4(), title:'', contents:''}}
        label={'Add'}
        onAEClick={props.onAddClick}
      />
      {
        props.notes.map((n,index) => (
          n.edit ?
            <NoteEdit
              note={n}
              label={'Save'}
              key={index}
              onAEClick={props.onSaveClick}
            /> :
            <NoteDisplay
              note={n}
              key={index}
              onEditClick={props.onEditClick}
              onDeleteClick={props.onDeleteClick}
            />
        ))
      }
    </div>
  </div>
);


const NoteAreaDisplay = connect(
  mapStateToNoteListProps,
  mapDispatchToNoteEditProps
)(NoteArea);

export default NoteAreaDisplay;
