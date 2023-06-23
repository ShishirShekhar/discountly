import Nav from "../components/Nav";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex flex-grow justify-center items-center text-5xl sm:text-9xl  font-bold text-sky-500">
        NotFound
      </div>
    </div>
  );
};

export default NotFound;
