import axiosInstance from "./axiosInstance";

// Get all complaints
export const getComplaints = async () => {
  const res = await axiosInstance.get("/complaints");
  return res.data;
};

// Create complaint
export const createComplaint = async (data) => {
  const res = await axiosInstance.post("/complaints", data);
  return res.data;
};

// Delete complaint
export const deleteComplaint = async (id) => {
  const res = await axiosInstance.delete(`/complaints/${id}`);
  return res.data;
};