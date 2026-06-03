// ================================
// FILE: ActivityForm.tsx
// PURPOSE: Form for creating/editing activities
// ================================

import { useForm } from "react-hook-form";
import type { Activity } from "../../types/activity";

// CHANGED: Added `initialData?: Activity | null` to Props
// This allows ActivityLog.tsx to pass editingActivity safely
interface Props {
  onSave: (activity: Activity) => void;
  onClose: () => void;
  initialData?: Activity | null; // NEW
}

export default function ActivityForm({
  onSave,
  onClose,
  initialData, // NEW: receive initialData
}: Props) {
  // CHANGED: useForm now gets defaultValues from initialData if editing
  const { register, handleSubmit } = useForm<Activity>({
    defaultValues: initialData ?? {}, // NEW
  });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl p-6 w-full max-w-lg">

        <h2 className="text-xl font-bold mb-4">
          {/* CHANGED: dynamic title depending on edit/new */}
          {initialData ? "Edit Activity" : "New Activity"}
        </h2>

        <form
          onSubmit={handleSubmit(onSave)}
          className="space-y-3"
        >
          <input
            {...register("date")}
            type="date"
            className="w-full border rounded-lg p-2"
          />

          <input
            {...register("category")}
            placeholder="Category"
            className="w-full border rounded-lg p-2"
          />

          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full border rounded-lg p-2"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border rounded-lg p-2"
          />

          <textarea
            {...register("followUp")}
            placeholder="Follow Up"
            className="w-full border rounded-lg p-2"
          />

          <select
            {...register("status")}
            className="w-full border rounded-lg p-2"
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          <div className="flex gap-2">

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-slate-300 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
