function retrieve(id) {
  return JSON.parse(localStorage.getItem(id));
}

function retrieveAll() {
  var notes = [];
  if (localStorage.length>0) {
    for (let i=1; i<localStorage.length;i++) {
      if(localStorage.key(i).slice(0,7)==='NoteApp') {
        console.log(localStorage.key(i));
        notes.push(retrieve(localStorage.key(i)));
      }
    }
  }
  return notes;
}

function remove(id) {
  localStorage.removeItem(`NoteApp${id}`);
}

function save(note) {
  localStorage.setItem(`NoteApp${note.id}`, JSON.stringify(note));
}

export { save, retrieve, retrieveAll, remove };
