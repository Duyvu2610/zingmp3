import axios from "./axios";
export const getHome = () =>
  new Promise(async (res, rej) => {
    try {
      const respone = await axios({
        url: "/home",
        method: "get",
      });
      res(respone);
    } catch (error) {
      rej(error);
    }
  });
