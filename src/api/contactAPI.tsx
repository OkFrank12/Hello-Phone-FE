import axios from "axios";

const contactURL: string = `https://hello-phone-be.onrender.com`;

export const createContact = async (data: any) => {
  try {
    return await axios.post(`${contactURL}/api/contact`, data).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const readAllContacts = async () => {
  try {
    return await axios.get(`${contactURL}/api/all`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
