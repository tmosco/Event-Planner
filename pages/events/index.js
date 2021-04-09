import { getAllEvents } from "../../data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import {useRouter} from "next/router"

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();


  const FindEventsHandler=(year,month) =>{
    const fullPath =`/events/${year}/${month}`

    router.push(fullPath)

  }

  return (
    <>
      <EventSearch onSearch={FindEventsHandler}/>
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
