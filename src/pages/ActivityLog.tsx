// ================================
// FILE: ActivityLog.tsx
// PURPOSE: FULL Firebase CRUD Controller
// ================================

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import ActivityList from "../components/activity/ActivityList";
import ActivityForm from "../components/activity/ActivityForm";

import type { Activity } from "../types/activity";

export default function ActivityLog() {

  // =========================
  // STATE
  // =========================
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  // =========================
  // READ (GET ALL)
  // =========================
  const loadActivities = async () => {
    try {
      const snapshot = await getDocs(collection(db, "activities"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id, // IMPORTANT for update/delete
        ...doc.data(),
      })) as Activity[];

      setActivities(data);
    } catch (error) {
      console.error("Load error:", error);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  // =========================
  // CREATE + UPDATE
  // =========================
  const handleSave = async (activity: Activity) => {
    try {

      // =====================
      // CREATE
      // =====================
      if (!editingActivity) {
        await addDoc(collection(db, "activities"), activity);
      }

      // =====================
// UPDATE
// =====================
else {
  // ⬇️ CHANGE: use editingActivity.id directly (no cast, no activityNo)
  const ref = doc(db, "activities", editingActivity.id);

  // ⬇️ CHANGE: update with new values, keep Firestore doc ID consistent
  await updateDoc(ref, {
    ...activity,
    id: editingActivity.id, // ensure ID stays consistent
  });
}


      await loadActivities();

      setShowForm(false);
      setEditingActivity(null);

    } catch (error) {
      console.error("Save error:", error);
    }
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "activities", id));
      await loadActivities();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // =========================
  // EDIT
  // =========================
  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    setShowForm(true);
  };

  return (
    <div className="p-4">

      {/* =========================
          HEADER
      ========================== */}
      <div className="flex gap-3 mb-4">

        <input
          type="text"
          placeholder="Search activities..."
          className="flex-1 border rounded-lg px-3 py-2"
        />

        <button
          onClick={() => {
            setEditingActivity(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          + New
        </button>

      </div>

      {/* =========================
          FORM
      ========================== */}
      {showForm && (
        <ActivityForm
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingActivity(null);
          }}
          initialData={editingActivity}
        />
      )}

      {/* =========================
          LIST
      ========================== */}
      <ActivityList
        activities={activities}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

    </div>
  );
}