import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/user");
        //console.log("res: ", res);
        const data = await res.json();
        //console.log("data: ", data);

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);

        //console.log("conversation inside the hook: ", conversations);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
