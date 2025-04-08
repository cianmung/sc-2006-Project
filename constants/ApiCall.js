const API = "http://192.168.0.115:8080/";
//const API = "http://10.91.104.96:8080/";
import axios from "axios";

export const fetchData = (endpoints) => {
  return axios
    .get(API + endpoints)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchDataDirect = (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
