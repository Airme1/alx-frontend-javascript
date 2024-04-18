interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean

}

// task 2- Director interface to extend Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// task 3 function print name with initials
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher("John", "Doe"))


// task 4 writing a class

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(student: StudentConstructor) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}

const studentInfo: StudentConstructor = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
};

const student = new StudentClass(studentInfo);
console.log(student.displayName());
console.log(student.workOnHomework());