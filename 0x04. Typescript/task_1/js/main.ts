//task_1 - Created a teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
    firstName: 'Mbali',
    lastName: 'Sithole',
    fullTimeEmployee: false,
    yearsOfExperience: 3,
    location: 'China',
    contract: false,
  };