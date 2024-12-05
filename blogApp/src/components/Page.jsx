import { useUser } from "../context/userContext"

const Page = () => {
  const {user} = useUser();
  return (
    <>
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">
        Welcome to My blog App
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum..
      </p>
     
      <p className=" font-sans font-bold">Written by <span>{user.name}.</span></p>

    </main>
    </>
  );
};
export default Page;
