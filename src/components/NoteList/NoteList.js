import "./NoteList.css";
import { useSelector,useDispatch } from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { actions, noteSelector } from "../../redux/reducers/noteReducers";
function NoteList() {
  const dispatch=useDispatch()
    const notes=useSelector(noteSelector)
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=>dispatch(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
