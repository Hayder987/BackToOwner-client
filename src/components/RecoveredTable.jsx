import { format } from "date-fns";
import { motion } from "motion/react";

const RecoveredTable = ({ post }) => {
  return (
    <div>
      <motion.div
        whileInView={{ y: [100, 0] }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-200 text-base text-black">
              <th>Sl.</th>
              <th>Thumbnail</th>
              <th>Lost Date</th>
              <th>Title</th>
              <th>Pick Location</th>
              <th>Pick Date</th>
              <th>Category</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td>{format(new Date(item?.lostDate), "PP")}</td>
                <td>{item?.title}</td>
                <td>{item?.pickLocation}</td>
                <td>{format(new Date(item?.pickDate), "PP")}</td>
                <td>{item?.category}</td>
                <td>{item?.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default RecoveredTable;
