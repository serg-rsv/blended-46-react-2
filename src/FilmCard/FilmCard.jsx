import { Button } from '../Button/Button';

export const FilmCard = ({
  movie: { votes, title, poster, watched },
  handleStatus,
  handleModal,
  id,
}) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>Votes: {votes}</p>
      <p>
        Watched:{' '}
        <span onClick={() => handleStatus(id)}>{watched.toString()}</span>
      </p>
      <Button text="Show poster" handleClick={() => handleModal(poster)} />
    </li>
  );
};
