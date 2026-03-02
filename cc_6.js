// Step 2
class Employee {
    constructor(name, department)
    {
        this.name = name;
        this.department = department;

    }
    describe()
    {
        return `${this.name} works in the ${this.department} department.`;
    
    }

};

// Step 3
class Manager extends Employee {
    constructor(name, department, teamSize)
    {
        super(name, department);
        this.teamSize = teamSize;

    }
    describe()
    {
        return`${this.name} manages a team of ${this.teamSize} people in the ${this.deparment} department.`;

    }
};

// Step 4
const emp1 = new Employee("Alice", "Engineering");
const emp2 = new Employee("Bob", "Marketing");
const emp3 = new Employee("Charlie", "Sales");

const mgr1 = new Manager("David", "Engineering", 5);
const mgr2 = new Manager("Eve", "Marketing", 3);
const mgr3 = new Manager("Frank", "Sales", 4);

// Step 5
class Company {
    constructor(employees)
    {
        this.employees = employees;
    }
    addEmployee(employee)
    {
        this.employees.push(employee);
    }
    listEmployees()
    {
        return this.employees.map(emp => emp.describe()).join("\n");
    }
};

// Step 6
const company = new Company([emp1, emp2, emp3, mgr1, mgr2, mgr3]);

const newEmp = new Employee("Grace", "HR");
const newMgr = new Manager("Heidi", "Finance");
company.addEmployee(newEmp);
company.addEmployee(newEmp2);

const newMgr = new Manager("Alex", "HR", 3);
company.addEmployee(newMgr);

console.log(company.listEmployees());