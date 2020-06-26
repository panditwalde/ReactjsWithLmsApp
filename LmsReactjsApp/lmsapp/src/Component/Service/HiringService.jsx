import Axios from "axios";

import axios from "axios";

export function uploadCsvfile(multiPartFile) {
    return Axios.post("http://localhost:8081/upload", multiPartFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  }