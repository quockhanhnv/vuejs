import axios from '../config/axios';

export default {
    async getList(params = {}) {
        try {
            const { data } = await axios({
                url: '/api/statuses',
                params
            });
            return data;
        } catch (error) {
            throw error;
        }
    },

    async store(status) {
        try {
            if (status.id) {
                const { data } = await axios({
                    url: '/api/statuses/update/' + status.id,
                    method: 'PUT',
                    data: status
                });
            } else {
                delete status.id;
                const { data } = await axios({
                    url: '/api/statuses',
                    method: 'POST',
                    data: status
                });
            }
        } catch (error) {
            throw error;
        }
    },


    async destroy(id) {
        try {
            const { data } = await axios({
                url: `/api/statuses/delete/${id}`,
                method: 'DELETE'
            });
            return data;
        } catch (error) {
            throw error;
        }
    }
}
