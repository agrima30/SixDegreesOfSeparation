import { createContext, useState } from "react";
import findPath from "../dfs/DFS";
import Swal from "sweetalert2";

const Context = createContext({
  users: [],
  graph: [],
  newUser: () => {},
  newRelationship: () => {},
  onSearch: () => {},
});

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [graph, setGraph] = useState([]);

  const newUserHandler = (user) => {
    const f = users.find((u) => u === user);
    if (f) {
      Swal.fire({
        icon: "error",
        title: "USER ALREADY EXISTS",
        showConfirmButton: true,
        timer: 2000,
      });
      return;
    }
    setUsers((x) => [...x, user]);
    setGraph((x) => [...x, []]);
    Swal.fire({
      icon: "success",
      title: "USER ADDED SUCCESSFULLY",
      showConfirmButton: true,
      timer: 2000,
    });
  };

  const newRelationshipHandler = (user1, user2) => {
    const x = users.findIndex((user) => user === user1);
    const y = users.findIndex((user) => user === user2);
    const relationship = graph[x].find((z) => z === y);
    if (relationship) {
      Swal.fire({
        icon: "error",
        title: "RELATIONSHIP ALREADY EXISTS",
        showConfirmButton: true,
        timer: 2000,
      });
      return;
    }
    setGraph((g) => {
      const gg = [...g];
      gg[x].push(y);
      return gg;
    });
    Swal.fire({
      icon: "success",
      title: "RELATIONSHIP ADDED SUCCESSFULLY",
      showConfirmButton: true,
      timer: 2000,
    });
  };

  const onSearchHandler = (user1, user2) => {
    const x = users.findIndex((user) => user === user1);
    const y = users.findIndex((user) => user === user2);
    const ans = findPath(x, y, graph);
    let output = [];
    if (ans[0] === -1) {
      console.log("hello");
      output = "PATH DOES NOT EXIST";
    } else {
      let n = ans.length;
      for (let i in ans) {
        if (parseInt(i) === n - 1) {
          output += users[ans[i]];
        } else {
          output += users[ans[i]] + "--->";
        }
      }
    }
    Swal.fire({
      icon: "success",
      title: "PATH IS = " + output,
      showConfirmButton: true,
      timer: 5500,
    });
  };

  return (
    <Context.Provider
      value={{
        users: users,
        graph: graph,
        newUser: newUserHandler,
        newRelationship: newRelationshipHandler,
        onSearch: onSearchHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
