import { useEffect } from "react";

export const loadSubjects = () => {
  const savedSubjects = localStorage.getItem("subjects");
  return savedSubjects ? JSON.parse(savedSubjects) : [];
};

export const saveSubjects = (subjects) => {
  localStorage.setItem("subjects", JSON.stringify(subjects));
};

export const clearSubjects = () => {
  localStorage.removeItem("subjects");
};