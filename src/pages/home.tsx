import '../App.css';

export default function Home () {
  const handleLogout = () => {
    return '';
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
