import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  // variables
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>
        })}
      </ul>
      <LikeButton />
    </div>
  );
}