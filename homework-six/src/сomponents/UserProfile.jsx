import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const request = await axios.get("https://randomuser.me/api");
      setUser(request.data.results[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      {loading || !user ? (
        <p>Loading...</p>
      ) : (
        <div >
          <img src={user?.picture?.large} alt="User" className={styles.foto} />
          <h1 className={styles.name}>
            {user?.name?.first} {''}
            {user?.name?.last}
          </h1>
          <p className={styles.email}>Email:  {user?.email}</p>
          <p className={styles.phone}>Phone:  {user?.phone}</p>
          <button onClick={fetchUser} className={styles.button}>Load New User</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
