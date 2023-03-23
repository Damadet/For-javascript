export default function createEmployeesObject(departmentName, employees) {
	const employeeList = [];
	for (const name of employees){
		employeeList.push(name);
	}
	return {[departmentName]: employees};
};