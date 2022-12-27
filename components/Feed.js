import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Kaan Arslan",
      username: "kaanarslan",
      userImg: "https://media.licdn.com/dms/image/C5603AQEwcVLC21NRIg/profile-displayphoto-shrink_800_800/0/1521533582779?e=1677715200&v=beta&t=BtSAsHZSYbvagJ9wqj5zBFrYbL-6yLObiTizBY4GTj4",
      img: "https://images.unsplash.com/photo-1618913001600-4284b12e1623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      text: "great art work!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Kaan Arslan",
      username: "kaanarslan",
      userImg: "https://media.licdn.com/dms/image/C5603AQEwcVLC21NRIg/profile-displayphoto-shrink_800_800/0/1521533582779?e=1677715200&v=beta&t=BtSAsHZSYbvagJ9wqj5zBFrYbL-6yLObiTizBY4GTj4",
      img: "https://images.unsplash.com/photo-1627844569381-6a84ef9627dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "wow!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
