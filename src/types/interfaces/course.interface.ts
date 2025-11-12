export interface CourseInterface {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  duration: number;
  price: number;
  prerequisites: string;
  instructorId: string;
  instructor: InstructorInterface;
  modality: string;
  includedMaterials: string;
  certification: string;
  availableSeats: number;
  location: string;
  category: string;
  enrollments: string[];
}

interface InstructorInterface {
  id?: string;
  name: string;
  biography?: string;
  courses?: CourseInterface[];
}
