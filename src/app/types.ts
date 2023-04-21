export interface Todo {
  id: number;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  done: boolean;
}
