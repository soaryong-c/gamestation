import axios from "axios";
import { useEffect, useState } from "react";
import { JobItem } from "../JobItem";
import { JobsListContainer } from "./styles";
import list from '../../list.json'

export function JobsList({clickItem}) {
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    const response = list;
    setJobs(response);
  }

  useEffect(() => {
    getJobs();
  }, []);



  return (
    <JobsListContainer>
      {jobs.map((item) => {
        return <JobItem key={item.id} clickItem={clickItem} job={item} />;
      })}
    </JobsListContainer>
  );
}
