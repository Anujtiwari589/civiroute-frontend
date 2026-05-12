import axiosInstance from "./axiosInstance";

// Get all complaints
export const getComplaints = async () => {
  const res = await axiosInstance.get("/complaints");
  return res.data.data || [];
};

// Create complaint
export const createComplaint = async (data) => {
  const res = await axiosInstance.post("/complaints", data);
  return res.data;
};

// Update complaint
export const updateComplaint = async (id, data) => {
  const res = await axiosInstance.put(`/complaints/${id}`, data);
  return res.data;
};

// Delete complaint
export const deleteComplaint = async (id) => {
  const res = await axiosInstance.delete(`/complaints/${id}`);
  return res.data;
};

// Get single complaint
export const getComplaintById = async (id) => {
  const res = await axiosInstance.get(`/complaints/${id}`);
  return res.data.data;
};

// Add comment
export const addComment = async (id, comment) => {
  const res = await axiosInstance.post(`/complaints/${id}/comment`, { comment });
  return res.data;
};

// Update status
export const updateComplaintStatus = async (id, status, remarks) => {
  const res = await axiosInstance.patch(`/complaints/${id}/status`, {
    status,
    remarks,
  });
  return res.data;
};