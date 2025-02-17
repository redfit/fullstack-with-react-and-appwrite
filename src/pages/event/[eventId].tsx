import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
// import Button from '@/components/Button';

import { getEventById } from "@/lib/events.ts";
import { LiveBeatEvent } from "@/types/events.ts";

function Event({ params }: { params: { eventId: string } }) {
  // const image = {
  //   url: events[0].imageUrl,
  //   alt: "",
  // };

  const [event, setEvent] = useState<LiveBeatEvent | undefined>();

  useEffect(() => {
    (async function run() {
      const { event } = await getEventById(params.eventId);
      setEvent(event);
    })();
  }, [params.eventId]);

  return (
    <Layout>
      <Container className="grid gap-12 grid-cols-1 md:grid-cols-2">
        <div>
          {/*{image?.url && (*/}
          {/*  <img*/}
          {/*    className="block rounded"*/}
          {/*    width={800}*/}
          {/*    height={450}*/}
          {/*    src={image.url}*/}
          {/*    alt={image.alt}*/}
          {/*  />*/}
          {/*)}*/}
        </div>

        <div>
          {event && (
            <>
              <h1 className="text-3xl font-bold mb-6">{event?.name}</h1>
              <p className="text-lg font-medium text-neutral-600 dark:text-neutral-200">
                <strong>Date:</strong>{" "}
                {event?.date &&
                  new Date(event?.date).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}
              </p>
              <p className="text-lg font-medium text-neutral-600 dark:text-neutral-200">
                <strong>Location:</strong> {event?.location}
              </p>
              {/* <p className="mt-6">
                <Button color="red">Delete Event</Button>
              </p> */}
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export default Event;
