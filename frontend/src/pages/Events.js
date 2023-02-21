import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  // const events = data.events;
  // return <EventsList events={events} />;
  // return <EventsList />;

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}} >Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch data!!'};
    // throw new Response(JSON.stringify({ message: "Could not fetch data!!" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch data!!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
