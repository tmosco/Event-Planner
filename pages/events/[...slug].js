import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button/button";
import ErrorAlert from "../../components/events/error-alert"

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading....</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
      <ErrorAlert>Invalid Filter. Please check your values</ErrorAlert>
     
        <div className="center">
          <Button link="/events"> Show All Event</Button>
        </div>
      </>
    );
  }

  const data = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!data || data.length === 0) {
    return (
      <>
        <ErrorAlert>No Event Found</ErrorAlert>;
        <div className="center">
          <Button link="/events"> Show All Event</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  console.log(date);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={data} />
    </>
  );
};

export default FilteredEventsPage;
