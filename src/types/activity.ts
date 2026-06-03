// ================================
// FILE: types/activity.ts
// PURPOSE: Define Activity type
// ================================

// CHANGED: Made `id` required instead of optional
// CHANGED: Made `activityNo` required instead of optional
// This ensures Firebase document IDs and activity numbers are always present
export interface Activity {
  id: string;          // CHANGED: was optional, now required
  activityNo: string;  // CHANGED: was optional, now required

  date: string;
  category: string;
  subject: string;
  description: string;
  followUp: string;
  status: string;
}
