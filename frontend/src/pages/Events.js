import { Link } from "react-router-dom";

const DUUMMMY_EVENTS = [
  {
    id: 'id1',
    title: 'Some Event'
  },
  {
    id: 'id2',
    title: 'Another Event'
  }
]

const EventPage = () => {
  return <>
    <h1>Event Page</h1>
    <ul>
      {DUUMMMY_EVENTS.map(event => <li key={event.id}>
        <Link to={event.id}>{event.title}</Link>
      </li>)}
    </ul>
  </>;
};

export default EventPage;
