export interface Task {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface TaskFormData {
  id?: number;
  title: string;
  completed: boolean;
}
