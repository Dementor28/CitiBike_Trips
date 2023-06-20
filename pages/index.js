/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Abdullah Student ID: 152158200 Date: ____________________
*  Link: https://busy-erin-hen-veil.cyclic.app/
*
********************************************************************************/ 

import { useState, useEffect } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import useSWR from 'swr';
import MainNav from '@/components/MainNav';
import PageHeader from '@/components/PageHeader';
import { useRouter } from 'next/router';


const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const router = useRouter();

  const { data, error } = useSWR(`https://cloudy-teal-houndstooth.cyclic.app/api/trips?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  const handleTripClick = (tripId) => {
    router.push(`/trip/${tripId}`);
  };

  return (
    <>
      <MainNav />
      <PageHeader title="Trip List" text="Full list of Citibike Trips." showSubscriber={true} showCustomer={false} />

      <Table bordered hover>
  <thead>
    <tr>
      <th>Bike ID</th>
      <th>Start Station</th>
      <th>End Station</th>
      <th>Duration</th>
    </tr>
  </thead>
  <tbody>
    {pageData.map((trip) => (
      <tr
        key={trip._id}
        className={trip.usertype === 'Subscriber' ? 'Subscriber' : 'Customer'}
        onClick={() => handleTripClick(trip._id)}
      >
        <td>{trip.bikeid}</td>
        <td>{trip["start station name"]}</td>
        <td>{trip["end station name"]}</td>
        <td>{(trip.tripduration / 60).toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</Table>


      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
};

export default Home;