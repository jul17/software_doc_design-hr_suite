const ENDPOINT = "/api/employee/";

class Api {
  static async fetchAllEmployees() {
    const response = await fetch(ENDPOINT);

    const result = await response.json();

    allEmployeess = result;

    return result;
  }

  static async uploadEmployee(employee) {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(employee),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async editEmployee(id, employee) {
    try {
      const response = await fetch(`${ENDPOINT}${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(employee),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async deleteEmployee(id) {
    const response = await fetch(`${ENDPOINT}${id}`, {
      method: "DELETE",
    });

    await response.text();
  }
}
