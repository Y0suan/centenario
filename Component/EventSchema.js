// EventSchema.js

import Head from 'next/head';

const EventSchema = ({ event }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
      />
    </Head>
  );
};

export default EventSchema;
