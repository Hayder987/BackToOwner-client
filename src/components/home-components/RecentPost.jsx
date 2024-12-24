import PropTypes from "prop-types";
import Card from "../Card";
import LoaderSpinner from "../LoaderSpinner";
import { Link } from "react-router";
import { motion } from "motion/react";

const RecentPost = ({ postData, loading }) => {
  return (
    <div className="my-20 lg:my-28">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 ">
        Latest Find & Lost Items
      </h1>
      <p className="md:text-xl text-center font-semibold mb-12 lg:mb-12 text-gray-600">
        The Latest Find & Lost Items section is a feature that displays recently
        reported lost or found items
      </p>
      {loading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div>
          <motion.div
          whileInView={{ y: [200, 0], }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
           className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postData.map((post) => (
              <Card key={post._id} post={post}></Card>
            ))}
          </motion.div>
          <div className="flex justify-center items-center mt-8">
            <Link to="/lostandfound"><motion.button
            whileInView={{ scale: [0, 1] }} 
            transition={{ duration: 1 }} 
            viewport={{ once: false, amount: 0.5 }}
             className="bg-blue-600 rounded-lg py-3 px-8 text-white font-medium">See all Post</motion.button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

RecentPost.propTypes = {
  postData: PropTypes.array,
};

export default RecentPost;
