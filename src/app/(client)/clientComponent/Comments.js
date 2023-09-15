import axios from "axios";
export const dynamicParams = true;
import { data } from "../../db";
const Comments = () => {
  // const commentsData = await fetchComments();

  return (
    <section>
      <h3>Comments</h3>
      <div className="w-full flex">
        {data.comments.slice(0, 4).map((comment) => (
          <div className="w-1/4" key={comment.id}>
            <h2>{comment?.name}</h2>
            <p>{comment?.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Comments;

// async function fetchComments() {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/comments"
//   );

//   return data;
// }
