import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversation from "../../hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("conv: ", conversation);

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 character long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input bg-gray-600 h-10 border-sky-500 rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-gray-600 border-sky-600 hover:bg-sky-400 text-sky-400 hover:text-gray-100 hover:border-gray-100"
      >
        <IoSearchSharp size={24} className="w-6 h-6 outline-none " />
      </button>
    </form>
  );
};
export default SearchInput;
