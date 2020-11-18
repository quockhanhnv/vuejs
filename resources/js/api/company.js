import axios from '../config/axios';
import Login from "../pages/Login";

export default {
    async getList(params = {}) {
        try {
            const { data } = await axios({
                url: '/api/company',
                params
            });

            return data;
        } catch(error) {
            throw error;
        }
    },

    async store(companyFormData) {
        try {
            // check formdata contain company.id
            if (companyFormData.get('id') !== 'null') {
                const { data } = await axios({
                    url: '/api/company/update/' + companyFormData.get('id'),
                    method: 'POST',
                    params: {
                        _method: "PUT"
                    },
                    data: companyFormData,
                    headers: { 'content-type': 'multipart/form-data' }
                });
            } else {
                companyFormData.delete('id');
                const { data } = await axios({
                    url: '/api/company',
                    method: 'POST',
                    data: companyFormData,
                    headers: { 'content-type': 'multipart/form-data' }
                });
            }
        } catch(error) {
            throw error;
        }
    },

    async destroy(id) {
        try {
            const { data } = await axios({
                url: `/api/company/delete/${id}`,
                method: 'DELETE'
            });
            return data;
        } catch(error) {
            throw error;
        }
    },

    async show(id) {
        try {
            const { data } = await axios({
                url: `/api/company/${id}`,
            });

            return data;
        } catch(error) {
            throw error;
        }
    },

    async getCompanies(params) {
        try {
            const { data } = await axios({
                url: '/api/company/all',
                params
            });

            return data.data || [];
        } catch(error) {
            return [];
        }
    },

    async getFiles(id) {
        try {
            const { data } = await axios({
                url: `/api/company/files/${id}`,
            });
            return data || [];
        } catch(error) {
            return [];
        }

    },

    async download(id, params = {}) {
        try {
            const { data } = await axios({
                url: `/api/company/download/${id}`,
                params,
                method: 'POST',
                responseType: 'blob',
            });

            return data;
        } catch(error) {
            throw error;
        }
    },

    async deleteFile(id, params = {}) {
        try {
            const { data } = await axios({
                url: `/api/company/delete-file/${id}`,
                params,
                method: 'POST',
            });

            return data;
        } catch(error) {
            throw error;
        }
    },
}
