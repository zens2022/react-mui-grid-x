import axios from "axios";

export class TodoService {

    static async getList() {
        let url = `http://localhost:8080/todo/list`;
        return axios.get(url);
    }

    /**
     * @param {string} task 
     */
    static async addTask(task) {
        let url = `http://localhost:8080/todo/add`;
        return axios.post(url, { task });
    }

    /**
     * @param {number} id 
     */
    static async delTask(id) {
        let url = `http://localhost:8080/todo/del`;
        return axios.post(url, { id });
    }

}