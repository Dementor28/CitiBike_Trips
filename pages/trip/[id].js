import { useRouter } from 'next/router';
import PageHeader from '@/components/PageHeader';
import CustomMap from '@/components/Map';

const Trip = ({ trip }) => {
  const router = useRouter();

  if (!trip) {
    return null;
  }

  const { bikeid, usertype, 'start station name': startStationName, 'end station name': endStationName, 'start station location': startStationLocation, 'end station location': endStationLocation, tripduration, 'birth year': birthYear, 'start time': startTime, 'stop time': stopTime } = trip;

  return (
    <div>
      <PageHeader
        title={`Bike: ${bikeid}`}
        text={`${startStationName} to ${endStationName}`}
        showSubscriber={usertype === 'Subscriber'}
        showCustomer={usertype !== 'Subscriber'}
      />
      <CustomMap trip={trip} />
      <ul>
        <li>Trip duration: {tripduration}</li>
        <li>Birth year: {birthYear}</li>
        <li>Start time: {startTime}</li>
        <li>Stop time: {stopTime}</li>
      </ul>
    </div>
  );  
};

export async function getStaticPaths() {
  const res = await fetch('https://busy-erin-hen-veil.cyclic.app/api/trips/?page=1&perPage=10');
  const data = await res.json();

  // Generate the paths using the _id values
  const paths = data.map((trip) => ({ params: { id: trip._id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  // Fetch the trip data based on the id parameter
  const res = await fetch(`https://busy-erin-hen-veil.cyclic.app/api/trips/${context.params.id}`);
  const trip = await res.json();

  return {
    props: {
      trip,
    },
  };
}

export default Trip;
