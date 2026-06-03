// ================================
// FILE: ActivityList.tsx
// PURPOSE: Render list of ActivityCard components
// ================================

import ActivityCard from "./ActivityCard";
import type { Activity } from "../../types/activity";

// CHANGED: onDelete now expects (id: string) instead of (index: number)
// NEW: added onEdit to Props so we can pass it down
interface Props {
  activities: Activity[];
  onDelete: (id: string) => void;   // CHANGED
  onEdit: (activity: Activity) => void; // NEW
}

export default function ActivityList({ activities, onDelete, onEdit }: Props) {
  return (
    <div className="space-y-3">
      {activities.length === 0 ? (
        <div className="bg-white rounded-xl p-4 text-center text-slate-500">
          No activities found
        </div>
      ) : (
        activities.map((activity) => (
          <ActivityCard
            key={activity.id} // CHANGED: use activity.id instead of index
            activity={activity}
            onDelete={() => onDelete(activity.id)} // CHANGED: pass id
            onEdit={() => onEdit(activity)}        // NEW: pass activity
          />
        ))
      )}
    </div>
  );
}
