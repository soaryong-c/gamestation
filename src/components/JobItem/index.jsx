import {
  JobBanner,
  JobDetails,
  JobItemContainer,
  JobTag,
  JobTags,
  PlayButton,
  Icon
  
} from "./styles";

export function JobItem({ clickItem, job }) {
  const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <JobItemContainer onClick={() => clickItem(job)}>

      <section>
      <JobTags>
          {job.labels.map((label) => {
            return (
              <JobTag color={`#${label.color}`} key={label.id}>
                {label.name}
              </JobTag>
            );
          })}
        </JobTags>
        <JobDetails>
          <strong>{job.title}</strong>
          <p>{job.body}</p>
        </JobDetails>
        <br/>
        <Icon src={job.image} width="100px" height="100px"/>
        <br/>
      <PlayButton>Play Games</PlayButton>
      </section>
    </JobItemContainer>
  );
}
