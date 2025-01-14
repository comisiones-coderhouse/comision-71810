import UserList from "@/components/UserList";

async function HomePage() {

  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  const usuarios = await data.json()

  return (
    <div>
      <UserList usuarios={usuarios} />
    </div>
  );
}

export default HomePage