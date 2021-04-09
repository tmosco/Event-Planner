import { useRouter } from "next/router";
import { getEventById } from "../../data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/events/error-alert"

const EventPage = () => {
  const router = useRouter();

  const id = router.query.eventid;

  const event = getEventById(id);
  if (!event) {
    return <ErrorAlert>No event found</ErrorAlert>;
  }
  console.log(event);

  return (
    
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
    
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventPage;
