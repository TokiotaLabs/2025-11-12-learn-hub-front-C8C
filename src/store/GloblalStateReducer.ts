import { CourseInterface } from '../types/interfaces/course.interface';

export interface State {
  courses: CourseInterface[] | undefined;
  user: string | null;
}

export const initialState: State = {
  user: null,
  courses: [],
};

export type Action =
  | { type: 'SET_USER'; payload: string }
  | { type: 'CLEAR_USER' }
  | { type: 'SET_COURSES'; payload: CourseInterface[] }
  | { type: 'CLEAR_COURSES' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'CLEAR_USER':
      return { ...state, user: null };
    case 'SET_COURSES':
      return { ...state, courses: action.payload as CourseInterface[] };
    case 'CLEAR_COURSES':
      return { ...state, courses: [] };
    default:
      return state;
  }
};
