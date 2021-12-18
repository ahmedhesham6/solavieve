import axios from "axios";

export async function postFeedback(data) {
  return axios.post("http://localhost:8000/feedback", data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
