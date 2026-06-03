// ================================
// FILE: ActivityCard.tsx
// PURPOSE: Display single activity card with edit/delete
// ================================

import type { Activity } from "../../types/activity";

interface Props {
  activity: Activity;
  onDelete: () => void;
  onEdit: () => void; // stays required, since ActivityList now always passes it
}

export default function ActivityCard({ activity, onDelete, onEdit }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between">
        <div>
          <div className="text-xs text-slate-500">{activity.activityNo}</div>
          <h3 className="font-bold">{activity.subject}</h3>
        </div>
        <div className="flex gap-2">
          {/* onEdit now always passed down */}
          <button onClick={onEdit} className="text-blue-500">Edit</button>
          <button onClick={onDelete} className="text-red-500">Delete</button>
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-2">{activity.date}</p>
    </div>
  );
}
